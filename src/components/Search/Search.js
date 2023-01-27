import React, { useState } from "react";
import SearchItem from "./SearchItem";
import "./search.css";

export default function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState();

  const searchCountry = (event) => {
    if (event.key === "Enter") {
      fetch(`https://restcountries.com/v3.1/name/${search}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  };
  console.log(search)
  return (
    <>
      <div className="searchbox">
        <input
          type="search"
          className="search-bar"
          placeholder="Enter country Name"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyPress={searchCountry}
        ></input>
      </div>

      {data == null ? (
        <p></p>
      ) : (
        data.map((res) => {
          <SearchItem
            flags={res.flags.png}
            name={res.name.common}
            region={res.region}
            population={res.population}
          />;

          // {
          //   currentPosts.map((country) => (
          //     <Country
          //       flags={country.flags.png}
          //       name={country.name.common}
          //       region={country.region}
          //       population={country.population}
          //     ></Country>
          //   ));
          // }
        })
      )}
    </>
  );
}
