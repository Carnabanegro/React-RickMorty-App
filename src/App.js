import React from 'react';
import './App.css';

import Routes from './routes/Routes';
import Filter from './components/filter/Filter'
import Searcher from './components/searcher/Searcher';
import { Grid} from '@material-ui/core';
import Footer from './components/utiles/Footer';
import Header from './components/utiles/Header';
export default function App() {

  //const [search,setSearch] =React.useState("");

  //function searchHandler(value) {
  //  setSearch(value)
  //}


  return (
    <div className="App">
      <Header/>
      <Grid container fluid>
          <Grid item xs={12} md={2} className="filter-container" >
              <Filter/>
          </Grid>
          <Grid item xs={12} md={10} >
                <Grid container spacing={2} >
                  <Grid item xs={12}>
                    <Searcher />
                  </Grid>
                  <Grid item xs={12}>
                    <Routes />
                  </Grid>
                </Grid> 
        </Grid>
      </Grid >
      <Footer className="footer-container"/>
    </div>
);
  }
