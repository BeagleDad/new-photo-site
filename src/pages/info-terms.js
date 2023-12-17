import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import terms_pdf from "../assets/terms_of_service.pdf"
const terms = () => {
  return (
    <Layout>
      <h2 className="text-center">Terms of Service</h2>
      <p>
        <b>Scheduling</b>: Please contact me no less than 24 hours before your
        preferred shoot time. The shoot will take between 1 and 2 hours,
        depending on size of home.
      </p>

      <p>
        <b>Payment</b>: Payment is due at the time of the shoot. I accept credit
        cards as well as checks, or cash.
      </p>
      <p>
        <b>The Shoot</b>: The homeowner or someone authorized by the homeowner
        (the agent) should be present at the shoot to give access to the home
        and to discuss any special considerations such as what should be
        included or excluded in shots. My goal at the shoot is to provide 25
        quality photos that include a front exterior, back exterior and all the
        major rooms such as living room, dining room, family room, kitchen,
        master bedroom, master bath and bedrooms. Powder rooms, small bathrooms,
        utility rooms or garages are not a shooting priority unless you give me
        direction otherwise.
      </p>

      <p>
        <b>Pets</b>: Please make sure pets are contained during the shoot. Pets
        are never included in photos and need to be out of the way during the
        shoot.
      </p>

      <p>
        <b>Cancellation Policy</b>: If cancellation or rescheduling is
        necessary, please give me 24 hours notice.
      </p>
      <p>
        <b>Photo delivery</b>: Once the photos are shot they will be edited and
        optimized for quality and delivered to you via web site within 24 hours.
        You will receive an email with a link and instructions on downloading
        your photos.
      </p>

      <p>
        <b>Photo Rights and Usage</b>: All photos produced for the client may be
        used by that agent for all marketing associated with the current sale of
        the property in accordance with local MLS rules. Please note that the
        photos will be copyrighted by the photographer and a license granted
        only to the agent and NOT to any third party. Any usage of the photos by
        a third party, including but not limited to architects, builders,
        stagers, designers, sellers or buyers is prohibited unless approved in
        writing by the photographer.
      </p>
      <div className="m-3">
        <a href={terms_pdf} className="m-2" target="_blank" rel="noreferrer">
          Terms of Service PDF to print and sign
        </a>
      </div>
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <Seo title="Terms of Service" />
    </>
  )
}

export default terms
