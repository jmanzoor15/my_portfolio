import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import portfolioData from '../../assets/portfolioData';
const MyWork = () => {
  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>

      {/* <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="work-card">
            <img src={work.w_img} alt={`Work ${index + 1}`} />
          </div>
        ))}
      </div> */}
   
          <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="work-card">
           <a href={work.w_link} target="_blank" rel="noopener noreferrer">
        <img src={work.w_img} alt={`Work ${index + 1}`} />
      </a>
          </div>
        ))}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow" />
      </div>
    </div>
  );
};

export default MyWork;
