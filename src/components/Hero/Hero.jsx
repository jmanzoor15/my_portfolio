import React from 'react';
import './Hero.css';
import portfolioData from '../../assets/portfolioData';
import Myphoto from '../../assets/Myphoto.jpg'; // Or use portfolioData.profile.profileImage if dynamic
import hero_profile from '../../assets/hero_profile.png'

const Hero = () => {
  const { name, location } = portfolioData.profile;
  const aboutBrief = portfolioData.about.brief;
  const aboutDetailed = portfolioData.about.detailed1;

  return (
    <div id="home" className="hero">
      <img src={hero_profile} alt="Profile" className="hero-img" />
      <h1>
        <span>{`I'm ${name},`}</span> frontend developer based in {location}
      </h1>
      <p>{aboutDetailed}</p>
      <div className="hero-action">
         <a  href="https://www.linkedin.com/in/junaid-mir-dev" target="_blank"   rel="noopener noreferrer" className="hero-connect"> Connect with me </a>
       <a href="/junaid.pdf" download className="hero-resume">My Resume</a>
      </div>
    </div>
  );
};

export default Hero;
