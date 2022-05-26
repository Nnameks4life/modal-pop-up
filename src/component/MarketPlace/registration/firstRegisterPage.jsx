import React from "react";
import backIcon from "../../../photos/back-icon.svg";
import LogoWhite from "../../../photos/logo-white.png";
import "./seller.css";

export default function FirstRegisterPage({
  handleChange,
  registerDetail,
  nextStep,
}) {
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <section className="w-100" id="seller-page">
      <div className="row g-0">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="map-img">
            <img className="auth-logo" src={LogoWhite} />
          </div>
        </div>

        <div className="col-lg-6" id="register-section">
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

          <section className="seller-page">
            <h3>Register as Seller</h3>
            <div className="first-register-content">
              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor="fullname" className="form-label">
                    First name
                  </label>
                  <input
                    className="form-control input"
                    type="text"
                    name="firstName"
                    value={registerDetail.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    className="form-control input"
                    type="text"
                    name="lastName"
                    value={registerDetail.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  className="form-control input"
                  type="email"
                  name="email"
                  value={registerDetail.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone No
                </label>
                <input
                  className="form-control input"
                  type="tel"
                  name="phoneNumber"
                  value={registerDetail.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  className="form-control input"
                  type="text"
                  name="country"
                  value={registerDetail.selectCountry}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="region" className="form-label">
                  Select Region
                </label>
                <select
                  className="form-control input "
                  type="text"
                  name="region"
                  value={registerDetail.selectRegion}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-4">
                <button
                  onClick={submitFormData}
                  className="btn btn-danger button"
                >
                  Next
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
