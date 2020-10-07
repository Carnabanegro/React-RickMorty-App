
let initialData={
	fetching: false,

	charCurrentPage:1,
	epiCurrentPage:1,
	LocCurrentPage:1,

	charPages: 0,
	locPages: 0,
	epiPages: 0,
	
	charCurrentSearch: "",
	epiCurrentSearch: "",
	locCurrentSearch: "",
	
	charTypeSearch: "name",
	locTypeSearch: "name",
	
	filterSearch: "characters"

}



let UPDATE_PAGES_CHARACTERS_SEARCH = "UPDATE_PAGES_CHARACTERS_SEARCH"
let UPDATE_PAGES_EPISODES_SEARCH = "UPDATE_PAGES_EPISODES_SEARCH"
let UPDATE_PAGES_LOCATIONS_SEARCH = "UPDATE_PAGES_LOCATIONS_SEARCH"

let UPDATE_CHAR_CURRENT_PAGE_ACTION = "UPDATE_CHAR_CURRENT_PAGE_ACTION"
let UPDATE_LOC_CURRENT_PAGE_ACTION = "UPDATE_LOC_CURRENT_PAGE_ACTION"
let UPDATE_EPI_CURRENT_PAGE_ACTION = "UPDATE_EPI_CURRENT_PAGE_ACTION"

let UPDATE_CHARACTERS_CURRENT_SEARCH = "UPDATE_CHARACTERS_CURRENT_SEARCH"
let UPDATE_EPISODES_CURRENT_SEARCH = "UPDATE_EPISODES_CURRENT_SEARCH"
let UPDATE_LOCATIONS_CURRENT_SEARCH = "UPDATE_LOCATIONS_CURRENT_SEARCH"

let UPDATE_CHARACTERS_BY_SEARCH = "UPDATE_CHARACTERS_BY_SEARCH"
let UPDATE_LOCATIONS_BY_SEARCH = "UPDATE_LOCATIONS_BY_SEARCH"

let UPDATE_FILTER_SEARCH = "UPDATE_FILTER_SEARCH"

export default function reducer(state=initialData, action){
	switch(action.type){
			case UPDATE_EPISODES_CURRENT_SEARCH:
				return {...state, epiCurrentSearch: action.payload}
			case UPDATE_LOCATIONS_CURRENT_SEARCH:
				return {...state, locCurrentSearch: action.payload}
			case UPDATE_CHARACTERS_CURRENT_SEARCH:
				return {...state, charCurrentSearch: action.payload}

			case UPDATE_PAGES_CHARACTERS_SEARCH:
				return {...state, charPages:action.payload}
			case UPDATE_PAGES_EPISODES_SEARCH:
				return {...state, epiPages:action.payload}
			case UPDATE_PAGES_LOCATIONS_SEARCH:
				return {...state, locPages:action.payload}
			
			case UPDATE_CHARACTERS_BY_SEARCH:
				return {...state, charTypeSearch:action.payload}
			case UPDATE_LOCATIONS_BY_SEARCH:
				return {...state, locTypeSearch:action.payload}
	
			case UPDATE_FILTER_SEARCH:
				return {...state, filterSearch:action.payload}

			case UPDATE_CHAR_CURRENT_PAGE_ACTION:
				return {...state, charCurrentPage:action.payload}
			case UPDATE_LOC_CURRENT_PAGE_ACTION:
				return {...state, locCurrentPage:action.payload}
			case UPDATE_EPI_CURRENT_PAGE_ACTION:
				return {...state, epiCurrentPage:action.payload}
			
			default:
				return state
		}
}

////////////////////////////CHARS/////////////////////////////////////
export const updateCharactersCurrentSearchAction = (value) => (dispatch, getState) =>{
	dispatch({
		type: UPDATE_CHARACTERS_CURRENT_SEARCH,
		payload: value
	})
}


export const updateCharactersBySearchAction = (value) => (dispatch, getState) =>{
	dispatch({
		type: UPDATE_CHARACTERS_BY_SEARCH,
		payload: value
	})
}

export const updateCharactersPagesSearchAction = (value) => (dispatch,getState)=>{
    dispatch({
		type: UPDATE_PAGES_CHARACTERS_SEARCH,
		payload: value
	})
}

export const updateCharCurrentPageAction = (value) =>(dispatch,getState) =>{
	dispatch({
		type: UPDATE_CHAR_CURRENT_PAGE_ACTION,
		payload: value
	})
}
////////////////////////EPIS///////////////////////////////////////
export const updateEpisodesCurrentSearchAction = (value) => (dispatch, getState) =>{
	dispatch({
		type: UPDATE_EPISODES_CURRENT_SEARCH,
		payload: value
	})
}

export const updateEpisodesPagesSearchAction = (value) => (dispatch,getState)=>{
    dispatch({
		type: UPDATE_PAGES_EPISODES_SEARCH,
		payload: value
	})
}

export const updateEpiCurrentPageAction = (value) =>(dispatch,getState) =>{
	dispatch({
		type: UPDATE_EPI_CURRENT_PAGE_ACTION,
		payload: value
	})
}

///////////////////////LOCS////////////////////////////////////////
export const updateLocationsCurrentSearchAction = (value) => (dispatch, getState) =>{
	dispatch({
		type: UPDATE_LOCATIONS_CURRENT_SEARCH,
		payload: value
	})
}


export const updateLocationsBySearchAction = (value) => (dispatch, getState) =>{
	dispatch({
		type: UPDATE_LOCATIONS_BY_SEARCH,
		payload: value
	})
}

export const updateLocationsPagesSearchAction = (value) => (dispatch,getState)=>{
    dispatch({
		type: UPDATE_PAGES_LOCATIONS_SEARCH,
		payload: value
	})
}

export const updateLocCurrentPageAction = (value) =>(dispatch,getState) =>{
	dispatch({
		type: UPDATE_LOC_CURRENT_PAGE_ACTION,
		payload: value
	})
}

///////////////////////////OTHERS///////////////////////////////////////////
export const updateFilterSearchAction = (value) => (dispatch, getState) =>{
	dispatch({
		type: UPDATE_FILTER_SEARCH,
		payload: value
	})
}
    
    
