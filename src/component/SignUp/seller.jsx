import React from "react";
import { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import FirstRegisterPage from "./firstRegisterPage";
import SecondResgisterPage from "./secondResgisterPage";
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
  // const [error, setError] = useState({});
  // const [isSubmit, setSubmit] = useState(false);
  // const [isValid, setIsValid] = useState(false);
  // let navigate = useNavigate();

  const handleChange = (e) => {
    setRegisterDetail({ ...registerDetail, [e.target.name]: [e.target.value] });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.preventDefault();
  //   setError(validate(form));
  //   setSubmit(true);
  //   if (Object.keys(error).length === 0 && isSubmit) {
  //   } else {
  //     setIsValid(true);
  //   }
  // };
  // useEffect(() => {
  //   if (Object.keys(error).length === 0 && isSubmit) {
  //     navigate("/");
  //   }
  // }, [error]);
  // const validate = (values) => {
  //   const error = {};
  //   const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  //   if (!values.password) {
  //     error.password = "Password is required";
  //   } else if (values.password.length < 9) {
  //     error.password = "Password must be greater than 9 character";
  //   }
  //   if (!values.confirmPassword) {
  //     error.confirmPassword = "Confirm your password";
  //   } else if (form.password !== form.confirmPassword) {
  //     error.confirmPassword = "Password does not match";
  //   }
  //   return error;
  // };

  return (
    <>
      <FirstRegisterPage handleChange={handleChange} registerDetail={registerDetail}/>
      <SecondResgisterPage handleChange={handleChange} registerDetail={registerDetail}/>
      
    </>
                  
             
  );
}
