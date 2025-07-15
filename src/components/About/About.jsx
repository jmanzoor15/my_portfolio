import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>I am a passionate Frontend Developer with over a year of professional experience. I've worked on several client-based and office projects using technologies like React, React Native, and Flutter.</p>
            <p>My dedication and curiosity drive me to keep learning and deliver high-quality, responsive, and engaging user interfaces.</p>
          </div>

          <div className="about-skills">
            <div className="about-skill"><p>Flutter</p><hr style={{ width: "90%" }} /></div>
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "85%" }} /></div>
            <div className="about-skill"><p>React Native</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>UI/UX</p><hr style={{ width: "70%" }} /></div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>11+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
