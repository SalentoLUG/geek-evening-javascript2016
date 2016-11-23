'use strict';

const multiLineString = `
  And stop
  to concatenate
  strings
`;

const interpolatedString = `(PWD: ${process.env.PWD})`;

console.log('This is a multi line string:', multiLineString);

console.log('This is an interpolated string:', interpolatedString);

function customTag(strings, values) {
  console.log('STRINGS', strings);
  console.log('VALUES', values);

  return 'returned value';
}

const name = 'world';
console.log('This is a custom tagged template:', customTag`Hello ${name}!`);
