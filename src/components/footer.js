import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"

import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <Container>
      {/* Todo: First stab - Needs work */}
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">
          &copy; {new Date().getFullYear()} Matt Hoffman Photography
        </p>
        <p className="nav col-md-4 justify-content-end">
          PAAR Affiliate
        </p>
        <p className="nav col-md-4 justify-content-end">
          FAA Certified Drone Pilot
        </p>
        
      </footer>
    </Container>
    // <footer>
    //   <Container fluid className="fixed-bottom bg-body-tertiary">
    //     <Container>
    //       <Row>
    //         <Col className="m-3">
    //           <a
    //             href="https://www.paar.org/"
    //             className="text-decoration-none"
    //             target="_blank"
    //           >
    //             <StaticImage
    //               src="../images/PAAR_Logo_3-Color.1-01-website.png"
    //               alt="PAAR Logo"
    //               className="m-auto"
    //               width={110}
    //             />
    //             <div>PAAR Affiliate</div>
    //           </a>
    //         </Col>
    //         <Col className="m-3">
    //           <Link to="/" className="text-decoration-none">
    //             &copy {new Date().getFullYear()} Matt Hoffman Photography
    //           </Link>
    //         </Col>
    //         <Col className="m-3">
    //           <StaticImage
    //             src="../images/faa_drone_logo.svg"
    //             width={160}
    //             alt="faa logo"
    //           />
    //         </Col>
    //       </Row>
    //     </Container>
    //   </Container>
    // </footer>
  )
}

export default Footer
