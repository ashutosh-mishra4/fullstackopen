import { useState, useEffect } from "react";
import ShowCountries from "./ShowCountries";
import axios from "axios";
import "./App.css";

const ShowButton = ({country}) => {
  return <div>{country.area}</div>;
};

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/all`)
      .then((response) => setCountries(response.data));
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filterCountries = countries.filter((country) =>
    country.name.includes(search)
  );

  return (
    <div>
      find countries
      <input value={search} onChange={handleChange} />
      {filterCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filterCountries.length > 1 ? (
        filterCountries.map((country) => (
          <div key={country.alpha2Code}>
            {country.name}
            <button
              onClick={() => setShow(true)}
            >
              show
            </button>
            {show ? (
              <ShowButton country={country} />
            ) : (
              console.log("Try something else")
            )}
          </div>
        ))
      ) : (
        <ShowCountries filterCountries={filterCountries} />
      )}
    </div>
  );
}

export default App;
