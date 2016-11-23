'use strict';

const {setTimeout} = require('timers');

const usefulObject = {
  importantProperty: 'This is important',

  doSomethingAsync() {
    // console.log('1. What is this?', this);
    setTimeout(function () {
      console.log('1. Important property value:', this.importantProperty);
      // console.log('2. What is this?', this);
    }, 200);

    /*
    setTimeout(function () {
      console.log('2. Important property value:', this.importantProperty);
    }.bind(this), 300);

    setTimeout(() => {
      console.log('3. Important property value:', this.importantProperty);
    }, 400);
    */
  }
};

usefulObject.doSomethingAsync();
