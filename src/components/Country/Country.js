import React from "react";
import "./Country.css";
import { Link } from "react-router-dom";

const Country = (props) => {
    console.log(props)
  return (
    <div>
      <div className="Country">
        <img className="image" src={props.flags} alt="" />
        <p>{props.name}</p>
        <p> {props.region}</p>
        <p>{props.population}</p>
        <p>Language: {props.language} </p>

        <Link to={`/countyDetails/${props.CountryCode}`}>
          <button className="country_details">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Country;
