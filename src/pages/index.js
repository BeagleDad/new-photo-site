import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import { Container } from "react-bootstrap"
import Header from "../components/header"
import Gallery from "@browniebroke/gatsby-image-gallery"

const IndexPage = ({data}) => {
  const onClose = () => {
    console.log("Lightbox was closed")
  }
  const images = data.allFile.edges.map(({ node }) => {
    return node.childImageSharp
  })
  return (
    <Container fluid>
      <Header />
      <Container><Gallery
        images={images}
        reactModalStyle={"z-index:100"}
        onClose={onClose}
        colWidth={100}
        thumbAlt={"photo"}
      /></Container>
    </Container>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: {
        absolutePath: {regex: "/photos/"}
        ext: { regex: "/(jpg)|(jpeg)/" }
      }
      sort: { base: DESC }
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
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => {
  return (
    <>
      <Seo title="Home" />
    </>
  )
}
export default IndexPage
