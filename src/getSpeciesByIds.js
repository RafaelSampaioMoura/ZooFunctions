const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }

  if (ids.length === 1) {
    return [species.find((elem) => elem.id === ids[0])];
  }

  return species.filter((elem) => ids.includes(elem.id));
}

module.exports = getSpeciesByIds;
