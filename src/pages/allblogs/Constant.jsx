import React, { useState } from "react";
import "./allblogs.css";

const Constant = ({ children, limit }) => {
  const [isReadMoreShown, setIsReadMoreShown] = useState(false);

  const toggleBtn = () => {
    setIsReadMoreShown((prevState) => !prevState);
  };

  return (
    <div>
      <p className="paragraphx">
        {isReadMoreShown ? children : children.substr(0, limit)}
        <button onClick={toggleBtn} className="readmore btn">
          {isReadMoreShown ? 'Read less' : '...Read More'}
        </button>
      </p>
    </div>
  );
};

export default Constant;
