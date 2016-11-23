// How var works is different from what you think.

function testVarScope2() {
  a = 10000;

  console.log('2. value of a', a);

  var a;
}

var a = 0;
console.log('1. value of a', a);

testVarScope2();

console.log('2. value of a', a);
