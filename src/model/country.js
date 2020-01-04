import { produceCivilWar, produceInterstateWar } from './war';
import COUNTRY_DATA from './initial-data';

class Country {
  constructor(code) {
    this.code = code
    this.data = COUNTRY_DATA[code];
    this.data.atWar = false;
    this.data.majorPower = false;
  }

  updateGDP = (averageGDP) => {
    if (this.data.atWar) {
      this.data.gdp = this.data.gdp * 0.9
      this.data.gdp_per_capita = this.data.gdp_per_capita * 0.9
    } else {
      if (this.data.gdp_per_capita < averageGDP) {
        this.data.gdp_per_capita = this.data.gdp_per_capita * 1.05
        this.data.gdp = this.data.gdp * 1.05
      } else {
        this.data.gdp_per_capita = this.data.gdp_per_capita * 1.015
        this.data.gdp = this.data.gdp * 1.015
      }
    }
  }

  updateMajorPowerStatus = (worldGDP) => {
    if (this.data.gdp / worldGDP > 0.075) {
      this.data.majorPower = true
    } else {
      this.data.majorPower = false
    }
  }

  updateTimeSinceLastConflict = () => {
    if (this.data.atWar) {
      this.data.timeSinceLastConflict = 0
    } else {
      this.data.timeSinceLastConflict += 1
    }
  }  

  newCivilWar () {
    if (!this.data.atWar && produceCivilWar(this.data)) {
      this.data.atWar = true
      return this.code
    } else {
      return false
    }
  }

  newInterstateConflict = (countryDict) => {
    if (this.data.majorPower) {
      Object.keys(countryDict).forEach((code) => {
        if (produceInterstateWar({ from: this.data, to: countryDict[code].data, type: 'majorPower'})) {
          countryDict[code].data.atWar = true
          return { from: this.code, to: code }
        }
      })
    }
    this.data.neighbours.forEach((code) => {
      if (produceInterstateWar({ from: this.data, to: countryDict[code].data, type: 'contiguous'})) {
        this.data.atWar = true
        countryDict[code].data.atWar = true
        return { from: this.code, to: code }
      }
    })
  }
}

export { Country }

