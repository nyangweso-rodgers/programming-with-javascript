// Higher Order Functions in JS

// Example 1: Higher Order Functions
function morning(name) {
    return `Good Morning, ${name}`;
};

function evening(name) {
    return `Good Evening, ${name}`;
};

function happyBirthDay(name) {
    return `Happy Birthday, ${name}`;
};

function greet(name, func) {
    return func(name);
}

console.log(morning('Rodgers'));
console.log(evening("Rodgers"));
console.log(happyBirthDay("Rodgers"));

// greet is a higher order function because it is taking another function as an argument
// functions morning(), evening() and happyBirthday() are callback functions because they are getting called be the function greet
console.log(greet("Rodgers", morning)); // Output: Good morning, Rodgers
console.log(greet("Rodgers", evening)); // Output: Good evening, Rodgers
console.log(greet("Rodgers", happyBirthDay)); // Output: Happy Birthday, Rodgers