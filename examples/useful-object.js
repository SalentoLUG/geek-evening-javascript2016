'use strict';

const {setTimeout} = require('timers');

module.exports = {
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
