import React from  'react';
import {InputGroup, FormControl, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Grid} from '@material-ui/core';
import {removeCharactersAction,getCharactersAction} from '../../redux/charsDuck';
import {removeEpisodesAction,getEpisodesAction} from '../../redux/epiDuck';
import {removeLocationsAction,getLocationsAction} from '../../redux/locDuck';

function Searcher({searchType,removeEpisodesAction,getEpisodesAction,getCharactersAction,removeCharactersAction,removeLocationsAction,getLocationsAction}) {

    //const [input,setInput] = React.useState("");
    const [select,setSelect] = React.useState("name");
    let input 

    console.log(searchType)
    function inputHandler(event) {
        input = event.target.value
        if (searchType === "characters"){
            searchCharactersHandler(input);
        }
        if (searchType === "episodes"){
            searchEpisodesHandler(input);
        }
        if (searchType === "locations"){
            searchLocationsHandler(input);
        }
    }

    function searchCharactersHandler(input) {
        if (input.trim() === ""){
            removeCharactersAction()
        }
        if (input.trim().length >2) {
                getCharactersAction(input,select);
        }
    }

    function searchLocationsHandler(input) {
        if (input.trim() === ""){
            removeLocationsAction()
        }
        if (input.trim().length >2) {
                getLocationsAction(input,select);
        }
    }

    function searchEpisodesHandler(input) {
        if (input.trim() === ""){
            removeEpisodesAction()
        }
        if (input.trim().length >2) {
                getEpisodesAction(input);
        }
    }

    function cleanHandler(){
        removeCharactersAction();
        removeEpisodesAction();
    }

    function handleSelect(event){
        setSelect(event)
        input = ""
    }
    return (
        <Grid container fluid>
            <Grid container item>
                <Grid container>
                    <Grid container  item xs={11}>
                        <InputGroup>
                            <FormControl
                                placeholder="search"
                                defaultValue={""} 
                                value= {input}  
                                onChangeCapture={inputHandler}
                            />
                            <DropdownButton
                                as={InputGroup.Append}
                                title={select}
                                onSelect={handleSelect}
                                variant="danger"
                            >
                                <Dropdown.Item  eventKey="name"  href="#">Name</Dropdown.Item>
                                <Dropdown.Item   disabled={searchType === "episodes"} eventKey="type" href="#">Type</Dropdown.Item>
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
function mapState({ characters:{ currentSearch } } ){
    return {
        currentSearch     
    }
}
export default connect(mapState, {removeEpisodesAction,getEpisodesAction,getCharactersAction,removeCharactersAction,getLocationsAction,removeLocationsAction})(Searcher);
