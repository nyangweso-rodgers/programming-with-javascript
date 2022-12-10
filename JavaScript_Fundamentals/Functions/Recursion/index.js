// Recursion

// Example 1: calculate the sum of natural numbers from 1 to n using the recursion
function sum(n) {
    if (n <= 1) {
        return n;
    }
    return n + sum(n -1);
}
console.log(sum(4)) // 10

// Example 2: program to count down numbers to 1
function countDown(number) {
    // display the number
    console.log(number);

    // decrease the number by value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}
console.log(countDown(4)); // 4, 3, 2, 1