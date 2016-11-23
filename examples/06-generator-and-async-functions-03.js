'use strict';

const usefulObject = require('./useful-object.js');

async function doSomethingAsync() {
  const res = await usefulObject.doAsyncThings();

  console.log('doAsyncThings results:', res);

  const res2 = await Promise.all(usefulObject.startMoreAsyncThings());

  console.log('moreAsyncThings results:', res2);

  console.log('DONE.');
}

doSomethingAsync();
