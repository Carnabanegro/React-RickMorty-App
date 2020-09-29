
let initialData={
	fetching: false,
    currentSearch: "",
    pages: 0,
    typeSearch: "name"
}

let UPDATE_CURRENT_SEARCH = "UPDATE_CURRENT_SEARCH"
let UPDATE_BY_SEARCH = "UPDATE_BY_SEARCH"
let UPDATE_PAGES_SEARCH = "UPDATE_PAGES_SEARCH"

export default function reducer(state=initialData, action){
	switch(action.type){
		case UPDATE_CURRENT_SEARCH:
            return {...state, currentSearch: action.payload}
        case UPDATE_BY_SEARCH:
            return {...state, typeSearch:action.payload}
        case UPDATE_PAGES_SEARCH:
            return {...state, pages:action.payload}
		default:
			return state
	}
}


export const updateCurrentSearchAction = (value) => (dispatch, getState) =>{
	//Donde los busco?
	dispatch({
		type: UPDATE_CURRENT_SEARCH,
		payload: value
	})
}


export const updateBySearchAction = (value) => (dispatch, getState) =>{
	//Donde los busco?
	dispatch({
		type: UPDATE_BY_SEARCH,
		payload: value
	})
}
    
    
export const updatePagesSearchAction = (value) => (dispatch,getState)=>{
    dispatch({
		type: UPDATE_PAGES_SEARCH,
		payload: value
	})
}