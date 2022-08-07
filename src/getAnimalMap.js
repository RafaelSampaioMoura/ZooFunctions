const data = require('../data/zoo_data');

const locations = ['NE', 'NW', 'SE', 'SW'];
const getNamesGender = (sex) => locations.reduce(
  (acc, location) => ({
    ...acc,
    [location]: data.species
      .filter((e) => e.location === location)
      .map((e) => ({
        [e.name]: e.residents
          .filter((resident) => resident.sex === sex)
          .map((animal) => animal.name),
      })),
  }),
  {},
);

const getNamesSorted = (sort, sex) => {
  if (sort) {
    return locations.reduce(
      (acc, location) => ({
        ...acc,
        [location]: data.species
          .filter((e) => e.location === location)
          .map((animal) => ({
            [animal.name]: animal.residents.map((e) => e.name).sort(),
          })),
      }),
      {},
    );
  }
  return getNamesGender(sex);
};
const getNamesSortedGender = (sorted, sex) => {
  if (sorted && sex) {
    return locations.reduce(
      (acc, location) => ({
        ...acc,
        [location]: data.species
          .filter((e) => e.location === location)
          .map((e) => ({
            [e.name]: e.residents
              .filter((resident) => resident.sex === sex)
              .map((animal) => animal.name)
              .sort(),
          })),
      }),
      {},
    );
  }
  return getNamesSorted(sorted, sex);
};

const getNames = () =>
  locations.reduce(
    (acc, location) => ({
      ...acc,
      [location]: data.species
        .filter((e) => e.location === location)
        .map((animal) => ({
          [animal.name]: animal.residents.map((e) => e.name),
        })),
    }),
    {},
  );

const getSimpleNames = () =>
  locations.reduce(
    (acc, location) => ({
      ...acc,
      [location]: data.species
        .filter((e) => e.location === location)
        .map((e) => e.name),
    }),
    {},
  );

function getAnimalMap({ includeNames = false, sorted = false, sex } = {}) {
  // seu código aqui
  if (!includeNames) {
    return getSimpleNames();
  }
  if (includeNames === true) {
    return sorted || sex ? getNamesSortedGender(sorted, sex) : getNames();
  }
}

console.log(
  JSON.stringify(
    getAnimalMap({ includeNames: true, sorted: true, sex: 'female' }),
  ),
);

module.exports = getAnimalMap;
