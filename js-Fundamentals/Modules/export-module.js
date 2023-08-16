// example

function getPower(decimalPlaces) {
    return 10 ** decimalPlaces;
};

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
};

function roundToDecimalPlace(number, decimalPlaces = 2) {
    const round = getPower(decimalPlaces);
    return Math.round(number * round) / round;
}

export {capitalize, roundToDecimalPlace}

//console.log(roundToDecimalPlace(4.544))

/*
    - This module has three functions defined in it:
    - getPower: This function gets the power of a number
    - capitalize: This function capitalizes the first letter in a word
    - roundToDecimalPlace: This function rounds a given number to a specified number of decimal places.
*/

// At the end of the file, you can see that two of the three functions were exported. In other words, they became public functions which could be used by any other script.