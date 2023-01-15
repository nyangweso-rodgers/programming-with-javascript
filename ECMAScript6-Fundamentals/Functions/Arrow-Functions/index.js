// Arrow Functions in ES6

// example 1: calculate your age
const calculateAge = birthYear => 2021 - birthYear;
const myAge = calculateAge(1994);
console.log(myAge); // Output: 27

// calculate years to retirement
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