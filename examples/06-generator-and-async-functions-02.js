'use strict';

const co = require('co');
const usefulObject = require('./useful-object.js');

co(function * () {
  const res = yield usefulObject.doAsyncThings();

  console.log('doAsyncThings results:', res);

  const res2 = yield Promise.all(usefulObject.startMoreAsyncThings());

  console.log('moreAsyncThings results:', res2);

  console.log('DONE.');
});
