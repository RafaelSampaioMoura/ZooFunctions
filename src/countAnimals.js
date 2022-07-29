const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce(
      (a, e) => ({ ...a, [e.name]: e.residents.length }),
      {},
    );
  }
  if ('specie' in animal && 'sex' in animal) {
    return data.species
      .find((e) => e.name === animal.specie)
      .residents.filter((e) => e.sex === animal.sex).length;
  } if ('specie' in animal) {
    return data.species.find((e) => e.name === animal.specie).residents.length;
  }
}

console.log(countAnimals({ specie: 'lions' }));
module.exports = countAnimals;
