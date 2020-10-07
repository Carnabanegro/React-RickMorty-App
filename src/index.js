import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from 'react-apollo'
import {Provider} from 'react-redux'
import generateStore from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
let store = generateStore()

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
});

let WithRouter = () => <BrowserRouter ><App /></BrowserRouter>
let WithStore = () => 
  <Provider  store={store.store}> 
    <PersistGate loading={null} persistor={store.persistor}>
      <WithRouter/>
    </PersistGate> 
  </Provider>
let WithApollo = () => <ApolloProvider  client={client} ><WithStore/></ApolloProvider>

ReactDOM.render(<WithApollo />, document.getElementById('root'));
serviceWorker.unregister();
