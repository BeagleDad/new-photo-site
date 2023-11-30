import React from 'react'
import Layout from "../components/layout";
import { Container } from 'react-bootstrap';
import Seo from "../components/seo"


const serviceAerial = () => {
  return (
    <Layout>
      <Container>
        <h1>Aerial Services</h1>
        
        <p>
          Cupidatat pariatur minim dolor cupidatat Lorem magna. Cillum ullamco aute nisi cillum mollit excepteur cillum consequat adipisicing dolor. Elit in minim eiusmod culpa proident minim minim aliquip voluptate sit tempor adipisicing dolore. Pariatur amet quis proident excepteur ea magna id.
        </p>
        
      </Container>
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <Seo title="Aerial Services" />
      <html data-bs-theme="dark"  />
    </>
  )
}

export default serviceAerial
