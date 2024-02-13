# Array Methods Cheatsheet

## Table Of Contents

# Methods to Add/Remove Items in an Array

## Array Method 1: `push()` and `pop()`

- JavaScript arrays are dynamic, hence we can add elements using the `push()` method and remove the last element using the `pop()` method.
- An important note is that both of those methods mutate the original array.
- Using `push()`

  ```js
  const students = ["Rodgers", "Nyangweso"];

  console.log(students); // Output: [ 'Rodgers', 'Nyangweso' ]
  students.push("Omondi");
  console.log(students); // Output: [ 'Rodgers', 'Nyangweso', 'Omondi' ]
  ```

- Using `pop()`:

  ```js
  let names = ["Rodgers", "Nyangweso"];

  names.pop();
  console.log(names); // Output: [ 'Rodgers']
  ```

## Array Method 2: `splice()`

- `splice(i, j)` method can be used to **insert**, **remove** and **replace** array elements.
- using `splice()` method to remove elements in an array:

  ```js
  // splice method

  let start = 1;
  let end = 10;
  const arrayOfPositiveNumbers = [];

  const generatePositiveNumbers = (a, b) => {
    for (let i = a; i <= b; i++) {
      arrayOfPositiveNumbers.push(i);
    }
    //console.log(arrayOfPositiveNumbers);
    return arrayOfPositiveNumbers;
  };

  const removeElementsUsingSplice = (array) => {
    array.splice(1, 2); // starting from index 1, remove 2 elements
    return array;
  };
  console.log("Generated Array:", generatePositiveNumbers(start, end)); // Output: [1,2,3,4,5,6,7,8,9,10]
  console.log(removeElementsUsingSplice(arrayOfPositiveNumbers)); // Output: [1,4,5,6,7,8,9,10]
  ```

- using `splice()` to remove and replace elements

  ```js
  // remove and replace elements
  const removeAndReplaceArrayElementsUsingSplice = (array) => {
    array.splice(0, 2, "New Element");
    return array;
  };

  console.log(removeAndReplaceArrayElementsUsingSplice(arrayOfPositiveNumbers)); // Output: [ 'New Element', 5, 6, 7, 8, 9, 10 ]
  ```

## Array Method 3: `slice()`

- `slice(start, end)` is similar to a `string` method `.slice()`, but instead of substrings it makes subarrays. Itreturns a new array containing items from index `start` to `end` (not including `end`).
- Both `start` and `end` can be negative, in that case position from array `end` is assumed.

  ```js
  generatePositiveNumbers(start, end); // Output: [1,2,3,4,5,6,7,8,9,10]

  // using slice()
  const sliceFunction = (array) => {
    return array.slice(1, 3);
  };

  console.log(sliceFunction(arrayOfPositiveNumbers)); // Output: [ 2, 3 ]
  ```

# Methods To Search Array

# Methods to Iterate Array Objects

# Methods to Transform Array Objects

- these are used to transform and reorder the array
