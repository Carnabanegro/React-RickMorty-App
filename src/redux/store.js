import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
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
const persistConfig = {
	key: 'root',
	storage,
}

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer)


export default function generateStore(){
	let store= createStore(
		persistedReducer, 
		composeEnhancers(applyMiddleware(thunk))
	)
	let persistor = persistStore(store)
	return { store, persistor }
}



