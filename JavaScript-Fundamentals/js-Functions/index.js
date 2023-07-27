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
greetMe("Rodgers"); // Output: "Hello Rodgers"