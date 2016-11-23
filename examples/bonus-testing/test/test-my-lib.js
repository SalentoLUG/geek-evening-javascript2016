'use strict';

import test from 'ava';
import {mult} from '../my-lib';

test('mult should return a * b', t => {
  t.is(mult(5, 10), 50);
  t.is(mult(0, 10), 0);

  const someRandomNumbers = Array(4).fill(1).map(
    () => [Math.random() * 10, Math.random() * 100]
  );

  for (let [a, b] of someRandomNumbers) {
    t.is(mult(a, b), a * b);
  }
});

test('mult should raise an error on non-number parameters', t => {
  t.throws(() => {
    mult('10', 5);
  }, /should be a number/);

  /*
  t.throws(() => {
    mult(10, '5');
  }, /should be a number/);
  */
});
