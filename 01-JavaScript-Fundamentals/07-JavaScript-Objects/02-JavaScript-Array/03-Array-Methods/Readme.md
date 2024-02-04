# Array Methods

## Table Of Contents

# Lists of Array Methods

## Array Method 1: `map()`

- `map()` creates a new array populated with the return value of the **callback function** for each element in the array

  ```js
  var priceList = [10, 20, 30, 40, 50];

  var doublePriceList = priceList.map((value) => value * 2);
  console.log(doublePriceList); // Output: [ 20, 40, 60, 80, 100 ]
  console.log(doublePriceList[0]); // Output: 20
  ```

## Array Method 2: `forEach()`

- The `forEach()` method calls a function for each element in an array.
- Example usage:

  - Lists students:

    ```js
    // using forEach method

    const students = ["Student 1", "Student 2", "Student 3"];

    const getStudents = (data) => {
      data.forEach((student) => {
        console.log(student);
        //return student;
      });
    };

    getStudents(students);
    ```

- Notes:
  - The `forEach()` method is not executed for empty elements.

# Resources

1. [w3schools - JavaScript Array forEach()](https://www.w3schools.com/jsref/jsref_foreach.asp)
