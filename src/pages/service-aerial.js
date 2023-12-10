import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

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
        surrounding area and how the property fits in with it. The property can
        be shown from multiple angles and directions. The photos can also
        include property outlines showing the extent of the land.
      </p>
      <Row className="py-2">
        <Col xs={3}>
          <div className="text-center">Luxury Home in Prescott, AZ</div>
        </Col>
        <Col>
          <StaticImage
            src="../images/photos/aerial/DJI_0031_3000x2250.jpg"
            alt="Property Line Aerial Photo"
            width={800}
          />
        </Col>
      </Row>
      <Row className="py-2">
        <Col xs={3}>
          <div className="text-center">Aerial Photo with propery lines</div>
        </Col>
        <Col>
          <StaticImage
            src="../images/photos/aerial/DJI_0079_PROP_LINES.jpg"
            alt="Property Line Aerial Photo"
            width={800}
          />
        </Col>
      </Row>
      <h3>Aerial Videos</h3>
      <p>
        Aerial Videos can showcase a property in a very exciting way. Video is
        very compelling and allows the potential buyer to get a feel for the
        property in a completely different way from still photographs. Below are
        some examples of aerial videos with an accompanied music track.
      </p>
      <iframe
        className="p-3"
        src="https://www.youtube.com/embed/6JjJ0A_xdyc?rel=0"
        width="560"
        height="315"
        title="highpoint2"
        frameborder="0"
        allowFullScreen
      ></iframe>

      <iframe
        className="p-3"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dwUbiQhm0bc?rel=0"
        title="Lee Blvd"
        frameborder="0"
        allowFullScreen
      ></iframe>
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
