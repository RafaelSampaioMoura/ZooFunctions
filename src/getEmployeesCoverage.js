const data = require('../data/zoo_data');

const doesntExist = () => {
  throw new Error('Informações inválidas');
};

const getSpecies = (p) => data.employees
  .find(
    (e) =>
      e.id === p || e.firstName === p || e.lastName === p,
  )
  .responsibleFor.map((specie) => data.species.find((animal) => animal.id === specie).name);

const getLocations = (p) => getSpecies(p)
  .map((name) => data.species.find((animal) => animal.name === name))
  .reduce((acc, animalObj) => {
    if (!acc.includes(animalObj)) {
      acc.push(animalObj.location);
    }
    return acc;
  }, []);

const getObject = (p) => ({
  id: data.employees.find((e) => e.id === p || e.firstName === p || e.lastName === p).id,
  fullName: `${data.employees.find((e) => e.id === p || e.firstName === p
  || e.lastName === p).firstName
  } ${
    data.employees.find(
      (e) =>
        e.id === p
          || e.firstName === p
          || e.lastName === p,
    ).lastName
  }`,
  species: getSpecies(p),
  locations: getLocations(p),
});

function getEmployeesCoverage({ name = 'All employees', id = 'N/A' } = {}) {
  // seu código aqui
  if (name === 'All employees' && id === 'N/A') {
    return data.employees.reduce((acc, e) => {
      acc.push(getObject(e.id));
      return acc;
    }, []);
  }

  if (data.employees.some((e) => e.firstName === name || e.lastName === name)) {
    return getObject(name);
  } if (data.employees.some((e) => e.id === id)) {
    return getObject(id);
  }

  return doesntExist();
}

// console.log(getEmployeesCoverage('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(getLocations('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(getEmployeesCoverage('Nigel'));
// console.log(getEmployeesCoverage('Nelson'));
// console.log(getEmployeesCoverage('ablogie-ooglie-woo'));
module.exports = getEmployeesCoverage;
