import React from "react";
import Demo from "./Collapse";
import { useState } from "react";
import Search from "antd/lib/transfer/search";
import './faq.css'

const Faq = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    e.preventDdfault(e)
  }

  return (
    <div className="container-fluid">
      <div className="top">
        <h3 className="pt-5 mx-5 headerr">Frequently Asked Questions</h3>
        <p className="faqss mx-5">
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
        <div>
          <h6 className="mx-5 mt-5 faqsheading">Top Questions</h6>
          <div className="row px-5">
            <div className="col-6">
              <Demo text={`This will contain different tex? text = ${query}`} onChange={handleChange}/>
            </div>
            <div className="col-6">
              <Demo text={`This will contain different tex? text = ${query}`} />
            </div>
          </div>
          <div className="row px-5">
            <div className="col-6">
              <Demo text="This will contain different tex" />
            </div>
            <div className="col-6">
              <Demo text={`This will contain different tex? text = ${query}`} />
              <div className="borderliner"/>
            </div>
          </div>
          <div className="row px-5">
            <div className="col-6">
              <Demo text="This will contain different tex" />
            </div>
            <div className="col-6">
              <Demo text="This will contain different tex" />
            </div>
          </div>
        </div>
        <div>
          <h6 className="mx-5 mt-5 faqsheading">Products</h6>

          <div className="row px-5">
            <div className="col-6">
              <Demo text="This the first text for props" />
            </div>
            <div className="col-6">
              <Demo text="This is for me to text for props" />
            </div>
          </div>
          <div className="row px-5">
            <div className="col-6">
              <Demo text="This will contain different text" />
            </div>
            <div className="col-6">
              <Demo text="This will contain different text" />
            </div>
          </div>
          <div className="row px-5">
            <div className="col-6">
              <Demo text="This will contain different text" />
            </div>
            <div className="col-6">
              <Demo text="This will contain different text" />
            </div>
          </div>
        </div>
        <div>
          <h6 className="mx-5 mt-5 faqsheading">Partnership</h6>

          <div className="row px-5">
            <div className="col-6">
              <Demo text="This the first text for props" />
            </div>
            <div className="col-6">
              <Demo text="This is for me to text for props" />
            </div>
          </div>
          <div className="row px-5">
            <div className="col-6">
              <Demo text="This will contain different text" />
            </div>
            <div className="col-6">
              <Demo text="This will contain different text" />
            </div>
          </div>
          <div className="row px-5">
            <div className="col-6">
              <Demo text="This will contain different text" />
            </div>
            <div className="col-6">
              <Demo text="This will contain different text" />
            </div>
          </div>
        </div>
        <h3 className="mx-5 mt-5">Still have more <span className="text-color">Questions?</span></h3>
        <p className="mx-5">
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum{" "}
        </p>
      </div>
    </div>
  );
};

export default Faq;