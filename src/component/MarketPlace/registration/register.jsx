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
                  <img className="" src={buyerIcon} alt="buyer icon" />
                  <div className="ml-2">
                    {" "}
                    <h4>Register as Buyer</h4>
                    <p>Access over 16,000 suppliers across Africa</p>
                  </div>
                </a>
              </div>

              <div className="register-content">
                <a href="/seller" className="d-flex">
                  <img src={sellerIcon} alt="seller icon" className="h-3" />
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
