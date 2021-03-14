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

  // Find the array index of any objexts which are set to true. Not needed anymore as I have copied this into nextUpdate below.
  // const arrayChecker = () => {
  //   let holdingArray = [...qState];
  //   let testArray = holdingArray.filter((el) => el.appear);
  //   console.log(testArray);
  //   // console.log(typeof testArray);
  //   // console.log(testArray[0].key);
  //   testArray[0].key;
  // };

  // Not sure if I need this quite yet
  // useEffect(() => {
  //   arrayChecker();
  // }, [qState]);

  // COULD USE THIS FOR A MASTER MENU THAT SENDS CUSTOMER TO ANY QUESTION??
  const onClick = (i) => {
    let newArr = [...qState];
    newArr[i].appear = true;
    setFormState(newArr);
  };

  const mailUpdate = () => {
    // take the current array and set mailing to appear: false, and uk residency appear to true.
    let newArr = [...qState];
    newArr[1].appear = true;
    newArr[0].appear = false;
    // set the basic questions to hide
    let basicsArray = [...textQstate];
    basicsArray[0].appear = false;
    // return the new states. I put this at the end as I think this ordering = more sound logic.
    setTextQstate(basicsArray);
    setFormState(newArr);
  };

  const nextUpdate = () => {
    // filter out the current state and return only the question which is currently set to appear.

    let holdingArray = [...qState];
    let testArray = holdingArray.filter((el) => el.appear);
    // console.log(typeof testArray);
    // console.log(testArray[0].key);

    // extract out of this new filtered array, the key of that object. As array's are 0 indexed, we can simply use this key to set the next array item object's appear to true.

    let nextKey = testArray[0].key;
    let newArr = [...qState];
    // this should set next Q to appear true, previous to false.
    newArr[nextKey].appear = true;
    newArr[nextKey - 1].appear = false;

    // return the new state of the checkBox questions . I put this at the end as I think this ordering = more sound logic.
    setFormState(newArr);
  };

  // Text Question State
  const [textQstate, setTextQstate] = useState([
    {
      name: 'basics',
      key: 1,
      appear: true,
      value: null,
      question: 'lets start with the basics...',
    },
    {
      name: 'jobNature',
      question: 'What is the nature of your employment?',
      key: 2,
      appear: false,
      value: null,
    },
    {
      name: 'natureOfTrade',
      question: 'What is the nature of your trade?',
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

      {textQstate.map((section) => (
        <QuestionItem
          section={section}
          appear={section.appear}
          key={section.key}
          onChange={onChangeBasics}
        />
      ))}

      {qState.map((section) => (
        <QuestionCheckbox section={section} appear={section.appear} key={section.key} />
      ))}
      <p className="hero-cta">
        {/* This ternary is just temporary to swtich between buttons. Mail Update needs to get rid of the initial basic questions. */}
        {qState[0].appear ? (
          <button className="cta-btn cta-btn--hero mt-5" onClick={mailUpdate}>
            {' '}
            Next...{' '}
          </button>
        ) : (
          <button className="cta-btn cta-btn--hero mt-5" onClick={nextUpdate}>
            {' '}
            Next...{' '}
          </button>
        )}
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
