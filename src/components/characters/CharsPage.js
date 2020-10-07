import React from 'react'
import CardCharacter from '../card/CardCharacter'
import { connect } from 'react-redux'
import {Grid} from '@material-ui/core';
import CustomPagination from '../pagination/CustomPagination';
import ErrorPage from '../searcher/errorPage';
import LoadingPage from '../searcher/loadingPage';
function CharsPage({
    error,
    fetching,
    chars,
    charPages,
    charCurrentPage
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
                        <Grid  item xs={12} direction="row" justify="center" alignItems="flex-start">
                            <CustomPagination pages={charPages} currentPage={charCurrentPage} />
                            </Grid>
                
                    </div>
            
                )}
            }
    }
    function mapState(state){
        return{
            chars:state.characters.array,
            charPages:state.search.charPages,
            error:state.characters.error,
            fetching:state.characters.fetching,
            charCurrentPage:state.search.charCurrentPage //

        }
    }
    export default connect(mapState)(CharsPage) //le saca datos a redux o le pasa acciones

