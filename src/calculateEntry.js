const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const ageRange = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((e) => {
    if (e.age < 18) {
      ageRange.child += 1;
    } else if (e.age < 50) {
      ageRange.adult += 1;
    } else {
      ageRange.senior += 1;
    }
  });
  return ageRange;
}

function calculateEntry(entrants) {
  // seu código aqui

  return !entrants || JSON.stringify(entrants) === '{}'
    ? 0
    : countEntrants(entrants).child * data.prices.child +
        countEntrants(entrants).adult * data.prices.adult +
        countEntrants(entrants).senior * data.prices.senior;

  // if (!entrants) {
  //   return 0;
  // }

  // if (JSON.stringify(entrants) === '{}') {
  //   return 0;
  // }
  //const people = countEntrants(entrants);
  // return (
  //   people.child * data.prices.child +
  //   people.adult * data.prices.adult +
  //   people.senior * data.prices.senior
  // );
}

console.log(
  calculateEntry([
    { name: 'Lara Carvalho', age: 5 },
    { name: 'Frederico Moreira', age: 5 },
    { name: 'Pedro Henrique Carvalho', age: 5 },
    { name: 'Maria Costa', age: 18 },
    { name: 'Núbia Souza', age: 18 },
    { name: 'Carlos Nogueira', age: 50 },
  ])
);

module.exports = { calculateEntry, countEntrants };
