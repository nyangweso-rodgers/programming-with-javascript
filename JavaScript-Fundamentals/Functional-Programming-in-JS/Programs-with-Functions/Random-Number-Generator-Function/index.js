
// console.log(Math.random());

function getRandomNumber(min, max) {
    const floatRandomNumber = Math.random();
    const difference = max - min;

    const random = Math.floor(difference * floatRandomNumber);
    const randomAboveMin = random + min;
    return randomAboveMin;
};

console.log(Math.random());
console.log(getRandomNumber(10, 20)); // Output: 16
console.log(getRandomNumber(300, 500)); // Output: 497