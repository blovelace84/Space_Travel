import React, { useState } from 'react';

function Accordion({ title, content, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="accordion">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <img src={icon} alt={`${title} Icon`} />
        <h2>{title}</h2>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </section>
  );
}

export default Accordion;