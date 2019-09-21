import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'

class NavbarComponent extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Logo til selskap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Om oss</Nav.Link>
                <Nav.Link href="#link">Prosjekter</Nav.Link>
            
              </Nav>
              <Nav className="mr-auto" className="justify-content-end">
                <Nav.Link href="#home"></Nav.Link>
                <Nav.Link href="#link" >Kontakt oss</Nav.Link>
            
              </Nav>
             
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default NavbarComponent;