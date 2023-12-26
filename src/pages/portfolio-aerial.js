import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Gallery from "@browniebroke/gatsby-image-gallery"
import Seo from "../components/seo"

const portfolioAerial = ({ data }) => {
  const onClose = () => {
    console.log("Lightbox was closed")
  }
  const images = data.allFile.edges.map(({ node }) => {
    return node.childImageSharp
  })
  // console.log("data:",data)
  return (
    <Layout>
      <h2 className="text-center">Aerial Photos</h2>
      <p className="w-75 m-auto">
        Aerial photographs give your listings a unique perspective by providing
        a very attractive and appealing view of the property while showing the
        surrounding area and how the property fits in with it. The property can
        be shown from multiple angles and directions. The photos can also
        include property outlines showing the extent of the land.
      </p>
      <Gallery
        images={images}
        reactModalStyle={'z-index:100'}
        onClose={onClose}
        mdColWidth={20}
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
        relativeDirectory: { eq: "photos/aerial" }
        ext: { regex: "/(jpg)|(jpeg)/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 600
              height: 400
              placeholder: BLURRED
            )
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
      <Seo title="Aerial Photos" />
    </>
  )
}

export default portfolioAerial
