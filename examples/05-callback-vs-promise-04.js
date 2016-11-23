'use strict';

const {setTimeout} = require('timers');

const usefulObject = {
  doAsyncThings() {
    const allPromises = [
      new Promise(resolve => {
        setTimeout(function () {
          resolve('Async thing 1');
        }, 200);
      }),

      new Promise(resolve => {
        setTimeout(function () {
          resolve('Async thing 2');
        }, 300);
      }),

      new Promise(resolve => {
        setTimeout(function () {
          resolve('Async thing 3');
        }, 400);
      })
    ];

    return Promise.all(allPromises);
  },

  startMoreAsyncThings() {
    return [
      new Promise(resolve => {
        setTimeout(function () {
          resolve('Async thing 4');
        }, 200);
      }),

      new Promise(resolve => {
        setTimeout(function () {
          resolve('Async thing 5');
        }, 300);
      }),

      new Promise(resolve => {
        setTimeout(function () {
          resolve('Async thing 6');
        }, 400);
      })
    ];
  }
};

usefulObject
  .doAsyncThings()
  .then(res => {
    console.log('doAsyncThings results:', res);
    return Promise.all(usefulObject.startMoreAsyncThings());
  })
  .then(res2 => console.log('moreAsyncThings results:', res2))
  .then(() => console.log('DONE'));
