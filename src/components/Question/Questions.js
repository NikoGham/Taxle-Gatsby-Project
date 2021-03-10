import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import QuestionItem from './questionItem';
import QuestionCheckbox from './questionChecksbox';

const Questions = () => {
  const [qState, setFormState] = useState({
    residency: true,
    trRequ: true,
    firstTr: true,
    accountant: true,
    futureTrReq: true,
    rentalProperty: true,
    noOfRentals: true,
    ownershipRental: true,
    ownershipRentals: true,
    letAgent: true,
    employed: true,
    jobNature: true,
    soi: true,
    investments: true,
    selfEmp: true,
    natureOfTrade: true,
    highEarners: true,
    propCapGains: true,
    propSaleDetails: true,
    otherCapGains: true,
    thankYouNote: false,
  });

  const {
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
    jobNature,
    soi,
    investments,
    selfEmp,
    natureOfTrade,
    highEarners,
    propCapGains,
    propSaleDetails,
    otherCapGains,
    thankYouNote,
  } = qState;

  return (
    <Form>
      <QuestionItem />
      <p className="hero-cta">
        <button className="cta-btn cta-btn--hero hide" type="submit">
          {' '}
          Send!{' '}
        </button>
      </p>

      <QuestionCheckbox selfEmp={selfEmp} />
      <QuestionCheckbox />
      {thankYouNote ? (
        <p>
          Thank you for answering the questions. This helps me to piece together your tax affairs
          and provide a quote. If you have a general query, please ask. I will be in contact within
          24 hours.
        </p>
      ) : null}
    </Form>
  );
};

export default Questions;
