import React from 'react'
import EntityCard from '../card/CustomCard'
import {Grid} from '@material-ui/core';
import { connect } from 'react-redux'
import CustomPagination from '../pagination/CustomPagination';

function EpisPage({epis}) {
        
        return (
            <Grid container   justify="flex-start">
                <Grid container item xs={12} spacing={3}>
                        {epis.map((value)=>
                                <Grid container key={value} item>
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
                <Grid container item xs={12} direction="row" justify="center" alignItems="flex-start">
                    <CustomPagination  />
                </Grid>
            </Grid>
        )
    }
    function mapState(state){
        return{
            epis:state.episodes.array
        }
    }
    export default connect(mapState)(EpisPage) //le saca datos a redux o le pasa acciones
