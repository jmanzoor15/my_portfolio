import React, { useState, useRef } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import portfolioData from '../../assets/portfolioData';

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const itemRefs = useRef([]);

  const toggleExpanded = (index) => {
    const isExpanding = expandedIndex !== index;
    setExpandedIndex(isExpanding ? index : null);

    // Scroll into view if expanding
    if (isExpanding && itemRefs.current[index]) {
      itemRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="services-container">
        {portfolioData.services.map((service, index) => (
          <div
            key={index}
            className="services-format"
            ref={(el) => (itemRefs.current[index] = el)}
          >
            <h3>0{index + 1}</h3>
            <h2>{service.title}</h2>
            <p className={expandedIndex === index ? 'expanded' : 'clamped'}>
              {service.description}
            </p>
            <div
              className="services-readmore"
              onClick={() => toggleExpanded(index)}
              style={{ cursor: 'pointer' }}
            >
              <p>{expandedIndex === index ? 'Show Less' : 'Read More'}</p>
              <img src={arrow_icon} alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
