// Data Types in JavaScript

// Number
let age = 56; // integer
let height = 13.5; // float

// Special Numeric Values

// Infinity
console.log(5 / 0); // Output: Infinity
console.log(-Infinity);

// Nan
console.log("not a number" / 2); // Output: 
console.log("not a number" / 2 + 6);

// String
let str = 'hello';
let str1 = "double quotes are ok too";
let phrase = `can embed ${str}`
console.log(phrase); // Output: can embed hello



// embed a variable
let name = 'john';
console.log(`hello, ${name}!`); // Output: hello, john
console.log(`the result is ${1 + 2}`);

// Boolean
// boolean values also comes as a result of comparison
let isGreater = 4 > 1;
console.log(isGreater); // Output: true

// object
var emp = {
    name: "Rodgers",
    age: 26
};

console.log(emp); // Output: 