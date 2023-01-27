import React, { useState, useEffect } from "react";
import "./CountryDetails.css";
import { SpecificCountry } from "./SpecificCountry";

const CountryDetails = () => {
  const [countries, setCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  // console.log(countries.name.common);
  return (
    <div>
      {countries.map((country) => (
        <SpecificCountry
          name={country.name.common}
          capital={country.capital}
          flags={country.flags.png}
          region={country.region}
          subregion={country.subregion}
          lat={country.latlng[0]}
          lan={country.latlng[1]}
          population={country.population}
        />
      ))}
    </div>
  );
};

export default CountryDetails;
