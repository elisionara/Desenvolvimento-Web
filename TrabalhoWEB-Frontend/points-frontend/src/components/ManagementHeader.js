import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree, faUserAlt } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';

function ManagementHeader() {
  return (
    <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='fixed-top'>
          <Container>
            <Navbar.Brand href="/" className='me-auto'>
            <Row>
              <Col className='pe-0'>
                <img src={'/img/clarity_tree-line.png'} width={'24px'}></img>
              </Col>
              <Col className='pe-0'>
                <b>Coletar</b>
              </Col>
              <Col className='ps-1'> | Gestão de pontos
              </Col>
            </Row>
            </Navbar.Brand>
              <DropdownButton
                variant="outline-light"
                title={
                <FontAwesomeIcon className='pe-1' icon={faUserAlt}/>
                }
                id="input-group-dropdown-1"
                align="end"
                >
                <Dropdown.Item href="/landingpage">
                  <b>Trocar de perfil</b>
                </Dropdown.Item>
              </DropdownButton>
          </Container>
        </Navbar>
    </header>
  )
}

export default ManagementHeader