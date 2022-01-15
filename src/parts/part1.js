const R = require('ramda');

const __ = R.__;

// __: https://ramdajs.com/docs/#__
console.log('\n=== __ ===');
console.log(R.subtract(5, 2));
console.log(R.subtract(5)(2));
console.log(R.subtract(__, 2)(5));

console.log(R.subtract(2)(5));
console.log(R.subtract(__, 5)(2));

// curry: https://ramdajs.com/docs/#curry
console.log('\n=== curry===');
const sub = (a, b) => a - b;
const sub1 = R.curry(sub);

console.log(sub(5, 3));
// ERROR: console.log(sub(5)(3));
console.log(sub1(5, 3));
console.log(sub1(5)(3));
console.log(sub1(__, 3)(5));
console.log(sub1(__, 5)(3));

const addFourNumbers = (a, b, c, d) => a + b + c + d;
const curriedAddFourNumbers = R.curry(addFourNumbers);
console.log(addFourNumbers(1, 2, 3, 4));
// ERROR: console.log(addFourNumbers(1, 2)(3, 4));
console.log(curriedAddFourNumbers(1, 2, 3, 4));
console.log(curriedAddFourNumbers(1, 2, 3)(4));
console.log(curriedAddFourNumbers(1, 2)(3, 4));
console.log(curriedAddFourNumbers(1)(2, 3, 4));
console.log(curriedAddFourNumbers(1)(2, 3)(4));
console.log(curriedAddFourNumbers(1)(2)(3)(4));

// curryN: https://ramdajs.com/docs/#curryN
console.log('\n=== curryN ===');
const curriedThreeAddFourNumbers = R.curryN(3, addFourNumbers);
// ERROR: console.log(curriedThreeAddFourNumbers(1)(2)(3)(4));
console.log(curriedThreeAddFourNumbers(2)(4)(6, 8));
// ERROR: console.log(curriedThreeAddFourNumbers(2)(4, 6)(8));
// ERROR: console.log(curriedThreeAddFourNumbers(2, 4)(6)(8));
// ERROR: console.log(curriedThreeAddFourNumbers(2)(4)(6));

const addFour = (a) => (b) => (c) => (d) => a + b + c + d;
const uncurriedAddFour = R.uncurryN(4, addFour);
console.log(addFour(1)(3)(5)(7));
console.log(uncurriedAddFour(1)(3)(5)(7));
console.log(uncurriedAddFour(1)(3, 5)(7));
console.log(uncurriedAddFour(1, 3, 5, 7));

// uncurryN: https://ramdajs.com/docs/#uncurryN
console.log('\n=== uncurryN ===');
const uncurriedThreeAddFour = R.uncurryN(3, addFour);
const uncurriedTwoAddFour = R.uncurryN(2, addFour);
console.log(uncurriedThreeAddFour(1, 4, 6)(8));
console.log(uncurriedThreeAddFour(1)(4, 6)(8));
console.log(uncurriedThreeAddFour(1, 4)(6)(8));
console.log(uncurriedTwoAddFour(1, 4)(6)(8));

// partial: https://ramdajs.com/docs/#partial
console.log('\n=== partial ===');
const greet = (salutation, title, firstName, lastName) =>
  salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';

const sayHello = R.partial(greet, ['Hello']);
const sayHelloToMs = R.partial(sayHello, ['Ms.']);
console.log(greet('Hello', 'Ms.', 'Jane', 'Jones'));
console.log(sayHello('Ms.', 'Jane', 'Jones'));
console.log(sayHelloToMs('Jane', 'Jones'));

// partialRight: https://ramdajs.com/docs/#partialRight
console.log('\n=== partialRight ===');
const greetJones = R.partialRight(greet, ['Jones']);
const greetJaneJones = R.partialRight(greet, ['Jane', 'Jones']);
const greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
console.log(R.curry(greetJones)('Hello')('Ms.')('Jane'));
console.log(greetJaneJones('Hello', 'Ms.'));
console.log(greetMsJaneJones('Hello'));
