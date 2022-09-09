import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootswatch/dist/lux/bootstrap.min.css";
import "../styles/Navbar.scss";
AOS.init({
    duration: 900,
    offset: 0,
    once: true
});
function Navbar2() {
  return (
    <Navbar bg="dark" expand="sm" variant='dark' data-aos='fade-down'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#intro" data-aos='fade-down'>Sobre Mi</Nav.Link>
                        <Nav.Link href="#skills" data-aos='fade-down' data-aos-delay="100" >Conocimientos</Nav.Link>
                        <Nav.Link href="#projects" data-aos='fade-down'data-aos-delay="200" >Proyectos</Nav.Link>
                        <Nav.Link href="#contact" data-aos='fade-down' data-aos-delay="300" >Contactame</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

export default Navbar2