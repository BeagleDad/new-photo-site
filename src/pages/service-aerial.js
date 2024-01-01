import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container'

import { StaticImage } from "gatsby-plugin-image"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

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
      <Container><Card className="mx-auto m-2 w-75">
        <StaticImage
          src="../images/photos/aerial/DJI_0031_3000x2250.jpg"
          alt="Luxury Home Aerial Photo"
          width={800}
          height={600}
        />
        <Card.Body>
          <Card.Title>Luxury Home</Card.Title>
          <Card.Text>
            Aerial Photo of a Luxury Home showing a view you won't get from the
            ground.
          </Card.Text>
          <Button as={Link} to="/portfolio-aerial" variant="secondary">
            Aerial Portfolio
          </Button>
        </Card.Body>
      </Card>
      <Card className="mx-auto m-2 w-75">
        <StaticImage
          src="../images/photos/aerial/DJI_0079_PROP_LINES.jpg"
          alt="Property Line Aerial Photo"
          width={800}
          height={600}
        />
        <Card.Body>
          <Card.Title>Aerial Photo with Property Lines</Card.Title>
          <Card.Text>
            Aerial Photo with added property lines showing extent of the parcel.
          </Card.Text>
          <Button as={Link} to="/portfolio-aerial" variant="secondary">
            Aerial Portfolio
          </Button>
        </Card.Body>
      </Card>

      <h3>Aerial Videos</h3>
      <p>
        Aerial Videos can showcase a property in a very exciting way. Video is
        very compelling and allows the potential buyer to get a feel for the
        property in a completely different way from still photographs. Below are
        some examples of aerial videos with a music track.
      </p>
      <div className="iframe-container">
        <iframe
          className="p-3"
          src="https://www.youtube.com/embed/6JjJ0A_xdyc?rel=0"
          title="highpoint2"
          allowFullScreen
        ></iframe>
      </div>
      <div className="iframe-container">
        <iframe
          className="p-3"
          src="https://www.youtube.com/embed/dwUbiQhm0bc?rel=0"
          title="Lee Blvd"
          allowFullScreen
        ></iframe>
      </div></Container>
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
