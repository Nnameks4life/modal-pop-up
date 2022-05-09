import React, { useState, useEffect } from "react";
import contact from "../../photos/contactus.png";
import axios from "axios";

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
    <div className="container-fluid ">
      <div className="row">
        <div className="col-6 contactus text-center">
          <h3>Contact Us</h3>
          <div className="text-center">
            <img src={contact} alt="contact us" />
            <p className="contact">
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. At nam minimum pondeum. Estvvg the
              stadium audiam animal molestiae te. .{" "}
            </p>
          </div>
        </div>
        <div className="col-6 mt-5 forms mx-auto">
          <form className="form py-5" onSubmit={handleSubmit}>
            <button onClick={dropCountry}>Get latest jokes now</button>
            {/* {country} */}
            <select
              className="form-select py-2 inputpartner"
              aria-label="Default select example"
            >
              <option>For Partnership</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <br />
            <label className="form-label">Fullname</label>
            <input
              type="text"
              value={contacts.fullName}
              name='fullName'
              className="form-control inputstyle"
              onChange={handleChange}
            />
            <label className="form-label">Email Address</label>
            <input
              type="text"
              className="form-control inputstyle"
              value={contacts.emailAddress}
              name='emailAddress'
              onChange={handleChange}
            />
            <label className="form-label">Select Country</label>
            <select
              id="countries"
              name="countries"
              className="form-control inputstyle"
              placeholder="Please select country"
              onChange={handleChange}
            >
              <option>Please Select Country</option>

              {countries.length > 0 ?  countries.map((country, index)=><option key={index} value={country.name}>{country.name}</option>): <option>fetching countries...</option>}
              
            </select>
            <br />
            <label className="form-label">Phone No</label>
            <input
              type="number"
              value={contacts.phoneNumber}
              className="form-control inputstyle"
              name='phoneNumber'
              onChange={handleChange}
            />
            <button className="btnsubmit mt-3" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
