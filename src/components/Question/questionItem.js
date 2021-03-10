import React from 'react';
import { Container, Col } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';

const questionItem = ({

  jobNature,

  natureOfTrade,
}) => {
  return (
    <Container>
      <Form.Row>
        <Col>
          <Form.Control className="mb-3" size="lg" placeholder="First name" />
        </Col>
        <Col>
          <Form.Control className="mb-3" size="lg" placeholder="Last name" />
        </Col>
      </Form.Row>

      <Form.Row>
        <Col />
        <Col md={6}>
          <Form.Control className="mb-3" size="lg" type="email" placeholder="Email" required />
        </Col>
        <Col />
      </Form.Row>
    </Container>
  );
};

export default questionItem;
