import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from '@material-ui/core';

export default function HomePage(){

    return(
        <Grid 
            container
            direction="column"
            justify="center"
            alignItems="center" 
            spacing={3}
        >
            <Grid  
                xs={12} 
                item  >
                <h1 className="errorMessage">
                    BIENVENIDO AL BUSCADOR DE RICK AND MORTY
                </h1>
            </Grid>
            <Grid  
                item xs={12} >
                <img 
                    style={{borderStyle:"solid"}} 
                    alt="gordon" 
                    src='https://rickandmortyapi.com/api/character/avatar/149.jpeg'
                />
            </Grid>   
        </Grid>       
    )
}