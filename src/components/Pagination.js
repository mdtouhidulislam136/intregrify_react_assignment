import React from 'react';
import "../App.css";

const Pagination = ({ countryPerPage, totalCountry, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCountry / countryPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <h6 className="paginations" >
        {pageNumbers.map((number) => (
          <h6 key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link" id='click'>
              {number}
            </a>
          </h6>
        ))}
      </h6>
    </div>
  );
};

export default Pagination;

