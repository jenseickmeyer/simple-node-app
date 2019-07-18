'use strict';

// Use moment.js for date and time operations
const moment = require('moment');

// Print out the date and time of the beginning of today
console.log(moment().startOf('day').format());