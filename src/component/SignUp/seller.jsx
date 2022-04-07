import React from "react";
import { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import FirstRegisterPage from "./firstRegisterPage";
// import SecondResgisterPage from "./secondResgisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Seller() {
  const [registerDetail, setRegisterDetail] = useState({
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    selectCountry:"Algeria",
    selectRegion:"costa-rica",
    mainProduct: "maize",
    address:"",
    password: "",
    confirmPassword:""
  });
  const [error, setError] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const [isValid, setIsValid] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e) => {
    setRegisterDetail({ ...registerDetail, [e.target.name]: [e.target.value] });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // setError(validate(registerDetail));
    // setSubmit(true);
    // if (Object.keys(error).length === 0 && isSubmit) {
    // } else {
    //   setIsValid(true);
    // }
  };
  


  return (
    <>
      <FirstRegisterPage handleChange={handleChange} registerDetail={registerDetail}/>
     
      {/* <SecondResgisterPage handleChange={handleChange} registerDetail={registerDetail} handleSubmit={handleSubmit} error={error}/>
       */}
      
    </>
                  
             
  );
}
