const R = require('ramda');

const __ = R.__;

// all: https://ramdajs.com/docs/#all
// none: https://ramdajs.com/docs/#none
// any: https://ramdajs.com/docs/#any
// allPass: https://ramdajs.com/docs/#allPass
// anyPass: https://ramdajs.com/docs/#anyPass
console.log('\n=== R.all, R.none, R.any, R.allPass, R.anyPass ===');
const divisibleBy = (d, v) => d % v === 0;
const curryDivisibleBy = R.curry(divisibleBy);
const divisibleByTwo = curryDivisibleBy(__, 2);
const divisibleByThree = curryDivisibleBy(__, 3);

const LIST = [10, 12, 15];

console.log(R.any(R.allPass([divisibleByTwo, divisibleByThree]), LIST));
console.log(R.none(R.allPass([divisibleByTwo, divisibleByThree]), LIST));
console.log(R.all(R.allPass([divisibleByTwo, divisibleByThree]), LIST));
console.log(R.all(R.anyPass([divisibleByTwo, divisibleByThree]), LIST));
