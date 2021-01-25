import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <Navbar bg="white" variant="light">
            <Navbar.Brand as={Link} to="/">Convergytics</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">HOME</Nav.Link>
                <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                <NavDropdown title="SERVICES" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Action 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/services">BLOG</Nav.Link>
                <Nav.Link as={Link} to="/login">LOGIN/REGISTER</Nav.Link>
            </Nav>
            
        </Navbar>
    )
}

export default navbar;