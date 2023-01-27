import React from "react";
import "./search.css";

const Search = ({ onChange, value }) => {
  return (
    <>
      <div className="search-bar">
        <input
          onChange={onChange}
          value={value}
          className="searchbox "
          type=""
          placeholder="Search by country name"
        />
      </div>
    </>
  );
};

export default Search;
