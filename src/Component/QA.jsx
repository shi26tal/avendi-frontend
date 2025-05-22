import React, { useState } from "react";
import { faqData } from "./faqData.js";
import "../ComponentStyle/QA.css";

export const QA = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    // If clicking the same item, close it
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      // Otherwise, open the clicked item
      setActiveIndex(index);
    }
  };

  return (
    <div className="qa">
      <div className="faq-container">
        <div className="accordion-wrapper">
          {faqData.map((item, index) => (
            <div key={index} className="accordion-item">
              <button
                className="accordion-trigger"
                onClick={() => handleClick(index)}
                aria-expanded={activeIndex === index}
              >
                <div className="trigger-content">
                  <h3 className="question">{item.question}</h3>
                  <div className="icon-wrapper">
                    {activeIndex === index ? (
                      <img
                        src="/up.png"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                        alt="up"
                      />
                    ) : (
                      <img
                        src="/down.png"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </button>
              <div
                className={`accordion-content ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                <div className="content-inner">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="demo-container">
        <div className="demo-image">
          <img src="/demo.svg" alt="demo" />
        </div>
        <div className="demo-text">
          <h1>Let's redefine customer experience</h1>
          <p>
            We are ready to digitally transform your guest experience with a
            fast and intuitive web app.
            <br /> Easy to use, no signup or download required. Let us show you
            our demo!
          </p>
        </div>
        <div className="demo-button">
          <button>Book a Demo</button>
        </div>
      </div>
    </div>
  );
};
