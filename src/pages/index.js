import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Seo from "../components/seo"
import { Carousel, Container } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Header from "../components/header"

const IndexPage = () => (
  <Container fluid>
    <Header />
    <Carousel fade>
      <Carousel.Item>
        <StaticImage
          className="vh-100"
          src="../images/photos/exterior/LorraineCt_2640.jpg"
          placeholder="blurred"
          alt=""
          transformOptions={{ cropFocus: "center", fit: "cover" }}
        />
        <Carousel.Caption
          as={Link}
          to="/portfolio-exterior"
          className="text-decoration-none"
        >
          Exterior Photos
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="vh-100"
          src="../images/photos/interior/LorraineCt_2564_mls_01.jpg"
          transformOptions={{ cropFocus: "center", fit: "cover" }}
          placeholder="blurred"
          alt=""
        />
        <Carousel.Caption
          as={Link}
          to="/portfolio-interior"
          className="text-decoration-none"
        >
          Interior Photos
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="vh-100"
          src="../images/photos/aerial/DJI_0031_3000x2250.jpg"
          transformOptions={{ cropFocus: "center", fit: "cover" }}
          placeholder="blurred"
          alt=""
        />
        <Carousel.Caption
          as={Link}
          to="/portfolio-aerial"
          className="text-decoration-none"
        >
          Aerial Photos
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="vh-100"
          src="../images/photos/D85_4753_VS.jpg"
          transformOptions={{ cropFocus: "center", fit: "cover" }}
          placeholder="blurred"
          alt=""
        />
        <Carousel.Caption
          as={Link}
          to="/service-staging"
          className="text-decoration-none"
        >
          Virtual Staging
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Container>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => {
  return (
    <>
      <Seo title="Home" />
    </>
  )
}
export default IndexPage
