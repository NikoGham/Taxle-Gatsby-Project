import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import QuestionItem from './questionItem';
import QuestionCheckbox from './questionCheckbox';

const Questions = () => {
  const [qState, setFormState] = useState([
    {
      name: 'mailingList',
      title: 'Are you happy to be added to my mailing list?',
      appear: true,
      value: '',
      key: 1,
    },
    {
      name: 'residency',

      title: 'Are you a UK resident?',
      appear: false,
      value: [],
      key: 2,
    },

    {
      name: 'trReq',

      title: 'Do you need a tax return prepared for the year to the 5th April?',
      appear: false,
      value: [],
      key: 3,
    },

    {
      name: 'firstTr',
      title: 'Is this the first tax return you will have prepared?',
      appear: false,
      value: [],
      key: 4,
    },

    {
      name: 'accountant',
      title: 'Do you have an accountant or tax adviser at the moment?',
      appear: false,
      value: [],
      key: 5,
    },

    {
      name: 'futureTr',
      title: 'Do you need a tax return prepared for the year to 5th April 2022?',
      appear: false,
      value: [],
      key: 6,
    },

    {
      name: 'rentalProperty',
      title: 'Do you own a rental property?',
      appear: false,
      value: [],
      key: 7,
    },

    {
      name: 'noOfRentals',
      title: 'How many rental properties do you own?',
      appear: false,
      value: [],
      key: 8,
    },
    {
      name: 'ownershipRental',

      title: 'Do you own the rental property solely or jointly??',
      appear: false,
      value: [],
      key: 9,
    },
    {
      name: 'ownershipRentals',

      title: 'Do you own the rental properties solely, jointly or a mixture of the two?',
      appear: false,
      value: [],
      key: 10,
    },
    { name: 'letAgent', title: 'Do you have a letting agent?', appear: false, value: [], key: 11 },

    {
      name: 'employed',

      title: 'Are you employed?',
      appear: false,
      value: [],
      key: 12,
    },

    {
      name: 'jobNature',

      title: 'What do you do for a living?',
      appear: false,
      value: [],
      key: 13,
    },

    {
      name: 'soi',

      title: 'Do you receive a pension?',
      appear: false,
      value: [],
      key: 14,
    },

    {
      name: 'investments',

      title: 'Do you have income from investments (dividends)?',
      appear: false,
      value: [],
      key: 15,
    },

    {
      name: 'broker',

      title: 'Are your investments managed by a broker?',
      appear: false,
      value: [],
      key: 16,
    },

    { name: 'selfEmp', title: 'Are you self-employed?', appear: false, value: [], key: 17 },

    {
      name: 'natureOfTrade',
      title: 'What is the nature of your trade?',
      appear: false,
      value: [],
      key: 18,
    },

    {
      name: 'highEarners',
      title: 'Do you earn over £50,000 a year?',
      appear: false,
      value: [],
      key: 19,
    },

    {
      name: 'propCapGains',
      title: 'Have you sold a property recently and need to let HMRC know?',
      appear: false,
      value: [],
      key: 20,
    },
    {
      name: 'propSaleDetails',
      title: 'When did the property sale complete?',
      appear: false,
      value: [],
      key: 21,
    },
    {
      name: 'otherCapGains',
      title: 'Have you sold any other assets that HMRC may need to know about?',
      appear: false,
      value: [],
      key: 22,
    },
  ]);

  // Checkbox Questions state filter

  const onClick = (i) => {
    let newArr = [...qState];
    newArr[i].appear = true;
    setFormState(newArr);
  };

  const mailUpdate = () => {
    let newArr = [...qState];
    newArr[1].appear = true;
    setFormState(newArr);
  };

  // Text Question State
  const [textQstate, setTextQstate] = useState([
    {
      name: 'basics',
      key: 1,
      appear: true,
      firstName: null,
      lastNme: null,
      email: null,
    },
    {
      name: 'jobNature',
      key: 2,
      appear: false,
      value: null,
    },
    {
      name: 'basics',
      key: 3,
      appear: false,
      value: null,
    },
  ]);

  const onChangeBasics = (e) => {
    setTextQstate({ ...textQstate, [e.target.name]: e.target.value });
    console.log(textQstate);
  };

  // thank you note state
  const [thankYouNote] = useState(false);

  return (
    <Form name="questionnaire" data-netlify="true" data-netlify-honeypot="bot-field" method="POST">
      <input type="hidden" name="form-name" value="questionnaire" />
      <h3>Lets get started</h3>
      <QuestionItem
        section={textQstate[0]}
        appear={textQstate[0].appear}
        key={textQstate[0].key}
        onChange={onChangeBasics}
      />
      ))}
      {qState.map((section) => (
        <QuestionCheckbox section={section} appear={section.appear} key={section.key} />
      ))}
      <p className="hero-cta">
        <button
          className="cta-btn cta-btn--hero mt-5"
          onClick={mailUpdate}
          // onClick={() => {
          //   let newArr = [...qState];
          //   newArr[1].appear = true;
          //   setFormState(newArr);
          // }}
        >
          {' '}
          Next...{' '}
        </button>
      </p>
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
