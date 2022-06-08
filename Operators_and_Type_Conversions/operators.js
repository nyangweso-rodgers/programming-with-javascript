// JavaScript Operators

// typeof operator
console.log(typeof 2); // Output: number
console.log(typeof('2')); // Output: string
console.log(typeof true); // Output: boolean
console.log(typeof undefined); // Output: undefined
console.log(typeof Math); // Output: object
console.log(typeof Symbol("id")); // Output: symbol
console.log(typeof null); // Output: object
console.log(typeof alert); // Output: undefined

// Comparison Operators
// Greater/less than: a > b, a < b
console.log(4 > 2); // Output: true

// Greater/less than or equals: a >= b, a <= b
// Equals: a == b
// Not equals: a != b 

// Strict Equality - a regular equality == has a problem, it cannot differentaite between 0 and false:
console.log( 0 == false); // true

// the same thing happens with an empty string:
console.log( '' == false); // true


// Type Conversions
// strings are converted to numbers
console.log("78" / "45"); // Output:1.7333333333333334