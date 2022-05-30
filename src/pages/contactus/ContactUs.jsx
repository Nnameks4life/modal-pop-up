import React, { useState, useEffect } from "react";
import contact from "../../photos/contactus.png";
import axios from "axios";
import './contact.css'

const ContactUs = () => {
 
  const [contacts, setContacts] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    countries: ""
  });
  const [countries, setCountries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log('contact form', contacts);
  };
  

  const handleChange = (e) => {
    console.log('input texts', e.target.name, e.target.value )
    setContacts({ ...contacts, [e.target.name]: e.target.value });
  };

  const dropCountry = (e) => {
    e.preventDefault(e);
  };

  useEffect(() => {
    const dropCountry = () => {
      axios.get("https://restcountries.com/v2/all").then((response) => {
        // console.log(response.data);
        // setCountries(response.data);
        setTimeout(() => {
          setCountries(response.data);
        }, 3000);
      });
    };

    dropCountry();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-6 contactus py-5">
          <h3 className="mx-5">Contact Us</h3>
          <div className="text-center">
            <img src={contact} alt="contact us" style={{width:'100%'}} />
            <p className="contact" >
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. At nam minimum pondeum. Estvvg the
              stadium audiam animal molestiae te. .{" "}
            </p>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6 contactus py-5 forms ">
          <form className="form py-4" onSubmit={handleSubmit}>
            <select
              className="form-control inputpartner"
              aria-label="Default select example"
            >
              <option>For Partnership</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <br />
            <label className="form-label">Fullname*</label>
            <input
              type="text"
              value={contacts.fullName}
              name='fullName'
              className="form-control formfield"
              onChange={handleChange}
            />
            <label className="form-label">Email Address*</label>
            <input
              type="text"
              className="form-control formfield"
              value={contacts.emailAddress}
              name='emailAddress'
              onChange={handleChange}
            />
            <label className="form-label">Select Country</label>
            <select
              id="countries"
              name="countries"
              className="form-control formfield"
              placeholder="Please select country"
              onChange={handleChange}
            >
              <option >Please Select Country</option>

              {countries.length > 0 ?  countries.map((country, index)=><option key={index} value={country.name}>{country.name}</option>): <option>fetching countries...</option>}
              
            </select>
            <br />
            <label className="form-label">Phone No*</label>
            <input
              type="number"
              value={contacts.phoneNumber}
              className="form-control formfield"
              name='phoneNumber'
              onChange={handleChange}
            />
            <button className="btnsubmit mt-3 btn formfield text-light fw-bold" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
