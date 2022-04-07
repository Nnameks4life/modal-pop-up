import React from "react";
import grainMap from "../../photos/grainMap.jpeg";
import ReCAPTCHA from "react-google-recaptcha";

export default function SecondResgisterPage({ handleChange, registerDetail,handleSubmit })
 {
  const validate = () => {
    const error = {};
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if (!password) {
      error.password = "Password is required";
    } else if (password.length < 9) {
      error.password = "Password must be greater than 9 character";
    }
    if (!confirmPassword) {
      error.confirmPassword = "Confirm your password";
    } else if (registerDetail.password !== registerDetail.confirmPassword) {
      error.confirmPassword = "Password does not match";
    }
    return error;
  };
  
  return (
    <section className="container  mx-auto">
      <div className="flex justify-center flex-row flex-nowrap">
        <div className="hidden md:block w-full basis-1/2">
          <img src={grainMap} alt="a map made with crops" />
        </div>
        <div className="md:basis-1/2 m-3">
          <div className="mx-11 pt-7">
            <div className="mt-6">
              <label
                htmlFor="product"
                className="text-sm font-medium leading-none text-gray-700"
              >
                Main Product
              </label>
              <input
                className="w-full mt-3 px-4 py-4 rounded border border-black  "
                type="text"
                name="product"
                value={registerDetail.mainProduct}
                onChange={handleChange}
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="address"
                className="text-sm font-medium leading-none text-gray-700"
              >
                Input Address
              </label>
              <input
                className="w-full mt-3  px-4 py-4 rounded border border-black  "
                type="text"
                name="address"
                value={registerDetail.address}
                onChange={handleChange}
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none text-gray-700"
              >
                password
              </label>
              <input
                className="w-full mt-3  px-4 py-4 rounded border border-black  "
                type="password"
                name="password"
                value={registerDetail.password}
                onChange={handleChange}
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium leading-none text-gray-700"
              >
                Confirm Password
              </label>
              <input
                className="w-full mt-3 px-4 py-4 rounded border border-black  "
                type="text"
                name="confirmPassword"
                value={registerDetail.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className='pt-6 text-1tl'>
              <p>We need to confirm you are not a robot</p>
            </div>
            <div className='pt-4'>
              <ReCAPTCHA
                sitekey="6Lci50MfAAAAAC0Y0obH9-flF5s8THmB1wCYAFVr"
                onChange={handleChange}
              />
            </div>
           

            <div className="mt-10 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm leading-5 text-gray-900"
                >
                  {" "}
                  I agree to terms & condition{" "}
                </label>
              </div>
            </div>
            <div className="mt-6 ">
              <button onClick={handleSubmit} className="w-full mt-8 text-primary-white inline-flex items-center justify-center px-4 py-3 bg-primary-orange border-transparent rounded-md font-semibold capitalize hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                Register
              </button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
