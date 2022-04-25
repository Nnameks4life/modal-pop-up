import React from "react";
import { useState, useEffect  } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FirstRegisterPage from "./firstRegisterPage";
import SecondResgisterPage from "./secondResgisterPage";

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
    confirmPassword:"",
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
    <BrowserRouter>
      <Routes>
        <Route exact path="/first" element={<FirstRegisterPage handleChange={handleChange} registerDetail={registerDetail}/>} />
        <Route exact path="/first" element={<SecondResgisterPage handleChange={handleChange} registerDetail={registerDetail}/>} />
        </Routes>
    </BrowserRouter>
      
    </>
                  
             
  );
}
