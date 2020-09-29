import ApolloClient, { gql } from 'apollo-boost';
import {updatePagesSearchAction} from './searchDuck';
//constant
let initialData={
	fetching: false,
	array: [],//array of locations
    //currentSearch: "",
    //pages: 0,
    //typeSearch: "name"	
}

let client = new ApolloClient({
	uri:"https://rickandmortyapi.com/graphql"
})

let GET_LOCATIONS = "GET_LOCATIONS"
let GET_LOCATIONS_SUCCESS = "GET_LOCATIONS_SUCCESS"
let GET_LOCATIONS_ERROR = "GET_LOCATIONS_ERROR"

let REMOVE_LOCATIONS = "REMOVE_LOCATIONS"

//let UPDATE_PAGE_LOC = "UPDATE_PAGE_LOC"


export default function reducer(state=initialData, action){
	switch(action.type){
		//case UPDATE_PAGE_LOC:
		//	return {...state, pages: action.payload}
		case REMOVE_LOCATIONS:
			return {...state, array: action.payload}
		case GET_LOCATIONS:
			return{ ...state, fetching: true }
		case GET_LOCATIONS_ERROR:
			return{ ...state,array: [], fetching:false, error: action.payload}
		case GET_LOCATIONS_SUCCESS:
			return{ ...state, array: action.payload, fetching:false }
		default:
			return state
	}
}

//aux

//action (thunks)

export const removeLocationsAction = () => (dispatch, getState) =>{
	//Donde los busco?
	let {array} = initialData;
	dispatch({
		type: REMOVE_LOCATIONS,
		payload: [...array]
	})
}



export let getLocationsAction = (page,value,select) => (dispatch,getState) => {
    let searchValue = value;
    let searchSelect = select;
    let query
    if (searchSelect === "name"){
        query = gql`query ($page:Int,$search:String){
            locations(page:$page,filter:{name:$search}){
                info{
                  pages
                  next
                  prev
                }
                results{
                  name
                  type
                  dimension
                  residents{
                    name
                    image
                  }
                  
                }
            }
        }
        `
    }else{
        query = gql`query ($page:Int,$search:String){
            locations(page:$page,filter:{type:$search}){
                info{
                  pages
                  next
                  prev
                }
                results{
                  name
                  type
                  dimension
                  residents{
                    name
                    image
                  }
                  
                }
            }
        }
        `
    }

    const  dataInfo = {
        searchSelect,
        searchValue
    }
    
    dispatch({
        type: GET_LOCATIONS,
        payload: dataInfo
    })
        return client.query({
            query,
            variables: { search: searchValue, page }
        })
            .then(({ data}) => {
                updatePagesSearchAction(data.locations.info.pages)(dispatch,getState)
                dispatch({
                    type: GET_LOCATIONS_SUCCESS,
                    payload: data.locations.results
                })
                /*dispatch({
                    type: UPDATE_PAGE_LOC,
                    payload: data.locations.info.pages 
                })*/
                
            })
            .catch(error =>{
                dispatch({
                    type: GET_LOCATIONS_ERROR,
                    payload: `Error! ${error}`
                })
                return
              }) 
    
}