// You should really use let instead.

'use strict';

function testVarScope3(elements) {
  for (let i = 0; i < elements.length; i++) {
    let el = elements[i];

    console.log('el value inside the while block', el);
  }

  // console.log('el value outside the while block', el);
  // console.log('`i` value outside the while block', i);
}

testVarScope3(['ES5', 'ES6', 'ES7']);
