import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

function virtualTours() {
  return (
    <Layout>
      <h2 className="text-center">3D Tours</h2>
      <p className="w-75 m-auto mb-5">
        Experience the future of property viewing with a Zillow 3D Home Tour.
        Immerse yourself in a virtual environment that allows for detailed
        exploration of every room, providing a convenient and realistic way to
        view properties. With stunning 3D photos, you'll get a true sense of the
        space before you even step foot inside. Start your virtual property
        journey with a Zillow 3D Home Tour today! Below is an example of a
        recent tour I have done. (Click on the{" "}
        <i class="bi bi-arrows-fullscreen"></i> icon to make it full screen for
        greatest impact):
      </p>
      <h2 className="text-center mt-5">Luxury Home</h2>
      <section className="iframe-container">
        <iframe
          src="https://www.zillow.com/view-imx/17b5e2f2-0c34-448e-b7fd-5882cff6a237?setAttribution=mls&wl=true&initialViewType=pano&utm_source=dashboard"
          title="Zillow 3D Home Tour - Fawn Hill Dr"
          frameborder="0"
          allowfullscreen="true"
        ></iframe>
      </section>
      <h2 className="text-center mt-5">Air BnB</h2>
      {/* Removed because this has crappy photos from earlier listing that I don't want to represent me.
      <section className="iframe-container">
        <iframe
          title="Zillow 3D Home Tour - Ash St"
          src="https://www.zillow.com/view-imx/9dadc8e6-2b0b-4d6d-a4f7-bbacf0214413?setAttribution=mls&wl=true&initialViewType=pano&utm_source=dashboard"
          frameborder="0"
          allowfullscreen="true"
        ></iframe>
      </section> */}
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <Seo title="3D Tours" />
    </>
  )
}

export default virtualTours
