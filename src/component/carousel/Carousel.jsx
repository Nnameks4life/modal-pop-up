import React from "react";
import farmer from "../../photos/farm.jpg";
import mowing from "../../photos/tractor.png";
import maiz from "../../photos/maize.png";
import egus from "../../photos/egusi.png";
import cash from "../../photos/cashew.png";
import air from "../../photos/airbnb.png";
import hub from "../../photos/hubspot.png";
import micro from "../../photos/microsoft.png";
import goog from "../../photos/google.png";
import wal from "../../photos/walmart.png";
import fed from "../../photos/fedex.png";
import man from "../../photos/manspic.png";
import peeps from '../../photos/people.png'
import { Link } from "react-router-dom";
import '../../pages/landing/landing.css'

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={farmer} className="d-block w-100" alt="grainMap" />
          </div>
          <div className="carousel-item">
            <img src={farmer} className="d-block w-100" alt="grainMap" />
          </div>
          <div className="carousel-item">
            <img src={farmer} className="d-block w-100" alt="grainMap" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="d-flex justify-content-between mt-5 px-5">
        <div>
          <img src={mowing} alt="tractor" />
        </div>
        <div className="py-5">
          <h3 className="text-center px-5">Creating Visibility and Access</h3>
          <p className="text-center px-5 tractortexts">
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
      <div className="mt-5">
        <h3 className="products">Our Products</h3>

        <p className="product">
          You can buy our African Sourced and manufactured products from the
          comfort of your home
        </p>
      </div>

      <div class="container event-container">
        <div class="col-12 col-md-12 col-sm-1"></div>
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

      <div className="row">
        <div className="col-6">
          <div className="text-center">
            <i className="fa-solid fa-business-time text-center"></i>
          </div>
          <h3 className="psourcing text-center">Product Sourcing</h3>
          <p className="sourcing px-5">
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
          <h3 className="tfinance text-center">Trade Finance</h3>
          <p className="finance px-5">
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
      <div className="row mt-5">
        <div className="col-5">
          <h5 className="tfinance px-5">Traders Of Africa (TOFA) Academy</h5>
          <p className="finance px-5">
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum Ex duo eirput mentitum.
          </p>
          <button className="blogbtn">See more</button>
        </div>
        <div className="col-7">
          <div className="position-relative">
          <img src={peeps} alt="academy" className="leftpics"/>
          <div className="position-absolute">
          <div className="leftpic"/>
          </div>
          </div>
        </div>
      </div>

      <div className="partners">
        <h5 className="text-center mb-5">Our Partners</h5>
        <div className="row mx-auto mb-5 partner">
          <div className="col-2">
            <img src={air} alt="airbnb logo" />
          </div>
          <div className="col-2">
            <img src={hub} alt="hubspot logo" />
          </div>
          <div className="col-2">
            <img src={goog} alt="google logo" />
          </div>
          <div className="col-2">
            <img src={micro} alt="microsoft logo" />
          </div>
          <div className="col-2">
            <img src={wal} alt="walmartlogo" />
          </div>
          <div className="col-2">
            <img src={fed} alt="fedex logo" />
          </div>
        </div>
        <div>
          <h5 className="text-center my-5">Our Stories</h5>
          <div className="row mx-auto mb-5 story">
            <div className="col-4 card px-2">
              <img src={man} alt="man" />
              <p className="date mt-3">January 2021</p>
              <p className="date">4 mins read</p>
              <h5 className="mali">TOFA Academy takes Mali</h5>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur give adipiscing elit.
                Risus, sit imperdiet risus, loving venenatis at. Lorem ipsum
                dolor sit amet, in at consectetur give adipiscing elit. Risus,
                sit imperdiet risus, loving venenatis at.{" "}
              </p>
              <Link to className="readmore">
                Read more
              </Link>
            </div>
            <div className="col-4 card">
              <img src={man} alt="man" />
              <p className="date mt-3">January 2021</p>
              <p className="date">4 mins read</p>
              <h5 className="mali">TOFA Academy takes Mali</h5>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur give adipiscing elit.
                Risus, sit imperdiet risus, loving venenatis at. Lorem ipsum
                dolor sit amet, in at consectetur give adipiscing elit. Risus,
                sit imperdiet risus, loving venenatis at.{" "}
              </p>
              <Link to className="readmore">
                Read more
              </Link>
            </div>
            <div className="col-4 card mx-">
              <img src={man} alt="man" />
              <p className="date mt-3">January 2021</p>
              <p className="date">4 mins read</p>
              <h5 className="mali">TOFA Academy takes Mali</h5>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur give adipiscing elit.
                Risus, sit imperdiet risus, loving venenatis at. Lorem ipsum
                dolor sit amet, in at consectetur give adipiscing elit. Risus,
                sit imperdiet risus, loving venenatis at.{" "}
              </p>
              <Link to className="readmore">
                Read more
              </Link>
            </div>
          </div>
          <div className="text-center">
            <button className="blogbtn">Go to Blog</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
