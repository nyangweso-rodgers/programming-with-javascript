// We can generate random numbers in JavaScript using the `Math.random()` function
// But using this function you can only generate floating-point numbers between 0 and 1.

// console.log(Math.random());

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