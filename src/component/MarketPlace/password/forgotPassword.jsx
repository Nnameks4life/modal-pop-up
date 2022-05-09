import React from "react";
import password from "../../../photos/passwordImg.png";
import { useState } from "react";
import './password.css';
import backIcon from "../../../photos/back-icon.svg";

export default function ForgotPassword() {
  const [passwordError, setPasswordErr] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordInput, setPasswordInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const handlePasswordChange = (evnt) => {
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
    const NewPasswordInput = {
      ...passwordInput,
      [passwordInputFieldName]: passwordInputValue,
    };
    setPasswordInput(NewPasswordInput);
  };
  const handleValidation = (evnt) => {
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
    //for password
    if (passwordInputFieldName === "password") {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;
      const passwordLength = passwordInputValue.length;
      const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
      const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
      const digitsPassword = digitsRegExp.test(passwordInputValue);
      const specialCharPassword = specialCharRegExp.test(passwordInputValue);
      const minLengthPassword = minLengthRegExp.test(passwordInputValue);
      let errMsg = "";
      if (passwordLength === 0) {
        errMsg = "Password is empty";
      } else if (!uppercasePassword) {
        errMsg = "At least one Uppercase";
      } else if (!lowercasePassword) {
        errMsg = "At least one Lowercase";
      } else if (!digitsPassword) {
        errMsg = "At least one digit";
      } else if (!specialCharPassword) {
        errMsg = "At least one Special Characters";
      } else if (!minLengthPassword) {
        errMsg = "At least minumum 8 characters";
      } else {
        errMsg = "";
      }
      setPasswordErr(errMsg);
    }
    // for confirm password
    if (
      passwordInputFieldName === "confirmPassword" ||
      (passwordInputFieldName === "password" &&
        passwordInput.confirmPassword.length > 0)
    ) {
      if (passwordInput.confirmPassword !== passwordInput.password) {
        setConfirmPasswordError("Confirm password is not matched");
      } else {
        setConfirmPasswordError("");
      }
    }
  };
 const handleSubmit =(e)=>{
 e.preventDefault()

  }

  return (
    <section className='w-100 row g-0'  id='password-page'>
        <section className="row g-0">
          
          <div className='col-lg-6' id='password-image'>
          <img src={password} alt="password photo" />
          </div>
        
        <div className="col-lg-6" id='password-part'>
          <div>
          <p className="back-txt">
                    <img src={backIcon} />
                    <a href="#">Back</a>
                  </p>
          </div>
          <main className='password-content'>
          <div className='mt-3'>
            <h3>Change Password</h3>
            <p className='mt-1'>Input your new desired password in the input fields below to create a new password. We strongly advise you to store it safely.</p>
          </div>
          <form onSubmit={handleSubmit} className="password-form">
            <div className="mt-2">
              <label
                htmlFor="password"
                className="form-label"
              >
                Enter New Password
              </label>
              <input
                className="form-control input"
                type="password"
                name="password"
                value={passwordInput.password}
                onChange={handlePasswordChange}
                onKeyUp={handleValidation}
              />
              <p className='error-message'>{passwordError}</p>
            </div>
            <div className="mt-4">
              <label
                htmlFor="confirmPassword"
                className="form-label"
              >
                Confirm New Password
              </label>
              <input
                className="form-control input"
                type="password"
                name="confirmPassword"
                value={passwordInput.confirmPassword}
                onChange={handlePasswordChange}
                onKeyUp={handleValidation}
              />
              <p className='error-message'>{confirmPasswordError}</p>
              
            </div>

            <div className=" mt-4">
              <button className="btn btn-white button">
                Change Password
              </button>
            </div>
          </form>
          </main>
        </div>
        </section>
    </section>
  );
}
