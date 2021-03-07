import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';

const questionItem = () => {
  return (
    <Form.Row>
      <Col>
        <Form.Control size="lg" placeholder="First name" />
      </Col>
      <Col>
        <Form.Control size="lg" placeholder="Last name" />
      </Col>
    </Form.Row>
  );
};

export default questionItem;
