import * as React from "react"

import Seo from "../components/seo"
import { Carousel, Container } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Header from "../components/header"

const IndexPage = () => (
  <Container fluid>
    <Header />
    <Container>
      <Carousel>
        <Carousel.Item>
          <StaticImage src="../images/photos/LorraineCt_2640.jpg" alt="" />
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
            src="../images/photos/LorraineCt_2564_mls_01.jpg"
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
          <StaticImage src="../images/photos/DJI_0012proplines.JPG" alt="" />
          <Carousel.Caption
            as={Link}
            to="/portfolio-aerial"
            className="text-decoration-none"
          >
            Aerial Photos
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage src="../images/photos/D85_4753_VS.jpg" alt="" />
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
      <html lang="en" data-bs-theme="dark" />
    </>
  )
}
export default IndexPage
