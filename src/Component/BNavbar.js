import React from 'react';
import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from'react-bootstrap/NavDropdown'
import {NavLink} from "react-router-dom";


const BNavBar = () => {
    return (
        <div >
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/"><i className="fas fa-flask fa"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="nav-link" to="/Home">Home</NavLink>
                    <NavLink className="nav-link" to="/Data">Data</NavLink>
                    <NavLink className="nav-link" to="/Simulations">Simulations</NavLink>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default BNavBar;
