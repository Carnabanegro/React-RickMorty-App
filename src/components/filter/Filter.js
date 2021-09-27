import React from 'react';
import {FormControlLabel,FormControl,FormLabel,RadioGroup,Radio} from '@material-ui/core';
import {Container, Row, Col} from 'reactstrap';
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
      <Container fluid={true}  className="filter-container">
        <Row>
          <Col>
            <FormControl  component="fieldset">
              <FormLabel component="legend"><h4 className="filterTitle">What do you want Search?</h4></FormLabel>
              <RadioGroup defaultValue={filter}  aria-label="gender"  name="gender1"   onChange={handleChange}>
                <FormControlLabel  value="characters" control={<Radio color="dark" component={Link} to="/searchPage/characters" />} label="Characters" />
                <FormControlLabel value="episodes" control={<Radio color="dark" component={Link} to="/searchPage/episodes"/>} label="Episodes" />
                <FormControlLabel value="locations" control={<Radio color="dark" component={Link} to="/searchPage/locations"/>} label="Locations" />
              </RadioGroup>
            </FormControl>
          </Col>
        </Row>
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