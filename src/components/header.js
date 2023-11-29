import * as React from "react"
import { Link } from "gatsby";
import  { StaticImage }  from "gatsby-plugin-image";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = ({ siteTitle }) => (
  <Navbar  expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand as={Link} to="/" className="">
          <StaticImage src="../images/mh_only_logo.svg" width={40} alt="logo" className="me-3 "/>
          <Navbar.Text className="fs-3">Matt Hoffman Photography</Navbar.Text>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/portfolio-property">Interior Photos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/exterior">Exterior Photos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/aerialImages">Aerial Photos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/service-property">Property Photos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service-aerial">Aerial Photos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service-staging">Virtual Staging</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Info">
              <NavDropdown.Item as={Link} to="/info-property-prep">Property Prep</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/info-terms">Terms of Service</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

export default Header
