import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout";
import Gallery from '@browniebroke/gatsby-image-gallery';
import Seo from "../components/seo"

const portfolioExterior = ({data}) => {
    
  const onClose = () => {
    console.log('Lightbox was closed')
  }
  const images = data.allFile.edges.map(({node}) => {
    return node.childImageSharp
    }
  )
  // console.log("data:",data)
  return (
    <Layout>
      <h2 className='text-center'>Exterior Photos</h2>
      <p className='w-75 m-auto'>
        Exterior Photos showoff the outside features of the home. This includes the house itself as well as the features of the property.
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
      filter: {relativeDirectory: {eq: "photos/exterior"}, ext: {regex: "/(jpg)|(jpeg)/"}}
      sort: {base: DESC}
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(width: 300, height: 300, placeholder: BLURRED)
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
      <Seo title="Exterior Photos" />
    </>
  )
}

export default portfolioExterior
