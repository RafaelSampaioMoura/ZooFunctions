const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const oldestAnimal = data.species
    .find(
      (e) => e.id === data.employees.find((i) => i.id === id).responsibleFor[0],
    )
    .residents.reduce((a, o) => (o.age < a.age ? a : o));
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));
module.exports = getOldestFromFirstSpecies;
