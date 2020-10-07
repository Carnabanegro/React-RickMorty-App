import React from 'react';
import {FormControlLabel,FormControl,FormLabel,RadioGroup,Radio,Container} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {updateFilterSearchAction} from '../../redux/searchDuck';
import './filter.css';


function RadioButtonsGroup({
  updateFilterSearchAction,
  filter,
}) {
  const handleChange = (event) => {
    updateFilterSearchAction(event.target.value);
  };

  return (
      <Container  className="filter-container">
        <FormControl  component="fieldset">
          <FormLabel   component="legend"><h4 className="filterTitle">What do you want Search?</h4></FormLabel>
          <RadioGroup defaultValue={filter}  aria-label="gender"  name="gender1"   onChange={handleChange}>
            <FormControlLabel  value="characters" control={<Radio component={Link} to="/searchPage/characters" />} label="Characters" />
            <FormControlLabel value="episodes" control={<Radio component={Link} to="/searchPage/episodes"/>} label="Episodes" />
            <FormControlLabel value="locations" control={<Radio component={Link} to="/searchPage/locations"/>} label="Locations" />
          </RadioGroup>
        </FormControl>
      </Container> 
  );
}

function mapState({search} ){
  return {
    filter:search.filterSearch
  }
}
export default connect(mapState,{
  updateFilterSearchAction,
})(RadioButtonsGroup)