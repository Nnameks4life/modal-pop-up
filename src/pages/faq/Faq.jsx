import React from "react";
import Demo from "./Collapse";

const Faq = () => {
  return (
    <div className="">
      <div className="top">
      <h3 className="mx-5 pt-5">Frequently Asked Questions</h3>
      <p className="faqss mx-5">
        You may have more questions that you need clarity on, Check out out FAQs
        or reach us via the contact form below
      </p>
      <input className="form-control me-2 search mx-5" type="search" placeholder="Search for frquently asked questions..." aria-label="Search"></input>
      </div>
      <div>
          <h6>Top Questions</h6>
      </div>
      <div className="px-5">
          <Demo/>
          </div>
    </div>
  );
};

export default Faq;
