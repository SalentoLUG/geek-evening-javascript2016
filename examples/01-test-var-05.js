// And prefer const where the identifier is not supposed to be
// reassigned.

'use strict';

function testVarScope3(elements) {
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];

    // el = null;

    console.log('el value inside the while block', el);
  }
}

testVarScope3(['ES5', 'ES6', 'ES7']);
