import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function NavbarPage() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Erick Perez</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#"></Nav.Link>
          <Nav.Link href="#"></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">About me</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Projects
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
