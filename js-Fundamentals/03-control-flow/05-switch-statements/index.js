// switch statements

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