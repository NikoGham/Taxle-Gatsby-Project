import React from 'react';
import { Container, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';

const questionItem = ({ section, appear, onChange}) => {
  return (
    <Container className={appear ? 'null' : 'hide'}>
      <Form.Row>
        <Col>
          <Form.Label srOnly></Form.Label>
          <Form.Control className="mb-3" size="lg" placeholder="First name" name="firstName" required onChange={onChange}/>
        </Col>
        <Col>
          <Form.Label srOnly></Form.Label>

          <Form.Control className="mb-3" size="lg" placeholder="Last name" required />
        </Col>
      </Form.Row>

      <Form.Row>
        <Col />
        <Col md={6}>
          <Form.Label srOnly></Form.Label>

          <Form.Control className="mb-3" size="lg" type="email" placeholder="Email" required />
        </Col>
        <Col />
      </Form.Row>
    </Container>
  );
};

questionItem.propTypes = {
  section: PropTypes.object,
  appear: PropTypes.bool,
};

export default questionItem;
