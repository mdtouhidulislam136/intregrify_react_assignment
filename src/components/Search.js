import React, { useState, useEffect } from "react";
import { Form, FormControl } from "react-bootstrap";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${searchTerm}`
      );
      const data = await response.json();
      onSearch(data);
    };
    if (searchTerm) fetchData();
  }, [searchTerm]);

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </Form>
  );
}

export default Search;
