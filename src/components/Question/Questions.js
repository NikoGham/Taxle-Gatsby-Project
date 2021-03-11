import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import QuestionItem from './questionItem';
import QuestionCheckbox from './questionChecksbox';

const Questions = () => {
  const [qState, setFormState] = useState([
    {
      mailingList: {
        title: 'Are you happy to be added to my mailing list?',
        appear: true,
        value: '',
      },
    },
    {
      residency: {
        title: 'Are you a UK resident?',
        appear: true,
        value: [],
      },
    },
    {
      trRequ: {
        title: 'Do you need a tax return prepared for the year to the 5th April?',
        appear: true,
        value: [],
      },
    },
    {
      firstTr: {
        title: 'Is this the first tax return you will have prepared?',
        appear: true,
        value: [],
      },
    },
    {
      accountant: {
        title: 'Do you have an accountant or tax adviser at the moment?',
        appear: true,
        value: [],
      },
    },
    {
      futureTrReq: {
        title: 'Do you need a tax return prepared for the year to 5th April 2022?',
        appear: true,
        value: [],
      },
    },
    {
      rentalProperty: {
        title: 'Do you own a rental property?',
        appear: true,
        value: [],
      },
    },
    {
      noOfRentals: {
        title: 'How many rental properties do you own?',
        appear: true,
        value: [],
      },
    },
    {
      ownershipRental: {
        title: 'Do you own the rental property solely or jointly??',
        appear: true,
        value: [],
      },
    },
    {
      ownershipRentals: {
        title: 'Do you own the rental properties solely, jointly or a mixture of the two?',
        appear: true,
        value: [],
      },
    },
    {
      letAgent: {
        title: 'Do you have a letting agent?',
        appear: true,

        value: [],
      },
    },
    {
      employed: {
        title: 'Are you employed?',
        appear: true,
        value: [],
      },
    },
    {
      jobNature: {
        title: 'What do you do for a living?',
        appear: true,
        value: [],
      },
    },
    {
      soi: {
        title: 'Do you receive a pension?',
        appear: true,
        value: [],
      },
    },
    {
      investments: {
        title: 'Do you have income from investments (dividends)?',
        appear: true,
        value: [],
      },
    },
    {
      broker: {
        title: 'Are your investments managed by a broker?',
        appear: true,
        value: [],
      },
    },
    {
      selfEmp: {
        title: 'Are you self-employed?',
        appear: true,
        value: [],
      },
    },
    {
      natureOfTrade: {
        title: 'What is the nature of your trade?',
        appear: true,
        value: [],
      },
    },
    {
      highEarners: {
        title: 'Do you earn over £50,000 a year?',
        appear: true,
        value: [],
      },
    },
    {
      propCapGains: {
        title: 'Have you sold a property recently and need to let HMRC know?',
        appear: true,
        value: [],
      },
    },
    {
      propSaleDetails: {
        title: 'When did the property sale complete?',
        appear: true,
        value: [],
      },
    },
    {
      otherCapGains: {
        title: 'Have you sold any other assets that HMRC may need to know about?',
        appear: true,
        value: [],
      },
    },
    { thankYouNote: false },
  ]);

  const {
    mailingList,
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

  let helper = <h3> Lets get this show on the road... First the basics: </h3>;

  // const listNo = Object.keys(qState).length;

  // for (let i = 0; i < listNo; i++) {
  //   Object.keys(qState);
  // }

  return (
    <Form>
      {helper}
      <QuestionItem />

      <QuestionCheckbox section={mailingList} appear={mailingList.appear} />

      <p className="hero-cta">
        <button className="cta-btn cta-btn--hero hide " type="submit">
          {' '}
          Send!{' '}
        </button>
      </p>
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
