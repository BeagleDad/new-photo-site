import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <Link to="/">Return to Home Page</Link>
  </Layout>
)

export const Head = () => {
  return (
    <>
      <Seo title="404: Not Found" />
    </>
  )
}

export default NotFoundPage
