import React from 'react';
import {FormControlLabel,FormControl,FormLabel,RadioGroup,Radio,Container} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {updatePagesSearchAction,updateFilterSearchAction} from '../../redux/searchDuck';
import {removeCharactersAction} from '../../redux/charsDuck';
import {removeEpisodesAction} from '../../redux/epiDuck';
import {removeLocationsAction} from '../../redux/locDuck';


function RadioButtonsGroup({
  removeCharactersAction,
  removeEpisodesAction,
  removeLocationsAction,
  updateFilterSearchAction,
  updatePagesSearchAction
}) {
  let value
  
  const handleChange = (event) => {
    value = event.target.value;
    updateFilterSearchAction(value);
    updatePagesSearchAction(0)
    removeLocationsAction();
    removeCharactersAction();
    removeEpisodesAction();
  };

  return (
      <Container fluid >
        <FormControl  component="fieldset">
          <FormLabel color='secondary'  component="legend">What do you want Search?</FormLabel>
          <RadioGroup  aria-label="gender"  name="gender1" value={value}  onChange={handleChange}>
            <FormControlLabel  value="characters" control={<Radio component={NavLink} to="characters" />} label="Characters" />
            <FormControlLabel value="episodes" control={<Radio component={NavLink} to="episodes"  />} label="Episodes" />
            <FormControlLabel value="locations" control={<Radio component={NavLink} to="locations" />} label="Locations" />
          </RadioGroup>
        </FormControl>
      </Container> 
  );
}

function mapState({search,characters} ){
  return 
}
export default connect(mapState,{
  removeLocationsAction,
  removeEpisodesAction,
  removeCharactersAction,
  updateFilterSearchAction,
  updatePagesSearchAction
})(RadioButtonsGroup)