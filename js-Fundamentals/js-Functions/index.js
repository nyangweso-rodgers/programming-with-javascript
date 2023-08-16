// Declare Functions in js

// function declarations


// function expressions


// Array functions


// Nested Functions
function greetMe(name) {
    // inner function
    function displayName() {
        console.log("Hello " + ' ' + name);
    };
    displayName();
};

// calling the outer function
// greetMe("Rodgers"); // Output: "Hello Rodgers"

// Functions with Default Parameters
function test(a, b = 3,  c= 4) {
    var result = a + b + c;
    return result;
};

console.log(test(5)); // Output: 12