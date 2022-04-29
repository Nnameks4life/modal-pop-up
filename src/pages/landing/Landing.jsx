import React from "react";
import tofa from "../../photos/logolanding.png";
import "../../index.css";
import Carousel from "../../component/carousel/Carousel";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container-fluid">
        <div className="bgbody">
      <Carousel />
      </div>

      <div className="content">
        <div className="menuitems">
          <img src={tofa} alt="tofalogo" className="mt-3" />
          <ul className="menuitems mx-auto d-flex justify-content-evenly text-light mt-3">
            <Link to>
              <li className="px-5 text-light">Trade Finance</li>
            </Link>
            <Link to>
              <li className="px-5 text-light">SourcePro</li>
            </Link>
            <Link to>
              <li className="px-5 text-light">Academy</li>
            </Link>
            <Link to>
              <li className="px-5 text-light">Support</li>
            </Link>
          </ul>
          <button className="btn btncolor mt-3">MarketPlace</button>
        </div>

        <div className="textss">
          <div className="text-center text-light px-10">
            <p className="descrip">
              Small Business Communities,
              <br /> Big Market Opportunities
            </p>
            <p>
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              <br /> am no suscipit quaerendum. At nam minimum{" "}
            </p>
          </div>

          <div className="flex mx-auto text-center">
            <button className="btn btncolor text-light mx-4">
              Go to Market
            </button>
            <button className="btn btnlight text-light">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
