import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Row, Col } from "react-bootstrap"

import Container from "react-bootstrap/Container"

const Footer = () => {
  return (
    <Container>
      {/* Todo: First stab - Needs work */}
      {/* <footer className="d-flex flex-md-wrap justify-content-between align-items-center py-3  border-top "> */}
      <Row className="align-items-center flex-md-wrap py-3 border-top">
        <Col>
          <div className="mx-auto">
            <Link to="/" className="text-muted text-decoration-none">
              &copy; {new Date().getFullYear()} Matt Hoffman Photography
            </Link>
          </div>
        </Col>
        <Col className="text-muted">
          <div className="mx-auto"><a
            href="https://www.paar.org/"
            className="text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <StaticImage
                src="../images/PAAR_Logo_3-Color.1-01-website.png"
                alt="PAAR Logo"
                width={110}
              />
            </div>
          </a>
          PAAR Affiliate</div>
        </Col>
        <Col className="mx-auto">
          <StaticImage
            src="../images/faa_drone_logo.svg"
            width={160}
            alt="faa logo"
          />
        </Col>
      </Row>
      {/* </footer> */}
    </Container>
  )
}

export default Footer
