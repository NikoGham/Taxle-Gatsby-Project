import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import QuestionItem from './questionItem';
import QuestionCheckbox from './questionChecksbox';

const Questions = () => {
  const [qState, setFormState] = useState({
    mailingList: {
      title: 'Are you happy to be added to my mailing list?',
      appear: true,
      value: '',
    },

    residency: {
      title: 'Are you a UK resident?',
      appear: false,
      value: [],
    },

    trRequ: {
      title: 'Do you need a tax return prepared for the year to the 5th April?',
      appear: false,
      value: [],
    },

    firstTr: {
      title: 'Is this the first tax return you will have prepared?',
      appear: false,
      value: [],
    },

    accountant: {
      title: 'Do you have an accountant or tax adviser at the moment?',
      appear: false,
      value: [],
    },

    futureTrReq: {
      title: 'Do you need a tax return prepared for the year to 5th April 2022?',
      appear: false,
      value: [],
    },

    rentalProperty: {
      title: 'Do you own a rental property?',
      appear: false,
      value: [],
    },

    noOfRentals: {
      title: 'How many rental properties do you own?',
      appear: false,
      value: [],
    },

    ownershipRental: {
      title: 'Do you own the rental property solely or jointly??',
      appear: false,
      value: [],
    },

    ownershipRentals: {
      title: 'Do you own the rental properties solely, jointly or a mixture of the two?',
      appear: false,
      value: [],
    },

    letAgent: {
      title: 'Do you have a letting agent?',
      appear: false,

      value: [],
    },

    employed: {
      title: 'Are you employed?',
      appear: false,
      value: [],
    },

    jobNature: {
      title: 'What do you do for a living?',
      appear: false,
      value: [],
    },

    soi: {
      title: 'Do you receive a pension?',
      appear: false,
      value: [],
    },

    investments: {
      title: 'Do you have income from investments (dividends)?',
      appear: false,
      value: [],
    },

    broker: {
      title: 'Are your investments managed by a broker?',
      appear: false,
      value: [],
    },

    selfEmp: {
      title: 'Are you self-employed?',
      appear: false,
      value: [],
    },

    natureOfTrade: {
      title: 'What is the nature of your trade?',
      appear: false,
      value: [],
    },

    highEarners: {
      title: 'Do you earn over £50,000 a year?',
      appear: false,
      value: [],
    },

    propCapGains: {
      title: 'Have you sold a property recently and need to let HMRC know?',
      appear: false,
      value: [],
    },

    propSaleDetails: {
      title: 'When did the property sale complete?',
      appear: false,
      value: [],
    },

    otherCapGains: {
      title: 'Have you sold any other assets that HMRC may need to know about?',
      appear: false,
      value: [],
    },
    thankYouNote: false,
  });

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

  const arrSections = [];

  // for(let i =0 ; i<qState.length; i++) {
  //   let obj = qState[i]
  //   console.log(obj)
  //   for(var prop in obj){
  // arrSections.push(prop)
  //     }
  // }

  for (let prop in qState) {
    arrSections.push(qState[prop]);
  }

  useEffect(() => {
    for (let prop in qState) {
      arrSections.push(qState[prop]);
    }
    console.log('reloaded');
  }, [qState]);

  const onClick = () => {
    setFormState({
      ...qState,
      residency: {
        title: residency.title,
        appear: !residency.appear,
      },
    });
  };

  return (
    <Form>
      {helper}
      <QuestionItem />
      {arrSections.map((el) => (
        <QuestionCheckbox section={el} key={el.title} appear={el.appear} />
      ))}

      <button onClick={onClick}>Test</button>

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
