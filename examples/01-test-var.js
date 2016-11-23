// What happens if you forget to declare a variable?

function testVarScope() {
  a = 10000;

  console.log('2. value of a', a);
}

var a = 0;
console.log('1. value of a', a);

testVarScope();

console.log('2. value of a', a);
