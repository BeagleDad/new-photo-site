import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <h2 className='text-center'>Contact</h2>
      <p>
        Thank you for your interest. Please contact me to setup a photo shoot or
        with any questions.
      </p>
      <div>
      <i className="bi bi-envelope pe-3"></i>matthoffmanphoto@gmail.com
      </div>
      <div>
      <i className="bi bi-telephone  pe-3"></i>928-550-8604
      </div>

    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <Seo title="Contact" />
    </>
  )
}

export default contact
