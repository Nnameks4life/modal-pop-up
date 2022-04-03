import React from "react";
import grainMap from "../../photos/grainMap.jpeg";

export default function SecondResgisterPage ({handleChange, registerDetail}) {
  return (
    <section className="container  mx-auto">
      <div className="flex justify-center flex-row flex-nowrap">
        <div className="w-full basis-1/2">
          <img src={grainMap} alt="a map made with crops" />
        </div>
        <div className="basis-1/2 m-3">
          <div className="mx-11 pt-20 xl:text-primary-black text-3tl font-extrabold">
            <h4 className='md:text-primary-orange'>Register as Seller</h4>
          </div>
          <div className="mx-11 pt-7">
          <div className="mt-3">
              <label
                htmlFor="product"
                className="text-sm font-medium leading-none text-gray-700"
              >
              Main Product
              </label>
              <input
                className="w-full  px-4 py-4 rounded border border-black  "
                type="text"
                name="product"
                value={registerDetail. mainProduct}
                onChange={handleChange}
              />
               </div>
               <div className="mt-3">
              <label
                htmlFor=" address"
                className="text-sm font-medium leading-none text-gray-700"
              >
             Input Address
              </label>
              <input
                className="w-full  px-4 py-4 rounded border border-black  "
                type="text"
                name=" address"
                value={registerDetail. address}
                onChange={handleChange}
              />
               </div>
               <div className="mt-3">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none text-gray-700"
              >
               password
              </label>
              <input
                className="w-full  px-4 py-4 rounded border border-black  "
                type="password"
                name=" password"
                value={registerDetail.password}
                onChange={handleChange}
              />
            </div>
            
               <div className="mt-3">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium leading-none text-gray-700"
              >
              Confirm Password
              </label>
              <input
                className="w-full  px-4 py-4 rounded border border-black  "
                type="text"
                name="confirmPassword"
                value={registerDetail.confirmPassword}
                onChange={handleChange}
              />
               </div>
    
            
            
            </div>
           
            <div className="mt-6 ">
              <a href='/next' className="w-full text-primary-white inline-flex items-center justify-center px-4 py-3 bg-primary-orange border-transparent rounded-md font-semibold capitalize hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                Next
              </a>
              </div>
          
        
              </div>
      </div>
    </section>
  );
}

