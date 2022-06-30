import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ReactFlagsSelect from "react-flags-select";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [selected, setSelected] = useState("US");
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img className="appLogo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#whyus">Why Us</Nav.Link>
            <Nav.Link href="#howto">How To</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#roadmap">Road Map</Nav.Link>
            <Nav.Link href="#faq">Faq</Nav.Link>
            <ReactFlagsSelect
              selected={selected}
              countries={["US", "ES", "FR", "TR"]}
              customLabels={{"US": "English","ES": "Espanish","FR": "French","TR": "Turkish"}}
              onSelect={(code) => setSelected(code)}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
