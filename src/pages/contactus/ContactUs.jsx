import React from "react";
import { Link } from "react-router-dom";
import contact from "../../photos/contactus.png";

const ContactUs = () => {
  return (
    <div className="container-fluid contactbg">
      <div className="row">
        <div className="col-6 mx-auto text-center contactus">
          <h3>Contact Us</h3>
          <img src={contact} alt="contact us" />
          <p className="contact">
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum pondeum. Est audiam animal
            molestiae te. .{" "}
          </p>
        </div>
        <div className="col-6 mt-5 forms mx-auto">
          
          <form className="form py-5">
          <select
            className="form-select py-2 inputpartner"
            aria-label="Default select example"
          >
            <option selected>For Partnership</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select><br/>
            <label for="inputPassword5" className="form-label">
              Fullname
            </label>
            <input
              type="password"
              id="inputPassword5"
              className="form-control inputstyle"
              aria-describedby="passwordHelpBlock"
            />
            <label for="inputPassword5" className="form-label">
              Email Address
            </label>
            <input
              type="password"
              id="inputPassword5"
              className="form-control inputstyle"
              aria-describedby="passwordHelpBlock"
            />
            <label for="inputPassword5" className="form-label">
              Select Country
            </label>
            <input
              type="password"
              id="inputPassword5"
              className="form-control inputstyle"
              aria-describedby="passwordHelpBlock"
            />
            <label for="inputPassword5" className="form-label">
              Phone No
            </label>
            <input
              type="password"
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
