import React from "react";
import "./tofaacademy.css";
import point1 from "../../photos/point1.png";
import point2 from "../../photos/point2.png";
import point3 from "../../photos/point3.png";
import point4 from "../../photos/point4.png";
import point5 from "../../photos/point5.png";
import point6 from "../../photos/point6.png";
import point7 from "../../photos/point7.png";
import point8 from "../../photos/point8.png";
import point9 from "../../photos/point9.png";
import testv from "../../photos/testv.mp4";
import pinklady from "../../photos/pinklady.png";
import tofaacademy from "../../photos/tofaacademy.png";
import academy1 from "../../photos/academy1.png";
import academy2 from "../../photos/academy2.png";
import academy3 from "../../photos/academy3.png";
import academy4 from "../../photos/academy4.png";
import academy10 from "../../photos/academy10.png";
import academy6 from "../../photos/academy6.png";
import academy7 from "../../photos/academy7.png";
import academy8 from "../../photos/academy8.png";
import air from "../../photos/airbnb.png";
import hub from "../../photos/hubspot.png";
import micro from "../../photos/microsoft.png";
import goog from "../../photos/google.png";
import wal from "../../photos/walmart.png";
import fed from "../../photos/fedex.png";
// import dotted from "../../photos/dotted.png";



const TofaAcademy = () => {
  return (
    <div className="container-fluid">
      <div className="row mx-auto box-header">
        <div className="col-12 col-lg-6 col-md-12 headacademy">
          <h1 className="font-mulish">TOFA Academy</h1>
          <p className="academy">
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te.
          </p>
          <a href="">Learn more</a>
        </div>
        <div className="col-12 col-lg-6 col-md-12 ">
          <span className="dot"></span>
          {/* <span className="dot2"></span> */}
          <span className="dot3"></span>
          <img src={point1} alt="" className="point1" />
          <img src={point2} alt="" className="point2" />
          <img src={point3} alt="" className="point3" />
          <img src={point4} alt="" className="point4" />
          <img src={point5} alt="" className="point5" />
          <img src={point6} alt="" className="point6" />
          <img src={point7} alt="" className="point7" />
          <img src={point8} alt="" className="point8" />
          <img src={point9} alt="" className="point9" />
        </div>
      </div>
      <div className="row align-items-center goals">
        <div className="col-12 col-lg-6 col-md-12">
          <video width="100%" height="240" controls>
            <source src={testv} type="video/mp4" className="video" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-12 col-lg-6 col-md-12">
          <h4 className="itemcolor">Our Goals and Mission</h4>
          <p className="paragraphs">
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum Ex duo eirput mentitum. Et has
            minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no
            suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum.
          </p>
        </div>
      </div>
      
      <div className="row goals text-center">
        <div className="col-3 border-start border-danger numbers">
          <h3 className="mt-3">562</h3>
          <p className="numbertext">Total Application</p>
        </div>
        <div className="col-3 border-start border-danger numbers">
          <h3 className="mt-3">204</h3>
          <p className="numbertext">Total Trainees</p>
        </div>
        <div className="col-3 border-start border-danger numbers">
          <h3 className="mt-3"> 3</h3>
          <p className="numbertext">Country Reach</p>
        </div>
        <div className="col-3 border-start border-danger numbers">
          <h3 className="mt-3">5</h3>
          <p className="numbertext">Partners</p>
        </div>
      </div>
      <div className="goalstext">
      <div className="row my-5 px-3">
        <div className="col-7 textstart">
          <h5>How To Get Started</h5>
          <p className="paragraphs">
            Simple and easy way to start your application with TOFA academy, you
            get to understand our unique processes
          </p>
          <h6 className="fw-bold">APPLICATION</h6>
          <p className="paragraphs">
            Application link- out on all TOFA social media platforms, which
            closes after two weeks of its opening. Graphics and ads are made to
            create awareness. After the close of application, applicants are
            screened and those whose product aligns with the business TOFA is in
            or who are eligible are selected and moved to the next stage of the
            application process.
          </p>
          <h6 className="fw-bold">TRAINING</h6>
          <p className="paragraphs">
            The eligible applicants are invited for an intensive 3 days training
            program. They get to learn all they need to know as an academician
            of TOFA ACADEMY. They have an interview and one-on-one discussion
            with our professionals giving in depth explanation of what they do
            or hope to do. Another screening is done amongst the trainees and
            selected applicants are sent the TOFA TRIBE documents to fill in
            their details for verification.
          </p>
          <h6 className="fw-bold">FUNDING</h6>
          <p className="paragraphs">
            After the verification, if the applicant and the guarantor are
            cleared; they meet up with our verification criteria, which means
            they qualify to be funded. We proceed to fund the Cohort which
            automatically makes him a member of TOFA TRIBE.
          </p>
        </div>
        <div className="col-5 orange d-none d-md-block">
          <img
            src={pinklady}
            alt="woman in orange dress smiling"
            className=""
            style={{width:'100%'}}
          />
        </div>
      </div>
      <div className="row applytofa position-relative">
        <div className="col-12 col-lg-12 col-md-12">
        <img src={tofaacademy} alt="tofaacademy" className="imgstyle" />
        <div className="apply">
          <h2 className="$font-family-mulish text-light fw-bold">Apply For TOFA Academy</h2>
          <p className="$font-family-mulish subtext text-light fw-bold">
            Get the best from this opportunity, Apply now to jion the next
            training
          </p>
          <button className="btn btn-light itemcolor">Apply Now</button>
        </div>
        </div>
      </div>
      </div>     
      
      <section className="headacademy mx-auto image-container" >
        <div>
        <img src={academy1} alt="" className="mx-4" />
        </div>
        <div>
        <img src={academy2} alt="" className="mx-4"  />
        </div>
        <div>
        <img src={academy4} alt="" className="mx-4" />
        </div>
        <div>
        <img src={academy3} alt="" className="mx-4" />
        </div>
        </section>
      
      <div className="my-5 mx-auto image-container">
        <img src={academy6} alt=""/>
        <img src={academy7} alt="" />
        <img src={academy10} alt="" />
        <img src={academy8} alt="" />
      </div>
      <div>
        <h6 className="text-center partnerheading">Our partners</h6>
        <p className="partnersub">People and Organoizations we have been working with for years</p>
        <div className="d-flex mx-auto mb-5 tofapartner image-container justify-content-evenly">
          <div className="">
            <img src={air} alt="airbnb logo" />
          </div>
          <div className="mx-2">
            <img src={hub} alt="hubspot logo" />
          </div>
          <div className="mx-2">
            <img src={goog} alt="google logo" />
          </div>
          <div className="mx-2">
            <img src={micro} alt="microsoft logo" />
          </div>
          <div className="mx-2">
            <img src={wal} alt="walmartlogo" />
          </div>
          <div className="mx-2">
            <img src={fed} alt="fedex logo" />
          </div>
        </div>
        </div>`
    </div>
  );
};

export default TofaAcademy;
