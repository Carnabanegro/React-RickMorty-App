import React from 'react';
import {Grid} from '@material-ui/core';
import './search.css';

export default function ErrorPage() {
    
  return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center" 
          className="errorContainer">
            <h1 className="errorMessage">Any result be Found!, try again ...</h1>
        </Grid>
  );
}