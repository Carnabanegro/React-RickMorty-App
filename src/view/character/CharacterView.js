import React from 'react';
import { Modal,Container, Button} from 'react-bootstrap';
import '../view.css';

export default function CharacterView({image,name,type,genre,species}) {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    return (
        <Container className="charac-view">
            
            <Button className="button" onClick={handleShow}>
                More
            </Button>

            <Modal 
              className="modal"
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Header closeButton className="modalParts">
                <Container>
                  <img alt='rick' src={image} className="img"/>
                  <Modal.Title className="modalParts">{name}</Modal.Title>   
                </Container>
              </Modal.Header>
              <Modal.Body className="modalParts">
                <Modal.Dialog className="charac-data">TYPE: {type}</Modal.Dialog>
                <Modal.Dialog className="charac-data">GENDER: {genre}</Modal.Dialog>
                <Modal.Dialog className="charac-data">SPECIES: {species}</Modal.Dialog>
              </Modal.Body>
            </Modal>
        </Container>
    )    
      
}