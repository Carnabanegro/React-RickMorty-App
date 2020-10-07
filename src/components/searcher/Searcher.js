import React from  'react';
import {InputGroup, FormControl, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Grid} from '@material-ui/core';
import {removeCharactersAction,getCharactersAction} from '../../redux/charsDuck';
import {removeEpisodesAction,getEpisodesAction} from '../../redux/epiDuck';
import {removeLocationsAction,getLocationsAction} from '../../redux/locDuck';
import {
    updateCharactersCurrentSearchAction,
    updateEpisodesCurrentSearchAction,
    updateLocationsCurrentSearchAction,
    updateCharactersBySearchAction,
    updateLocationsBySearchAction,
    updateCharactersPagesSearchAction,
    updateLocationsPagesSearchAction,
    updateEpisodesPagesSearchAction,
    updateCharCurrentPageAction,
    updateEpiCurrentPageAction,
    updateLocCurrentPageAction
} from '../../redux/searchDuck';


function Searcher({
    //// UPDATE PAGES /////
    updateCharactersPagesSearchAction,
    updateCharCurrentPageAction,
    updateLocationsPagesSearchAction,
    updateLocCurrentPageAction,
    updateEpisodesPagesSearchAction,
    updateEpiCurrentPageAction,
    ////// UPDATE CURRENT ///
    updateCharactersCurrentSearchAction,
    updateEpisodesCurrentSearchAction,
    updateLocationsCurrentSearchAction,
    //////// UPDATE SELECT SEARCH /////
    updateCharactersBySearchAction,
    updateLocationsBySearchAction,
    /////// ACTIONS CHARS ////////
    getCharactersAction,
    removeCharactersAction,
    ////// ACTIONS EPIS //////
    removeEpisodesAction,
    getEpisodesAction,
    ////// ACTIONS LOCS//////
    getLocationsAction,
    removeLocationsAction,
    ////// others /////
    filterSearch,
    charTypeSearch,
    locTypeSearch
}) {

    const [input,setInput] = React.useState("");
    function keyHandler(e) {
        if (e.key=== 'Enter'){
            if (filterSearch === "characters"){
                removeCharactersAction();
            }
            if (filterSearch === "episodes"){
                removeEpisodesAction();
            }
            if (filterSearch === "locations"){
                removeLocationsAction();
            }
            searchHandler();
            setInput("");
        }
          
    }

    function inputHandler(event) {
        setInput(event.target.value);
        if (filterSearch === "characters"){
            updateCharactersCurrentSearchAction(event.target.value);
        }
        if (filterSearch === "episodes"){
            updateEpisodesCurrentSearchAction(event.target.value);
        }
        if (filterSearch === "locations"){
            updateLocationsCurrentSearchAction(event.target.value);
        }
        
    }

    function searchHandler() {
        
        if (filterSearch === "characters"){
            searchCharactersHandler(input);
        }
        if (filterSearch === "episodes"){
            searchEpisodesHandler(input);
        }
        if (filterSearch === "locations"){
            searchLocationsHandler(input);
        }
    }

    function searchCharactersHandler(input) {
        if (input.trim() === ""){
            removeCharactersAction();
        }
        if (input.trim().length >2) {
                getCharactersAction(1,input,charTypeSearch);
                updateCharCurrentPageAction(1)
        }
    }

    function searchLocationsHandler(input) {
        if (input.trim() === ""){
            removeLocationsAction();
        }
        if (input.trim().length >2) {
                getLocationsAction(1,input,locTypeSearch);
                updateLocCurrentPageAction(1);
        }
    }

    function searchEpisodesHandler(input) {
        if (input.trim() === ""){
            removeEpisodesAction();
        }
        if (input.trim().length >2) {
                getEpisodesAction(1,input);
                updateEpiCurrentPageAction(1);
        }
    }

    function cleanHandler(){
        if (filterSearch === "characters") {
            removeCharactersAction();
            updateCharactersPagesSearchAction(0)
        }
        if (filterSearch === "episodes") {
            removeEpisodesAction();
            updateEpisodesPagesSearchAction(0)
        }
        if (filterSearch === "locations") {
            removeLocationsAction();
            updateLocationsPagesSearchAction(0)
        }
        setInput("")
        
    }

    function handleSelect(event){
        setInput("");
        if (filterSearch === "characters") {
            updateCharactersBySearchAction(event);
            removeCharactersAction();
            updateCharactersPagesSearchAction(0)  
        }
        if (filterSearch === "locations") {
            updateLocationsBySearchAction(event);
            removeLocationsAction();
            updateLocationsPagesSearchAction(0)
        }
       
    }
    return (
        <Grid container fluid>
            <Grid container item>
                <Grid container>
                    <Grid container  item xs={11}>
                        <InputGroup>
                            <FormControl
                                placeholder="search" 
                                value= {input}  
                                onChange={inputHandler}
                                onKeyPress={keyHandler}
                            />
                            <DropdownButton
                                as={InputGroup.Append}
                                title={filterSearch==="characters"?charTypeSearch:locTypeSearch}
                                hidden={filterSearch==="episodes"}
                                onSelect={handleSelect}
                                variant="danger"
                            >
                                <Dropdown.Item   eventKey="name"  href="#">Name</Dropdown.Item>
                                <Dropdown.Item   eventKey="type" href="#">Type</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                    </Grid >
                    <Grid item xs={1}>
                        <Button variant="danger" color="secondary" onClick={cleanHandler}>Clean</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )  
}
function mapState({search, characters } ){
    return {
        
        filterSearch:search.filterSearch,
        charTypeSearch:search.charTypeSearch,
        locTypeSearch:search.locTypeSearch

    }
}
export default connect(mapState, {
    //// UPDATE PAGES /////
    updateCharactersPagesSearchAction,
    updateCharCurrentPageAction,
    updateLocationsPagesSearchAction,
    updateLocCurrentPageAction,
    updateEpisodesPagesSearchAction,
    updateEpiCurrentPageAction,
    ////// UPDATE CURRENT ///
    updateCharactersCurrentSearchAction,
    updateEpisodesCurrentSearchAction,
    updateLocationsCurrentSearchAction,
    //////// UPDATE SELECT SEARCH /////
    updateCharactersBySearchAction,
    updateLocationsBySearchAction,
    /////// ACTIONS CHARS ////////
    getCharactersAction,
    removeCharactersAction,
    ////// ACTIONS EPIS //////
    removeEpisodesAction,
    getEpisodesAction,
    ////// ACTIONS LOCS//////
    getLocationsAction,
    removeLocationsAction
})(Searcher);
