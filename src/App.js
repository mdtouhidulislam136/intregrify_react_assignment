import "./App.css";
import Countries from "./components/Countries/Countries";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomePage />
        <Routes>
          <Route path="/" element={<Countries/>} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}





export default App;
