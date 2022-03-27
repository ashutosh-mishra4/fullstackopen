import React from "react";
import '../App.css'

function ShowButtonCountry({ country, weather }) {
  return (
    <main key={country.name}>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h2>languages:</h2>
      <ul>
        {country.languages.map((language, index) => (
          <li key={index}>{language.name}</li>
        ))}
      </ul>
      <img className="flag" src={country.flag} />
      <h2>Weather for {country.capital}</h2>
      <p>temperature -{weather.main.temp} Celcius</p>
      <p>wind {weather.wind.speed} m/s</p>
    </main>
  );
}

export default ShowButtonCountry;
