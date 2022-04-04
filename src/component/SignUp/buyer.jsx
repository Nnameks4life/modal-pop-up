import React from "react";
import grainMap from "../../photos/grainMap.jpeg";
import facebook from "../../photos/facebook 1.png";
import { useState } from "react";

export default function Buyer() {
  const [loginDetail, setLoginDetail] = useState({
      fullname:"",
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
    <section className="container  mx-auto">
      <div className="flex justify-center flex-row flex-nowrap">
        <div className="hidden md:block w-full basis-1/2">
          <img src={grainMap} alt="a map made with crops" />
        </div>
        <div className="md:basis-1/2 m-3">
          <div className="flex pt-8 mx-4  flex-row">
            <h5 className="basis-1/2 font-extrabold ">Back</h5>
            <h5 className="basis-1/2 text-1tl font-light">
              Already have an account?{" "}
              <a className="text-primary-orange" href="/signup">
                Login
              </a>
            </h5>
          </div>
          <div className="mx-11 pt-20 text-primary-black text-3tl font-extrabold">
            <h4>Register as Buyer</h4>
          </div>
          <form onSubmit={handleSubmit} className="mx-11 pt-7">
          <div className="mt-3">
              <label
                htmlFor="fullname"
                class="text-sm font-medium leading-none text-gray-700"
              >
                Full Name
              </label>
              <input
                className="w-full  px-4 py-4 rounded border border-black  "
                type="text"
                name="fullname"
                value={loginDetail.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none text-gray-700"
              >
                Email address
              </label>
              <input
                className="w-full  px-4 py-4 rounded border border-black  "
                type="email"
                name="email"
                value={loginDetail.email}
                onChange={handleChange}
              />
            </div>
            <div className="mt-7">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none text-gray-700"
              >
                Password
              </label>
              <input
                className="w-full px-5 py-4 rounded border border-black"
                type="password"
                name="password"
                value={loginDetail.password}
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
                  for="remember_me"
                  className="ml-2 block text-sm leading-5 text-gray-900"
                >
                  {" "}
                  I agree to terms & condition{" "}
                </label>
              </div>
              </div>
            <div className="mt-6 ">
              <button className="w-full text-primary-white inline-flex items-center justify-center px-4 py-3 bg-primary-orange border-transparent rounded-md font-semibold capitalize hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                Register
              </button>
              </div>
              
          </form>
          <div className="mx-11 mt-8">
            <div className="w-full flex items-center justify-between py-5">
              <hr className="w-full text-secondary-white" />
              <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                or
              </p>
              <hr className="w-full text-secondary-white"></hr>
            </div>
          </div>
          <div className="mx-11">
            <button
              aria-label="Continue with google"
              className="mt-13 w-full focus:outline-none px-4 py-3  bg-secondary-white  flex space-x-12 border-transparent rounded-lg "
            >
              <div className="pl-4">
                <svg
                  width="50"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                    fill="#34A853"
                  />
                  <path
                    d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                    fill="#EB4335"
                  />
                </svg>
              </div>
              <div className="pl-8">
                <p className="text-base">Sign in with Google</p>
              </div>
            </button>
          </div>
          <div className="mx-11">
            <button
              aria-label="Continue with google"
              className="flex space-x-12 mt-5 w-full focus:outline-none px-4 py-3  bg-secondary-white  border-transparent rounded-lg "
            >
              <div className="pl-5">
                <img src={facebook}/>
              </div>
              <div className="pl-8">
                <p className="text-base">Sign in with Facebook</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
