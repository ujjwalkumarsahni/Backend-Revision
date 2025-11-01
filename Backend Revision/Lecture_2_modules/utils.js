// utility functions for basic arithmetic operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


// this is the CommonJS export syntax
// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide
// };


// this is the ES6 export syntax
export { add, subtract, multiply, divide };

// Note: To use 'import' statements, ensure that "type": "module" is set in package.json