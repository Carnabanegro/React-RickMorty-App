import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "reactstrap";
import './home.css';
import  reactIcon from '../../Images/react-icon.png';
import  reduxIcon from '../../Images/redux-icon.png';
import graphqlIcon from '../../Images/graphql-icon.png';
import apolloIcon from '../../Images/apollo-client.png';
import reactB from  '../../Images/reactb-icon.jpg';
import mui from '../../Images/mui-icon.png';

export default function HomePage(){

    return(
        <Container className={"homeContainer"}>
            <Row className={"tittle"}>
                <h1 className="errorMessage">WELCOME TO THE RICK AND MORTY FINDER</h1>
            </Row>
            <Row className={"image"}>
                    <img
                            style={{borderStyle:"solid"}}
                            alt="gordon"
                            src='https://rickandmortyapi.com/api/character/avatar/149.jpeg'
                    />
            </Row>
            <Row className={"subtittle"}><h3 className="errorMessage">PROJECT CARRIED OUT USING THE FOLLOWING TECHNOLOGIES :</h3></Row>
            <Row className={"iconContainer"}>
                <Col className={"iconBox"}>
                    <a href={"https://reactjs.org/"}><img className={"icon"} alt="react" src={reactIcon}/></a>
                </Col>
                <Col className={"iconBox"}>
                    <a href={"https://redux.js.org/"}><img className={"icon"} alt="redux" src={reduxIcon}/></a>
                </Col>
                <Col className={"iconBox"}>
                    <a href={"https://graphql.org/"}><img className={"icon"} alt="graphQl" src={graphqlIcon}/></a>
                </Col>
                <Col className={"iconBox"}>
                    <a href={"https://www.apollographql.com/docs/react/"}><img className={"icon"} alt="apollo-client" src={apolloIcon}/></a>
                </Col>
                <Col className={"iconBox"}>
                    <a href={"https://react-bootstrap.github.io/"}><img className={"icon"} alt="reactboostrap" src={reactB}/></a>
                </Col>
                <Col className={"iconBox"}>
                    <a href={"https://material-ui.com/"}><img className={"icon"} alt="materialUI" src={mui}/></a>
                </Col>
            </Row>
        </Container>
    )
}