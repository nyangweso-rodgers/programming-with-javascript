// switch statements

var day = 8;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Error in the specified date!")
}; // Error in the specified date!

// example 2
var c = 4;

switch (c) {
    case 1:
        console.log(c + 1);
        break;
    case 2:
        console.log(c + 2);
        break;
    default:
        console.log(c + 1);
}; // Output: 5

// example 3
var color = 'yellow';

switch(color) {
    case "blue":
        console.log(`The color is ${color}`);
    break;

    case "green":
        console.log(`The color is ${color}`);
        break;
    default: // the default block can be omitted, if there is no need to handle the case when no match is found
    console.log(`The color is ${color}`);
}; // The color is yellow