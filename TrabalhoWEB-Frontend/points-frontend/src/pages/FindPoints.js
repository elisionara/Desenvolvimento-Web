
import '../App.css';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons'


import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPageHeader from '../components/LandingPageHeader';
import getFilterPoints from '../services/getFilterPoints.js';
import FilterPoints from '../components/FilterPoints.js';
import PaginationPoints from '../components/PaginationPoints.js';

function FindPoints() {

    const [points, setPoints] = useState([]);
    const [searched, setSearched] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pointsPerPage] = useState(10);

    //Get current point
    const indexOfLastPoint = currentPage * pointsPerPage;
    const indexOfFirstPoint = indexOfLastPoint - pointsPerPage;
    const currentPoints = points.slice(indexOfFirstPoint, indexOfLastPoint);

    //Change page

    const minPage = 1;
    const maxPage = Math.ceil(points.length / pointsPerPage);
    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(currentPage+1);
    const prevPage = () => setCurrentPage(currentPage-1);
    const firstPage = () => setCurrentPage(minPage);
    const lastPage = () => setCurrentPage(maxPage);

    async function handleGetPoints(){
        let points = await getFilterPoints(data);
        setPoints(points);
    }

    const [city, setCity] = useState("");
    const [materials, setMaterials] = useState(["","","",""]);
    const [filterMaterials, setFilterMaterials] = useState([]);
    
    const data = {
        city: city,
        materials: filterMaterials
    }

    const [validated, setValidated] = useState(false);
    const [checkValidated, setCheckValidated] = useState(true);

    const setSingleMaterial = (index, material) => {
        if (materials[index] == "") {
            materials[index] = material;
        } else {
            materials[index] = "";
        }
        setMaterials(materials);
        setFilterMaterials(materials.filter( mat => mat != ""))
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
            setSearched(true);
            handleGetPoints();
        }
    }

    return (
    <div className='Find'>
        <LandingPageHeader/>
        <Container className='pt-4 pt-md-5'>    
            <div className='hstack gap-3 mt-5 mb-4'>
                <Link to={"/landingpage"}>
                    <Button type='submit' variant="light" size="lg" className='bt-w-auto'>
                        <FontAwesomeIcon icon={faArrowLeft} className='pe-2'/> 
                            <p className='m-0 d-none d-md-inline'> Voltar </p>
                    </Button>
                </Link>
                <div className="vr"></div>
                <h1 className='f-w-bold mb-0'><span className='emphasis'>Onde descartar?</span></h1>
            </div>
        <Form noValidate validated={validated} onSubmit={handleValidate}>  
            <Row className='w-100 m-0 mb-5'> 
                <Col className='ps-md-0'>
                    <Form.Label><b>Cidade</b></Form.Label>
                    <Form.Control 
                    required
                    onChange={(event) => setCity(event.target.value)}
                    type="text"
                    placeholder="Ex: Russas" 
                    size="lg"/>
                    <Form.Control.Feedback type="invalid">
                        Cidade é <b>obrigatório</b>.
                    </Form.Control.Feedback>
                </Col>
                <Col className='pt-4 pt-md-0' md="auto">
                    <Form.Label><b>Materiais que recicla</b></Form.Label>
                    <Col>
                    <Form.Check
                        onChange={(event) => setSingleMaterial(0, "papel")}
                        label="Papel"
                        className={`my-2 my-md-0 bt-w-auto ${checkValidated ? "box" : "box-invalid"}`}
                        inline
                        name="group1"
                        type="checkbox"
                        id={`inline-checkbox-1`}
                    />
                    
                    <Form.Check
                        onChange={(event) => setSingleMaterial(1, "plastico")}
                        className={`my-2 my-md-0 bt-w-auto ${checkValidated ? "box" : "box-invalid"}`}
                        inline
                        label="Plastico"
                        name="group1"
                        type="checkbox"
                        id={`inline-checkbox-2`}
                    />
                    <Form.Check
                        onChange={(event) => setSingleMaterial(2, "vidro")}
                        className={`my-2 my-md-0 bt-w-auto ${checkValidated ? "box" : "box-invalid"}`}
                        inline
                        label="Vidro"
                        name="group1"
                        type="checkbox"
                        id={`inline-checkbox-3`}
                    />
                    <Form.Check
                        onChange={(event) => setSingleMaterial(3, "metal")}
                        className={`my-2 my-md-0 bt-w-auto ${checkValidated ? "box" : "box-invalid"}`}
                        inline
                        label="Metal"
                        name="group1"
                        type="checkbox"
                        id={`inline-checkbox-4`}
                    />
                    </Col>
                    {   
                        !checkValidated && <p className='check-feedback'> Pelo menos uma opção é deve ser selecionada </p>
                    }
                </Col>
          
                <Col className=" mt-aux p-md-0" md="auto">
                    <Button type='submit' variant="success" size="lg" className='bt-w-auto'>
                        <FontAwesomeIcon icon={faSearch} className='pe-2'/> Pesquisar 
                    </Button>{' '}
                </Col>
        
            </Row>
            
            </Form>
            <div id={"points"}>
            <FilterPoints points={currentPoints} searched={searched}></FilterPoints>
            <PaginationPoints 
                pointsPerPage={pointsPerPage} 
                totalPoints={points.length} 
                paginate={paginate}
                nextPage={nextPage}
                prevPage={prevPage}
                firstPage={firstPage}
                lastPage={lastPage}
                />
            </div>
        </Container>
        </div>
        
  )
}

export default FindPoints;