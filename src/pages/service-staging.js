import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "react-bootstrap/Container"
import { ImgComparisonSlider } from "@img-comparison-slider/react"
import { graphql } from "gatsby"

const serviceVirtualStaging = ({ data }) => {
  return (
    <Layout>
      <h1 className="text-center">Virtual Staging Services</h1>
      <p className="w-75 m-auto pb-2">
        Virtual Staging can add furniture and accesories to an otherwise empty
        room, making it much more attractive and appealing, at a fraction of the
        cost of actual staging with real furniture. Below are a few examples
        showing a comparision of the empty and staged rooms.
      </p>
      {/* todo: There has got to be a better programmatic was of doing this by mapping over the data!!! */}
      <Container className="w-75">
        <ImgComparisonSlider className="slider-example">
          <img
            slot="first"
            width="100%"
            src={data.allFile.edges[0].node.publicURL}
            alt="before"
          />
          <img
            slot="second"
            width="100%"
            src={data.allFile.edges[1].node.publicURL}
            alt="after"
          />
        </ImgComparisonSlider>
        <ImgComparisonSlider className="slider-example ">
          <img
            slot="first"
            width="100%"
            src={data.allFile.edges[2].node.publicURL}
            alt="before"
          />
          <img
            slot="second"
            width="100%"
            src={data.allFile.edges[3].node.publicURL}
            alt="after"
          />
        </ImgComparisonSlider>
        <ImgComparisonSlider className="slider-example ">
          <img
            slot="first"
            width="100%"
            src={data.allFile.edges[4].node.publicURL}
            alt="before"
          />
          <img
            slot="second"
            width="100%"
            src={data.allFile.edges[5].node.publicURL}
            alt="after"
          />
        </ImgComparisonSlider>
        <ImgComparisonSlider className="slider-example">
          <img
            slot="first"
            width="100%"
            src={
              data.allFile.edges[6].node
                .publicURL /* childImageSharp.gatsbyImageData */
            }
            alt="before"
          />
          <img
            slot="second"
            width="100%"
            src={
              data.allFile.edges[7].node
                .publicURL /* childImageSharp.gatsbyImageData */
            }
            alt="after"
          />
        </ImgComparisonSlider>
        <ImgComparisonSlider className="slider-example ">
          <img
            slot="first"
            width="100%"
            src={data.allFile.edges[8].node.publicURL}
            alt="before"
          />
          <img
            slot="second"
            width="100%"
            src={data.allFile.edges[9].node.publicURL}
            alt="after"
          />
        </ImgComparisonSlider>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: {
        relativeDirectory: { eq: "photos/virtual_staging" }
        ext: { regex: "/(jpg)|(jpeg)/" }
      }
      sort: { name: DESC }
    ) {
      edges {
        node {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = () => {
  return (
    <>
      <Seo title="Virtual Staging" />
      <html lang="en" data-bs-theme="dark" />
    </>
  )
}
export default serviceVirtualStaging
