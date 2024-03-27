const getRandomInt = require('./getRandomInt')
const numberArrayToString = require('./numberArrayToString')
const getMinValue = require('./getMinValue')
const isOdd = require('./isOdd')

module.exports = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  }