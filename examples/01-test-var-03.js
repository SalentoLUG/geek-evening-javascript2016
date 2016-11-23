// How var is different from what you think - part 2.

function testVarScope3(elements) {
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];

    console.log('`el` value inside the while block', el);
  }

  console.log('`el` value outside the while block', el);
  console.log('`i` value outside the while block', i);
}

testVarScope3(['ES5', 'ES6', 'ES7']);
