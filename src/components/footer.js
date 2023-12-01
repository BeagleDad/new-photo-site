import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"

import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container fluid className="fixed-bottom bg-body-tertiary">
        <Container>
          <Row>
            <Col className="m-3">
              <a
                href="https://www.paar.org/"
                className="text-decoration-none"
                target="_blank"
              >
                <StaticImage
                  src="../images/PAAR_Logo_3-Color.1-01-website.png"
                  alt="PAAR Logo"
                  className="m-auto"
                  width={110}
                />
                <div>PAAR Affiliate</div>
              </a>
            </Col>
            <Col className="m-3">
              <Link to="/" className="text-decoration-none">
                Copyright © {new Date().getFullYear()} Matt Hoffman Photography
              </Link>
            </Col>
            <Col className="m-3">
              <StaticImage
                src="../images/faa_drone_logo.svg"
                width={160}
                alt="faa logo"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  )
}

export default Footer
