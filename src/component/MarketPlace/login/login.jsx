import React from "react";
import grainMap from "../../../photos/grainMap.jpeg";
import { useState } from "react";
import "../login/login.css";
import facebookImg from "../../../photos/fb.svg";
import googleImg from "../../../photos/gl.svg";
import backIcon from "../../../photos/back-icon.svg";

export default function Login() {
  const [loginDetail, setLoginDetail] = useState({
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
    <section id="user-auth">
      <div className="row g-0">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="user-auth-lhs"></div>
        </div>
        <div className="col-lg-6">
          <div className="user-auth-rhs">
            <div className="user-nav">
              <div className="row">
                <div className="col-lg-6 col-3">
                  <p className="back-txt">
                    <img src={backIcon} />
                    <a href="#">Back</a>
                  </p>
                </div>
                <div className="col-lg-6 col-9">
                  <p className="auth-info-txt">
                    Don’t have an account?
                    <span>
                      <a href="#">SignUp</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="user-auth-wrap">
              <h2>Welcome back</h2>
              <form className="auth-form">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control input"
                    id="exampleInputEmail1"
                    value={loginDetail.email}
                    onChange={handleChange}
                    placeholder="Enter email address..."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control input"
                    id="exampleInputPassword1"
                    value={loginDetail.password}
                    onChange={handleChange}
                    placeholder="Enter password..."
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-danger button">
                  Login
                </button>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
