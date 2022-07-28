const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((elem) => elem.name === animal).residents.every((elem) => elem.age >= age);
}

console.log(getAnimalsOlderThan('lions', 20));

module.exports = getAnimalsOlderThan;
