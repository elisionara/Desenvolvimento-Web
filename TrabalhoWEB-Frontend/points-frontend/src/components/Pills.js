import React from 'react'
import { Col, Badge} from 'react-bootstrap';

function Pills(point) {
    return (
        <div className='d-flex flex-wrap gap-2' >
            {
            point.materials[0] != "" && 
            <Col md="auto">
                <h5> <Badge pill bg="primary">Papel</Badge></h5>
            </Col>
            }
            {
            point.materials[1] != "" &&
            <Col md="auto">
                <h5> <Badge pill bg="danger">Plastico</Badge></h5>
            </Col>
            }
            {
            point.materials[2] != "" &&
            <Col md="auto">
                <h5> <Badge pill bg="success">Vidro</Badge></h5>
            </Col>  
            }
            {
            point.materials[3] != "" &&
            <Col md="auto">
                <h5> <Badge pill bg="warning" className='text-black'>Metal</Badge></h5>
            </Col>
            }
        </div>
    )
}

export default Pills