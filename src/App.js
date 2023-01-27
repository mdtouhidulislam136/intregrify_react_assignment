import "./App.css";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchItem from "./components/Search/SearchItem";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomePage />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/countyDetails" element={<CountryDetails />} />
          <Route path="/searchItem" element={<SearchItem/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}





export default App;
