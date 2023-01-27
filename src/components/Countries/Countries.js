import { useEffect, useState } from "react";
import Country from "../Country/Country";
import Pagination from "../Pagination";

function Countries() {
  const [countries, setCountry] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countryPerPage] = useState(5);
  
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  // get current posts

  const indexOfLastCountry = currentPage * countryPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
  const currentPosts = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);




  return (
    <div>
      <div className="text">
        <h6>Flag</h6>
        <h6>Country</h6>
        <h6>Region</h6>
        <h6>Population</h6>
        <h6>Language</h6>
      </div>
      {currentPosts.map((country) => (
        <Country
          flags={country.flags.png}
          name={country.name.common}
          region={country.region}
          population={country.population}
        ></Country>
      ))}

      <Pagination
        countryPerPage={countryPerPage}
        totalCountry={countries.length}
        paginate ={paginate}
      />
    </div>
  );
}

export default Countries;
