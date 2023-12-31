import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "react-bootstrap/Container"
import { ImgComparisonSlider } from "@img-comparison-slider/react"
import { graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

const serviceVirtualStaging = ({ data }) => {
  const pairs = data.allFile.edges.flatMap((_, i, a) =>
    i % 2 ? [] : [a.slice(i, i + 2)]
  )
  //console.log({ pairs })

  return (
    <Layout>
      <h2 className="text-center">Virtual Staging Services</h2>
      <p className="w-75 m-auto pb-2">
        Virtual Staging can add furniture and accesories to an otherwise empty
        room, making it much more attractive and appealing, at a fraction of the
        cost of staging with real furniture. Exterior areas, such as patios and
        decks, can also be virtually staged with furniture and accesories.{" "}
        <p>
          Below are a few examples showing a comparision of the empty and staged
          rooms. Click and drag the slider to see the before and after images.
        </p>
      </p>
      <Container fluid>
        {pairs.map((pair, index) => {
          return (
            <ImgComparisonSlider key={index} className="my-sm-2">
              <img
                slot="first"
                width="100%"
                src={getSrc(pair[0].node)}
                alt="before"
              />
              <img
                slot="second"
                width="100%"
                src={getSrc(pair[1].node)}
                alt="after"
              />
            </ImgComparisonSlider>
          )
        })}
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
    </>
  )
}
export default serviceVirtualStaging
