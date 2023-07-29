// set Object

let mySet = new Set();

mySet.add(5).add(6).add(7);

// console.log(mySet); // Output: Set(3) { 5, 6, 7 }

// has() Method
// console.log(mySet.has(9)); // Output: false

for (let i of mySet.values())
console.log(i);