const { createNeighbours } = require('./contiguity')
const { addData } = require('./world-bank')

let countryDict = {}
countryDict = createNeighbours(countryDict)
countryDict = addData(countryDict)

console.log(countryDict)