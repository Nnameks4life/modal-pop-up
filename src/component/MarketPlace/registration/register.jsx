import React from "react";
import grainMap from "../../../photos/grainMap.jpeg";
import buyerIcon from "../../../photos/buyerIcon.png";
import sellerIcon from "../../../photos/sellerIcon.png";
import backIcon from "../../../photos/back-icon.svg";
import './register.css'

export default function Register(){
  
  return (
    <section className='w-100' id='register-page'>
<div className="row g-0">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="map-img"></div>
        </div>
        <div className="col-lg-6">
          <main className="row m-3">
          <div className="col-lg-6 col-3" id='header-text'>
                  <p className="back-txt d-flex">
                    <img src={backIcon} />
                    <a href="#">Back</a>
                  </p>
                </div>
                <div className="col-lg-6 col-9" id='header-text'>
            <p className="info-txt">
              Already have an account?{" "}
              <a className="" href="/login">
                Login
              </a>
            </p>
            </div>
          </main>
        <div className='registration-content'>
         <h3>Register</h3>
         <p className=''>
To begin this journey, tell us what type of account you’d be opening.
</p>
<section className='register-options'>

<div className='register-content'>
  <a href="/buyer" className='d-flex'>
  <img className='' src={buyerIcon} alt='buyer icon'/>
   <div className='ml-2'> <h4>Buyer</h4>
    <p >Personal account to manage all you activities.</p>
    </div>
    </a>
</div>

<div className='register-content' >
<a href="/seller" className='d-flex'>
  <img src={sellerIcon} alt="seller icon" className='h-3' />
  <div  className='ml-2'>
    <h4>Seller</h4>
    <p>Own or belong to a company, this is for you.</p>
    </div>
    </a>
</div>

</section>

        </div>
         
          </div>  
          </div> 
    </section>
  );
}
