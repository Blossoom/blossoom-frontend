import React from 'react';
import "./Filter.css"
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
function Filter(){
    return (
<Navbar collapseOnSelect expand="lg" >


  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link to="#features">Hot</Nav.Link>
      <Nav.Link to="#pricing">Relavent</Nav.Link>
      <Nav.Link to="#pricing">Latest</Nav.Link>
      <NavDropdown title="Options" id="collasible-nav-dropdown">
        <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item to="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>

</Navbar>

    )
}

export default Filter;