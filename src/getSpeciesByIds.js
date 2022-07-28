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
  const speciesReturn = species.filter((elem) => {
    if (ids.includes(elem.id)) {
      return elem.id;
    }
  });
  return speciesReturn;
}

module.exports = getSpeciesByIds;
