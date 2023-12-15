import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const contact = () => {
  return (
    <Layout>
      <h2 className="text-center">Contact</h2>
      <p>
        Thank you for your interest. Please contact me to setup a photo shoot or
        with any questions. You can contact me directly via email, phone, text,
        or fill out the form below to send me an email.
      </p>
      <div>
        <i className="bi bi-envelope pe-3"></i>matthoffmanphoto@gmail.com
      </div>
      <div>
        <i className="bi bi-telephone  pe-3"></i>928-550-8604
      </div>

      <h5 className="mt-5">Email Form</h5>
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
      </Form>
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
