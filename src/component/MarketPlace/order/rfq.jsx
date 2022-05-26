import React from "react";
import { useState } from "react";
import './rfq.css'
import MarketNav from '../homepage/marketNav'


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
    <MarketNav/>
    <section className=''>
      <div className='rfq-page'>
      <h2 className=''>Enter Product Specifications</h2>
      <p className=''>
        Fill in desired product specification below, so our sourcing agents can
        get you your specific needs. Please note that all fields are required.
      </p>
      <form className='mt-4'>
        <div>
          <label
            htmlFor="product"
            className="form-label"
          >
            What product are you looking for?
          </label>
          <input
           className="form-control input"
            name="product"
            value={rfqDetail.product}
            onChange={handleChange}
          />
        </div>
        <div className='mt-4'>
          <label
            className="form-label"
            htmlFor="description"
          >
            Give brief specifications about your desired products
          </label>
          <textarea
         className="form-control"
         id='text-area'
            name="description"
            value={rfqDetail.description}
            onChange={handleChange}
          >
            {" "}
          </textarea>
        </div>
        <section className='rfq-column mt-4'>
          <div>
            <label
               className="form-label"
              htmlFor="quantity"
            >
              Quantity required
            </label>
            <input
              className="form-control input"
              name="quantity"
              value={rfqDetail.quantity}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
               className="form-label"
              htmlFor="unit"
            >
              Unit
            </label>
            <input
              className="form-control input"
              name="unit"
              value={rfqDetail.unit}
              onChange={handleChange}
            />
          </div>
          <div className='mt-4'>
            <label
              className="form-label"
              htmlFor="price"
            >
              Target Price (USD)
            </label>
            <input
             className="form-control input"
              name="price"
              value={rfqDetail.price}
              onChange={handleChange}
            />
          </div>
          <div className='mt-4'>
            <label
               className="form-label"
              htmlFor="port"
            >
              Destination Port
            </label>
            <input
              className="form-control input"
              name="port"
              value={rfqDetail.port}
              onChange={handleChange}
            />
          </div>
          <div className='mt-4'>
            <label
              className="form-label"
              htmlFor="tradeTerms"
            >
              Terms of Trade
            </label>
            <input
              className="form-control input"
              name="tradeTerms"
              value={rfqDetail.tradeTerms}
              onChange={handleChange}
            />
          </div>
          <div className='mt-4'>
            <label
               className="form-label"
              htmlFor="paymentTerms"
            >
              Payment Terms*
            </label>
            <input
              className="form-control input"
              name="paymentTerms"
              value={rfqDetail.paymentTerms}
              onChange={handleChange}
            />
          </div>
          </section>
        <h3 className='mt-5'>Contact Information</h3>
        <div className='mt-4'>
          <label
            className="form-label"
            htmlFor="fullname"
          >
            Full Name*
          </label>
          <input
            className="form-control input"
            name="fullname"
            value={rfqDetail.fullname}
            onChange={handleChange}
          />
        </div>
        <section className="rfq-column mt-4">
          <div>
            <label
              className="form-label"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              className="form-control input"
              name="phoneNumber"
              value={rfqDetail.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
               className="form-label"
              htmlFor="email"
            >
              Email
            </label>
            <input
             className="form-control input"
              name="email"
              value={rfqDetail.email}
              onChange={handleChange}
            />
          </div>
        </section>
        <button className='rfq-button mt-4'>Submit Request</button>
      </form>
    </div>
    </section>
    
</>
  );
}
