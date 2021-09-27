import React from 'react';
import { Switch, Route} from 'react-router-dom';
import {Container, Row, Col} from "reactstrap";
import CharsPage from '../characters/CharsPage';
import EpisPage from '../episodes/EpisPage';
import LocsPage from '../locations/LocsPage';
import Filter from '../filter/Filter'
import Searcher from '../searcher/Searcher';
import "./search.css";

export default function SearchPage() {
    
  return (
        <Container fluid={true} className={"searchPageContainer"}>
            <Row>
                <Col xs="12" md="3"><Filter/></Col>
                <Col xm="12" md="9">
                    <Row>
                        <Searcher />
                    </Row>
                    <Row>
                        <Switch>
                            <Route  path="/searchPage/characters" component={CharsPage} />
                            <Route path="/searchPage/episodes" component={EpisPage} />
                            <Route path="/searchPage/locations" component={LocsPage} />
                        </Switch>
                    </Row>
                </Col>
            </Row>
        </Container>
  );
}