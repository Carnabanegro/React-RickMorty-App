import React from 'react';
import {FormControlLabel,FormControl,FormLabel,RadioGroup,Radio,Container} from '@material-ui/core';
import { NavLink } from 'react-router-dom'


export default function RadioButtonsGroup(props) {
  let value
  
  const handleChange = (event) => {
    value = event.target.value;
    props.searchType(value)
  
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