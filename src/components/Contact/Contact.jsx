import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta } = contact;

  const margin = 'mb-4';

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

            <Form
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              method="POST"
            >
              <input type="hidden" name="form-name" value="contact" />

              <Form.Group controlId="name">
                <Form.Label srOnly>Name</Form.Label>
                <Form.Row>
                  <Col></Col>
                  <Col md={6}>
                    <Form.Control
                      name="name"
                      className={margin}
                      size="lg"
                      type="text"
                      placeholder="Name"
                    ></Form.Control>
                  </Col>
                  <Col></Col>
                </Form.Row>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label srOnly>Email</Form.Label>
                <Form.Row>
                  <Col></Col>
                  <Col md={6}>
                    <Form.Control
                      name="email"
                      className={margin}
                      size="lg"
                      type="email"
                      placeholder="Email"
                    ></Form.Control>
                  </Col>
                  <Col></Col>
                </Form.Row>
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label srOnly>Message</Form.Label>
                <Form.Row>
                  <Col></Col>
                  <Col md={6}>
                    <Form.Control
                      name="message"
                      className={margin}
                      size="lg"
                      as="textarea"
                      placeholder="Message"
                      rows={5}
                    ></Form.Control>
                  </Col>
                  <Col></Col>
                </Form.Row>
              </Form.Group>
              <Button className="cta-btn--hero" id="contact-btn" size="lg" type="submit">
                {' '}
                SEND
              </Button>
            </Form>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
