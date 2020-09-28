import ApolloClient, { gql } from 'apollo-boost'

//constant
let initialData={
	fetching: false,
	array: [],//array of chars
	currentSearch: "",	
}

let client = new ApolloClient({
	uri:"https://rickandmortyapi.com/graphql"
})

let GET_CHARACTERS = "GET_CHARACTERS"
let GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS"
let GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR"

let REMOVE_CHARACTER = "REMOVE_CHARACTER"

let UPDATE_PAGE = "UPDATE_PAGE"


export default function reducer(state=initialData, action){
	switch(action.type){
		case UPDATE_PAGE:
			return {...state, nextPage: action.payload}
		case REMOVE_CHARACTER:
			return {...state, array: action.payload }
		case GET_CHARACTERS:
			return{ ...state, currentSearch: action.payload, fetching: true }
		case GET_CHARACTERS_ERROR:
			return{ ...state,array: [], fetching:false, error: action.payload}
		case GET_CHARACTERS_SUCCESS:
			return{ ...state, array: action.payload, fetching:false }
		default:
			return state
	}
}

//aux

//action (thunks)

export const removeCharactersAction = () => (dispatch, getState) =>{
	//Donde los busco?
	 let {array} = initialData;
	dispatch({
		type: REMOVE_CHARACTER,
		payload: [...array]
	})
}



export let getCharactersAction = (value,select) => (dispatch) => {
    let searchValue = value
    let searchType = select
    let query
    if (searchType === "name"){
        query = gql`query ($search:String){
            characters(filter:{name:$search}){
                info{
                    pages
                    next
                    prev
                }
                results{
                    name
                    image
                    species
                    type
                    gender
                }
            }
        }
        `
    }else{
        query = gql`query ($search:String){
            characters(filter:{type:$search}){
                info{
                    pages
                    next
                    prev
                }
                results{
                    name
                    image
                    species
                    type
                    gender
                }
            }
        }
        `
    }
    
    
       
    dispatch({
        type: GET_CHARACTERS,
        payload: searchValue
    })
        return client.query({
            query,
            variables: { search: searchValue }
        })
            .then(({ data}) => {
                dispatch({
                    type: GET_CHARACTERS_SUCCESS,
                    payload: data.characters.results
                })
                console.log(data.characters.info.next)
                dispatch({
                    type: UPDATE_PAGE,
                    payload: data.characters.info.next ? data.characters.info.next : 1
                })
                
            })
            .catch(error =>{
                dispatch({
                    type: GET_CHARACTERS_ERROR,
                    payload: `Error! ${error}`
                })
                return
            })

    
    
}