import React from "react";
import facebook from "../../../photos/facebook 1.png";
import { useState } from "react";
import "./buyer.css";
import backIcon from "../../../photos/back-icon.svg";
import facebookImg from "../../../photos/fb.svg";
import googleImg from "../../../photos/gl.svg";
import LogoWhite from "../../../photos/logo-white.png";

export default function Buyer() {
  const [loginDetail, setLoginDetail] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setLoginDetail({ ...loginDetail, [e.target.name]: [e.target.value] });
  };
  return (
    <section className="w-100" id="buyer-page">
      <div className="row g-0">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="map-img">
            <img className="auth-logo" src={LogoWhite} />
          </div>
        </div>

        <div className="col-lg-6" id="buyer-section">
          <main className="row m-3">
            <div className="col-lg-6 col-3" id="header-text">
              <p className="back-txt d-flex">
                <img src={backIcon} />
                <a href="#">Back</a>
              </p>
            </div>
            <div className="col-lg-6 col-9" id="header-text">
              <p className="info-txt">
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </main>

          <section className="all-content">
            <h3>Register as Buyer</h3>

            <form onSubmit={handleSubmit} className="buyer-form">
              <div>
                <label htmlFor="fullname" className="form-label">
                  Your fullname
                </label>
                <input
                  className="form-control input"
                  type="text"
                  name="fullname"
                  value={loginDetail.fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  className="form-control input"
                  type="email"
                  name="email"
                  value={loginDetail.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  className="form-control input"
                  type="password"
                  name="password"
                  value={loginDetail.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div className="mt-4 d-flex">
                  <input id="remember_me" type="checkbox" />
                  <label for="remember_me" className="checkbox-label">
                    {" "}
                    I agree to terms & condition{" "}
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <button type="submit" className="btn btn-danger button">
                  Register
                </button>
              </div>
            </form>

            <p className="divider">
              <span>Or</span>
            </p>
            <div className="social-btns">
              <button className="btn btn-white button">
                <span>
                  <img src={facebookImg} />
                </span>
                Sign in with Google
              </button>
              <button className="btn btn-white button">
                <span>
                  <img src={googleImg} />
                </span>
                Sign in with Facebook
              </button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
