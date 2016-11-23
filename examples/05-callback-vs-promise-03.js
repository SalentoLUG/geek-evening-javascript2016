'use strict';

const {setTimeout} = require('timers');

const usefulObject = {
  doAsyncThings() {
    return new Promise(resolve => {
      setTimeout(function () {
        resolve('Async thing 1');
      }, 200);
    });
  }
};

usefulObject.doAsyncThings().then(res => {
  console.log('doAsyncThings results:', res);
});
