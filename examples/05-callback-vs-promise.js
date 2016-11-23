'use strict';

'use strict';

const {setTimeout} = require('timers');

const usefulObject = {
  doAsyncThings(done) {
    setTimeout(function () {
      done('Async thing 1');
    }, 200);
  }
};

usefulObject.doAsyncThings(res => {
  console.log('doAsyncThings results:', res);
});
