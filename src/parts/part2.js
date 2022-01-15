const R = require('ramda');

const __ = R.__;

// addIndex: https://ramdajs.com/docs/#addIndex
console.log('\n=== addIndex ===');
const double = R.multiply(2);
console.log(R.map(double, [5, 10, 15, 20, 25]));

const doublePlusIndex = (v, i) => double(v) + i;
const indexedMap = R.addIndex(R.map);

console.log(indexedMap(doublePlusIndex, [5, 10, 15, 20, 25]));

/**
 * R.addIndex Should work with F(fn, [...args], [list])
 * eg:
 * R.all, R.any, R.none
 * R.chain
 * R.drop, R.dropWhile
 * R.filter, R.reject
 * R.find...
 * R.forEach
 * R.groupBy, R.groupWith
 * R.map, R.mapAccum, R.mapAccumRight
 * R.reduce...
 * R.scan
 */

// https://ramdajs.com/docs/#update
console.log('\n=== update ===');
console.log(R.update(1, '___', [100, 200, 300]));

// https://ramdajs.com/docs/#adjust
console.log('\n=== adjust ===');

console.log(R.adjust(1, R.subtract(__, 10), [100, 200, 300]));

const adjustSubtract = R.adjust(__, R.subtract(__, 10));
const uncurryAdjustSubtract = R.uncurryN(2, adjustSubtract);

console.log(adjustSubtract(1)([100, 200, 300]));
console.log(uncurryAdjustSubtract(1, [100, 200, 300]));
