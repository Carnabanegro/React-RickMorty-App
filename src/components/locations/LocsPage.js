import React from 'react'
import CustomCard from '../card/CustomCard'
import { Grid} from '@material-ui/core';
import { connect } from 'react-redux'
import CustomPagination from '../pagination/CustomPagination';
import ErrorPage from '../searcher/errorPage';

function LocsPage({
    error,
    fetching,
    locs,
    locPages,
    locCurrentPage
}) {
    
    if(error && !fetching){
        return(
            <ErrorPage/>
        )
    }else{


        return (
            <Grid container>
               <Grid container item  spacing={3} justify="flex-start"> 
                {locs.map((value)=>
                    <Grid container  key={value} item>
                        <CustomCard  
                            name={value.name} 
                            dataInfo={value.type} 
                            dataInfo2={value.dimension}
                            tittle1="Type"
                            tittle2="Dimesion"
                            chars={value.residents}/>
                    </Grid>)}
                </Grid>
                <Grid container item  direction="row" justify="center" alignItems="flex-start">
                    <CustomPagination pages={locPages} currentPage={locCurrentPage}  />
                </Grid> 
    
            </Grid>
        )}
    }
    function mapState(state){
        return{
            locs:state.locations.array,
            locCurrentPage:state.search.locCurrentPage,
            locPages:state.search.locPages,
            fetching:state.locations.fetching,
            error:state.locations.error
        }
    }
    export default connect(mapState)(LocsPage) 