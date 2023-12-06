import React from 'react'
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image';
import Seo from "../components/seo"

const about = () => {
  return (
    <Layout>
      <h2 className='text-center'>About Me</h2>
      <StaticImage src='../images/self_hendywds.jpg' width={200} className='me-3 float-start'alt='self portrait'/>
      <p>I am a talented and creative photographer dedicated to using my talents and skills in photography, and love for architecture, to provide high quality images for the Real Estate Market. I strive to capture, not just the visual appearance of a building, but something of the intent of the architect and feeling of the structure or interior. I am easy to work with and provide great support for marketing Real Estate Properties.</p>
      <p>My journey into photography started at a very young age when my father took me to Philadelphia to buy my first camera; a twin-lens reflex. I still have it today! It was with that camera that I began to discover the wonders of the play of light and the freezing of time with the click of the shutter. It was the Golden Age of Photography, when film had to be developed, and images emerged from a piece of white paper in a bath of chemicals. I spent hours in the darkroom I set up in our basement, refining my art.
      </p>
      <p>Later I attended the University of Delaware where I received a BA in Fine Art, with an emphasis in photography. My photos were selected to illustrate a brochure produced by the University. I always had a love for architecture and considered becoming an architect.
      </p>
      <p>As my life progressed, the need to actually make a living moved me into other areas of interest that were more marketable. I went back to school and earned an Associates Degree in Computer Electronics, eventually becoming a software engineer.</p>

      <p>During this time my love for photography was always present. Recently the idea of using my photography skills and passion for architecture came up as a way to combine my love for photography and passion for architecture in a way to provide a service to help people. Thus was born Matt Hoffman Photography.</p>
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <Seo title="About" />
    </>
  )
}

export default about
