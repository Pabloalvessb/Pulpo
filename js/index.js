'use strict';

const REGISTRY = [
  { events: ["carrot", "exercise", "weekend"], octopus: false },
  { events: ["bread", "pudding", "brushed teeth", "weekend", "touched tree"], octopus: false },
  { events: ["carrot", "nachos", "brushed teeth", "cycling", "weekend"], octopus: false },
  { events: ["brussel sprouts", "ice cream", "brushed teeth", "computer", "weekend"], octopus: false },
  { events: ["potatoes", "candy", "brushed teeth", "exercise", "weekend", "dentist"], octopus: false },
  { events: ["brussel sprouts", "pudding", "brushed teeth", "running", "weekend"], octopus: false },
  { events: ["pizza", "brushed teeth", "computer", "work", "touched tree"], octopus: false },
  { events: ["bread", "beer", "brushed teeth", "cycling", "work"], octopus: false },
  { events: ["cauliflower", "brushed teeth", "work"], octopus: false },
  { events: ["pizza", "brushed teeth", "cycling", "work"], octopus: false },
  { events: ["lasagna", "nachos", "brushed teeth", "work"], octopus: false },
  { events: ["brushed teeth", "weekend", "touched tree"], octopus: false },
  { events: ["lettuce", "brushed teeth", "television", "weekend"], octopus: false },
  { events: ["spaghetti", "brushed teeth", "work"], octopus: false },
  { events: ["brushed teeth", "computer", "work"], octopus: false },
  { events: ["lettuce", "nachos", "brushed teeth", "work"], octopus: false },
  { events: ["carrot", "brushed teeth", "running", "work"], octopus: false },
  { events: ["brushed teeth", "work"], octopus: false },
  { events: ["cauliflower", "reading", "weekend"], octopus: false },
  { events: ["bread", "brushed teeth", "weekend"], octopus: false },
  { events: ["lasagna", "brushed teeth", "exercise", "work"], octopus: false },
  { events: ["spaghetti", "brushed teeth", "reading", "work"], octopus: false },
  { events: ["carrot", "ice cream", "brushed teeth", "television", "work"], octopus: false },
  { events: ["spaghetti", "nachos", "work"], octopus: false },
  { events: ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"], octopus: false },
  { events: ["spaghetti", "peanuts", "computer", "weekend"], octopus: true },
  { events: ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"], octopus: false },
  { events: ["potatoes", "ice cream", "brushed teeth", "work"], octopus: false },
  { events: ["peanuts", "brushed teeth", "running", "work"], octopus: false },
  { events: ["potatoes", "exercise", "work"], octopus: false },
  { events: ["pizza", "ice cream", "computer", "work"], octopus: false },
  { events: ["lasagna", "ice cream", "work"], octopus: false },
  { events: ["cauliflower", "candy", "reading", "weekend"], octopus: false },
  { events: ["lasagna", "nachos", "brushed teeth", "running", "weekend"], octopus: false },
  { events: ["potatoes", "brushed teeth", "work"], octopus: false },
  { events: ["carrot", "work"], octopus: false },
  { events: ["pizza", "beer", "work", "dentist"], octopus: false },
  { events: ["lasagna", "pudding", "cycling", "work"], octopus: false },
  { events: ["spaghetti", "brushed teeth", "reading", "work"], octopus: false },
  { events: ["spaghetti", "pudding", "television", "weekend"], octopus: false },
  { events: ["bread", "brushed teeth", "exercise", "weekend"], octopus: false },
  { events: ["lasagna", "peanuts", "work"], octopus: true },
  { events: ["pizza", "work"], octopus: false },
  { events: ["potatoes", "exercise", "work"], octopus: false },
  { events: ["brushed teeth", "exercise", "work"], octopus: false },
  { events: ["spaghetti", "brushed teeth", "television", "work"], octopus: false },
  { events: ["pizza", "cycling", "weekend"], octopus: false },
  { events: ["carrot", "brushed teeth", "weekend"], octopus: false },
  { events: ["carrot", "beer", "brushed teeth", "work"], octopus: false },
  { events: ["pizza", "peanuts", "candy", "work"], octopus: true },
  { events: ["carrot", "peanuts", "brushed teeth", "reading", "work"], octopus: false },
  { events: ["potatoes", "peanuts", "brushed teeth", "work"], octopus: false },
  { events: ["carrot", "nachos", "brushed teeth", "exercise", "work"], octopus: false },
  { events: ["pizza", "peanuts", "brushed teeth", "television", "weekend"], octopus: false },
  { events: ["lasagna", "brushed teeth", "cycling", "weekend"], octopus: false },
  { events: ["cauliflower", "peanuts", "brushed teeth", "computer", "work", "touched tree"], octopus: false },
  { events: ["lettuce", "brushed teeth", "television", "work"], octopus: false },
  { events: ["potatoes", "brushed teeth", "computer", "work"], octopus: false },
  { events: ["bread", "candy", "work"], octopus: false },
  { events: ["potatoes", "nachos", "work"], octopus: false },
  { events: ["carrot", "pudding", "brushed teeth", "weekend"], octopus: false },
  { events: ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"], octopus: false },
  { events: ["brussel sprouts", "running", "work"], octopus: false },
  { events: ["brushed teeth", "work"], octopus: false },
  { events: ["lettuce", "brushed teeth", "running", "work"], octopus: false },
  { events: ["candy", "brushed teeth", "work"], octopus: false },
  { events: ["brussel sprouts", "brushed teeth", "computer", "work"], octopus: false },
  { events: ["bread", "brushed teeth", "weekend"], octopus: false },
  { events: ["cauliflower", "brushed teeth", "weekend"], octopus: false },
  { events: ["spaghetti", "candy", "television", "work", "touched tree"], octopus: false },
  { events: ["carrot", "pudding", "brushed teeth", "work"], octopus: false },
  { events: ["lettuce", "brushed teeth", "work"], octopus: false },
  { events: ["carrot", "ice cream", "brushed teeth", "cycling", "work"], octopus: false },
  { events: ["pizza", "brushed teeth", "work"], octopus: false },
  { events: ["spaghetti", "peanuts", "exercise", "weekend"], octopus: true },
  { events: ["bread", "beer", "computer", "weekend", "touched tree"], octopus: false },
  { events: ["brushed teeth", "running", "work"], octopus: false },
  { events: ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"], octopus: false },
  { events: ["lasagna", "brushed teeth", "television", "work"], octopus: false },
  { events: ["cauliflower", "brushed teeth", "running", "work"], octopus: false },
  { events: ["carrot", "brushed teeth", "running", "work"], octopus: false },
  { events: ["carrot", "reading", "weekend"], octopus: false },
  { events: ["carrot", "peanuts", "reading", "weekend"], octopus: true },
  { events: ["potatoes", "brushed teeth", "running", "work"], octopus: false },
  { events: ["lasagna", "ice cream", "work", "touched tree"], octopus: false },
  { events: ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"], octopus: false },
  { events: ["pizza", "brushed teeth", "running", "work"], octopus: false },
  { events: ["lettuce", "brushed teeth", "work"], octopus: false },
  { events: ["bread", "brushed teeth", "television", "weekend"], octopus: false },
  { events: ["cauliflower", "peanuts", "brushed teeth", "weekend"], octopus: false }
]

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

var correlacionTable = [];

function getAllEvents() {
  REGISTRY.forEach(day => {
    day.events.forEach(event => {
      if (correlacionTable.includes(event)) correlacionTable.push(event);
    });
  });
}

getAllEvents()

console.log(correlacionTable);

// addDay(REGISTRY[0]);
// printDiary();
// printDay(REGISTRY[0]);

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