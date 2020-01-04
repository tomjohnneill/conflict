
const gaussianRand = () => {
  let rand = 0;
  for (let i = 0; i < 10; i += 1) {
    rand += Math.random();
  }
  return rand / 10;
}

class War {
  constructor(data) {
    this.involving = new Set([data.involving]);
    this.instigator = data.instigator;
    this.expired = false;
    this.deaths = { [data.year]: 10000 };
    this.startYear = data.year;
    this.location = data.location
  }

  spillover = () => {

  }

  doesThisWarStop = (year) => {
    if (gaussianRand() > 0.45) {
      console.log('This war did not stop')
      this.deaths[year] = this.deaths[year - 1] * (gaussianRand() + 0.5) * 3
      return false
    } else {
      console.log('It did stop')
      this.expired = true;
      return this.involving
    }
  }
}



const produceCivilWar = (data) => {
  if (gaussianRand() < 0.25) {
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