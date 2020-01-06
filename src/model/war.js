
const gaussianRand = () => {
  let rand = 0;
  for (let i = 0; i < 10; i += 1) {
    rand += Math.random();
  }
  return rand / 10;
}

const produceSpillover = (data) => {
  const { from, to } = data;
  if (gaussianRand() > 0.5) {
    return true
  } else {
    return false
  }
}

class War {
  constructor(data) {
    this.key = Math.random();
    this.involving = new Set([data.involving]);
    this.instigator = data.instigator;
    this.expired = false;
    this.deaths = { [data.year]: 10000 };
    this.startYear = data.year;
    this.location = new Set([data.location])
  }

  spillover = (countryDict) => {
    if (!this.expired) {
      this.involving.forEach((code) => {
        const from = countryDict[code].data;
        from.neighbours.forEach((neighbour) => {
          const spread = produceSpillover({ from: countryDict[code].data, to: countryDict[neighbour].data })
          if (spread) {
            this.involving.add(neighbour)
            this.location.add(neighbour)
          }
        })
      })
    }
  }

  doesThisWarStop = (year) => {
    if (gaussianRand() > 0.45) {
      console.log('This war did not stop')
      this.deaths[year] = this.deaths[year - 1] * (gaussianRand() + 0.5) 
      return false
    } else {
      console.log('It did stop')
      this.expired = true;
      return this.involving
    }
  }
}



const produceCivilWar = (data) => {
  if (gaussianRand() < 0.45) {
    return true
  }
}

const produceInterstateWar = (countries) => {
  const { from, to } = countries;
  if (gaussianRand() < 0.1) {
    return true
  }
}

export { produceCivilWar, produceInterstateWar, War}