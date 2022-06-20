// Functional Programming in JavaScript

// Function Declaration
// .....................code goes here
// calling the function before evem declaring it
hello();

function hello() {
    console.log("Hi there");
};


// Function Expression
let greeting = function(name) {
    return (`Hi ${name}`)
};
console.log(greeting("Rodgers")); // Output: Hi Rodgers


// Higher Order Functions
// .....................code goes here


// Callback Functions

// Arrow Function
const calculateAge = birthYear => 2021 - birthYear;
const myAge = calculateAge(1994);
console.log(myAge); // Output:

const yearsToRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} will be retired in ${retirement} years`;
};
const retirement = yearsToRetirement(1994, "Rodgers");
console.log(retirement); // Output: Rodgers will be retired in 37 years
