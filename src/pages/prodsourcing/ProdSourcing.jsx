import React, { useState } from "react";
import floodrice from "../../photos/flood.png";
import cornn from "../../photos/smilingcorn.png";
import calling from "../../photos/call.png";
import cart from "../../photos/cart.png";
import savetime from "../../photos/savetime.png";
import cred from "../../photos/cred.png";
import easybuy from "../../photos/easybuy.png";
import "./prodsourcing.css";
import Maps from "./Maps";


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

  const position1 = { lat: 17.570692, lng: -3.996166 }
  const position2 = { lat: 7.946527, lng: -1.023194 }
  const position3 = { lat: 9.081999, lng: 8.675277}
  const position4 = { lat: 8.619543, lng: 0.824782 }
  const position5 = { lat: 7.369722, lng: 12.354722 }
  

  const [text, setText] = useState([note1]);

  const [location, setLocation] = useState([
    position1,
    position3,
    position3,
    position4,
    position5 
  ]);

  const handleChange = () => {
    setLocation (location)
  }



  return (
    <div className="containe">
      <div className="body">
        <div className="row container">
          <div className="col-4 col-lg-6 col-sm-6 col-md-10 ">
            <h3 className="heading positionitems">Product Sourcing</h3>
            <p className="writeup">
              Our representatives are strategically placed around the African
              continent, making sourcing for the right products easy. Get to
              also see <span className="itemcolor">BLACKLISTED</span> fraudulent
              suppliers.
            </p>
            <div className="positionitems">
              <button className="btn btncolor text-light">Get started</button>
              <button className="btn btnlight itemcolor mx-3">See blacklist</button>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-sm-12 col-md-6 header-box">
            <div className="firstimg">
              <img src={cornn} alt="man with a corn" className="scndimg" style={{ height: "100%", width: "100%" }} />
            </div>
            <div>
              <div className="middleimg">
                <img
                  src={floodrice}
                  alt="rice planted in flood"
                  className="middleimg"
                />
              </div>
              <div className="topim">
                <img
                  src={calling}
                  alt="lady making a call"
                  className="my-5 topimg"
                  
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row container svgitems">
          <div className="col-md-12 col-lg-6 col-12">
            <h3>Our Services</h3>
            <p onClick={() => setText(note1)} style={{ cursor: "pointer" }}>
              <img src={cart} alt='' className="icon-hover" />Product
              Sourcing
            </p>
            <p onClick={() => setText(note2)} style={{ cursor: "pointer" }}>
              <img src={savetime} alt='' className="icon-hover"/>Save Time
            </p>
            <p onClick={() => setText(note3)} style={{ cursor: "pointer" }}>
              <img src={cred} alt='' className="icon-hover"/>Credibility
            </p>
            <p onClick={() => setText(note4)} style={{ cursor: "pointer" }}>
              <img src={easybuy} alt='' className="icon-hover"/>Easy Buy
            </p>
          </div>
          <div className="col-md-12 col-lg-6 col-12 boxx">
            <h6 className="header1 text-center">
              Technology has helped In easy Product Sourcing
            </h6>
            <p className="boxtext">{text === note1 && [note1]}</p>
            <p className="boxtext">{text === note2 && [note2]}</p>
            <p className="boxtext">{text === note3 && [note3]}</p>
            <p className="boxtext">{text === note4 && [note4]}</p>
          </div>
        </div>
      </div>
      <div className="text-center sourcebox">
        <h3>How to Use SourcePro</h3>
        <p>
          Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam
          sem tellus erat.
        </p>

        <div className="row box-shape text-center mx-auto">
          <div className="col-4 col-lg-4 col-md-8 col-sm-12 formbox box1 mx-auto">
            <i className="fa-brands fa-accusoft itemcolor"></i>
            <h5>Complete the Form</h5>
            <p>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed
              nam sem tellus erat.
            </p>
          </div>
          <div className="col-4 col-lg-4 col-md-8 col-sm-12 formbox box2 mx-auto">
            <i className="fa-brands fa-accusoft itemcolor"></i>
            <h5>Agree on Specifics</h5>
            <p>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed
              nam sem tellus erat.
            </p>
          </div>
          <div className="col-4 col-lg-4 col-md-8 col-sm-12 formbox box3 mx-auto">
            <i className="fa-brands fa-accusoft itemcolor"></i>
            <h5>Get Desired Products</h5>
            <p>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed
              nam sem tellus erat.
            </p>
          </div>
        </div>
      </div>
      <div className="croptop">
        <h5 className="text-center my-5">
          Get to Know Where our Products are Sourced
        </h5>
      <div className="row mx-auto container">
        <div className="col-12 col-sm-12 col-lg-3 ">
          <h6 className="py-2">Crops</h6>
          <input type="radio" className="itemcolor my-1 radioitem mx-2" onChange={handleChange} onClick={()=>setLocation(position1)}/>
          <label className="py-2">Maize</label>
          <br />
          <div className="radioitem">
          <input type="radio" className="itemcolor radioitem my-1 mx-2" onChange={handleChange} onClick={()=>setLocation(position2)}/>
          <label className="py-2">Sesame</label>
          </div>
          <br />
          <input type="radio" className="itemcolor mt-1 radioitem my-1 mx-2" onChange={handleChange} onClick={()=>setLocation(position3)}/>
          <label className="py-2">Charcoal</label>
          <br />
          <input type="radio" className="itemcolor radioitem my-1 mx-2" onChange={handleChange} onClick={()=>setLocation(position4)}/>
          <label className="py-2">Cashew Nuts</label>
          <br />
          <input type="radio" className="itemcolor my-1 radioitem my-1 mx-2" onChange={handleChange} onClick={()=>setLocation(position5)}/>
          <label className="py-2">Crude Palm Oil</label>
        </div>
        <div className="col-12 col-sm-12 col-lg-9 mb-3 mx-auto text-center">
          
          <Maps/>


        </div>
      </div>
      </div>

    </div>
  );
};

export default ProdSourcing;
