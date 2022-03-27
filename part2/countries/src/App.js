import { useState, useEffect } from "react";
import Country from "./Country";
import ShowButtonCountry from "./ShowButtonCountry";
import axios from "axios";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/all`)
      .then((response) => setCountries(response.data));
  }, []);

  // change state to current country name with button onClick
  const countrySetter = (country) => {
    setSelectedCountry(country);
  };

  // change state to user input
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  // filter countries on user input
  const filterCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      find countries
      <input value={search} onChange={handleChange} />
      {filterCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filterCountries.length > 1 ? (
        filterCountries.map((country) => (
          <article key={country.name}>
            {`${country.name} `}
            {/* Change the state to the current country name when button gets clicked */}
            <button onClick={() => countrySetter(country.name)}>show</button>
            {/* Show the details when current country matches our selectedCountry state */}
            {country.name === selectedCountry ? (
              <ShowButtonCountry country={country} />
            ) : null}
          </article>
        ))
      ) : (
        <Country filterCountries={filterCountries} />
      )}
    </>
  );
}

export default App;
