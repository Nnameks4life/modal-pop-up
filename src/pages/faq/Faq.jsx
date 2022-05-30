import React from "react";
import Demo from "./Collapse";
import { useState } from "react";
import Search from "antd/lib/transfer/search";
import "./faq.css";

const Faq = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    e.preventDdfault(e);
  };

  return (
    <div className="top">
      <div className="container">
        <h3 className="pt-5 mx-5 headerr">Frequently Asked Questions</h3>
        <p className="faqss mx-5 ">
          You may have more questions that you need clarity on, Check out out
          FAQs or reach us via the contact form below
        </p>
        <div className="row">
          <div className="col-8 mx-5">
            <input
              className="form-control col-sm-12 searchboxx"
              type="search"
              placeholder="Search for frquently asked questions..."
              aria-label="Search"
            ></input>

            {/* <Search getQuery={(q) => setQuery(q)}/> */}
          </div>
          {/* <Search getQuery={(q) => setQuery(q)}/> */}
        </div>
      </div>
      <div className="collap col-sm-12 col-md-12">
        <div className="faqtop">
          <h6 className="mx-5 mt-5 faqsheading">Top Questions</h6>
          <div className="row px-5">
            <div className="col-12 col-lg-6">
              <Demo
                text={`This will contain different tex? text  ${query}`}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-lg-6">
              <Demo text={`This will contain different tex? text  ${query}`} />
            </div>
          </div>
        </div>
        <div>
          <h6 className="mx-5 mt-5 faqsheading">Products</h6>

          <div className="row px-5 accordion-w">
            <div className="col-12 col-lg-6">
              <Demo text="This the first text for props" collapseId='collapseTen'
                divId='collapseTen'/>
            </div>
            <div className="col-12 col-lg-6">
              <Demo text="This is for me to text for props" />
            </div>
          </div>
        </div>
        <div>
          <h6 className="mx-5 mt-5 faqsheading">Partnership</h6>

          <div className="row px-5">
            <div className="col-12 col-lg-6">
              <div class="accordion" id="accordioExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Accordion Item #1
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <Demo text="This is for me to text for props" />
            </div>
          </div>
        </div>
        <h3 className="mx-5 mt-5">
          Still have more <span className="text-color">Questions?</span>
        </h3>
        <p className="mx-5">
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum{" "}
        </p>
      </div>
    </div>
  );
};

export default Faq;
