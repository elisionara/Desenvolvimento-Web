import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Button, Row, Col, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'

function CancelModal() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="outline-danger" size="lg" className='bt-w-auto mt-2 mb-5 m-md-0' onClick={handleShow} > Cancelar </Button>{' '}
  
        <Modal show={show} onHide={handleClose} backdrop="static" fullscreen={"md-down"}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4 className='text-danger'>
                <FontAwesomeIcon icon={faTriangleExclamation}/>
                <b className='ps-2'>Descartar alterações?</b>
              </h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            As alterações que você fez neste ponto de coleta serão perdidas.
          </Modal.Body>
          <Modal.Footer>
          <Row>
            <Col className="pb-3 p-md-0 pe-md-3" md="auto">
              <Button className='bt-w-auto' variant="outline-secondary" size="lg" onClick={handleClose}>
                Cancelar
              </Button>
            </Col>
            <Col className="pb-3 p-md-0" md="auto">
              <Link to={"/"}>
                <Button className='bt-w-auto' variant="danger" size="lg" onClick={handleClose}>
                  <FontAwesomeIcon className='pe-2' icon={faTrashAlt} /> 
                    Sim, descartar alterações            
                </Button>
              </Link>
            </Col>
          </Row>
            
            
          </Modal.Footer>
        </Modal>
      </>
      )
}

export default CancelModal