import React from 'react';
import { Modal,Container, Button } from 'react-bootstrap';
import {Grid} from '@material-ui/core';
import {Card, CardBody, CardImg, CardTitle} from 'reactstrap';

export default function EntityView({chars,data1,data2,data3, tittle1, tittle2}) {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <Container>
            <Button variant="primary" onClick={handleShow}>
                More
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>{data1}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Modal.Dialog> {tittle1} : {data2}</Modal.Dialog>
                <Modal.Dialog> {tittle2} : {data3}</Modal.Dialog>
                <Grid container spacing={3} justify="flex-start" >
                  {chars.slice(0, 5).map((value)=>
                    <Grid  key={value} spacing={1} item>
                        <Card>
                            <CardImg src={value.image}/>
                            <CardBody>
                              <CardTitle>
                                {value.name}
                              </CardTitle>
                            </CardBody>
                        </Card> 
                    </Grid>
                  )}    
                </Grid>
              </Modal.Body>
            </Modal>
        </Container>
    )    
      
}
  