import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            {/* contact form  */}
            <form method="POST" action="https://getform.io/f/a4d71355-5a16-4c31-bfac-9745b8bcdc41">
              <TextField id="outlined-basic" label="email" type="email" name="email" />

              <TextField id="outlined-basic" label="name" type="text" name="name" />

              <TextField id="outlined-basic" label="Message" type="text" name="message" />

              <Button variant="outlined" color="primary" type="submit" size="large">
                Send!
              </Button>
            </form>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
