import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Gallery from "@browniebroke/gatsby-image-gallery"
import Seo from "../components/seo"

const portfolioTwilight = ({ data }) => {
  const onClose = () => {
    console.log("Lightbox was closed")
  }
  const images = data.allFile.edges.map(({ node }) => {
    return node.childImageSharp
  })
  // console.log("data:",data)
  return (
    <Layout>
      <h2 className="text-center">Twilight Photos</h2>
      <p className="w-75 m-auto">
        Twilight photos are taken in the evening in order to capture those
        fleeting after-sunset moments that bring a dramatic sense of warmth and
        charm to a home.
      </p>
      <Gallery
        images={images}
        imgClass="gallery-img"
        reactModalStyle={"z-index:100"}
        onClose={onClose}
        colWidth={100}
        thumbAlt={"photo"}
      />
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: {
        relativeDirectory: { eq: "photos/twilight" }
        ext: { regex: "/(jpg)|(jpeg)/" }
      }
      sort: { base: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(width: 600, placeholder: BLURRED)
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export const Head = () => {
  return (
    <>
      <Seo title="Twilight Photos" />
    </>
  )
}

export default portfolioTwilight
