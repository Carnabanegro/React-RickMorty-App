import React from 'react';
import { Modal,Container, Button} from 'react-bootstrap';
import {Grid} from '@material-ui/core'
export default function CharacterView({image,name,type,genre,species}) {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    return (
        <Container className="charac-view">
            
            <Button variant="danger" onClick={handleShow}>
                More
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Header closeButton>
                <Grid Container  >
                    <Grid  item  >
                      <img alt='rick' src={image}/>
                    </Grid>
                    <Grid item >
                      <Modal.Title>{name}</Modal.Title>
                    </Grid>
                </Grid>  
              </Modal.Header>
              <Modal.Body>
                <Modal.Dialog className="charac-data">TYPE: {type}</Modal.Dialog>
                <Modal.Dialog className="charac-data">GENDER: {genre}</Modal.Dialog>
                <Modal.Dialog className="charac-data">SPECIES: {species}</Modal.Dialog>
              </Modal.Body>
            </Modal>
        </Container>
    )    
      
}