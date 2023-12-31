import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Gallery from "@browniebroke/gatsby-image-gallery"
import Seo from "../components/seo"

const portfolioInterior = ({ data }) => {
  const onClose = () => {
    console.log("Lightbox was closed")
  }
  const images = data.allFile.edges.map(({ node }) => {
    return node.childImageSharp
  })
  // console.log("data:",data)
  return (
    <Layout>
      <h2 className="text-center">Interior Photos</h2>
      <p className="w-75 m-auto">
        Interior Photos are the heart of the listing. They show off the beauty
        and features of the home. They should be bright and clear and composed
        to clearly show the layout and living space of the home.
      </p>
      <Gallery
        reactModalStyle={"z-index:100"}
        images={images}
        onClose={onClose}
        colWidth={100}
        // mdColWidth={20}
        // gutter='.25rem'
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
        relativeDirectory: { eq: "photos/interior" }
        ext: { regex: "/(jpg)|(jpeg)/" }
      }
      sort: { name: DESC }
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
      <Seo title="Interior Photos" />
    </>
  )
}

export default portfolioInterior
