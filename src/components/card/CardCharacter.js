import React from 'react'
import CharacterView from '../../view/character/CharacterView'
import {Container} from '@material-ui/core';
import {Card, CardBody, CardImg, CardTitle} from 'reactstrap';
import './card.css'
export default function CardCharacter({
    name, image,type,genre,species
}) {
    return (
        <Container style={{padding:"10px"}} >
            <Card className="card">
                <CardImg alt="rick" src={image}  />
                <CardBody>
                    <CardTitle className="cardTitle">
                        {name}
                    </CardTitle>
                    <CharacterView className="characterView-class" name={name} image={image} type={type} genre={genre} species={species} />
                </CardBody>   
            </Card>
        </Container>
    )
}
