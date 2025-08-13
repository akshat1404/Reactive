import React, { useState } from 'react';
import './index.css';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            <h3>{item.title}</h3>
            <span className="accordion-icon">
              {activeIndex === index ? '−' : '+'}
            </span>
          </div>
          <div
            className={`accordion-content ${
              activeIndex === index ? 'show' : ''
            }`}
          >
            <div className="accordion-inner">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;