import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout";
import Gallery from '@browniebroke/gatsby-image-gallery';
import Seo from "../components/seo"

const portfolioInterior = ({data}) => {
    
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
      <h2 className='text-center'>Interior Photos</h2>
      <p className='w-75 m-auto'>
        Interior Photos are the heart of the listing. They show off the beauty and features of the home. They should be bright and clear and composed to clearly show the layout and living space.
      </p>
      <Gallery
          images={images}
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
      filter: {relativeDirectory: {eq: "photos/interior"}, ext: {regex: "/(jpg)|(jpeg)/"}}
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
      <Seo title="Interior Photos" />
      <html lang="en" data-bs-theme="dark"  />
    </>
  )
}

export default portfolioInterior
