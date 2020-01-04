import React, { useState } from 'react';
import logo from './logo.svg';
import { War } from './model/war';
import { Country } from './model/country';
import INITIAL_DATA from './model/initial-data';
import './App.css';

const countryCodes = Object.keys(INITIAL_DATA)

const calculateWorldGDP = (countries) => {
  let GDP = 0;
  let population = 0;
  countries.forEach((country) => {
    GDP += country.data.gdp;
    population += country.data.population
  })
  return ({
    worldGDP: GDP,
    averageGDP: GDP/population / 0.00001
  })
}


const countryDict = {}
countryCodes.forEach(code => (countryDict[code] =  new Country(code)))
const countries = Object.values(countryDict)

const wars = [];

const App = () => {
  const [year, setYear] = useState(2020);
  console.log({year})

  countries.forEach((country) => country.updateTimeSinceLastConflict())
  wars.forEach((war) => {
    if (!war.expired) {
      const stopped = war.doesThisWarStop(year)
      if (stopped) {
        war.involving.forEach((code) => countryDict[code].data.atWar = false)
      }
    }
  })
  countries.forEach((country) => {
    const civilWar = country.newCivilWar();
    if (civilWar) {
      wars.push(new War({
        involving: civilWar,
        year,
        location: civilWar,
        type: 'civilWar'
      }))
    }
  })
  countries.forEach((country) => {
    const interstate = country.newInterstateConflict(countryDict);
    if (interstate) {
      wars.push(new War({
        involving: [interstate.from, interstate.to],
        year,
        location: interstate.to,
        type: 'interstate'
      }))
    }
  })

  const { worldGDP, averageGDP } = calculateWorldGDP(countries)
  console.log({averageGDP})
  countries.forEach((country) => country.updateGDP(averageGDP))
  countries.forEach((country) => country.updateMajorPowerStatus(worldGDP))

  return (
    <div className="App">
      <header className="App-header">
        {year}
        {
          countries.map((country) => (
            <div>
              {JSON.stringify(country.data)}
            </div>
          ))  
        }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => setYear(year + 1)}>
          Hello
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
