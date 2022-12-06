import React from 'react'
import axios, { Axios } from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button, Row, Col, Form, Breadcrumb } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

import ManagementHeader from '../components/ManagementHeader';
import CancelModal from '../components/CancelModal';

function UpdatePoint() {

    const [name, setName] = useState("");
    const [cep, setCep] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [pointReference, setPointReference] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [materials, setMaterials] = useState(["","","",""]);
    const [loadPoint, setLoadPoint] = useState(true);

    const navigate = useNavigate()

    const data = {
        name: name,
        cep: cep,
        city: city,
        address: address,
        number: number,
        pointReference: pointReference,
        phone: phone,
        mail: mail,
        materials: materials
    }

    const [validated, setValidated] = useState(false);
    const [checkValidated, setCheckValidated] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        if (loadPoint){
            axios.get(`http://localhost:3333/points/${id}`).then((response) => {
                setName(response.data.name);
                setCep(response.data.cep);
                setCity(response.data.city);
                setAddress(response.data.address);
                setNumber(response.data.number);
                setPointReference(response.data.pointReference);
                setPhone(response.data.phone);
                setMail(response.data.mail);
                setMaterials(response.data.materials);
            });
            setLoadPoint(false);
        }
    });

    
    const setSingleMaterial = (index, material) => {
        let arrayMaterials = [...materials] 
        if (arrayMaterials[index] == "") {
            arrayMaterials[index] = material;
        } else {
            arrayMaterials[index] = "";
        }
        setMaterials(arrayMaterials);
    }

    const handleValidate = (event) => {
        event.preventDefault();

        const check1 = document.getElementById(`inline-checkbox-1`).checked;
        const check2 = document.getElementById(`inline-checkbox-2`).checked;
        const check3 = document.getElementById(`inline-checkbox-3`).checked;
        const check4 = document.getElementById(`inline-checkbox-4`).checked;
        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        const fieldsValidate = form.checkValidity();
        const checkValidate = check1 || check2 || check3 || check4;

        setValidated(true);
        setCheckValidated(checkValidate);

        if (fieldsValidate && checkValidate){
            axios.put(`http://localhost:3333/points/${id}`, data).then(navigate('/'))
        }
    };

    return (
    <div className='Update'>
        <ManagementHeader/>
        <Container className='pt-4 pt-md-5'>
            <Row className='mt-5 mb-4'>
                <Col>
                    <h1 className='f-w-bold'><span className='emphasis'>Editar</span> Ponto de coleta </h1>
                </Col>
            </Row>
        <Form noValidate validated={validated} onSubmit={handleValidate}>
            <Row>
                <Col className="mb-4">
                    <Form.Label><b>Nome do Ponto de coleta</b></Form.Label>
                    <Form.Control 
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    placeholder="Ex: Ponto Praça da Igreja Matriz" 
                    size="lg"/>
                    <Form.Control.Feedback type="invalid">
                        Nome do ponto é <b>obrigatório</b>.
                    </Form.Control.Feedback>
                </Col>
            </Row>
            <Row>
                <Col className="mb-4" md={2}>
                    <Form.Label><b>CEP</b></Form.Label>
                    <Form.Control 
                    required
                    value={cep}
                    onChange={(event) => setCep(event.target.value)}
                    type="text"
                    placeholder="Ex: 12345-678" 
                    size="lg"/>
                    <Form.Control.Feedback type="invalid">
                        CEP é <b>obrigatório</b>.
                    </Form.Control.Feedback>
                </Col>
                <Col className="mb-4" md={4}>
                    <Form.Label><b>Cidade</b></Form.Label>
                    <Form.Control 
                    required
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    type="text"
                    placeholder="Ex: Russas" 
                    size="lg"/>
                    <Form.Control.Feedback type="invalid">
                        Cidade é <b>obrigatório</b>.
                    </Form.Control.Feedback>
                </Col>
                <Col className="mb-4" md={4}>
                    <Form.Label><b>Endereço</b></Form.Label>
                    <Form.Control 
                    required
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    type="text"
                    placeholder="Ex: Av. Dom Lino, 923-981 - Centro" 
                    size="lg"/>
                    <Form.Control.Feedback type="invalid">
                        Endereço é <b>obrigatório</b>.
                    </Form.Control.Feedback>
                </Col>
                <Col className="mb-4" md={2}>
                    <Form.Label><b>Número</b></Form.Label>
                    <Form.Control 
                    required
                    value={number}
                    onChange={(event) => setNumber(event.target.value)}
                    type="text"
                    placeholder="Ex: 200" 
                    size="lg"/>
                    <Form.Control.Feedback type="invalid">
                        Número é <b>obrigatório</b>.
                    </Form.Control.Feedback>
                </Col>
            </Row>
            <Row>
                <Col className="mb-4">
                    <Form.Label><b>Ponto de Referência</b></Form.Label>
                    <Form.Control 
                    required
                    value={pointReference}
                    onChange={(event) => setPointReference(event.target.value)}
                    type="text"
                    placeholder="Ex: 200" 
                    size="lg"/>
                    <Form.Control.Feedback type="invalid">
                        Ponto de referência é <b>obrigatório</b>.
                    </Form.Control.Feedback>
                </Col>
            </Row>
            <Row>
                <Col className="mb-4" md={6}>
                    <Form.Label><b>Nº do telefone</b></Form.Label>
                    <Form.Control 
                    required
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    type="phone"
                    placeholder="Ex: (88) 99876-5432" 
                    size="lg"/>
                    <Form.Control.Feedback type="invalid">
                        Nº do telefone é <b>obrigatório</b>.
                    </Form.Control.Feedback>
                </Col>
            </Row>
            <Row>
                <Col className="mb-4" md={6}>
                    <Form.Label><b>E-mail</b></Form.Label>
                    <Form.Control 
                    required
                    value={mail}
                    onChange={(event) => setMail(event.target.value)}
                    type="mail"
                    placeholder="Ex: coleta.igreja.matriz@gmail.com" 
                    size="lg"/>
                    <Form.Control.Feedback type="invalid">
                        Nº do telefone é <b>obrigatório</b>.
                    </Form.Control.Feedback>
                </Col>
            </Row>
            <Row>
                <Form.Label><b>Materiais que recicla</b></Form.Label>
                <Col>
                <Form.Check
                    inline
                    checked={materials[0] != ""}
                    onChange={() => setSingleMaterial(0, "papel")}
                    className={`my-2 bt-w-auto ${checkValidated ? "box" : "box-invalid"}`}
                    label="Papel"
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox-1`}
                />
                
                <Form.Check
                    inline
                    checked={materials[1] != ""}
                    onChange={() => setSingleMaterial(1, "plastico")}
                    className={`my-2 bt-w-auto ${checkValidated ? "box" : "box-invalid"}`}
                    label="Plastico"
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox-2`}
                />
                <Form.Check
                    inline
                    checked={materials[2] != ""}
                    onChange={() => setSingleMaterial(2, "vidro")}
                    className={`my-2 bt-w-auto ${checkValidated ? "box" : "box-invalid"}`}
                    label="Vidro"
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox-3`}
                />
                <Form.Check
                    inline
                    checked={materials[3] != ""}
                    onChange={() => setSingleMaterial(3, "metal")}
                    className={`my-2 bt-w-auto ${checkValidated ? "box" : "box-invalid"}`}
                    label="Metal"
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox-4`}
                />
                </Col>
                {   
                    !checkValidated && <p className='check-feedback'> Pelo menos uma opção é deve ser selecionada </p>
                }
                
            </Row>
            <hr />
            <Row >
                <Col className="mt-2 mb-2" md="auto">
                    <Button type='submit' variant="success" size="lg" className='bt-w-auto'>
                        <FontAwesomeIcon icon={faSave} className='pe-2'/> Salvar alterações </Button>{' '}
                </Col>
                <Col className="my-2" md="auto">
                    <CancelModal/>
                </Col>
            </Row>
            </Form>
        </Container>  
        </div>
  )
}

export default UpdatePoint