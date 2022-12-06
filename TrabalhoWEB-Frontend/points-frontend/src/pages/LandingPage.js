import '../App.css';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaEnvelope} from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPageHeader from '../components/LandingPageHeader.js';


function LandingPage() {
  return (
    <div>
        <LandingPageHeader/>
        <section className='bg-dark-2' id='home'>
            <Container>
                <div className='section-initial d-flex text-white pb-5 pb-md-0'>
                    <Row className='row align-items-start align-items-md-center pb-2 pt-5 pt-md-0 gap-2'>
                        <Col md={6}>
                            <h1 className='text-success pb-2 pt-5 pt-md-0'><b>Seja consiente!</b></h1>
                            <p className='p-text pb-4 pt-2 pt-md-0'> 
                                Pontos de coleta seletiva são uma alternativa
                                à coleta feita na porta de casa. Os postos de coleta
                                seletiva, que podem ser mantidos por prefeituras ou
                                pela iniciativa privada, são áreas instaladas em local
                                adequado para o recebimento de descartes.
                            </p>
                            <Link to={"/ondedescartar"}>
                            <Button variant="success" size="lg" className='bt-w-auto'>
                                <FontAwesomeIcon icon={faMapLocationDot} className='pe-2'/> Onde posso descartar? 
                            </Button>
                            </Link>
                        </Col>
                        <Col className='d-none d-md-block align-self-end'>
                            <img src={'/img/illustration.png'}></img>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        <section className='bg-white' id='quem-somos'>
            <Container>
                <div className='d-flex py-md-5'>
                    <Row className='row pt-md-0 gap-4'>
                        <Col className='d-none d-md-block col-auto py-md-5'>
                            <img src={'/img/clarity_tree-line-green.png'} className='img-fluid'></img>
                        </Col>
                        <Col className='py-5'>
                            <h1 className='text-success pb-2 pt-md-0'><b>Quem Somos</b></h1>
                            <p className='p-text pb-md-4 pt-2 pt-md-0'> 
                            Somos um grupo que facilita o acesso a informações e aos pontos de coleta
                            com o objetivo de contribuir para um futuro mais sustentável.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        <section className='bg-success' id='duvidas'>
            <Container>
                <div className='py-md-5'>
                    <h1 className='text-white pb-md-5 pt-5 text-center'> Duvidas Frequentes</h1>
                    <Row className='pt-3 pb-5 py-md-5 pt-md-0 justify-content-md-center'>
                        <Col xl="8">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>O que é coleta seletiva e qual a sua importância?</Accordion.Header>
                                    <Accordion.Body>
                                    A importância da coleta seletiva é justamente a redução dos impactos ambientais do consumo. Quando separamos o lixo (ou o que sobrou do que consumimos), facilitamos muito o seu tratamento e diminuímos as chances de impactos nocivos para o ambiente e para a saúde da vida no planeta, incluindo a vida humana. Praticar a coleta é um dos pilares do consumo sustentável.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>A prefeitura não recolhe o material reutilizável. O que fazer?</Accordion.Header>
                                    <Accordion.Body>
                                    Não é preciso esperar a prefeitura oferecer os serviços de coleta seletiva para dar a disposição mais adequada para seus resíduos. Em conjunto com os moradores do seu condomínio ou colaboradores da sua empresa, é possível implantar a coleta seletiva.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        <section className='bg-dark text-white' id='contato'>
            <Container>
                <div className='py-5'>
                    <Row className='pt-md-0 justify-content-center'>
                        <Col xs="auto">
                            <h4><FaFacebookSquare /></h4>
                        </Col>
                        <Col xs="auto">
                            <h4><FaInstagram/></h4>
                        </Col>
                        <Col xs="auto">
                            <h4><FaLinkedin/></h4>
                        </Col>
                        <Col xs="auto">
                            <h4><FaEnvelope/></h4>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    </div>
  );
}

export default LandingPage;