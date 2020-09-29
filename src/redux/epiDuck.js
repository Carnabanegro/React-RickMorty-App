import ApolloClient, { gql } from 'apollo-boost'
import {updatePagesSearchAction} from './searchDuck';
//constant
let initialData={
	fetching: false,
	array: [],//array of episodes
    //currentSearch: "",
    //pages: 0,
}

let client = new ApolloClient({
	uri:"https://rickandmortyapi.com/graphql"
})

let GET_EPISODES = "GET_EPISODES"
let GET_EPISODES_SUCCESS = "GET_EPISODES_SUCCESS"
let GET_EPISODES_ERROR = "GET_EPISODES_ERROR"

let REMOVE_EPISODES = "REMOVE_EPISODES"

//let UPDATE_PAGE_EPI = "UPDATE_PAGE_EPI"


export default function reducer(state=initialData, action){
	switch(action.type){
		//case UPDATE_PAGE_EPI:
		//	return {...state, pages: action.payload}
		case REMOVE_EPISODES:
			return {...state, array: action.payload}
		case GET_EPISODES:
			return{ ...state,  fetching: true }
		case GET_EPISODES_ERROR:
			return{ ...state,array: [], fetching:false, error: action.payload}
		case GET_EPISODES_SUCCESS:
			return{ ...state, array: action.payload, fetching:false }
		default:
			return state
	}
}

//aux

//action (thunks)

export const removeEpisodesAction = () => (dispatch, getState) =>{
	//Donde los busco?
	 let {array} = initialData;
	dispatch({
		type: REMOVE_EPISODES,
		payload: [...array]
	})
}



export let getEpisodesAction = (page,value) => (dispatch,getState) => {
    let searchValue = value
    let query = gql`query ($page:Int,$name:String){
        episodes(page:$page,filter:{name:$name}){
            info{
              pages
              next
              prev
            }
            results{
              name
              air_date
              episode
              characters{
                name
                image
              }
            }
            }
          }
          
    `
    dispatch({
        type: GET_EPISODES,
        payload: searchValue
    })
        return client.query({
            query,
            variables: { name: searchValue, page }
        })
            .then(({ data}) => {
                updatePagesSearchAction(data.episodes.info.pages)(dispatch,getState)
                dispatch({
                    type: GET_EPISODES_SUCCESS,
                    payload: data.episodes.results
                })
               /* dispatch({
                    type: UPDATE_PAGE_EPI,
                    payload: data.episodes.info.pages //? //data.episodes.info.next : 1
                })*/
                
            })
            .catch(error =>{
                dispatch({
                    type: GET_EPISODES_ERROR,
                    payload: `Error! ${error}`
                })
                return
            })

    
    
}