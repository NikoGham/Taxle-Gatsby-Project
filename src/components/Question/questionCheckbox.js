import React, { useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';

const questionCheckbox = ({ section, appear }) => {
  // Hide the not sure question?
  const [notSureHide, setNotSureHide] = useState(true);
  // state to record the value of the check box
  const [stateCheck, setStateCheck] = useState({
    yes: false,
    no: false,
    notSure: false,
  });

  // pull out of state
  const { yes, no, notSure } = stateCheck;

  // different onChange functions to update state.
  // Need to think of way to evaluate this into one function.

  const onChange = (e) => setStateCheck({ ...stateCheck, yes: !yes });
  const onChangeNo = (e) => setStateCheck({ ...stateCheck, no: !no });
  const onChangeNS = (e) => setStateCheck({ ...stateCheck, notSure: !notSure });

  // type of check box
  const type = 'checkbox';


  return (
    <Container className={appear ? 'null' : 'hide'}>
      <Form.Row>
        <Col />
        <Col md={6}>
          <p> {section.title}</p>

          <br />
          <Form.Check
            className="formCheckStyle"
            inline
            name="yes"
            label="Yes"
            type={type}
            id={`inline-${type}-1`}
            onChange={onChange}
          />
          <Form.Check
            className="formCheckStyle"
            inline
            name="no"
            label="No"
            type={type}
            id={`inline-${type}-2`}
            onChange={onChangeNo}
          />
          <Form.Check
            className="formCheckStyle"
            inline
            name="not sure"
            label="Not Sure"
            type={type}
            id={`inline-${type}-3`}
            className={notSureHide ? 'hide' : null}
            onChange={onChangeNS}
          />
        </Col>

        <Col />
      </Form.Row>
    </Container>
  );
};

questionCheckbox.propTypes = {
  appear: PropTypes.bool,
};
export default questionCheckbox;
