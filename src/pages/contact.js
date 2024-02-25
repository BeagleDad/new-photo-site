import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "react-bootstrap/Container"

// import Button from "react-bootstrap/Button"
// import Form from "react-bootstrap/Form"
// import Col from "react-bootstrap/Col"
// import Row from "react-bootstrap/Row"

const contact = () => {
  return (
    <Layout>
      <h2 className="text-center">Contact</h2>
      <Container className="w-75">
        <p>Thank you for your interest.</p>
        <p>
          I cover the quad-city area of Prescott, Prescott Valley, Chino Valley,
          and Dewey Humboldt. I look forward to helping you with marketing your
          next property listing. Please contact me to setup a photo shoot or
          with any questions you may have.
        </p>
        <p>You can contact me directly via email, phone, or text.</p>
        <i className="bi bi-envelope pe-3"></i>
        <a
          href="mailto: matthoffmanphoto@gmail.com"
          className="text-decoration-none"
        >
          matthoffmanphoto@gmail.com
        </a>
        <div>
          <i className="bi bi-telephone  pe-3"></i>928-550-8604
        </div>
        <a
          href="https://matthoffmanphoto.com/"
          className="text-decoration-none"
        >
          matthoffmanphoto.com
        </a>
      </Container>

      {/* <h5 className="mt-5">Email Form</h5>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="phone" placeholder="Phone Number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter Message" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
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
