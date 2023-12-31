import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const serviceProperty = () => {
  return (
    <Layout>
      <h2 className="text-center">Property Services</h2>
      <p>
        Property services include both interior and exterior photos, and can
        include Twilight photos of the exterior.
      </p>
      <h4>Interior Photos</h4>
      <Row>
        <Col xs={4}>
          <StaticImage
            src="../images/photos/interior/DSC_1585_4023x2677.jpg"
            alt="Interior Photo"
            width={360}
          />
        </Col>
        <Col>
          For the interior photos I use multiple off-camera flash units to fill
          the rooms with quality light. This prevents dark corners and shows off
          the true color of the rooms. I shoot most rooms from multiple angles
          to show the layout and features of each room.
        </Col>
      </Row>
      <h4 className="pt-3">Exterior Photos</h4>
      <Row>
        <Col xs={4}>
          <StaticImage
            src="../images/photos/exterior/LorraineCt_2640.jpg"
            alt="Exterior Photo"
            width={360}
          />
        </Col>
        <Col>
          The exterior shots are framed to showcase the form of the home as well
          as the relationship with its surroundings. I shoot from many angles in
          order to make sure to capture all the amenities of the property.
        </Col>
      </Row>
      <h4 className="pt-3">Twilight Photos</h4>
      <Row>
        <Col xs={4}>
          <StaticImage
            src="../images/photos/exterior/DSC_1744_4240x2821.jpg"
            alt="Twilight Photo"
            width={360}
          />
        </Col>
        <Col>
          Twilight photos are taken in the evening in order to capture those
          fleeting after-sunset moments that bring a dramatic sense of warmth and
          charm to a home.
        </Col>
      </Row>
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <Seo title="Property Services" />
    </>
  )
}
export default serviceProperty
