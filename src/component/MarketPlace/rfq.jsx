import React from "react";
import { useState } from "react";

import Nav from "../LandingPage/nav";

export default function Rfq() {
  const [rfqDetail, setRfqDetail] = useState({
    product: "",
    description: "",
    quantity: "",
    unit: "",
    price: "",
    port: "",
    tradeTerms: "",
    paymentTerms: "",
    fullname: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setRfqDetail({ ...rfqDetail, [e.target.name]: [e.target.value] });
  };
  return (
    <>
    <Nav/>
    <section className='bg-secondary-white md:p-32'>
      <div className='bg-primary-white p-12'>
      <h2 className='text-4tl font-Mulish font-bold text-primary-black'>Enter Product Specifications</h2>
      <p className='text-2tl font-light font-Mulish pt-8'>
        Fill in desired product specification below, so our sourcing agents can
        get you your specific needs. Please note that all fields are required.
      </p>
      <form className='pt-10'>
        <div>
          <label
            htmlFor="product"
            className="text-2tl font-light font-Mulish  leading-none text-gray-700"
          >
            What product are you looking for?
          </label>
          <input
            className="w-full px-5 py-4 rounded border border-black"
            name="product"
            value={rfqDetail.product}
            onChange={handleChange}
          />
        </div>
        <div className='pt-5'>
          <label
            className="text-2tl font-light font-Mulish leading-none text-gray-700"
            htmlFor="description"
          >
            Give brief specifications about your desired products
          </label>
          <textarea
          className="w-full h-40 rounded border border-black"
            name="description"
            value={rfqDetail.description}
            onChange={handleChange}
          >
            {" "}
          </textarea>
        </div>
        <section className='pt-5 grid grid-rows-3 grid-flow-col gap-4'>
          <div>
            <label
              className="font-Mulish text-2tl font-light leading-none text-gray-700"
              htmlFor="quantity"
            >
              Quantity required
            </label>
            <input
              className="w-full px-5 py-4 rounded border border-black"
              name="quantity"
              value={rfqDetail.quantity}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="font-Mulish text-2tl font-light leading-none text-gray-700"
              htmlFor="unit"
            >
              Unit
            </label>
            <input
              className="w-full px-5 py-4 rounded border border-black"
              name="unit"
              value={rfqDetail.unit}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="font-Mulish text-2tl font-light leading-none text-gray-700"
              htmlFor="price"
            >
              Target Price (USD)
            </label>
            <input
              className="w-full px-5 py-4 rounded border border-black"
              name="price"
              value={rfqDetail.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="font-Mulish text-2tl font-light leading-none text-gray-700"
              htmlFor="port"
            >
              Destination Port
            </label>
            <input
              className="w-full px-5 py-4 rounded border border-black"
              name="port"
              value={rfqDetail.port}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="font-Mulish text-2tl font-light leading-none text-gray-700"
              htmlFor="tradeTerms"
            >
              Terms of Trade
            </label>
            <input
              className="w-full px-5 py-4 rounded border border-black"
              name="tradeTerms"
              value={rfqDetail.tradeTerms}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="font-Mulish text-2tl font-light leading-none text-gray-700"
              htmlFor="paymentTerms"
            >
              Payment Terms*
            </label>
            <input
              className="w-full px-5 py-4 rounded border border-black"
              name="paymentTerms"
              value={rfqDetail.paymentTerms}
              onChange={handleChange}
            />
          </div>
          </section>
        <h3 className='pt-20 text-4tl font-Mulish font-bold'>Contact Information</h3>
        <div className='pt-5'>
          <label
            className="font-Mulish text-2tl font-light leading-none text-gray-700"
            htmlFor="fullname"
          >
            Full Name*
          </label>
          <input
            className="w-full px-5 py-4 rounded border border-black"
            name="fullname"
            value={rfqDetail.fullname}
            onChange={handleChange}
          />
        </div>
        <section className="pt-8 pb-8 grid grid-rows-1 grid-flow-col gap-4">
          <div>
            <label
              className="font-Mulish text-2tl font-light leading-none text-gray-700"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              className="w-full px-5 py-4 rounded border border-black"
              name="phoneNumber"
              value={rfqDetail.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="font-Mulish text-2tl font-light leading-none text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-5 py-4 rounded border border-black"
              name="email"
              value={rfqDetail.email}
              onChange={handleChange}
            />
          </div>
        </section>
        <button className='text-primary-white items-center justify-center px-7 py-4 bg-primary-orange border-transparent rounded-sm font-semibold capitalize hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition'>Submit Request</button>
      </form>
    </div>
    </section>
    
</>
  );
}
