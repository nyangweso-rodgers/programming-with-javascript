// Length property

const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Count the Number of elements in the array
// Option 1
console.log(sampleArray.length); // Output: 9

// Option 2: using loop
let arrayElementCount = 0;
for (let element = 0; element < sampleArray.length; element++) {
  arrayElementCount++;
}

console.log("Number of elements: ", arrayElementCount); // Output: Number of elements:  9
