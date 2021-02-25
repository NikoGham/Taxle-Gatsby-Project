import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import Paintbrush from '../../images/paintbrush.svg';
import Carousel from 'react-bootstrap/Carousel';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { headerOne, headerTwo, headerThree } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  // Carousel State

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Carousel Data

  const [data, setData] = useState({
    selfAssess: ['For Landlords', 'Non VAT Registered Sole Traders', 'High Earners', 'Investors'],
    capGains: ['Tax Return Disclosure', '30 Day Online Disclosure'],
  });

  const { selfAssess, capGains } = data;

  return (
    <section id="about">
      <Container>
        <Title title="Services" />
        <Row className="about-wrapper">
          {/* <Col md={2} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <Paintbrush />
              </div>
            </Fade>
          </Col> */}
          <Col md={12} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <Carousel
                id={isDesktop ? 'carouselContainerDesk' : 'carouselContainerMob'}
                activeIndex={index}
                onSelect={handleSelect}
              >
                <Carousel.Item>
                  <div className="about-wrapper__info">
                    <p className="about-wrapper__info-text carouselItemHeader">{headerOne}</p>
                    <p className="about-wrapper__info-text">{selfAssess[0]}</p>
                    <p className="about-wrapper__info-text">{selfAssess[1]}</p>
                    <p className="about-wrapper__info-text">{selfAssess[2]}</p>
                    <p className="about-wrapper__info-text">{selfAssess[3]}</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="about-wrapper__info">
                    <p className="about-wrapper__info-text carouselItemHeader">{headerTwo}</p>
                    <p className="about-wrapper__info-text ">{capGains[0]}</p>
                    <p className="about-wrapper__info-text">{capGains[1]}</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="about-wrapper__info">
                    <p className="about-wrapper__info-text carouselItemHeader">{headerThree}</p>
                    <p className="about-wrapper__info-text">{selfAssess[0]}</p>
                    <p className="about-wrapper__info-text">{selfAssess[1]}</p>
                    <p className="about-wrapper__info-text">{selfAssess[2]}</p>
                    <p className="about-wrapper__info-text">{selfAssess[3]}</p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
