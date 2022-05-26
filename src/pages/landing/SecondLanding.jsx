import React from "react";
import "./landing.css";
// import tofa from "../../photos/logolanding.png";
import mowing from "../../photos/tractor.png";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import farmer from "../../photos/farm.jpg";
import maiz from "../../photos/maize.png";
import egus from "../../photos/egusi.png";
import { Link } from "react-router-dom";
import peeps from "../../photos/people.png";
import air from "../../photos/airbnb.png";
import hub from "../../photos/hubspot.png";
import micro from "../../photos/microsoft.png";
import goog from "../../photos/google.png";
import wal from "../../photos/walmart.png";
import fed from "../../photos/fedex.png";
import blog from "../../photos/blog.png";
import Constant from "../allblogs/Constant";

const SecondLanding = () => {
  return (
    <div className="">
      <Carousel autoplay>
        <div>
          <div className="content">
            <img
              src={farmer}
              className=""
              alt="grainMap"
              style={{ width: "100vw", height: "100vh" }}
            />
            <div className="bgbody centerr">
              <h1 className="descrip story">
                Small Business Communities, Big Market Opportunity{" "}
              </h1>
              <p className="text-light story">
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                am no suscipit quaerendum. At nam minimum
              </p>
              <button className="btn btncolor text-light mx-2">
                Go to Market
              </button>
              <button className="btn btnlight text-light ">Learn More</button>
            </div>
          </div>
        </div>
        <div>
          <div className="content">
            <img
              src={farmer}
              className=""
              alt="grainMap"
              style={{ width: "100vw", height: "100vh" }}
            />
            <div className="bgbody centerr">
              <h1 className="descrip story">
                Small Business Communities, Big Market Opportunity{" "}
              </h1>
              <p className="text-light story">
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                am no suscipit quaerendum. At nam minimum
              </p>
              <button className="btn btncolor text-light mx-2">
                Go to Market
              </button>
              <button className="btn btnlight text-light ">Learn More</button>
            </div>
          </div>
        </div>
        <div>
          <div className="content">
            <img
              src={farmer}
              className=""
              alt="grainMap"
              style={{ width: "100vw", height: "100vh" }}
            />
            <div className="bgbody centerr">
              <h1 className="descrip story">
                Small Business Communities, Big Market Opportunity{" "}
              </h1>
              <p className="text-light story">
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                am no suscipit quaerendum. At nam minimum
              </p>
              <button className="btn btncolor text-light mx-2">
                Go to Market
              </button>
              <button className="btn btnlight text-light ">Learn More</button>
            </div>
          </div>
        </div>
        <div>
          <div className="content">
            <img
              src={farmer}
              className=""
              alt="grainMap"
              style={{ width: "100vw", height: "100vh" }}
            />
            <div className="bgbody centerr">
              <h1 className="descrip story">
                Small Business Communities, Big Market Opportunity{" "}
              </h1>
              <p className="text-light story">
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                am no suscipit quaerendum. At nam minimum
              </p>
              <button className="btn btncolor text-light mx-2">
                Go to Market
              </button>
              <button className="btn btnlight text-light">Learn More</button>
            </div>
          </div>
        </div>
      </Carousel>

      <div className="row my-5 mx-auto sourcing-finance">
        <div className="col-md-6 col-lg-6 col-12 mt-5">
          <img src={mowing} alt="tractor" />
        </div>
        <div className="col-md-6 col-sm-12 mt-5 ">
          <h3 className="">Creating Visibility and Access</h3>
          <p className=" tractortexts">
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum Ex duo eirput mentitum. Et has
            minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no
            suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum.
            <br />
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum.
          </p>
        </div>
      </div>
      <div className="productt-section text-center">
        <div className="">
          <h3 className="products ">Our Products</h3>

          <p className="product">
            You can buy our African Sourced and manufactured products from the
            comfort of your home
          </p>
        </div>
      </div>
      <div class="row container event-container sourcing-finance">
        <div class="">
        <div class="event-img-wrapper">
          <div class="box a">
            <img src={egus} alt="egusi" className="cereals" />
          </div>
          <div class="box b">
            <img src={maiz} alt="maize" className="cereals" />
          </div>
          <div class="box d">
            <img src={maiz} alt="cashew" className="cereals" />
          </div>
        </div>
        </div>
      </div>

      <div className="row sourcing-finance mx-auto">
        <div className="col-md-6 col-lg-6 col-12">
          <div className="text-center">
            <i className="fa-solid fa-business-time text-center"></i>
          </div>
          <h3 className="psourcing mx-5">Product Sourcing</h3>
          <p className="sourcing mx-2">
            SourcePro is a unit of TOFA that works directly with our
            online/offline to ensure that buys specifications are met. The
            SourcePro team handles products like wood, agro-commodities, textile
            and finished products, all sourced from various African countries
            and shipped to buyers within and outside Africa.
            <br />
            <Link to className="readmore">
              Get Started
            </Link>
          </p>
        </div>
        <div className="col-6">
          <div className="text-center">
            <i className="fa-solid fa-business-time text-center"></i>
          </div>
          <h3 className="tfinance mx-5">Trade Finance</h3>
          <p className="finance mx-2">
            Africa Trade Invest (ATI) is a Pan African digital trade and
            investment platform. ATI is dedicated solely towards fundinf and
            inversting in African trade, where investors can erarn a share of pr
            adequate funding and execution to create a sustainable business,
            yielding great and stable returns. <br />
            <Link to className="readmore">
              Get Funding
            </Link>
          </p>
        </div>
      </div>

      <div className="container row mt-5">
        <div className="col-md-6 col-lg-6 col-12">
          <h5 className="tfinance px-5 my-5">
            Traders Of Africa (TOFA) Academy
          </h5>
          <p className="finance px-5">
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum Ex duo eirput mentitum.
          </p>
          <button className="mx-5 btn blogbtn">See more</button>
        </div>
        <div className="col-md-6 col-lg-6 col-12">
          <div className="">
            <img src={peeps} alt="academy" className="mx-auto" />
            <div className=""></div>
          </div>
        </div>
      </div>

      <div className="partners my-2">
        <div className="space">
          <h5 className="text-center">Our Partners</h5>
          <div className="row mx-auto mb-5 partner">
            <div className=" col-sm-2 ">
              <img src={air} alt="airbnb logo" />
            </div>
            <div className=" col-sm-2">
              <img src={hub} alt="hubspot logo" />
            </div>
            <div className=" col-sm-2">
              <img src={goog} alt="google logo" />
            </div>
            <div className=" col-sm-2">
              <img src={micro} alt="microsoft logo" />
            </div>
            <div className=" col-sm-2">
              <img src={wal} alt="walmartlogo" />
            </div>
            <div className=" col-sm-2">
              <img src={fed} alt="fedex logo" />
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-center my-5 fw-bold">Our Stories</h5>

          <div className="grid_items grid-container itemone my-3 ">
            <div className="grid-item">
              <img src={blog} alt="blogg" />
              <p>January 2021</p>
              <p>4 min read</p>
              <h5 className="fw-bold">TOFA Academy takes Mali</h5>
              <Constant limit={200}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                fuga laudantium nobis animi voluptatem reprehenderit repellat
                explicabo, eveniet ex atque ullam laboriosam dolorem, minima, at
                accusamus commodi nemo debitis! Unde.
              </Constant>
            </div>
            <div className="grid-item">
              <img src={blog} alt="blogg" />
              <p>January 2021</p>
              <p>4 min read</p>
              <h5 className="fw-bold">TOFA Academy takes Mali</h5>
              <Constant limit={200}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                fuga laudantium nobis animi voluptatem reprehenderit repellat
                explicabo, eveniet ex atque ullam laboriosam dolorem, minima, at
                accusamus commodi nemo debitis! Unde.
              </Constant>
            </div>
            <div className="grid-item">
              <img src={blog} alt="blogg" />
              <p>January 2021</p>
              <p>4 min read</p>
              <h5 className="fw-bold">TOFA Academy takes Mali</h5>
              <Constant limit={200}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                fuga laudantium nobis animi voluptatem reprehenderit repellat
                explicabo, eveniet ex atque ullam laboriosam dolorem, minima, at
                accusamus commodi nemo debitis! Unde.
              </Constant>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="text-center blogbtn btn">Go to Blog</button>
        </div>
      </div>
    </div>
  );
};

export default SecondLanding;
