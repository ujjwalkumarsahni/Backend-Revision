// const {add} = require('./utils');
import { add, subtract, multiply, divide } from './utils.js';

// Using the imported functions
const result = add(5, 3);
console.log(`The sum of 5 and 3 is: ${result}`);

// Additional examples
const difference = subtract(10, 4);
console.log(`The difference of 10 and 4 is: ${difference}`);
const product = multiply(6, 7);
console.log(`The product of 6 and 7 is: ${product}`);
const quotient = divide(20, 5);
console.log(`The quotient of 20 and 5 is: ${quotient}`);

// Note: To use 'import' statements, ensure that "type": "module" is set in package.json
