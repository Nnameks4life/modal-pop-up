import React, { useState } from "react";
import TofaImg from "../../photos/tofaLogo.png";
import './marketNav.css'

function MarketNav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="navbar-brand ml-lg-5">
  <img
                  src={TofaImg}
                  alt="Tofa Logo"
                />
                </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse ml-lg-5" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 ml-lg-5" id='nav-optiond '>
      <li className="nav-item active ml-lg-5">
        <a className="nav-link" href="#">Tradefinance<span class="sr-only"></span></a>
      </li>
      <li className="nav-item ml-lg-5">
        <a className="nav-link" href="#">SourcePro</a>
      </li>
      <li className="nav-item ml-lg-5">
        <a className="nav-link" href="#">Academy</a>
      </li>
      <li className="nav-item ml-lg-5">
        <a className="nav-link" href="#">Support</a>
      </li>
    </ul>
    <div className='mr-lg-5'>
    <button className='market-button mr-lg-5'>MarketPlace</button>
    </div>
  </div>
</nav>

  
    
  )

}

export default MarketNav;





