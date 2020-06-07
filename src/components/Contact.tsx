import React from 'react';
import {
  Button,
  Form,
} from 'react-bootstrap';

const Contact = () => {
  return (
    <Form>
      <h3>Contact us by filling out this form.</h3>
      <p className="text-muted">We'll get back to you pronto!</p>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
        <Form.Text className="text-muted">
          Your email will not be shared with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;
