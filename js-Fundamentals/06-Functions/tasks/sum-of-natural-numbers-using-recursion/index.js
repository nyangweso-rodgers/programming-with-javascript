
// calculate the sum of natural numbers from 1 to n using the recursion
function sum(n) {
    if (n <= 1) {
        return n;
    };
    return n + sum(n - 1);
};

console.log(sum(4)); // Output: 4, 