import React from 'react';
import "./CountryDetails.css"

export const SpecificCountry = (props) => {
  return (
    <div>
      <div className='Country_design'>
        <h2>{props.name}</h2>
        <h5>{props.capital}</h5>
        <img src={props.flags} />
        <p>
          This country belongs to {props.region} region and {props.subregion}.
          Located at the {props.lat} N and {props.lan} W, this country has
          populaton {props.population} and it has gained the indepentadent,
          according to the CIA World Factbook.
        </p>
      </div>
    </div>
  );
}
