
// using function
function fizzBuzz (n) {
    const upperBoundInclusive = n;
    for (let i = 1; i <= upperBoundInclusive; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
};
console.log(fizzBuzz(100));