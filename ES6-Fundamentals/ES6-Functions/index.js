// functions in ES6


// add function
const add = (x, y) => {
    let sum = x + y;
    console.log(sum);
}
add(67, 9); // 76

// example: declare an arrow function that take an array and prints the odd elements
const printOdds = (arr) => {
    arr.forEach(el => {
        if (el % 2 !=0) {
            console.log(el);
        }
    })
};

var a = [1, 2, 3,4,5];
printOdds(a); // 1, 3. 5

// example 3: default parameter
function test(a, b = 3, c = 42) {
    return a + b + c;
}
console.log(test(5)); // 50

// example 4: arrow function with default parameter
const test = (a, b = 3, c = 42) => {
    return a + b + c;
}
console.log(test(5)); // Output: 50