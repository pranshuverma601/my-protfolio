import React from 'react';
import './Hero.css';
import hero from '../../assets/pranshu.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={hero} alt=""/>
        <h1><span>I'm Pranshu Verma,</span> Full stack devloper based in India</h1>
        <p>I am a Full stack devloper in MERN technology</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero;