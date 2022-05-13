import axios from "axios";
import React, { useEffect, useState } from "react";
import "./academyform.css";

const AcademyForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    homeAddress: "",
    country: "",
    state: "",
    gender: "",
    trade: "",
    products: "",
    phoneNumber: "",
    attendance: "",
    fileName: "",
    other: "",
    emailAddress: "",
    age: "",
    radio: "",
  });

  const [countries, setCountries] = useState([]);
  

  const handleChange = (e) => {
    console.log("input texts", e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log("contact form", data);
  };

  useEffect(() => {
    const dropMyCountry = () => {
      axios.get("https://restcountries.com/v2/all").then((response) => {
        setTimeout(() => {
          setCountries(response.data);
        }, 3000);
      });
    };
    dropMyCountry();
  }, []);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="first-parag">
          <h3>Apply For Tofa Academy</h3>
          <p className="desired-products">
            Fill in desired product specification below, so our sourcing agents
            can get you your specific needs. Please note that all fields are
            required.
          </p>
        </div>
        <div className="row">
          <div className="col-6 firstname">
            <label className="label">First Name*</label>
            <br />
            <input
              type="text"
              className="names form-control"
              onChange={handleChange}
              value={data.firstName}
              name="firstName"
            />
          </div>
          <div className="col-6 lastname">
            <label>Last Name*</label>
            <br />
            <input
              type="text"
              className="names form-control"
              onChange={handleChange}
              value={data.lastName}
              name="lastName"
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-6 firstname">
            <label>Country*</label>
            <select
              className="form-control names"
              name="country"
              onChange={handleChange}
              id="countries"
            >
              <option>--Please select countries--</option>
              {countries.length > 0 ? (
                countries.map((country, index) => (
                  <option key={index} value={country.name}>
                    {country.name}
                  </option>
                ))
              ) : (
                <option>...fetching countries</option>
              )}
            </select>
          </div>
          <div className="col-6 lastname">
            <label>State*</label>
            <select
              className="form-control names"
              onChange={handleChange}
              name="state"
              id="counties"
            >
              <option>--Please Select State--</option>
              {countries.length > 0 ? (
                countries.map((country, index) => (
                  <option key={index} value={country.capital}>
                    {country.capital}
                  </option>
                ))
              ) : (
                <option>...fetching state</option>
              )}
            </select>
          </div>
        </div>
        <div className="homeaddress">
          <label>Home Address</label>
          <textarea
            className="form-control haddress"
            onChange={handleChange}
            value={data.homeAddress}
            name="homeAddress"
            rows="3"
          />
        </div>
        <div className="row my-5">
          <div className="col-6 firstname">
            <label>Gender*</label>
            <select
              className="form-select names"
              aria-label="Default select example"
              placeholder="please select your gender"
              onChange={handleChange}
              value={data.gender}
              name="gender"
            >
              <option className="text-center">--Please Select your gender--</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-6 lastname">
            <label>Age*</label>
            <input
              type="number"
              className="form-control names"
              onChange={handleChange}
              value={data.age}
              name="age"
            />
          </div>
        </div>
        <p className="px-5">Select Languages You Understand</p>
        <div className="d-flex text-center mx-auto">
          <input
            type="radio"
            className="mx-5"
            onChange={handleChange}
            value="Hausa"
            name="radio"
          />{" "}
          <p>Hausa</p>
          <input
            type="radio"
            className="mx-5"
            onChange={handleChange}
            value="Igbo"
            name="radio"
          />{" "}
          <p>Igbo</p>
          <input
            type="radio"
            className="mx-5"
            onChange={handleChange}
            value="Yoruba"
            name="radio"
          />{" "}
          <p>Yoruba</p>
          <input
            type="radio"
            className="mx-5"
            onChange={handleChange}
            value="English"
            name="radio"
          />{" "}
          <p>English</p>
          <input
            type="radio"
            className="mx-5"
            onChange={handleChange}
            value="French"
            name="radio"
          />{" "}
          <p>French</p>
          <input
            type="radio"
            className="mx-5"
            onChange={handleChange}
            value="Swahili"
            name="radio"
          />{" "}
          <p>Swahili</p>
          <br />
        </div>

        <div className="d-flex">
          <input
            type="radio"
            className="mx-5"
            onChange={handleChange}
            value="Other"
            name="radio"
          />{" "}
          <p>Other</p>
        </div>
        <div className="row">
          <div className="col-6 attend">
            <label>How would you attend the training</label>
            <select
              className="form-select names"
              aria-label="Default select example"
              placeholder="please select your gender"
              onChange={handleChange}
              value={data.attendance}
              name="attendance"
            >
              <option value="Physical">Physical</option>
              <option value="Virtual">Virtual</option>
            </select>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-6 attend">
            <label>Do you currently trade in any product?</label>
            <select
              className="form-select names"
              aria-label="Default select example"
              placeholder="please select your gender"
              onChange={handleChange}
              value={data.trade}
              name="trade"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="col-6 lastname">
            <label>State the products you trade on</label>
            <input
              type="text"
              className="form-control names"
              onChange={handleChange}
              value={data.products}
              name="products"
            />
          </div>
        </div>

        <div className="row my-5">
          <div className="col-6 attend">
            <label htmlFor="name" className="label">
              Phone Number*
            </label>
            <br />
            <input
              type="number"
              className="names form-control"
              onChange={handleChange}
              name={data.phoneNumber}
            />
          </div>
          <div className="col-6 lastname">
            <label htmlFor="email">Email Address*</label>
            <br />
            <input
              type="text"
              className="names form-control"
              onChange={handleChange}
              value={data.emailAddress}
              name="emailAddress"
            />
          </div>
        </div>
        <div className="mx-5">
          <p>Upload a Pic of yourself*</p>
          <input
            type="file"
            id="myFile"
            name="fileName"
            onChange={handleChange}
            value={data.fileName}
          />
        </div>

        <div className="mx-5 my-5">
          <p className="upload">
            Upload a 2 minutes video of you telling us about yourself, your
            dreams, your challenges and where you see yourself in 5 years
          </p>
          <input
            type="file"
            id="myFile"
            name="fileName"
            onChange={handleChange}
          />
        </div>
        <button className="btn btncolor px-5 text-light mx-5" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AcademyForm;
