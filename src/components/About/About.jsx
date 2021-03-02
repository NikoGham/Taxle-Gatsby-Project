import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import Paintbrush from '../../images/paintbrush.svg';
import Carousel from 'react-bootstrap/Carousel';
import TopWave from '../../images/smwlTop.svg';

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
    freshCoat: ['High Street Credibility and Quality', 'Online Efficiency and Value', 'Online, Paperless, Contactless'],
    selfAssess: ['For Landlords', 'Non VAT Registered Sole Traders', 'High Earners', 'Investors'],
    capGains: ['Tax Return Disclosure', '30 Day Online Disclosure'],
  });

  const { selfAssess, capGains, freshCoat } = data;

  const brush = (
    <Row>
    <Col sm={3}>
      <Paintbrush id="brushSVG" />
    </Col>
    <Col></Col>
  </Row>
  )

  return (
    <section id="about">
      <Container style={{overflow: "hidden"}}>
        <Title title="Services" />

        <Row className="about-wrapper">

          <Col md={12} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <Carousel
                id={isDesktop ? 'carouselContainerDesk' : 'carouselContainerMob'}
                activeIndex={index}
                onSelect={handleSelect}
              >
                   <Carousel.Item>
                  <div className="about-wrapper__info">
                    <p className="about-wrapper__info-text carouselItemHeader">Tax Compliance with a Fresh Coat of Paint</p>
                    <p className="about-wrapper__info-text">{freshCoat[1]}</p>
                    <p className="about-wrapper__info-text">{freshCoat[0]}</p>
                    <p className="about-wrapper__info-text">{freshCoat[2]}</p>
                  </div>
                </Carousel.Item>
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
          {isDesktop ? brush : null}
        </Row>
      </Container>
    </section>
  );
};

export default About;
