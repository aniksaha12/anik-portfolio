import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const HeaderTextSize = {
    fontWeight: "bold",
    fontSize: "20px",
  };


  return (
    <div>
      <>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700;800;900&family=Urbanist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/meanmenu.min.css" />
        <link rel="stylesheet" href="css/imgal.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/responsive.css" />
        <Navbar expand="lg" className="mx-auto">
          <Container>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" className="text-center justify-content-end">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/" style={HeaderTextSize}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/projects" style={HeaderTextSize}>
                  Projects
                </Nav.Link>
                <Nav.Link as={Link} to="/experiences" style={HeaderTextSize}>
                  Experiences
                </Nav.Link>
                <Nav.Link as={Link} to="/blog" style={HeaderTextSize}>
                  Blog
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="mailto:aniksaha859@gmail.com"
                  style={HeaderTextSize}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
}
