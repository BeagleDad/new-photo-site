import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Seo from "../components/seo"
import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Header from "../components/header"

const IndexPage = () => (
  <Container fluid>
    <Header />
    <Carousel
      fade
      nextIcon={
        <i className="bi bi-caret-right-square-fill text-primary fs-2"></i>
      }
      prevIcon={
        <i className="bi bi-caret-left-square-fill text-primary fs-2"></i>
      }
    >
      <Carousel.Item>
        <StaticImage
          className="carousel-image"
          src="../images/photos/exterior/LorraineCt_2640.jpg"
          placeholder="blurred"
          alt=""
          transformOptions={{ cropFocus: "center", fit: "cover" }}
        />
        <Carousel.Caption
          as={Link}
          to="/portfolio-exterior"
          className="link-primary"
        >
          <h5>Exterior Photos</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="carousel-image"
          src="../images/photos/interior/LorraineCt_2564_new.jpg"
          transformOptions={{ cropFocus: "center", fit: "cover" }}
          placeholder="blurred"
          alt=""
        />
        <Carousel.Caption
          as={Link}
          to="/portfolio-interior"
          className="link-primary"
        >
          <h5>Interior Photos</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="carousel-image"
          src="../images/photos/aerial/DJI_0031_3000x2250.jpg"
          transformOptions={{ cropFocus: "center", fit: "cover" }}
          placeholder="blurred"
          alt=""
        />
        <Carousel.Caption
          as={Link}
          to="/portfolio-aerial"
          className="link-primary"
        >
          <h5>Aerial Photos</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="carousel-image"
          src="../images/photos/twilight/D85_5516_mls_01.jpg"
          placeholder="blurred"
          alt=""
          transformOptions={{ cropFocus: "center", fit: "cover" }}
        />
        <Carousel.Caption
          as={Link}
          to="/portfolio-twilight"
          className="link-primary"
        >
          <h5>Twilight Photos</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="carousel-image"
          src="../images/photos/D85_4753_VS_small.jpg"
          transformOptions={{ cropFocus: "center", fit: "cover" }}
          placeholder="blurred"
          alt=""
        />
        <Carousel.Caption
          as={Link}
          to="/service-staging"
          className="link-primary"
        >
          <h5>Virtual Staging</h5>
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
