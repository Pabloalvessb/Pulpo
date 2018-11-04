'use strict';

const REGISTRY = require('./journal');

var diary = [];

// Adds a day to the diary
function addDay(day) {
  diary.push(day);
}

// Prints the actual diary
function printDiary(diary) {
  console.log('-----DIARY-----')
  diary.forEach(day => {
    printDay(day);
  });
  console.log('--END-OF-DIARY--')
}

// Prints the day
function printDay(day) {
  // day.forEach(e => {
  //   console.log(e);
  // })
  // console.log('--\nEvents\t= ' + day.events.toString() + '\nOctopus\t= ' + day.octopus + '\n--');
  console.log(day)
}

// Check idf an event is in the list of events
function hasEvent(event, events) {
  return events.includes(event);
}

// Prints the Journal (Complete diary)
function printJournal() {
  REGISTRY.forEach(day => {
    printDay(day);
  });
}

// Gets all the events of the journal
function getAllEvents() {
  let eventsList = [];
  REGISTRY.forEach(day => {
    day.events.forEach(event => {
      if (!eventsList.includes(event)) eventsList.push(event);
    });
  });
  return eventsList;
}

// Gets the colletation table the events od a journal
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

// Changes the correlation table of 
function getPhiTable(register) {
  console.log('---------- PHI TABLE ----------')
  let correlationTable = getCorrelationTable(register);
  correlationTable.forEach(event => {
    event.phi = getPhi(event.table)
  });
  printPhiTable(correlationTable);

}

// Gets the Phi value of a coorelation table
function getPhi(correlation) {
  let n1 = correlation[0];
  let n2 = correlation[1];
  let n3 = correlation[2];
  let n4 = correlation[3];

  let dividend = (n1 * n4) - (n2 * n3)
  let divider = Math.sqrt((n1 + n2) * (n3 + n4) * (n1 + n3) * (n2 + n4));
  let result;
  (divider == 0) ? result = 0 : result = dividend / divider;
  return result;
}

// Prints a phi table
function printPhiTable(registry) {
  registry.forEach(event => {
    console.log(event.name.toUpperCase() + ':\n' + 'Correlation: \t' + event.table + '\nPhi: \t\t' + event.phi)
    console.log('-------------------------------')
  });

}

// PHI TABLE OF THE EXERCISE
getPhiTable(REGISTRY);

// ----------------------------------TESTS-------------------------------------------

function tests() {

  console.log('--TESTS--')

  // Day register for testing
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

  // Diary for testing
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