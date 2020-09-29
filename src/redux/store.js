import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import charsReducer from './charsDuck.js';
import locReducer from './locDuck';
import epiReducer from './epiDuck';
import searchReducer from './searchDuck' ;

let rootReducer = combineReducers({
	episodes: epiReducer,
    characters: charsReducer,
	locations: locReducer,
	search: searchReducer
})
const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore(){
	let store= createStore(
		rootReducer, 
		composeEnhancers(applyMiddleware(thunk))
	)
	//getCharactersAction()(store.dispatch, store.getState)	//get characters to first time
	//getEpisodesAction()(store.dispatch, store.getState)	//get Episodes to first time
	//getLocationsAction()(store.dispatch, store.getState) //get Locations to first time
	return store
}