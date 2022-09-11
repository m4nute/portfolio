import React, {useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootswatch/dist/lux/bootstrap.min.css";
import "../styles/Navbar.scss";

function Navbar2() {
    const [expanded, setExpanded] = useState(false);
    AOS.init({
        duration: 900,
        offset: 0,
        once: true
    });
  return (
    <Navbar bg="dark" expand="sm" variant='dark' data-aos='fade-down' fixed='top' expanded={expanded}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} href="#intro" data-aos='fade-right'><span id='navlink'>Sobre Mi</span></Nav.Link>
                        <Nav.Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} href="#skills" data-aos='fade-right' data-aos-delay="100" ><span id='navlink'>Conocimientos</span></Nav.Link>
                        <Nav.Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} href="#projects" data-aos='fade-right' data-aos-delay="200" ><span id='navlink'>Proyectos</span></Nav.Link>
                        <Nav.Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} href="#contact" data-aos='fade-right' data-aos-delay="300" ><span id='navlink'>Contactame</span></Nav.Link>
                        <Nav.Link onClick={() => window.open("https://docdro.id/hItJnqy", "_blank")} data-aos='fade-right' data-aos-delay="300" ><span id='navlink'>Curriculum</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

export default Navbar2