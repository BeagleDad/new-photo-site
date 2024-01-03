import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

const Footer = () => {
  return (
    <Container fluid className="fixed-bottom z-0">
      <Row className=" text-lg-center bg-body-tertiary flex-md-wrap py-2 border-top">
        <Col>
          <div>
            <Link to="/" className="text-muted text-decoration-none">
              &copy; {new Date().getFullYear()} Matt Hoffman Photography
            </Link>
          </div>
        </Col>
        <Col className="text-muted">
          <a
            href="https://www.paar.org/"
            className="text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../images/PAAR_Logo_3-Color.1-01-website.png"
              alt="PAAR Logo"
              width={100}
            />
            <span className="ps-3 small text-nowrap">PAAR Affiliate</span>
          </a>
        </Col>
        <Col className="">
          <a href="https://www.faa.gov/uas/commercial_operators"><StaticImage
            src="../images/faa_drone_logo.svg"
            width={160}
            alt="faa logo"
          /></a>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
