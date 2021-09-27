import React from 'react';
import { Switch, Route} from 'react-router-dom';
import HomePage from '../components/home/homePage';
import { Container, Row, Col } from 'react-bootstrap';
import SearchPage from '../components/searcher/searchPage'


export default function Routes() {
    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/searchPage">
                            <SearchPage/>
                        </Route>
                    </Switch>
                </Col>

            </Row>
        </Container>
            
    )
}