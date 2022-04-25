import React from "react";
import grainMap from "../../photos/grainMap.jpeg";

export default function FirstRegisterPage({handleChange, registerDetail, nextStep}) {

  const submitFormData = (e) => {
    e.preventDefault();
      nextStep();
  };
  return (
    <section className="flex">
        <div className="hidden md:block w-full basis-1/2 m-0 p-0">
          <img className='ml-0 mr-0 mb-0 p-0' src={grainMap} alt="a map made with crops" />
        </div>
        <div className="md:basis-1/2 m-3">
        <div className="flex pt-2 justify-between font-Mulish">
            <h5 className="font-extrabold ">Back</h5>
            <h5 className=" text-2tl font-light font-Mulish">
              STEP 1/2
            </h5>
          </div>
          <div className="mx-11 font-Mulish pt-8  text-primary-black text-3tl font-extrabold">
            <h4 >Register as Seller</h4>
          </div>
          <div className="mx-11 pt-5">
            <section className='flex justify-between mt-3'>
          <div className="">
              <label
                htmlFor="fullname"
                className="text-sm font-Mulish font-medium leading-none text-gray-700"
              >
               FirstName
              </label>
              <input
                className="w-full  px-4 py-4 rounded border border-black  "
                type="text"
                name="firstName"
                value={registerDetail.firstName}
                onChange={handleChange}
              />
               </div>
               <div className="ml-3">
              <label
                htmlFor="lastName"
                className="text-sm font-Mulish font-medium leading-none text-gray-700"
              >
              LastName
              </label>
              <input
                className="w-full  px-4 py-4 rounded border border-black  "
                type="text"
                name="lastName"
                value={registerDetail.lastName}
                onChange={handleChange}
              />
               </div>
               </section>
               <div className="mt-5">
              <label
                htmlFor="email"
                className="text-sm font-Mulish font-medium leading-none text-gray-700"
              >
                Email address
              </label>
              <input
                className="w-full  px-4 py-4 rounded border border-black  "
                type="email"
                name="email"
                value={registerDetail.email}
                onChange={handleChange}
              />
            </div>
            
               <div className="mt-5">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-Mulish font-medium leading-none text-gray-700"
              >
              Phone No
              </label>
              <input
                className="w-full  px-4 py-4 rounded border border-black  "
                type="text"
                name="phoneNumber"
                value={registerDetail.phoneNumber}
                onChange={handleChange}
              />
               </div>
               <div className="mt-5">
              <label
                htmlFor="country"
                className="text-sm font-Mulish font-medium leading-none text-gray-700"
              >
              Country
              </label>
              <input
                className="w-full  px-4 py-4 rounded border border-black  "
                type="text"
                name="country"
                value={registerDetail.selectCountry}
                onChange={handleChange}
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="region"
                className="text-sm font-Mulish font-medium leading-none text-gray-700"
              >
             Select Region
              </label>
              <select
                className="w-full  px-4 py-4 rounded border border-black  "
                type="text"
                name="region"
                value={registerDetail.selectRegion}
                onChange={handleChange}
              />
            </div>
            
            </div>
           
            <div className="mt-11">
              <button onClick={submitFormData} className="w-full font-Mulish text-primary-white inline-flex items-center justify-center px-4 py-3 bg-primary-orange border-transparent rounded-md font-semibold capitalize hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                Next
              </button>
              </div>
          
        
              </div>
    </section>
  );
}

