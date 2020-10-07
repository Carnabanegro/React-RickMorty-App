import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from '@material-ui/core';
import './search.css'

export default function LoadingPage() {

  return (
    <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center" 
        spacing={3}
        className="loadContainer"
    >
        <Grid  
            item xs={12}  >
            <CircularProgress color="secondary" size={200} />
        </Grid>  
        <Grid  
             
            item xs={12} >
            <h1 style={{color:"#10ac84"}}>
                    LOADING ...
            </h1>
        </Grid>
             
    </Grid> 
  );
}