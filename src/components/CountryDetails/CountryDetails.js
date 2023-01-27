import React, { useState, useEffect } from "react";
import "./CountryDetails.css";
import { SpecificCountry } from "./SpecificCountry";
import { useLocation } from "react-router-dom";

const CountryDetails = () => {
    const [countries, setCountry] = useState([]);
    const location = useLocation();
    let path = location.pathname
    const parts = path.split("/");
    const main = parts[2];

    console.log(main);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${main}`)
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
