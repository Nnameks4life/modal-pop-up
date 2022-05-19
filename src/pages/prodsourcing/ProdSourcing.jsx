import React, { useState } from "react";
import floodrice from "../../photos/flood.png";
import cornn from "../../photos/smilingcorn.png";
import calling from "../../photos/call.png";
import "./prodsourcing.css";

const ProdSourcing = () => {
  const note1 = `
  You can buy our African sourced and Manufactured Products from the comfort of your home
  `;
  const note2 = `Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
  nam no suscipit check. At nam minimum pondeum. Est audiam
  animal molestiae te`;
  const note3 = `Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
  nam no suscipit please check. At nam minimum pondeum. Est audiam
  animal molestiae te`;
  const note4 = `Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
  nam no suscipit please check again. At nam minimum pondeum. Est audiam
  animal molestiae te`;

  const [text, setText] = useState([note1]);

  return (
    <div className="containe">
      <div className="body">
        <div className="row container px-5">
          <div className="col-6 px-5">
            <h3 className="heading">Product Sourcing</h3>
            <p className="writeup">
              Our representatives are strategically placed around the African
              continent, making sourcing for the right products easy. Get to
              also see <span className="itemcolor">BLACKLISTED</span> fraudulent
              suppliers.
            </p>
            <div className="text-center">
              <button className="btn btncolor mx-3">Get started</button>
              <button className="btn btnlight itemcolor">See blacklist</button>
            </div>
          </div>
          <div className="col-6">
            <div className="firstimg">
              <img src={cornn} alt="man with a corn" className="scndimg" />
            </div>
            <div>
              <div className="middleimg">
                <img
                  src={floodrice}
                  alt="rice planted in flood"
                  className="middleimg"
                />
              </div>
              <div className="topimg">
                <img
                  src={calling}
                  alt="lady making a call"
                  className="my-5"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-4 headeralign">
            <h3>Our Services</h3>
            <p onClick={() => setText(note1)} style={{ cursor: "pointer" }}>
              <i className="fa-brands fa-accusoft itemcolor"></i>Product
              Sourcing
            </p>
            <p onClick={() => setText(note2)} style={{ cursor: "pointer" }}>
              <i className="fa-brands fa-accusoft itemcolor"></i>Save Time
            </p>
            <p onClick={() => setText(note3)} style={{ cursor: "pointer" }}>
              <i className="fa-brands fa-accusoft itemcolor"></i>Credibility
            </p>
            <p onClick={() => setText(note4)} style={{ cursor: "pointer" }}>
              <i className="fa-brands fa-accusoft itemcolor"></i>Easy Buy
            </p>
          </div>
          <div className="col-8 boxx mx-auto">
            <h6 className="header1">
              Technology has helped In easy Product Sourcing
            </h6>
            <p className="boxtext">{text === note1 && [note1]}</p>
            <p className="boxtext">{text === note2 && [note2]}</p>
            <p className="boxtext">{text === note3 && [note3]}</p>
            <p className="boxtext">{text === note4 && [note4]}</p>
          </div>
        </div>
      </div>
      <div className="text-center mx-auto sourcebox my-5">
        <h3>How to Use SourcePro</h3>
        <p>
          Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam
          sem tellus erat.
        </p>

        <div className="row mx-auto text-center">
          <div className="col-4 formbox box1">
            <i className="fa-brands fa-accusoft itemcolor"></i>
            <h5>Complete the Form</h5>
            <p>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed
              nam sem tellus erat.
            </p>
          </div>
          <div className="col-4 formbox box2 mx-3">
            <i className="fa-brands fa-accusoft itemcolor"></i>
            <h5>Agree on Specifics</h5>
            <p>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed
              nam sem tellus erat.
            </p>
          </div>
          <div className="col-4 formbox box3 sourceproapp">
            <i className="fa-brands fa-accusoft itemcolor"></i>
            <h5>Get Desired Products</h5>
            <p>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed
              nam sem tellus erat.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <h5 className="text-center">
          Get to Know Where our Products are Sourced
        </h5>
          <h6>Crops</h6>
        <div className="mx-5 my-5 col-3 text-right">
          <label>Maize</label>
          <input type="radio" className="itemcolor my-3" />
          <br />
          <label>Sesame Seed</label>
          <input type="radio" className="itemcolor my-3" />
          <br />
          <label>Charcoal</label>
          <input type="radio" className="itemcolor my-3" />
          <br />
          <label>Cashew Nuts</label>
          <input type="radio" className="itemcolor my-3" />
          <br />
          <label>Crude Palm Oil</label>
          <input type="radio" className="itemcolor my-3" />
        </div>
        <div className="col-8"></div>
      </div>
    </div>
  );
};

export default ProdSourcing;
