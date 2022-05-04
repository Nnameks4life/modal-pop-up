import React from "react";
import { Link } from "react-router-dom";
import contact from "../../photos/contactus.png";

const ContactUs = () => {

    document.addEventListener('DOMContentLoaded', () => {
        // const selectDrop = document.querySelector('#countries');
        const selectDrop = document.getElementById('countries');

        fetch('https://restcountries.com/v2/all').then (res =>{
            return res.json ();
        }).then(data => {
            let output = '';
            data.forEach(country => {
                output += `<options>${country.name}</options>`;
            })
            selectDrop.innerHTML = output;
        }).catch(err =>{
            console.log(err)
        })
    });



  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-6 contactus text-center">
          <h3>Contact Us</h3>
          <div className="text-center">
          <img src={contact} alt="contact us" />
          <p className="contact">
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum pondeum. Est audiam animal
            molestiae te. .{" "}
          </p>
          </div>
        </div>
        <div className="col-6 mt-5 forms mx-auto">
          
          <form className="form py-5">
          <select
            className="form-select py-2 inputpartner"
            aria-label="Default select example"
          >
            <option >For Partnership</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select><br/>
            <label className="form-label">
              Fullname
            </label>
            <input
              type="text"
              id="inputPassword5"
              className="form-control inputstyle"
              aria-describedby="passwordHelpBlock"
            />
            <label className="form-label">
              Email Address
            </label>
            <input
              type="text"
              id="inputPassword5"
              className="form-control inputstyle"
              aria-describedby="passwordHelpBlock"
            />
            <label  className="form-label">
              Select Country
            </label>
            <input
              type="number"
              placeholder="Select Country"
              className="form-control inputstyle"
              
            />
            <select id='countries' name='countries'>Please Select Country</select>
            <label  className="form-label">
              Phone No
            </label>
            <input
              type="number"
              id="inputPassword5"
              className="form-control inputstyle"
              aria-describedby="passwordHelpBlock"
            />
            <button className="btnsubmit mt-3">Submit</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
