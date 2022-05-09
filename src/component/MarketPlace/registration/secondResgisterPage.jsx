import React from "react";
import grainMap from "../../../photos/grainMap.jpeg";
import ReCAPTCHA from "react-google-recaptcha";
import backIcon from "../../../photos/back-icon.svg";
import './seller.css'

export default function SecondResgisterPage({ handleChange, registerDetail,handleSubmit, prevStep })
 {
//   const validate = () => {
//     const error = {};
//     const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
//     if (!password) {
//       error.password = "Password is required";
//     } else if (password.length < 9) {
//       error.password = "Password must be greater than 9 character";
//     }
//     if (!confirmPassword) {
//       error.confirmPassword = "Confirm your password";
//     } else if (registerDetail.password !== registerDetail.confirmPassword) {
//       error.confirmPassword = "Password does not match";
//     }
//     return error;
//   };
const prev = (e) => {
  e.preventDefault();
    prevStep();
};
  
  return (
    <section className='w-100' id='seller-page'>

    <div className="row g-0">
    
            <div className="col-lg-6 d-none d-lg-block">
              <div className="buyer-map-img"></div>
            </div>
    
            <div className="col-lg-6">
    
            <main className="row">
              <div className="col-lg-6 col-3" id='header-text'>
                      <p className="back-txt">
                        <img src={backIcon} />
                        <a href="#">Back</a>
                      </p>
                    </div>
                    <div className="col-lg-6 col-9" id='header-text'>
                <p className="info-txt">
                  STEP 02/02
                </p>
                </div>
              </main>
             
              <section className='seller-page'>
                <div className='first-register-content'>
            <div className="">
              <label
                htmlFor="product"
                className="form-label"
              >
                Main Product
              </label>
              <input
                className="form-control input "
                type="text"
                name="product"
                value={registerDetail.mainProduct}
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="address"
                className="form-label"
              >
                Input Address
              </label>
              <input
                className="form-control input "
                type="text"
                name="address"
                value={registerDetail.address}
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="password"
                className="form-label"
              >
                password
              </label>
              <input
                className="form-control input "
                type="password"
                name="password"
                value={registerDetail.password}
                onChange={handleChange}
              />
            </div>

            <div className="mt-3">
              <label
                htmlFor="confirmPassword"
                className="form-label"
              >
                Confirm Password
              </label>
              <input
                className="form-control input "
                type="text"
                name="confirmPassword"
                value={registerDetail.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className='mt-3'>
              <p>We need to confirm you are not a robot</p>
            </div>
            <div className='mt-3'>
              <ReCAPTCHA
                sitekey="6Lci50MfAAAAAC0Y0obH9-flF5s8THmB1wCYAFVr"
                onChange={handleChange}
              />
            </div>
           

           
            <div className="mt-4">
                <input
                  id="remember_me"
                  type="checkbox"
                 
                />
                <label
                  for="remember_me"
                  className='checkbox-label'
                >
                  {" "}
                  I agree to terms & condition{" "}
                </label>
              </div>

            <div className="mt-4">
              <button onClick={handleSubmit} className="btn btn-danger button">
                Register
              </button>
              </div>
              </div>
              </section>
          </div>
        </div>
    </section>
  );
}
