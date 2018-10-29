'use strict';

const REGISTRY = require("./journal");

var diary = [];

function addDay(day) {
  diary.push(day);
}

function printDiary(diary) {
  console.log('-----DIARY-----')
  diary.forEach(day => {
    printDay(day);
  });
  console.log('--END-OF-DIARY--')
}

function hasEvent(event, events) {
  return events.includes(event);
}

function printDay(day) {
  console.log('--\nEvents\t= ' + day.events.toString() + '\nOctopus\t= ' + day.octopus + '\n--');
}

function printJournal() {
  REGISTRY.forEach(day => {
    printDay(day);
  });
}

function getAllEvents() {
  let eventsList = [];
  REGISTRY.forEach(day => {
    day.events.forEach(event => {
      if (!eventsList.includes(event)) eventsList.push(event);
    });
  });
  return eventsList;
}

function getCorrelationTable(register) {
  let correlationTable = [];
  let eventsList = getAllEvents();
  eventsList.forEach(event => {
    let correlation = { name: event, table: [0, 0, 0, 0] };
    register.forEach(day => {
      (day.events.includes(event)) ?
        ((day.octopus) ? correlation.table[3]++ : correlation.table[2]++)
        :
        (((day.octopus) ? correlation.table[1]++ : correlation.table[0]++));
    });

    correlationTable.push(correlation)
  });
  return correlationTable;
}

function getPhiTable(register) {
  let correlationTable = getCorrelationTable(register);
  correlationTable.forEach(event => {
    event.phi = getPhi(event.table)
  });
}

function getPhi(correlation) {
  let n1 = correlation[0]
  let n2 = correlation[1]
  let n3 = correlation[2]
  let n4 = correlation[3]

  let dividend = (n1 * n4) - (n2 * n3)
  let divider = Math.sqrt((n1 + n2) * (n3 + n4) * (n1 + n3) * (n2 + n4));

  return dividend / divider
}


console.log(getPhi([76, 4, 9, 1]));

// ----------------------------------TESTS-------------------------------------------

function tests() {

  console.log('--TESTS--')

  const TEST_DAY_REGISTRY = {
    events: ['trabajar', 'tocar un árbol', 'hamburguesa', 'correr', 'twitter'],
    octopus: false
  }

  // Print of the DAY_REGISTRY
  printDay(TEST_DAY_REGISTRY);

  // Check the lenght of the events
  console.log('Events lenght == 5\t -> \t' + (TEST_DAY_REGISTRY.events.length == 5));

  // Check if 'hamburguesa' is in events
  console.log('Hamburguesa in events\t -> \t' + hasEvent('hamburguesa', TEST_DAY_REGISTRY.events));

  // Check if 'pizza' is in events
  console.log('Pizza in events \t -> \t' + hasEvent('pizza', TEST_DAY_REGISTRY.events));

  var TEST_DIARY = [
    { events: ['trabajar', 'tocar un árbol', 'pizza', 'correr', 'television'], octopus: false },
    { events: ['trabajar', 'helado', 'coliflor', 'lasaña', 'tocar un árbol', 'lavarse los dientes'], octopus: false },
    { events: ['finde', 'bicicleta', 'descansar', 'cacahuetes', 'cerveza'], octopus: false }
  ]

  // Print of the diary
  printDiary(TEST_DIARY)

  // Check the diary lenght
  console.log('Diary lenght == 3\t -> \t' + (TEST_DIARY.length == 3));
}

// tests()