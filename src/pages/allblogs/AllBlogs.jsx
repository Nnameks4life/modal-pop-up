import React, { useState } from "react";
import "./allblogs.css";
import blog from "../../photos/blog.png";
import Constant from "./Constant";

const AllBlogs = () => {
  
  return (
    <div className="container">
      <h5 className="fw-bold">All Our Blog Stories</h5>
      <div className="grid-container itemone">
        <div className="grid-item">
          <img src={blog} alt="blogg" />
          <p>January 2021</p>
          <p>4 min read</p>
          <h5 className="fw-bold">TOFA Academy takes Mali</h5>
          <Constant limit={200}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga
            laudantium nobis animi voluptatem reprehenderit repellat explicabo,
            eveniet ex atque ullam laboriosam dolorem, minima, at accusamus
            commodi nemo debitis! Unde.
          </Constant>
        </div>
        <div className="grid-item">
          <img src={blog} alt="blogg" />
          <p>January 2021</p>
          <p>4 min read</p>
          <h5 className="fw-bold">TOFA Academy takes Mali</h5>

          <Constant limit={100}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea
            unde animi itaque sequi facere accusamus necessitatibus hic
            accusantium, aut at iste iure. Possimus inventore animi cum amet,
            ipsum optio? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Ipsa excepturi in quis. Quod culpa nam quo nostrum quibusdam,
            eveniet libero asperiores laborum eaque vel totam quas voluptas,
            sapiente amet nulla?
          </Constant>
        </div>
        <div className="grid-item">
          <img src={blog} alt="blogg" />
          <p>January 2021</p>
          <p>4 min read</p>
          <h5 className="fw-bold">TOFA Academy takes Mali</h5>
          <Constant limit={200}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga
            laudantium nobis animi voluptatem reprehenderit repellat explicabo,
            eveniet ex atque ullam laboriosam dolorem, minima, at accusamus
            commodi nemo debitis! Unde.
          </Constant>
        </div>
      </div>
      <div className="grid-container itemone my-3">
        <div className="grid-item">
          <img src={blog} alt="blogg" />
          <p>January 2021</p>
          <p>4 min read</p>
          <h5 className="fw-bold">TOFA Academy takes Mali</h5>
          <Constant limit={200}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga
            laudantium nobis animi voluptatem reprehenderit repellat explicabo,
            eveniet ex atque ullam laboriosam dolorem, minima, at accusamus
            commodi nemo debitis! Unde.
          </Constant>
        </div>
        <div className="grid-item">
          <img src={blog} alt="blogg" />
          <p>January 2021</p>
          <p>4 min read</p>
          <h5 className="fw-bold">TOFA Academy takes Mali</h5>
          <Constant limit={200}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga
            laudantium nobis animi voluptatem reprehenderit repellat explicabo,
            eveniet ex atque ullam laboriosam dolorem, minima, at accusamus
            commodi nemo debitis! Unde.
          </Constant>
        </div>
        <div className="grid-item">
          <img src={blog} alt="blogg" />
          <p>January 2021</p>
          <p>4 min read</p>
          <h5 className="fw-bold">TOFA Academy takes Mali</h5>
          <Constant limit={200}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga
            laudantium nobis animi voluptatem reprehenderit repellat explicabo,
            eveniet ex atque ullam laboriosam dolorem, minima, at accusamus
            commodi nemo debitis! Unde.
          </Constant>
        </div>
      </div>
      <h6 className="fw-bold">Events</h6>
      <div className="event">
        <div className="eventt my-3">
          <img src={blog} alt="blog" className="bgg" />
          <div className="texts">
            <p className="text-light">January 2021</p>
            <h3 className="text-light fw-bold">TOFA Academy takes Mali</h3>
            <a href="" className="readmore">
              Read more
            </a>
          </div>
        </div>
        <div className="eventt my-3">
          <img src={blog} alt="blog" className="bgg" />
          <div className="texts">
            <p className="text-light">January 2021</p>
            <h3 className="text-light fw-bold">TOFA Academy takes Mali</h3>
            <a href="" className="readmore">
              Read more
            </a>
          </div>
        </div>
        <div className="eventt my-3">
          <img src={blog} alt="blog" className="bgg" />
          <div className="texts">
            <p className="text-light">January 2021</p>
            <h3 className="text-light fw-bold">TOFA Academy takes Mali</h3>
            <a href="" className="readmore">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
