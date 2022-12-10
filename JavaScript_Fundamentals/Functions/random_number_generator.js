// random number generator

// Example 1:  random number generator using `Math.random()` function

console.log(Math.random());

// Getting numbers in a range
function getRandomNumber(min, max) {
    const floatRandom = Math.random();
    const difference = max - min;

    const random = Math.floor(difference * floatRandom);
    const randomAboveMin = random + min;
    return randomAboveMin;
}

console.log(getRandomNumber(10, 20)); // Output: 16
console.log(getRandomNumber(300, 500)); // Output: 497