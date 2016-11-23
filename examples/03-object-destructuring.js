'use strict';

function createPerson(name, surname) {
  return {name, surname};
}

function createElements() {
  return [1, 2, 3, 4];
}

const {name, surname} = createPerson('Luca', 'Greco');
const [first, ...rest] = createElements();

console.log('RESULTS', {name, surname, first, rest});
