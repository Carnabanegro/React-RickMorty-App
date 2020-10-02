import React from 'react'
import CardCharacter from '../card/CardCharacter'
import { connect } from 'react-redux'
import {Grid} from '@material-ui/core';
import CustomPagination from '../pagination/CustomPagination';
function CharsPage({chars}) {

        return (
            <div>
                <Grid container xs={12} justify="flex-start" >
                        {chars.map((value)=>
                            <Grid item>
                                <CardCharacter  
                                    name={value.name} 
                                    type={value.type} 
                                    species={value.species} 
                                    image={value.image}
                                    genre={value.gender}
                                />
                            </Grid>)}
                </Grid>
                <div >
                    <CustomPagination />
                </div>
                
            </div>
            
        )
    }
    function mapState(state){
        return{
            chars:state.characters.array
        }
    }
    export default connect(mapState)(CharsPage) //le saca datos a redux o le pasa acciones

