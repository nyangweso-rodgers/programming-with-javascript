# Array Properties

## Table Of Contents

# Introduction to Array Properties

## Array Properties 1: `.length`

- `length` returns the the number of elements in an array.

  ```js
  var courses = new Array("HTML", "JavaScript", "CSS");

  // length
  console.log(courses.length); // Output: 3
  ```

- Example 1:

  - Count the number of elements in the array.
  - By using the `length` property:

    ```js
    const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Count the Number of elements in the array
    // Option 1
    console.log(sampleArray.length); // Output: 9
    ```

  - While less efficient than the `length` property, you can also iterate through the array and count the elements manually:

    ```js
    // Option 2: using loop
    let arrayElementCount = 0;
    for (let element = 0; element < sampleArray.length; element++) {
      arrayElementCount++;
    }

    console.log("Number of elements: ", arrayElementCount); // Output: Number of elements:  9
    ```

# Resources
