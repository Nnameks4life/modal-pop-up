import React from 'react'
import './prodsourcing.css'
import floodrice from "../../photos/flood.png";
import cornn from "../../photos/smilingcorn.png";
import calling from "../../photos/call.png";
import cart from "../../photos/cart.png";
import savetime from "../../photos/savetime.png";
import cred from "../../photos/cred.png";
import easybuy from "../../photos/easybuy.png";

const ScndProdSource = () => {
  return (


    <div>
        <div className="body">
            <div className="row header-box">
                <div className="col-6">
                <h3 className="heading positionitems">Product Sourcing</h3>
                <p className="writeup">
              Our representatives are strategically placed around the African
              continent, making sourcing for the right products easy. Get to
              also see <span className="itemcolor">BLACKLISTED</span> fraudulent
              suppliers.
            </p>
            <button className="btn btncolor text-light">Get started</button>
              <button className="btn btnlight itemcolor mx-3">See blacklist</button>

                </div>
                <div className="col-6 col-lg-6 col-sm-12 col-md-6">
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

        </div>


    </div>
  )
}

export default ScndProdSource;