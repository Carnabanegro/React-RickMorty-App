import ApolloClient, { gql } from 'apollo-boost'

//constant
let initialData={
	fetching: false,
	array: [],//array of locations
	currentSearch: "",	
}

let client = new ApolloClient({
	uri:"https://rickandmortyapi.com/graphql"
})

let GET_LOCATIONS = "GET_LOCATIONS"
let GET_LOCATIONS_SUCCESS = "GET_LOCATIONS_SUCCESS"
let GET_LOCATIONS_ERROR = "GET_LOCATIONS_ERROR"

let REMOVE_LOCATIONS = "REMOVE_LOCATIONS"

let UPDATE_PAGE = "UPDATE_PAGE"


export default function reducer(state=initialData, action){
	switch(action.type){
		case UPDATE_PAGE:
			return {...state, nextPage: action.payload}
		case REMOVE_LOCATIONS:
			return {...state, array: action.payload }
		case GET_LOCATIONS:
			return{ ...state, currentSearch: action.payload, fetching: true }
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



export let getLocationsAction = (value,select) => (dispatch) => {
    let searchValue = value;
    let searchSelect = select;
    let query
    if (searchSelect === "name"){
        query = gql`query ($search:String){
            locations(filter:{name:$search}){
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
        query = gql`query ($search:String){
            locations(filter:{type:$search}){
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
    
    dispatch({
        type: GET_LOCATIONS,
        payload: searchValue
    })
        return client.query({
            query,
            variables: { search: searchValue }
        })
            .then(({ data}) => {
                dispatch({
                    type: GET_LOCATIONS_SUCCESS,
                    payload: data.locations.results
                })
                console.log(data.locations.info.next)
                dispatch({
                    type: UPDATE_PAGE,
                    payload: data.locations.info.next ? data.locations.info.next : 1
                })
                
            })
            .catch(error =>{
                dispatch({
                    type: GET_LOCATIONS_ERROR,
                    payload: `Error! ${error}`
                })
                return
              }) 
    
}