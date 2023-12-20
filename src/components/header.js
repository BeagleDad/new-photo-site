import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import ThemeSwitcher from "./ThemeSwitcher"

const Header = ({ siteTitle }) => (
  <Navbar expand="lg" /* fixed="top" */ className="bg-body-tertiary ">
    <Container className="me-4">
      <Navbar.Brand as={Link} to="/" className="">
        <StaticImage
          src="../images/mh_logo_round.svg"
          width={40}
          alt="logo"
          className="me-3 "
        />
        <Navbar.Text className="fs-3">Matt Hoffman Photography</Navbar.Text>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <NavDropdown title="Portfolio" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/portfolio-interior">
              Interior
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/portfolio-exterior">
              Exterior
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/portfolio-aerial">
              Aerial
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/service-property">
              Property Photos
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/service-aerial">
              Aerial Photos
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/service-staging">
              Virtual Staging
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Info">
            <NavDropdown.Item as={Link} to="/info-prep">
              <i className="bi bi-house-check pe-2"></i>Property Prep
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/info-terms">
              <i className="bi bi-pen pe-2"></i>Terms of Service
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Text>
        <ThemeSwitcher />
      </Navbar.Text>
    </Container>
  </Navbar>
)

export default Header
