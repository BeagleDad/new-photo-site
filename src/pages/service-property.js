import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const serviceProperty = () => {
  return (
    <Layout>
      <h2 className="text-center">Property Photos</h2>
      <p className="w-75 m-auto mb-3">
        Property services include both interior and exterior photos, and can
        include Twilight photos of the exterior.
        <p>
          Don't forget I am <strong>Supra eKEY® Certified</strong> so I can access
          your properties via the lockbox, and take the photos, so you don't
          have to be there!
        </p>
      </p>
      <Link to="/portfolio-interior">
        <h4>Interior Photos</h4>
        <StaticImage
          src="../images/photos/interior/DSC_1585_4023x2677.jpg"
          alt="Interior Photo"
          width={420}
        />
      </Link>
      <p className="me-5">
        For the interior photos I use multiple off-camera flash units to fill
        the rooms with quality light. This prevents dark corners and shows off
        the true color of the rooms. I shoot most rooms from multiple angles to
        show the layout and features of each room.
      </p>
      <hr />
      <Link to="/portfolio-exterior">
        <h4>Exterior Photos</h4>
        <StaticImage
          src="../images/photos/exterior/LorraineCt_2640.jpg"
          alt="Exterior Photo"
          width={420}
        />
      </Link>
      <p className="me-5">
        The exterior shots are framed to showcase the form of the home as well
        as the relationship with its surroundings. I shoot from many angles in
        order to make sure to capture all the amenities of the property.
      </p>
      <hr />
      <Link to="/portfolio-twilight">
        <h4>Twilight Photos</h4>
        <StaticImage
          src="../images/photos/twilight/D85_5516_mls_01.jpg"
          alt="Twilight Photo"
          width={420}
        />
      </Link>
      <p className="me-5">
        Twilight photos are taken in the evening in order to capture those
        fleeting after-sunset moments that bring a dramatic sense of warmth and
        charm to a home.
      </p>
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
