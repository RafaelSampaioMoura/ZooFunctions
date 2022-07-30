const data = require('../data/zoo_data');

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const animals = data.species.map((e) => e.name);
const getOfficeHours = (day) =>
  (day === 'Monday'
    ? 'CLOSED'
    : `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`);

const getExhibition = (day) =>
  (day === 'Monday'
    ? 'The zoo will be closed!'
    : data.species.reduce((a, e) => {
      if (e.availability.includes(day)) {
        a.push(e.name);
      }
      return a;
    }, []));
function getSchedule(scheduleTarget) {
  if (daysOfWeek.includes(scheduleTarget)) {
    return {
      [scheduleTarget]: {
        officeHour: getOfficeHours(scheduleTarget),
        exhibition: getExhibition(scheduleTarget),
      },
    };
  }
  return !scheduleTarget
    || (!daysOfWeek.includes(scheduleTarget) && !animals.includes(scheduleTarget))
    ? daysOfWeek.reduce(
      (a, e) => ({
        ...a,
        [e]: { officeHour: getOfficeHours(e), exhibition: getExhibition(e) },
      }),
      {},
    )
    : data.species.find((e) => e.name === scheduleTarget).availability;
}

// console.log(getSchedule('Tuesday'));
// console.log(animals);
console.log(getSchedule('ablogie-wooglie-woo'));

module.exports = getSchedule;
