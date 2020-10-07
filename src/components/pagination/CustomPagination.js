import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';
import {getCharactersAction} from '../../redux/charsDuck';
import {getEpisodesAction} from '../../redux/epiDuck';
import {getLocationsAction} from '../../redux/locDuck';
import {updateCharCurrentPageAction,updateEpiCurrentPageAction,updateLocCurrentPageAction} from '../../redux/searchDuck';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function CustomPagination({
  ///////////FOR UPDATE PAGES//////////
  updateCharCurrentPageAction,
  updateEpiCurrentPageAction,
  updateLocCurrentPageAction,
  ///////////ACTUAL PAGE AND TOTAL PAGES////////////
  currentPage,
  pages,
  /////////////CURRENT SEARCH/////////////
  charCurrentSearch,
  epiCurrentSearch,
  locCurrentSearch,
  /////////////TYPE SEARCH /////////
  charTypeSearch,
  locTypeSearch,
  ///////////ACTIONS NEEDED/////////
  getEpisodesAction,
  getCharactersAction,
  getLocationsAction,
  filterSearch
}) {
  const classes = useStyles();
  

  function handleChange(event,value){
    if (filterSearch === "characters"){
      getCharactersAction(value,charCurrentSearch,charTypeSearch)
      updateCharCurrentPageAction(value);
      console.log(charTypeSearch)
    }
    if (filterSearch === "locations"){
      console.log(locTypeSearch)
      getLocationsAction(value,locCurrentSearch,locTypeSearch)
      updateLocCurrentPageAction(value);
    }
    if (filterSearch === "episodes"){
      getEpisodesAction(value,epiCurrentSearch)
      updateEpiCurrentPageAction(value);
    } 
  }
  return (
    <div className={classes.root}>
      <Pagination   hidden={pages<=1} page={currentPage}  count={pages} color="secondary" onChange={handleChange} />
    </div>
  );

}
function mapState(state){
    return{
        charCurrentSearch:state.search.charCurrentSearch,
        epiCurrentSearch:state.search.epiCurrentSearch,
        locCurrentSearch:state.search.locCurrentSearch,
        charTypeSearch:state.search.charTypeSearch,
        locTypeSearch:state.search.locTypeSearch,
        filterSearch:state.search.filterSearch
    }
}
export default connect(mapState,{
  getEpisodesAction,
  getCharactersAction,
  getLocationsAction,
  updateCharCurrentPageAction,
  updateEpiCurrentPageAction,
  updateLocCurrentPageAction
})(CustomPagination);