import '../App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col, Badge, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faPenAlt, faPlus, faPlusMinus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import getPoints from '../services/getPoints.js';
import ManagementHeader from '../components/ManagementHeader.js';
import Points from '../components/Points.js';
import PaginationPoints from '../components/PaginationPoints.js';

function Home() {

  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(false);
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
  const firstPage = () => setCurrentPage(minPage);
  const lastPage = () => setCurrentPage(maxPage);
  const nextPage = () => {
    if(currentPage == maxPage){
      return;
    }
    setCurrentPage(currentPage+1);
  }
  const prevPage = () => {
    if(currentPage == minPage){
      return;
    }
    setCurrentPage(currentPage-1);
  }


  async function handleGetPoints(){
    let points = await getPoints();
    setPoints(points);
  }

  async function handleDeletePoint(point){
    await axios.delete(`http://localhost:3333/points/${point.id}`);
    handleGetPoints();
  }
  
  useEffect (() => {
    setLoading(true);
    handleGetPoints();
    setLoading(false);
  },[points])

  return (
    <div className="Home">
      <ManagementHeader/>
      <Container className='pt-4 pt-md-5'>
        <Row className='mt-5 mb-4'>
          <Col>
            <h1 className='f-w-bold pb-2 pb-md-0'> Pontos de coleta </h1>
          </Col>
          <Col md="auto">
            <Link to={"/cadastro"}>
              <Button variant="success" size="lg" className='bt-w-auto'>
                <FontAwesomeIcon icon={faPlus} className='pe-2'/> Incluir Ponto de Coleta 
              </Button>
            </Link>
          </Col>
        </Row>
        <Points points={currentPoints} loading={loading} handleDeletePoint={handleDeletePoint}></Points>
        <PaginationPoints 
          pointsPerPage={pointsPerPage} 
          totalPoints={points.length} 
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          firstPage={firstPage}
          lastPage={lastPage}
          />
        
      </Container>
    </div>
  );
}

export default Home;
