import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import charsReducer, {getCharactersAction} from './charsDuck.js';
import locReducer, { getLocationsAction } from './locDuck';
import epiReducer, { getEpisodesAction } from './epiDuck';

let rootReducer = combineReducers({
	episodes: epiReducer,
    characters: charsReducer,
    locations: locReducer
})
const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore(){
	let store= createStore(
		rootReducer, 
		composeEnhancers(applyMiddleware(thunk))
	)
	getCharactersAction()(store.dispatch, store.getState)	//get characters to first time
	getEpisodesAction()(store.dispatch, store.getState)	//get Episodes to first time
	getLocationsAction()(store.dispatch, store.getState) //get Locations to first time
	return store
}