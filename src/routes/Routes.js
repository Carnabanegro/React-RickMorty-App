import React from 'react';
import { Switch, Route} from 'react-router-dom';
import HomePage from '../components/home/homePage';
import CharsPage from '../components/characters/CharsPage';
import EpisPage from '../components/episodes/EpisPage';
import LocsPage from '../components/locations/LocsPage';
import { Container } from 'react-bootstrap';
export default function Routes() {
    return (
        <Container className= "routes-container"  fluid> 
            <Switch>
                
                <Route path="/characters" component={CharsPage} />
                <Route path="/episodes" component={EpisPage}/>
                <Route path="/locations" component={LocsPage}/>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </Container>
            
    )
}