import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const serviceProperty = () => {
  return (
    <Layout>
      <h2 className="text-center">Property Services</h2>
      <p>
        Property services include both interior and exterior photos, and can include Twilight photos of the exterior.
      </p>
      <h4>Interior Photos</h4>
      <p>
        For the interior photos I use multiple off-camera flash units to fill the rooms with quality light. This prevents dark corners and shows off the true color of the rooms. I shoot most rooms for multiple angles to show the layout and features of each room.
      </p>
      <h4>Exterior Photos</h4>
      <p>
        The exterior shots are framed to showcase the form of the home as well as the relationship with its surroundings. I shoot from many angles in order to make sure to capture all the amenities of the property.
      </p>
      <h4>Twilight Photos</h4>
      <p>
        Twilight photos are taken in the evening in order to capture those fleeting after-sunset moments that bring a dramtic sense of warmth and charm to a home.
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
