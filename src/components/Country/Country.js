import React from "react";
import "./Country.css"

const Country = (props) => {
  return (
    <div>
      <div className="Country">
        <img className="image" src={props.flags} alt="" />
        <p>{props.name}</p>
        <p> {props.region}</p>
        <p>{props.population}</p>
              <p>Language: {props.language} </p>
              
              <button className="country_detaisl"  onClick="href='../CountryDetails/CountryDetails'" >Details</button>
          </div>
          
          
    </div>
  );
};



export default Country;
