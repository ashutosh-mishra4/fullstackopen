import React from 'react'
import './App.css'

function ShowCountries({filterCountries}) {
  return (
    <div>
        {
            filterCountries.map(country => { 
                return (
                    <div key={country.alpha2Code}>
                        <h1>{country.name}</h1>
                        <p>capital {country.capital}</p>
                        <p>area {country.area}</p>
                        <h2>languages:</h2>
                        <ul>{country.languages.map((language, index) => <li key={index}>{language.name}</li>)}</ul>
                        <img className="flag" src={country.flag} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default ShowCountries