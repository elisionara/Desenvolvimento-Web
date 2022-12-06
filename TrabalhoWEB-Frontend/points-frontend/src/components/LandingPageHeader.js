import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree, faUserAlt } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';

function LandingPageHeader() {
  return (
    <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='fixed-top'>
          <Container>
            <Navbar.Brand href="/landingpage" className='me-auto'>
              <Row>
                <Col className='pe-0'>
                  <img src={'/img/clarity_tree-line.png'} width={'24px'}></img>
                </Col>
                <Col className='pe-0'>
                  <b>Coletar</b>
                </Col>
              </Row>
            </Navbar.Brand>
            <DropdownButton
              variant="outline-light"
              title={<FontAwesomeIcon className='pe-1' icon={faUserAlt}/>}
              id="input-group-dropdown-1"
              align="end"
              className='me-3 d-block d-md-none'>
              <Dropdown.Item href="/"><b>Trocar de perfil</b></Dropdown.Item>
            </DropdownButton>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className='me-auto'></Nav>
              <Nav>
                <Nav.Link href="#quem-somos">Quem Somos</Nav.Link>
                <Nav.Link href="#duvidas">Duvidas</Nav.Link>
                <Nav.Link href="#contato">Contatos</Nav.Link> 
              </Nav>
            </Navbar.Collapse>
            <DropdownButton
            variant="outline-light"
            title={<FontAwesomeIcon className='pe-1' icon={faUserAlt}/>}
            id="input-group-dropdown-1"
            align="end"
            className='ms-3 d-none d-md-block'>
              <Dropdown.Item href="/"><b>Trocar de perfil</b></Dropdown.Item>
            </DropdownButton>
          </Container>
        </Navbar>
    </header>
  )
}

export default LandingPageHeader