import ApolloClient, { gql } from 'apollo-boost';
import {updateCharactersPagesSearchAction} from './searchDuck';
//constant
let initialData={
	fetching: false,
    array: [],//array of chars,
    error:false,
    errorMessage:""
}

let client = new ApolloClient({
	uri:"https://rickandmortyapi.com/graphql"
})

let GET_CHARACTERS = "GET_CHARACTERS"
let GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS"
let GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR"

let REMOVE_CHARACTER = "REMOVE_CHARACTER"


export default function reducer(state=initialData, action){
	switch(action.type){
		case REMOVE_CHARACTER:
            return {...state, array: [], error:false, errorMessage:""  }
		case GET_CHARACTERS:
			return{ ...state, fetching: true }
		case GET_CHARACTERS_ERROR:
			return{ ...state,array: [], fetching:false, error: action.payload}
		case GET_CHARACTERS_SUCCESS:
            return {...state, array:action.payload , fetching:false}
		default:
			return state
	}
}



export const removeCharactersAction = () => (dispatch, getState) =>{
	dispatch({
		type: REMOVE_CHARACTER,
	})
}

export let getCharactersAction = (page,value,select) => (dispatch, getState) => {
    let searchValue = value
    let searchType = select
    let query
    if (searchType === "name"){
        query = gql`query ($page:Int,$search:String){
            characters(page:$page,filter:{name:$search}){
                info{
                    pages
                    next
                    prev
                }
                results{
                    id
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
        query = gql`query ($page:Int,$search:String){
            characters(page:$page,filter:{type:$search}){
                info{
                    pages
                    next
                    prev
                }
                results{
                    id
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
    })
        
        return client.query({
            query,
            variables: { search: searchValue, page }
        })
            .then(({ data}) => {
                updateCharactersPagesSearchAction(data.characters.info.pages)(dispatch,getState)
                dispatch({
                    type: GET_CHARACTERS_SUCCESS,
                    payload: data.characters.results
                })
            })
            .catch(error =>{
                dispatch({
                    type: GET_CHARACTERS_ERROR,
                    payload: { 
                        error:true,
                        errorMessage:`Error! ${error}`
                    }
                })
                return
            })

    
    
}