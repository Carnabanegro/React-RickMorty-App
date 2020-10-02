import React from 'react'
import CustomCard from '../card/CustomCard'
import {Grid} from '@material-ui/core';
import { connect } from 'react-redux'
import CustomPagination from '../pagination/CustomPagination';

function LocsPage({locs}) {


        return (
            <Grid container  >
               <Grid container xs={12} spacing={3} justify="flex-start" item> 
                {locs.map((value)=>
                    <Grid container key={value} item>
                        <CustomCard  
                            name={value.name} 
                            dataInfo={value.type} 
                            dataInfo2={value.dimension}
                            tittle1="Type"
                            tittle2="Dimesion"
                            chars={value.residents}/>
                    </Grid>)}
                </Grid>
                <Grid container item xs={12} direction="row" justify="center" alignItems="flex-start">
                    <CustomPagination  />
                </Grid> 
            </Grid>
        )
    }
    function mapState(state){
        return{
            locs:state.locations.array
        }
    }
    export default connect(mapState)(LocsPage) //le saca datos a redux o le pasa acciones