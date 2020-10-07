import React from 'react';
import { Switch, Route} from 'react-router-dom';
import HomePage from '../components/home/homePage';
import { Container } from 'react-bootstrap';
import SearchPage from '../components/searcher/searchPage'


export default function Routes() {
    return (
        <Container className= "routes-container"  fluid> 
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/searchPage">
                <SearchPage/>
                </Route>
            </Switch>
        </Container>
            
    )
}