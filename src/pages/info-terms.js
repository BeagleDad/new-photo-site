import React from 'react'
import Layout from "../components/layout";
import Seo from "../components/seo"


const terms = () => {
  return (
    <Layout>
      <h1>Terms of Service</h1>
        
      <p>
        Cupidatat pariatur minim dolor cupidatat Lorem magna. Cillum ullamco aute nisi cillum mollit excepteur cillum consequat adipisicing dolor. Elit in minim eiusmod culpa proident minim minim aliquip voluptate sit tempor adipisicing dolore. Pariatur amet quis proident excepteur ea magna id.
      </p>
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <Seo title="Terms of Service" />
      {/* <html lang="en" data-bs-theme="dark"  /> */}
    </>
  )
}

export default terms
