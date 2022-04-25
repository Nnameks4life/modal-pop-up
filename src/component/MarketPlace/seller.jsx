import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirstRegisterPage from "./firstRegisterPage";
import SecondResgisterPage from "./secondResgisterPage";

export default function Seller() {
  const [step, setstep] = useState(1);
  const [registerDetail, setRegisterDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    selectCountry: "Algeria",
    selectRegion: "costa-rica",
    mainProduct: "maize",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const [isValid, setIsValid] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e) => {
    setRegisterDetail({ ...registerDetail, [e.target.name]: [e.target.value] });
  };

  const nextStep = () => {
    setstep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerDetail)
    // setError(validate(registerDetail));
    // setSubmit(true);
    // if (Object.keys(error).length === 0 && isSubmit) {
    // } else {
    //   setIsValid(true);
    // }
  };

  switch (step) {
    case 1:
      return (
        <>
         
              <FirstRegisterPage
                handleChange={handleChange}
                registerDetail={registerDetail}
                nextStep={nextStep}
              />
            
            
        </>
      );
    case 2:
      return (
        <>
         <SecondResgisterPage
                handleChange={handleChange}
                registerDetail={registerDetail}
                handleSubmit={handleSubmit}
              />
        </>
      );
  }
}
