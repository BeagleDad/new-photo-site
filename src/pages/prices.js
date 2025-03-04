import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import JSONData from "../content/prices.json"

const prices = () => {
  return (
    <Layout>
      <h2 className="text-center mb-sm-3">Price List</h2>
      {JSONData.content.map((data, index) => {
        return (
          <div>
              <h5>
              <span className="text-light mhp-bg-blue me-2 p-1">{data.item}:</span> ${data.price} {data.unit}
              </h5>
            <p className="text-body-secondary">{data.description}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <Seo title="Prices" />
    </>
  )
}

export default prices
