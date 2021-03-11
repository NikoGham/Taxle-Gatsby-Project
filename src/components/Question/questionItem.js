import React from 'react';
import { Container, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';

const questionItem = ({ section }) => {
  return (
    <Container>
      <Form.Row>
        <Col>
          <Form.Label srOnly>Please enter your first name</Form.Label>
          <Form.Control className="mb-3" size="lg" placeholder="First name" required />
        </Col>
        <Col>
          <Form.Label srOnly>Please enter your last name</Form.Label>

          <Form.Control className="mb-3" size="lg" placeholder="Last name" required />
        </Col>
      </Form.Row>

      <Form.Row>
        <Col />
        <Col md={6}>
          <Form.Label srOnly>Please enter your email</Form.Label>

          <Form.Control className="mb-3" size="lg" type="email" placeholder="Email" required />
        </Col>
        <Col />
      </Form.Row>
    </Container>
  );
};

export default questionItem;
