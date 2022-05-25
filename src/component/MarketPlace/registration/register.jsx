import React from "react";
import buyerIcon from "../../../photos/buyerIcon.png";
import sellerIcon from "../../../photos/sellerIcon.png";
import backIcon from "../../../photos/back-icon.svg";
import LogoWhite from "../../../photos/logo-white.png";
import "./register.css";

export default function Register() {
  return (
    <section className="w-100" id="register-page">
      <div className="row g-0">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="map-img">
            <img className="auth-logo" src={LogoWhite} />
          </div>
        </div>
        <div className="col-lg-6">
          <main className="row m-3">
            <div className="col-lg-6 col-3" id="header-text">
              <p className="back-txt d-flex">
                <img src={backIcon} />
                <a href="#">Back</a>
              </p>
            </div>
            <div className="col-lg-6 col-9" id="header-text">
              <p className="info-txt">
                Already have an account?{" "}
                <a className="" href="/login">
                  Login
                </a>
              </p>
            </div>
          </main>
          <div className="registration-content">
            <h3>Join for free</h3>
            <p className="">
              To begin your journey, select your preferred account.
            </p>
            <section className="register-options">
              <div className="register-content">
                <a href="/buyer" className="d-flex">
                  {/* <img className="" src={buyerIcon} alt="buyer icon" /> */}
                  <span className="icon-user-icon"></span>
                  <svg width="50px" height="48px" viewBox="0 0 50 48" version="1.1">
                      <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="" transform="translate(-281.000000, -161.000000)">
                              <rect id="Rectangle-Copy-2" fill="" x="276" y="155" width="60" height="60"></rect>
                              <g id="user-icon" transform="translate(282.000000, 162.000000)" fill="#DD4F05">
                                  <path d="M48.7274703,16.9655332 L24,-0.999997305 L-0.727470295,16.9655332 L8.71755699,46.0344 L39.282443,46.0344 L48.7274703,16.9655332 Z M24,1.472 L46.376,17.729 L37.829,44.034 L10.17,44.034 L1.623,17.729 L24,1.472 Z" id="Path" fill-rule="nonzero"></path>
                                  <path d="M17.7204,27.8869 C18.5018,27.1055 19.5616,26.6665 20.6667,26.6665 L27.3333,26.6665 C28.4384,26.6665 29.4982,27.1055 30.2796,27.8869 C31.061,28.6683 31.5,29.7281 31.5,30.8332 L31.5,32.4998 C31.5,32.9601 31.1269,33.3332 30.6667,33.3332 C30.2064,33.3332 29.8333,32.9601 29.8333,32.4998 L29.8333,30.8332 C29.8333,30.1701 29.5699,29.5342 29.1011,29.0654 C28.6323,28.5966 27.9964,28.3332 27.3333,28.3332 L20.6667,28.3332 C20.0036,28.3332 19.3677,28.5966 18.8989,29.0654 C18.4301,29.5342 18.1667,30.1701 18.1667,30.8332 L18.1667,32.4998 C18.1667,32.9601 17.7936,33.3332 17.3333,33.3332 C16.8731,33.3332 16.5,32.9601 16.5,32.4998 L16.5,30.8332 C16.5,29.7281 16.939,28.6683 17.7204,27.8869 Z" id="Path"></path>
                                  <path d="M24,18.3332 C22.6193,18.3332 21.5,19.4525 21.5,20.8332 C21.5,22.2139 22.6193,23.3332 24,23.3332 C25.3807,23.3332 26.5,22.2139 26.5,20.8332 C26.5,19.4525 25.3807,18.3332 24,18.3332 Z M19.8333,20.8332 C19.8333,18.532 21.6988,16.6665 24,16.6665 C26.3012,16.6665 28.1666,18.532 28.1666,20.8332 C28.1666,23.1344 26.3012,24.9998 24,24.9998 C21.6988,24.9998 19.8333,23.1344 19.8333,20.8332 Z" id="Shape"></path>
                              </g>
                          </g>
                      </g>
                  </svg>
                  <div className="ml-2">
                    {" "}
                    <h4>Register as Buyer</h4>
                    <p>Access over 16,000 suppliers across Africa</p>
                  </div>
                </a>
              </div>

              <div className="register-content">
                <a href="/seller" className="d-flex">
                  {/* <img src={sellerIcon} alt="seller icon" className="h-3" /> */}
                  <span className="icon-biz-icon"></span>
                  <div className="ml-2">
                    <h4>Register as Seller</h4>
                    <p>Get access to local and international buyers</p>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
