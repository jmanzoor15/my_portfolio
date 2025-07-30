import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile from '../../assets/profile.png';

import portfolioData from '../../assets/portfolioData';

const About = () => {
  const { detailed2 } = portfolioData.about;
  const skills = portfolioData.skills;
  const { experience, projectsCompleted, happyClients } = portfolioData.stats;

  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="Profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            {detailed2.split('\n').map((line, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: line }} />
            ))}
          </div>

          <div className="about-skills">
            {skills.map((skill, index) => (
              <div className="about-skill" key={index}>
                <p>{skill.name}</p>
                <hr style={{ width: `${skill.percentage}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="achievement">
          <h1>{experience.value}</h1>
          <p>{experience.label.toUpperCase()}</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>{projectsCompleted.value}</h1>
          <p>{projectsCompleted.label.toUpperCase()}</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>{happyClients.value}</h1>
          <p>{happyClients.label.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
