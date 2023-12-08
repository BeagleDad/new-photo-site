import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col } from "react-bootstrap"
import "../styles/custom.css"
const serviceAerial = () => {
  return (
    <Layout>
      <h2 className="text-center">Aerial Services</h2>
      <p>
        I am an FAA Part 107 Certified Remote Pilot. I can offer both aerial
        photos and video of your properties. Aerial photos can include property
        lines showing the extent of the land included in the sale.
      </p>
      <div className="text-center">
        <StaticImage
          src="../images/faa_drone_logo.svg"
          width={160}
          alt="faa logo"
        />
      </div>
      <h3>Aerial Photos</h3>
      <p>
        Aerial photographs give your listings a unique perspective by providing
        a very attractive and appealing view of the property while showing the
        surrounding area and how the property fits in with it. They can include
        property outlines showing the extent of the land.
      </p>
      <Row>
        <Col xs={3} >
          <div className="text-center">Aerial Photo with property lines</div>
        </Col>
        <Col>
          <StaticImage
            src="../images/photos/aerial/DJI_0079_PROP_LINES.jpg"
            alt="Property Line Aerial Photo"
          />
        </Col>
      </Row>
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <Seo title="Aerial Services" />
    </>
  )
}

export default serviceAerial
