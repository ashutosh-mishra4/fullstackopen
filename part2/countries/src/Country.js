import React from "react";
import "./App.css";

function Country({ filterCountries }) {
  return (
    <main>
      {filterCountries.map((country) => {
        return (
          <section key={country.name}>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h2>languages:</h2>
            <ul>
              {country.languages.map((language, index) => (
                <li key={index}>{language.name}</li>
              ))}
            </ul>
            <img className="flag" src={country.flags.svg} />
          </section>
        );
      })}
    </main>
  );
}

export default Country;
