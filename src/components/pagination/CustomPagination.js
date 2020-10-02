import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';
import {getCharactersAction} from '../../redux/charsDuck';
import {getEpisodesAction} from '../../redux/epiDuck';
import {getLocationsAction} from '../../redux/locDuck';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function CustomPagination({
  //currentSearchEpis,
  //currentSearchChars,
  //currentSearchLocs,
  //pagesChars,
  //pagesEpis,
  //pagesLocs,
  //searchBy,
  pages,
  currentSearch,
  typeSearch,
  getEpisodesAction,
  getCharactersAction,
  getLocationsAction,
  //searchType
  filterSearch
}) {

  const classes = useStyles();
  const [page,setPage] = React.useState(1)
  function handleChange(event,value){
    setPage(value)
    //console.log(page, "soy la pagina")
    //console.log(pages, "soy las paginas")
    if (filterSearch === "characters"){
      getCharactersAction(page,currentSearch,typeSearch)
    }
    if (filterSearch === "locations"){
      getLocationsAction(page,currentSearch,typeSearch)
    }
    if (filterSearch === "episodes"){
      getEpisodesAction(page,currentSearch)
    } 
  
  }
  return (
    <div className={classes.root}>
      <Pagination hidden={pages<=1} page={page}   count={pages} color="secondary" onChange={handleChange} />
    </div>
  );

}
function mapState(state){
    
    return{
        //pagesChars:state.characters.pages,
        //pagesEpis:state.episodes.pages,
        //pagesLocs:state.locations.pages,
        //currentSearchChars:state.characters.currentSearch,
        //searchBy: state.characters.typeSearch,
        //currentSearchEpis: state.episodes.currentSearch,
        //currentSearchLocs: state.locations.currentSearch
        pages:state.search.pages,
        currentSearch:state.search.currentSearch,
        typeSearch:state.search.typeSearch,
        filterSearch:state.search.filterSearch
    }
}
export default connect(mapState,{getEpisodesAction,getCharactersAction,getLocationsAction,})(CustomPagination);