const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(emploName) {
  return !emploName
    ? {}
    : employees.find(
      (e) => e.firstName === emploName || e.lastName === emploName,
    );
}

module.exports = getEmployeeByName;
