import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'reactstrap';
import './search.css'

export default function LoadingPage() {

  return (
    <Container fluid={true} className="loadContainer">
        <Row><Col sm={{ size: 6, offset: 5 }}><CircularProgress color="secondary" size={200} /></Col></Row>
        <Row>
            <Col sm={{ size: 6, offset: 5 }}>
                <h1 style={{color:"#10ac84"}}>
                    LOADING ...
                </h1>
            </Col>
        </Row>
    </Container>
  );
}