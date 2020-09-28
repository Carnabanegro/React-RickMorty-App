import ApolloClient, { gql } from 'apollo-boost'

//constant
let initialData={
	fetching: false,
	array: [],//array of episodes
	currentSearch: "",	
}

let client = new ApolloClient({
	uri:"https://rickandmortyapi.com/graphql"
})

let GET_EPISODES = "GET_EPISODES"
let GET_EPISODES_SUCCESS = "GET_EPISODES_SUCCESS"
let GET_EPISODES_ERROR = "GET_EPISODES_ERROR"

let REMOVE_EPISODES = "REMOVE_EPISODES"

let UPDATE_PAGE = "UPDATE_PAGE"


export default function reducer(state=initialData, action){
	switch(action.type){
		case UPDATE_PAGE:
			return {...state, nextPage: action.payload}
		case REMOVE_EPISODES:
			return {...state, array: action.payload }
		case GET_EPISODES:
			return{ ...state, currentSearch: action.payload, fetching: true }
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



export let getEpisodesAction = (value) => (dispatch) => {
    let nameValue = value
    console.log(nameValue)
    let query = gql`query ($name:String){
        episodes(filter:{name:$name}){
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
        payload: nameValue
    })
        return client.query({
            query,
            variables: { name: nameValue }
        })
            .then(({ data}) => {
                dispatch({
                    type: GET_EPISODES_SUCCESS,
                    payload: data.episodes.results
                })
                console.log(data.episodes.info.next)
                dispatch({
                    type: UPDATE_PAGE,
                    payload: data.episodes.info.next ? data.episodes.info.next : 1
                })
                
            })
            .catch(error =>{
                dispatch({
                    type: GET_EPISODES_ERROR,
                    payload: `Error! ${error}`
                })
                return
            })

    
    
}