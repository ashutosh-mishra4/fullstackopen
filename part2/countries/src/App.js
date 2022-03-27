import { useState, useEffect } from "react";
import Country from "./components/Country";
import ShowButtonCountry from "./components/ShowButtonCountry";
import axios from "axios";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [capital, setCapital] = useState("Tokyo");
  // const [countryCode, setCountryCode] = useState("IN");
  const [weather, setWeather] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/all`)
      .then((response) => setCountries(response.data));
  }, []);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    let interval = setInterval(() => {
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}`)
      .then((response) => setWeather(response.data))
    }, 1000);

    return () => clearInterval(interval)
  }, []);

  // change state to current country name with button onClick
  const countrySetter = (country, capital) => {
    setCapital(capital);
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
      find countries{console.log(weather)}
      <input value={search} onChange={handleChange} />
      {filterCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filterCountries.length > 1 ? (
        filterCountries.map((country) => (
          <article key={country.name}>
            {`${country.name} `}
            {/* Change the state to the current country name when button gets clicked */}
            <button
              onClick={() =>
                countrySetter(country.name, country.capital)
              }
            >
              show
            </button>
            {/* Show the details when current country matches our selectedCountry state */}
            {country.name === selectedCountry ? (
              <ShowButtonCountry country={country} weather={weather} />
            ) : null}
          </article>
        ))
      ) : (
        <Country filterCountries={filterCountries} weather={weather} />
      )}
    </>
  );
}

export default App;
