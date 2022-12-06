import React from 'react'
import { useState } from 'react';
import { Button, Modal, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

function DeleteModal({handleDeletePoint, point}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        handleDeletePoint(point)
        setShow(false);
}
    return (
        <>
        <Button variant="danger" onClick={handleShow}>
            <FontAwesomeIcon icon={faTrashAlt}/>
        </Button>
  
        <Modal show={show} onHide={handleClose} backdrop="static" fullscreen={"md-down"}>
          <Modal.Header closeButton>
            <Modal.Title> 
              <h4 className='text-danger'>
                <FontAwesomeIcon icon={faTriangleExclamation}/>
                <b className='ps-2'>Excluir ponto de coleta?</b>
              </h4>
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            O ponto de coleta selecionado será excluido.
          </Modal.Body>
          <Modal.Footer>
            <Row>
                <Col className="pb-3 p-md-0 pe-md-3" md="auto">
                  <Button variant="outline-secondary" size="lg" onClick={handleClose} className='bt-w-auto'>
                    Cancelar
                  </Button>
                </Col>
                <Col className="pb-3 p-md-0" md="auto">
                  <Button variant="danger" size="lg" onClick={handleDelete} className='bt-w-auto'>
                      <FontAwesomeIcon className='pe-2' icon={faTrashAlt} /> 
                      Sim, quero deletar ponto
                  </Button>
                </Col>
            </Row>
          </Modal.Footer>
        </Modal>
      </>
      )
}

export default DeleteModal