

// Template Literals
let firstName = "Rodgers";
let lastName = "Nyangweso";

//const myName = firstName + " " + lastName;

// const myName = `${firstName} ${lastName}`
//console.log(myName); // Output: "Rodgers Nyangweso"


// Arrow Functions
let displayFullName = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;

    return fullName;
};

// console.log(displayFullName(firstName, lastName)); // Output: "Rodgers Nyangweso"

let distanceInKm = (x, y = 1000) => {
    const distance = x / y;

    return `Distiance in Km: ${distance}`
};

// console.log(distanceInKm(2));

// strings in es6
let myFullName = `${firstName} ${lastName}`;
console.log(myFullName); // Output: "Rodgers Nyangweso"

console.log(myFullName.startsWith("Rod")); // Output: true
console.log(myFullName.startsWith("rod")); // Output: false
console.log(myFullName.startsWith("Rod", 0)); // Output: true
console.log(myFullName.startsWith("Rod", 1)); // Output: false
console.log(myFullName.endsWith("eso")); // Output: true
console.log(myFullName.includes("Rod")); // Output: true