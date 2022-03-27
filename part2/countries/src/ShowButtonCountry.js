import React from "react";

function ShowButtonCountry({ country }) {
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
    </main>
  );
}

export default ShowButtonCountry;
