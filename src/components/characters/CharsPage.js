import React from 'react'
import CardCharacter from '../card/CardCharacter'
import { connect } from 'react-redux'
import {Grid} from '@material-ui/core';

function CharsPage({chars}) {


        return (
            <Grid container spacing={3} >
                <Grid item xs={12} >
                    <Grid container justify="flex-start"  >
                        {chars.map((value)=>
                            <Grid  key={value} spacing={1}>
                                <CardCharacter  
                                    name={value.name} 
                                    type={value.type} 
                                    species={value.species} 
                                    image={value.image}
                                    genre={value.gender}
                                />
                            </Grid>)}
                    </Grid>
                </Grid>   
            </Grid>
        )
    }
    function mapState(state){
        return{
            chars:state.characters.array
        }
    }
    export default connect(mapState)(CharsPage) //le saca datos a redux o le pasa acciones

