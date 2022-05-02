import React from "react";
import password from "../../../photos/passwordImg.png";
import { useState } from "react";

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
    <section className='d-flex w-100'>
        <section className="hidden bg-secondary-white md:block w-full h-screen">
          <div className='flex justify-center pt-32'>
          <img src={password} alt="password photo" />
          </div>
        </section>
        <div className="md:w-full m-3">
          <div className="flex pt-8 mx-4  flex-row">
            <h5 className="basis-1/2 font-extrabold ">Back</h5>
          </div>
          <div className='mx-11'>
            <h2 className='pt-11 font-Mulish text-3tl font-extrabold' >Change Password</h2>
            <p className='pt-7 font-Mulish '>Input your new desired password in the input fields below to create a new password. We strongly advise you to store it safely.</p>
          </div>
          <form onSubmit={handleSubmit} className="mx-9 pt-7">
            <div className="mt-7">
              <label
                htmlFor="password"
                className="text-sm font-Mulish font-medium leading-none text-gray-700"
              >
                Password
              </label>
              <input
                className="w-full px-5 py-4 rounded border border-black"
                type="password"
                name="password"
                value={passwordInput.password}
                onChange={handlePasswordChange}
                onKeyUp={handleValidation}
              />
              <p className='text-primary-red'>{passwordError}</p>
            </div>
            <div className="mt-7">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-Mulish font-medium leading-none text-gray-700"
              >
                Confirm Password
              </label>
              <input
                className="w-full px-5 py-4 rounded border border-black"
                type="password"
                name="confirmPassword"
                value={passwordInput.confirmPassword}
                onChange={handlePasswordChange}
                onKeyUp={handleValidation}
              />
              <p className='text-primary-red'>{confirmPasswordError}</p>
              
            </div>

            <div className="mt-6 ">
              <button className="w-full font-Mulish text-primary-white inline-flex items-center justify-center px-4 py-3 bg-primary-orange border-transparent rounded-md font-semibold capitalize hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                Change Password
              </button>
            </div>
          </form>
        </div>
    </section>
  );
}
