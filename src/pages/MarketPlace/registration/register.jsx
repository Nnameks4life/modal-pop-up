import React from "react";
import buyerIcon from "../../../photos/buyerIcon.png";
import sellerIcon from "../../../photos/sellerIcon.png";
import backIcon from "../../../photos/back-icon.svg";
import actionIcon from "../../../photos/icons/arrow-right.svg";
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
                  <svg viewBox="0 0 50 48" version="1.1">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="shape" transform="translate(-687.000000, -235.000000)" stroke="#DD4F05" stroke-width="2">
                              <g id="Group" transform="translate(625.000000, 178.000000)">
                                  <g id="user-icon" transform="translate(63.000000, 58.000000)">
                                      <polygon id="Path" fill="#FFFFFF" points="0.4481 17.3475 24 0.23607 47.5519 17.3475 38.5559 45.0344 9.4441 45.0344"></polygon>
                                      <path d="M18,33 C18,30.7909 20.6863,29 24,29 C27.3137,29 30,30.7909 30,33" id="Path" stroke-linecap="round" stroke-linejoin="round"></path>
                                      <path d="M24,26 C26.2091,26 28,24.2091 28,22 C28,19.7909 26.2091,18 24,18 C21.7909,18 20,19.7909 20,22 C20,24.2091 21.7909,26 24,26 Z" id="Path" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </svg>
                  <div className="ml-2">
                    {" "}
                    <h4>Register as Buyer</h4>
                    <p>Access over 16,000 suppliers across Africa</p>
                  </div>
                  <img className="action-icon align-center" src={actionIcon} />
                </a>
              </div>

              <div className="register-content">
                <a href="/seller" className="d-flex">
                <svg viewBox="0 0 50 48" version="1.1">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="" transform="translate(-624.000000, -177.000000)">
                            <g id="Group" transform="translate(625.000000, 178.000000)">
                                <g id="biz-icon">
                                    <polygon id="Path" stroke="#DD4F05" stroke-width="2" fill="#FFFFFF" points="0.4481 17.3475 24 0.23607 47.5519 17.3475 38.5559 45.0344 9.4441 45.0344"></polygon>
                                    <path class="shape" d="M17.3333,21.6665 C16.8731,21.6665 16.5,22.0396 16.5,22.4998 L16.5,30.8332 C16.5,31.2934 16.8731,31.6665 17.3333,31.6665 L30.6666,31.6665 C31.1269,31.6665 31.5,31.2934 31.5,30.8332 L31.5,22.4998 C31.5,22.0396 31.1269,21.6665 30.6666,21.6665 L17.3333,21.6665 Z M14.8333,22.4998 C14.8333,21.1191 15.9526,19.9998 17.3333,19.9998 L30.6666,19.9998 C32.0474,19.9998 33.1666,21.1191 33.1666,22.4998 L33.1666,30.8332 C33.1666,32.2139 32.0474,33.3332 30.6666,33.3332 L17.3333,33.3332 C15.9526,33.3332 14.8333,32.2139 14.8333,30.8332 L14.8333,22.4998 Z" id="Shape" fill="#DD4F05"></path>
                                    <path class="shape" d="M20.5655,17.3987 C21.0344,16.9299 21.6703,16.6665 22.3333,16.6665 L25.6666,16.6665 C26.3297,16.6665 26.9656,16.9299 27.4344,17.3987 C27.9033,17.8676 28.1666,18.5035 28.1666,19.1665 L28.1666,32.4998 C28.1666,32.9601 27.7935,33.3332 27.3333,33.3332 C26.8731,33.3332 26.5,32.9601 26.5,32.4998 L26.5,19.1665 C26.5,18.9455 26.4122,18.7335 26.2559,18.5772 C26.0996,18.421 25.8877,18.3332 25.6666,18.3332 L22.3333,18.3332 C22.1123,18.3332 21.9003,18.421 21.7441,18.5772 C21.5878,18.7335 21.5,18.9455 21.5,19.1665 L21.5,32.4998 C21.5,32.9601 21.1269,33.3332 20.6666,33.3332 C20.2064,33.3332 19.8333,32.9601 19.8333,32.4998 L19.8333,19.1665 C19.8333,18.5035 20.0967,17.8676 20.5655,17.3987 Z" id="Path" fill="#DD4F05"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                  <div className="ml-2">
                    <h4>Register as Seller</h4>
                    <p>Get access to local and international buyers</p>
                  </div>
                  <img className="action-icon align-center" src={actionIcon} />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
