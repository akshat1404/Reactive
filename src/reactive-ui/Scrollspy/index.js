import React, { useEffect, useRef } from 'react';
import './index.css';

function Scrollspy({ sections, titles, navClassName, sectionClassName, className }) {
  const [activeSection, setActiveSection] = React.useState(sections[0]?.id);
  const sectionRefs = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0.05,
    };

    observerRef.current = new IntersectionObserver((entries) => {
        for(let i=entries.length - 1; i >= 0; i--) {
            const entry = entries[i];
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        }
    }, options);

    sectionRefs.current.forEach(section => {
      if (section) observerRef.current.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sections]);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className={`scrollspy-container ${className || ''}`}>
      <nav className={`scrollspy-nav ${navClassName || ''}`}>
        {titles?.map((title, index) => (
          <button
            key={sections[index].id}
            onClick={() => handleNavClick(sections[index].id)}
            className={`scrollspy-nav-item ${activeSection === sections[index].id ? 'active' : ''}`}
          >
            {title}
          </button>
        ))}
      </nav>
      
      <div className={`scrollspy-sections ${sectionClassName || ''}`}>
        {sections?.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            ref={el => sectionRefs.current[index] = el}
            className="scrollspy-section"
          >
            {section.renderContent}
          </section>
        ))}
      </div>
    </div>
  );
}

export default Scrollspy;