import React from "react";


const Search = ({ onChange, value }) => {
  return (
    <>
      <div>
        Find countries by name: <input onChange={onChange} value={value} type="search" />
      </div>
    </>
  );
};

export default Search;