import React from 'react';
import { Container, Col } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';

const questionItem = ({
  residency,
  trRequ,
  firstTr,
  accountant,
  futureTrReq,
  rentalProperty,
  noOfRentals,
  ownershipRental,
  ownershipRentals,
  letAgent,
  employed,
  soi,
  investments,
  selfEmp,
  highEarners,
  propCapGains,
  propSaleDetails,
  otherCapGains,
}) => {
  if (selfEmp) {
    return (
      <Container>
        <Form.Row>
            <Col />
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <p>Are you self employed?</p>{' '}
              <Form.Check inline label="Yes" type={type} id={`inline-${type}-1`} />
              <Form.Check inline label="No" type={type} id={`inline-${type}-2`} />
            </div>
          ))}
          <Col />
        </Form.Row>
      </Container>
    );
  } else {
    return null;
  }
};

export default questionItem;
