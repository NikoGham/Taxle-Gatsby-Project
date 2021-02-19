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
        <House className="icon1"/>
        <House2 className="icon2"/>
        <House3 className="icon3"/>
        <BlueCross className="icon4"/>
        <BlueEquals className="icon5"/>
        <PinkPlus className="icon6"/>
        <PinkPlus className="icon62"/>
        <PinkPlus className="icon63"/>
        <BlueMinus className="icon7"/>
        <LightBlueEquals className="icon8"/>



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
