import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

const serviceAerial = () => {
  return (
    <Layout>
      <h2 className="text-center">Aerial Services</h2>
      <p className="w-75 m-auto">
        I am an FAA Part 107 Certified Remote Pilot. I can offer both aerial
        photos and video of your properties. Aerial photos can include property
        lines showing the extent of the land included in the sale.
      </p>
      <div className="text-center m-3">
        <StaticImage
          src="../images/faa_drone_logo.svg"
          width={160}
          alt="faa logo"
        />
      </div>
      <Link to="/portfolio-aerial">
        <h4>Aerial Photos</h4>
      </Link>
      <p>
        Aerial photographs give your listings a unique perspective by providing
        a very attractive and appealing view of the property while showing the
        surrounding area and how the property fits in with it. The property can
        be shown from multiple angles and directions. The photos can also
        include property outlines showing the extent of the land.
      </p>
      <Link to="/portfolio-aerial">
        {/* <h4>Aerial Photo</h4> */}
        <StaticImage
          src="../images/photos/aerial/DJI_0031_3000x2250.jpg"
          alt="Luxury Home Aerial Photo"
          width={420}
        />
      </Link>
      <hr />
      {/* <p className="me-5">
        Aerial Photo of a Luxury Home showing a view you won't get from the
        ground.
      </p> */}
      <Link to="/portfolio-aerial">
        <h4>Aerial Photo with Property Lines</h4>
        <StaticImage
          src="../images/photos/aerial/DJI_0079_PROP_LINES.jpg"
          alt="Property Line Aerial Photo"
          width={420}
          />
      </Link>
      {/* <p className="me-5">
        Aerial Photo with added property lines showing extent of the parcel.
      </p> */}
      <hr />
      <h3>Aerial Videos</h3>
      <p>
        Aerial Videos can showcase a property in a very exciting way. Video is
        very compelling and allows the potential buyer to get a feel for the
        property in a completely different way from still photographs. Below are
        some examples of aerial videos with a music track.
      </p>

      <iframe
        width="420"
        height="315"
        className="m-3"
        src="https://www.youtube.com/embed/6JjJ0A_xdyc?rel=0"
        title="Luxury Home in Prescott Valley, AZ"
        allowFullScreen
      ></iframe>

      <iframe
        width="420"
        height="315"
        className="m-3"
        src="https://www.youtube.com/embed/dwUbiQhm0bc?rel=0"
        title="Luxury Home in Prescott, AZ"
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
