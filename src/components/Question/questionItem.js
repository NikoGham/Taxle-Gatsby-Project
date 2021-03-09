import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';

const questionItem = () => {
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
        <Col>
          <Form.Control className="mb-3" size="lg" type="email" placeholder="Email" required />
        </Col>
      </Form.Row>
    </Container>
  );
};

export default questionItem;
