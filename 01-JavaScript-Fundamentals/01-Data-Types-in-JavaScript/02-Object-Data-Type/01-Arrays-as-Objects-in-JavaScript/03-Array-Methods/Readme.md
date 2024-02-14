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

## Array Method 4: `concat()`

- `concat()` allows you to join arrays and create an entirely new array

  ```js
  var priceList = [10, 20, 30, 40, 50];
  console.log(priceList); // Output: priceList = [ 10, 20, 30, 40, 50 ]
  var newPriceItem = [35];

  priceList = priceList.concat(newPriceItem);
  console.log(priceList); // Output: [ 10, 20, 30, 40, 50, 35 ]
  ```

# Methods To Search Array

- These methods are used to perform a search in an array.

## Array Method 5: `indexOf()`

- find the index of the first occurance of array element.
  ```js
  let names = ["Rodgers", "Nyangweso"];
  console.log(names.indexOf("Rodgers")); // Output: 0
  console.log(names.indexOf("Omondi")); // Output: -1
  ```

## Array Method 6: `includes()`

- `includes()` checks if an array includes a certain value among its elements, returning `true` or `false`

  ```js
  // includes() Method
  var priceList = [10, 20, 30, 40, 50];

  console.log(priceList.includes(10)); // Output: true
  console.log(priceList.includes(60)); // Output: false
  ```

## Array Method 7: `find()`

- `find()` behaves similarly to the `filter()` method, but it only returns a single element.
- this method will stop at the first element that 'pass the test' and return that. if none exists, it will return `undefined`.

  ```js
  var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var even = numberList.find((n) => n === 3);
  console.log(even); // Output: 3
  ```

## Array Method 8: `findIndex()`

- `findIndex()` behaves similarly to the `find()` method, but it returns an index instead of the element.
- this method will stop at the first element that 'pass the test' and return the index. if none exists, it will return `-1`

  ```js
  var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var indexThree = numberList.findIndex((n) => n === 3);
  console.log(indexThree); // Output: 2
  ```

## Array Method 9: `filter()`

- `filter()` creates a new array containing only the elements that 'pass the test' implemented by the callback function.
- we call this type of callback a **predicate function**

  ```js
  // filter method

  let priceList = [10, 20, 30, 40, 50];

  const topTwoItemPrices = () => {
    let filteredPriceList = priceList.filter((price) => {
      return price >= 40;
    });
    console.log(filteredPriceList);
  };

  topTwoItemPrices(); // Output: [40, 50]
  ```

- we can get even numbers from a list of positive integers

  ```js
  // Use Case 2: Get Even Numbers from numbers array
  const arrayOfPositiveNumbers = [];

  const generatePositiveNumbers = (start, end) => {
    for (let i = start; i < end; i++) {
      arrayOfPositiveNumbers.push(i);
    }
    const arrayOfEvenNumbers = arrayOfPositiveNumbers.filter((number) => {
      return number % 2 === 0;
    });
    return arrayOfEvenNumbers;
  };

  console.log(generatePositiveNumbers(10, 100));
  ```

# Methods to Iterate Array Objects

## Array Method 10: `forEach()`

- `forEach()` executes the given function once for each of the array elements. The **callback function** does not expect a `return` value, and the `forEach()` method itself also returns `undefined`.

  ```js
  // forEach method

  let priceList = [10, 20, 30, 40, 50];

  const itemPrices = () => {
    priceList.forEach((price) => {
      console.log(price);
    });
  };
  itemPrices(); // Output: 10, 20, 30, 40, 50
  ```

- Notes:
  - The `forEach()` method is not executed for empty elements.

# Methods to Transform Array Objects

- these are used to transform and reorder the array

## Array Method 11: `map()`

- `map()` creates a new array populated with the return value of the **callback function** for each element in the array

  ```js
  var priceList = [10, 20, 30, 40, 50];

  var doublePriceList = priceList.map((value) => value * 2);
  console.log(doublePriceList); // Output: [ 20, 40, 60, 80, 100 ]
  console.log(doublePriceList[0]); // Output: 20
  ```

## Array Method 12: `sort()`

- `sort()` used to sort the elements of an array and returning the sorting array.
- _NOTE:_ this method is mutating the original array

  ```js
  const numbers = [2, 9, 3, 5, 1, 8];
  numbers.sort((a, b) => a - b);
  console.log(numbers); // Output: [ 1, 2, 3, 5, 8, 9 ]
  ```

- Examples:

  - Define a `sortNumbers` function to sort arrays of numbers in Accessing order.

    ```js
    // sort() method
    const numbersArray = [2, 9, 3, 5, 1, 8];

    const sortNumbers = (array) => {
      array.sort((a, b) => {
        return a - b;
      });
      return array;
    };
    console.log(sortNumbers(numbersArray)); // Output: [ 1, 2, 3, 5, 8, 9 ]
    ```

    - Note: the above `sortNumbers` function is sorting the array in ascending order, which is the default behavior of the `sort()` method when no compare function is provided. So, we might not need to explicitly specify the **compare function**.
    - Here is a simplified version:

      ```js
      // sort() method
      const numbersArray = [2, 9, 3, 5, 1, 8];

      const sortNumbers = (array) => {
        return array.sort();
      };
      console.log(sortNumbers(numbersArray)); // Output: [ 1, 2, 3, 5, 8, 9 ]
      ```

    - If we want to sort the numbers in descending order, we can use `reverse()` method.

      ```js
      // sort() method
      const numbersArray = [2, 9, 3, 5, 1, 8];

      const sortNumbers = (array) => {
        return array.sort().reverse();
      };
      console.log(sortNumbers(numbersArray)); // Output: [ 9, 8, 5, 3, 2, 1 ]
      ```

## Array Method 13: `reverse()`

- `reverse()` reverses the order of the elements in the array

  ```js
  // reverse() Method

  var priceList = [10, 20, 30, 40, 50];

  const reverseFunction = (array) => {
    return array.reverse();
  };

  console.log(reverseFunction(priceList)); // Output: [ 50, 40, 30, 20, 10 ]
  ```

# Resources

1. [w3schools - JavaScript Array Methods](https://www.w3schools.com/js/js_array_methods.asp)
