import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Row, Col, Card, Alert} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import DeleteModal from './DeleteModal.js';
import Pills from './Pills.js';


function Points({ points, loading, handleDeletePoint}) {

      if(points.length == 0){
        return(
          <Alert className='p-3'>
            <h5 className='text-center m-0'>
                <FontAwesomeIcon icon={faInfoCircle} className='pe-2'/>
                Nenhum ponto de coleta cadastrado.
            </h5>
          </Alert>)
      }
      return (
        <div>
        {points.map(point => {
          return (
          <Card className='py-3 px-3 my-3 shadow-sm' key={point.id}>
            <Row className='gap-2 gap-md-0 align-items-center'>
              <Col md="4">
                <h5 className='text-truncate text-success'>
                  <b>
                    {point.name}
                  </b>
                </h5>
                <h6 className='text-truncate m-0'>
                  <b className='pe-1'>Endereço:</b> 
                  {point.city+', '+point.address+', '+point.number+', '+point.cep}
                </h6>
              </Col>
              <Col md="4">
              <h6 className='text-truncate'>
                    <b className='pe-1'>Telefone:</b> 
                    {point.number}
                </h6>
                <h6 className='text-truncate m-0'>
                  <b className='pe-1'>E-mail:</b> 
                  {point.mail}
                </h6>
              </Col>
              <Col className='mt-0 mt-md-0' md="3">
                <h6 className='text-truncate m-0 mt-md-1 pb-2'>
                  <b>Materiais que recebe:</b>
                </h6>
                {   
                  Pills(point)
                }
              </Col>
              <Col md="1" className='ps-md-0'>
                <div className='d-flex gap-2'>
                  <Link to={`/editar/${point.id}`}>
                    <Button>
                        <FontAwesomeIcon icon={faPenAlt}/>
                    </Button>
                  </Link>
                  <DeleteModal handleDeletePoint={handleDeletePoint} point={point}/>
                </div>
              </Col>
            </Row>
          </Card>
          )
        })}
      </div>
      )
}

export default Points