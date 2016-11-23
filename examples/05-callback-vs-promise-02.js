'use strict';

const {setTimeout} = require('timers');

const usefulObject = {
  doAsyncThings(done) {
    const results = [];
    const collect = res => {
      results.push(res);

      if (results.length === 3) {
        done(results);
      }
    };

    setTimeout(function () {
      collect('Async thing 1');
    }, 200);

    setTimeout(function () {
      collect('Async thing 2');
    }, 300);

    setTimeout(function () {
      collect('Async thing 3');
    }, 400);
  }
};

usefulObject.doAsyncThings(res => {
  console.log('doAsyncThings results:', res);
});
