import React from 'react';
import {Grid} from '@material-ui/core';
import { Switch, Route} from 'react-router-dom';


import CharsPage from '../characters/CharsPage';
import EpisPage from '../episodes/EpisPage';
import LocsPage from '../locations/LocsPage';
import Filter from '../filter/Filter'
import Searcher from '../searcher/Searcher';

export default function SearchPage() {
    
  return (
        <Grid container>
          <Grid item xs={12} md={2} className="filter-container" >
            <Filter/>
          </Grid>
          <Grid item xs={12} md={10} >
            <Grid container spacing={2} >
              <Grid item xs={12}>
                <Searcher />
              </Grid>
              <Grid item xs={12}>
                <Switch>
                  <Route  path="/searchPage/characters" component={CharsPage} />
                  <Route path="/searchPage/episodes" component={EpisPage} />
                  <Route path="/searchPage/locations" component={LocsPage} />
                </Switch>
              </Grid>
            </Grid> 
          </Grid>
        </Grid >
  );
}