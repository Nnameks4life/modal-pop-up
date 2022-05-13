import React, { useState } from "react";

const Search = ({getQuery}) => {
  [texts, setTexts] = useState('');

  const onChange = (q) => {
      setTexts(q)
      getQuery(q)
  }


  return (
    <div>
        <form>
      <input
        type='text'
        className="form-control"
        placeholder="Search for frequently asked questions"
        value={text}
        onChange={(e) => onChange(e.target.value)} 
      ></input>
      </form>
    </div>
  );
};

export default Search;
