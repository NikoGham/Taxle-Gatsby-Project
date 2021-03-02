import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import House from '../../images/house1.svg';
import House2 from '../../images/house2.svg';
import House3 from '../../images/house3.svg';
import BlueCross from '../../images/blueCross.svg';
import BlueEquals from '../../images/blueEquals.svg';
import PinkPlus from '../../images/pinkPlus.svg';
import BlueMinus from '../../images/blueMinus.svg';
import LightBlueEquals from '../../images/lightBlueEquals.svg';



const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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



  return (
    <section id="hero" className="jumbotron">
      <Container>
        <House className={isMobile ? "icon1 smallIcon" : "icon1"}/>
        <House2 className={isMobile ? "icon2 smallIcon" : "icon2"}/>
        <House3 className={isMobile ? "icon3 smallIcon" : "icon3"}/>
        <BlueCross className={isMobile ? "icon4 smallIcon" : "icon4"}/>
        <BlueEquals className={isMobile ? "icon5 smallIcon" : "icon5"}/>
        <PinkPlus className={isMobile ? "icon6 smallIcon" : "icon6"}/>
        <PinkPlus className={isMobile ? "icon62 smallIcon" : "icon62"}/>
        <PinkPlus className={isMobile ? "icon63 smallIcon" : "icon63"}/>
        <BlueMinus className={isMobile ? "icon7 smallIcon" : "icon7"}/>
        <LightBlueEquals className={isMobile ? "icon8 smallIcon" : "icon8"}/>



        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <p id="hero-welcome">Welcome to</p>
          <h1 className="hero-title">
            {title} <span className="text-color-main">{name || 'Your Name'}</span>
            <br />

          </h1>
          <h1> {subtitle}</h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
