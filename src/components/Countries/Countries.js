import { useEffect, useState } from "react";
import Country from "../Country/Country";

function Countries() {
  const [countries, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);


  return (
    <div>
      <div className="text">
        <h6 >Flag</h6>
        <h6>Country</h6>
        <h6 >Region</h6>
        <h6 >Population</h6>
        <h6 >Language</h6>
      </div>
      {countries.map((country) => (
        <Country
          flags={country.flags.png}
          name={country.name.common}
          region={country.region}
          population={country.population}
        ></Country>
      ))}
    </div>
  );
}

export default Countries;
