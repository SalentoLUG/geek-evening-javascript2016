'use strict';

function mult(a, b) {
  if (typeof a !== 'number' /* || typeof b !== 'number' */) {
    throw new Error('should be a number');
  }

  return a * b;
}

module.exports = {mult};
