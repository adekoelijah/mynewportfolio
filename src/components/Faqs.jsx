import React, { useState } from 'react';
import FAQData from '../Faq';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const Faqs= () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq__backfround">
     <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {FAQData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggle(index)}>
              <h4>{item.question}</h4>
              <span>{activeIndex === index ? <FaMinus /> : <FaPlus />}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Faqs;

