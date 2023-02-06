// if statements

var a = 7;
var b = 10;

if (a < b) {
    console.log("JS is starting to get easier");
}; // JS is starting to get easier

// else statement
var a = 7;
var b = 10;

if (a > b) {
    console.log("A is greater than B");
}
else {
    console.log("A is less than B");
}; // A is less than B

// using ? operator
var a = 7;
var b = 10;
a > b? console.log("A is greater than B"): console.log("Not Allowed!"); // Not Allowed

// else if statement
var dayOfWeek = 'Monday';

if (dayOfWeek == 'Monday') {
    console.log(`Today is ${dayOfWeek}, we are eating Pizza and Soda`);
}
else if (dayOfWeek == 'Tuesday') {
    console.log(`Today is ${dayOfWeek}, we are eating Ugali and Kales`);
}
else {
    console.log("Day is not specififed");
    // THE FINAL else block will be executed when none of the conditions is true
};

// Example 2: else if statement

var onLineStatus = 1;
var message;

if (onLineStatus == 1) {
    message = "User is online!";
} else if (onLineStatus == 0) {
    message = "User is Offline!";
} else {
    message = "User is away";
};
console.log(message);