'use strict';

function * fibonacciGenerator() {
  let fib1 = 0;
  let fib2 = 1;
  let control;

  for (;;) {
    let curr = fib1;
    fib1 = fib2;
    fib2 = curr + fib1;

    control = yield curr;

    switch (control) {
      case 'reset':
        fib1 = 0;
        fib2 = 1;
        break;
      case 'destroy':
        return;
      default:
        // nothing to do.
    }
  }
}

module.exports = fibonacciGenerator;

let fibSeq = fibonacciGenerator();

let i = 0;

for (let n of fibSeq) {
  console.log("N", n);
  i++;

  if (i > 10) {
    fibSeq.next('destroy');
  }
}
