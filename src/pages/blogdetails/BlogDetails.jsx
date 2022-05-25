import React from "react";
import "./blogdetails.css";
import bgblog from "../../photos/bgblog.png";
import blog from "../../photos/blog.png";

const BlogDetails = () => {
  return (
    <div>
      <div className="headd">
        <img src={bgblog} alt="" className="headd" />
      </div>
      <div className="subheadbg">
      <p className="subheadd my-2">Last Updated: March 20th, 2022</p>
      <h6 className="subhead my-5">TOFA Academy takes Mali by Storm in Latest Outreach Trip</h6>
      <div className="d-flex">
      <span className="elipse"></span>
      <div className="text-center my-4 mx-3">
      <p>Abimbola Otepola</p>
      <p>January 1st, 2021</p>
      </div>
      </div>
      </div>
      <div className="text-center mx-auto info">
        <p className="textxx my-4">
          Reviewing the previous year, the report showed that after the
          COVID-19-induced lockdowns,, were lifted in 2021, the Nigerian
          agriculture sector expanded by an average of 1.60 percent a lovel y
          higj job anew favourite movie that helps people turn on their esctasy
          and unwing all in the first three quarters of the year. Although this
          expansion was lower than the 1.72 percent i recorded in 2020, it
          depicted some resilience compared to other significant sectors such as
          asi industry and services. Agriculture contributed an average of 25.35
          percent to Nigeria's GDP in 2021.
        </p>
        <p className="textxx">
          Reviewing the previous year, the report showed that after the
          COVID-19-induced lockdowns,, were lifted in 2021, the Nigerian
          agriculture sector expanded by an average of 1.60 percent a lovel y
          higj job anew favourite movie that helps people turn on their esctasy
          and unwing all in the first three quarters of the year. Although this
          expansion was lower than the 1.72 percent i recorded in 2020, it
          depicted some resilience compared to other significant sectors such as
          asi industry and services. Agriculture contributed an average of 25.35
          percent to Nigeria's GDP in{" "}
        </p>
        <p className="textxx">
          Reviewing the previous year, the report showed that after the
          COVID-19-induced lockdowns,, were lifted in 2021, the Nigerian
          agriculture sector expanded by an average of 1.60 percent a lovel y
          higj job anew favourite movie that helps people turn on their esctasy
          and unwing all in the first three quarters of the year. Although this
          expansion was lower than the 1.72 percent i recorded in 2020, it
          depicted some resilience compared to other significant sectors such as
          asi industry and services. Agriculture contributed an average of 25.35
          percent to Nigeria's GDP in{" "}
        </p>
        <p className="textxx">
          Reviewing the previous year, the report showed that after the
          COVID-19-induced lockdowns,, were lifted in 2021, the Nigerian
          agriculture sector expanded by an average of 1.60 percent a lovel y
          higj job anew favourite movie that helps people turn on their esctasy
          and unwing all in the first three quarters of the year. Although this
          expansion was{" "}
        </p>
      </div>
        <h6 className="fw-bold mx-3">More Blog Stories</h6>
      <div className="grid-container itemone">
          <div className="grid-item">
        <img src={blog} alt="blogg" />
        <p>January 2021</p>
        <p>4 min read</p>
        <h5 className="fw-bold">TOFA Academy takes Mali</h5>
        <p className="paragraphx">
          Lorem ipsum dolor sit amet, consectetur give adipiscing elit. Risus,
          sit imperdiet risus, loving venenatis at. Lorem ipsum dolor sit amet,
          in at consectetur give adipiscing elit. Risus, sit imperdiet risus,
          loving venenatis at.{" "}
          <a href="" className="readmore">Read more</a>
        </p>
        </div>
        <div className="grid-item">
        <img src={blog} alt="blogg" />
        <p>January 2021</p>
        <p>4 min read</p>
        <h5 className="fw-bold">TOFA Academy takes Mali</h5>
        <p className="paragraphx">
          Lorem ipsum dolor sit amet, consectetur give adipiscing elit. Risus,
          sit imperdiet risus, loving venenatis at. Lorem ipsum dolor sit amet,
          in at consectetur give adipiscing elit. Risus, sit imperdiet risus,
          loving venenatis at.{" "}
          <a href="" className="readmore">Read more</a>
        </p>  
        </div>
        <div className="grid-item">
        <img src={blog} alt="blogg" />
        <p>January 2021</p>
        <p>4 min read</p>
        <h5 className="fw-bold">TOFA Academy takes Mali</h5>
        <p className="paragraphx">
          Lorem ipsum dolor sit amet, consectetur give adipiscing elit. Risus,
          sit imperdiet risus, loving venenatis at. Lorem ipsum dolor sit amet,
          in at consectetur give adipiscing elit. Risus, sit imperdiet risus,
          loving venenatis at.{" "}
          <a href="" className="readmore">Read more</a>
        </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
