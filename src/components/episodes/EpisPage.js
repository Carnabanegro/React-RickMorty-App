import React from 'react';
import EntityCard from '../card/CustomCard'
import {Grid} from '@material-ui/core';
import { connect } from 'react-redux';
import CustomPagination from '../pagination/CustomPagination';
import ErrorPage from '../searcher/errorPage';
import LoadingPage from '../searcher/loadingPage';

function EpisPage({
    error,
    fetching,
    epis,
    epiPages,
    epiCurrentPage
}) {
        
    if(error && !fetching){
        return(
            <ErrorPage/> 
        )
    }else{
        if(!error && fetching) {
            return(
                <LoadingPage/> // I feel that the search with this delays me but, I prefer to use it
            )
        }else{

        return (
            <Grid container   justify="flex-start" >
                <Grid container item xs={12} spacing={3}>
                        {epis.map((value)=>
                                <Grid container key={value.id} item>
                                    <EntityCard 
                                        name={value.name} 
                                        dataInfo={value.episode} 
                                        dataInfo2={value.air_date} 
                                        tittle1="Episode" 
                                        tittle2="Release Date"
                                        chars= {value.characters}
                                       />
                                </Grid>
                        )}
                </Grid>
                <Grid  item xs={12} >
                    <CustomPagination pages={epiPages} currentPage={epiCurrentPage} />
                </Grid>
            </Grid>
        )}
    }
    }
    function mapState(state){
        return{
            epis:state.episodes.array,
            epiPages:state.search.epiPages,
            epiCurrentPage:state.search.epiCurrentPage,
            error:state.episodes.error,
            fetching:state.episodes.fetching
        }
    }
    export default connect(mapState)(EpisPage) //le saca datos a redux o le pasa acciones
