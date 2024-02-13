# Array Methods

## Table Of Contents

## Array Method 1: `includes()`

- `includes()` checks if an array includes a certain value among its elements, returning true or false

  ```js
  // includes() Method
  var priceList = [10, 20, 30, 40, 50];

  console.log(priceList.includes(10)); // Output: true
  console.log(priceList.includes(60)); // Output: false
  ```

## Array Method 2: `indexOf()`

- find the index of the first occurance of array element.
  ```js
  let names = ["Rodgers", "Nyangweso"];
  console.log(names.indexOf("Rodgers")); // Output: 0
  ```

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

## Array Method 1: `concat()`

- `concat()` allows you to join arrays and create an entirely new array

  ```js
  var priceList = [10, 20, 30, 40, 50];
  console.log(priceList); // Output: priceList = [ 10, 20, 30, 40, 50 ]
  var newPriceItem = [35];

  priceList = priceList.concat(newPriceItem);
  console.log(priceList); // Output: [ 10, 20, 30, 40, 50, 35 ]
  ```

## Array Method 3: `sort()`

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

## Array Method 4: `reverse()`

- `reverse()` reverses the order of the elements in the array

  ```js
  // reverse() Method

  var priceList = [10, 20, 30, 40, 50];

  const reverseFunction = (array) => {
    return array.reverse();
  };

  console.log(reverseFunction(priceList)); // Output: [ 50, 40, 30, 20, 10 ]
  ```

## Array Method 1: `forEach()`

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

## Array Method 2: `filter()`

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

## Array Method 3: `find()`

- `find()` behaves similarly to the `filter()` method, but it only returns a single element.
- this method will stop at the first element that 'pass the test' and return that. if none exists, it will return `undefined`.

  ```js
  var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var even = numberList.find((n) => n === 3);
  console.log(even); // Output: 3
  ```

## Array Method 6: `findIndex()`

- `findIndex()` behaves similarly to the `find()` method, but it returns an index instead of the element.
- this method will stop at the first element that 'pass the test' and return the index. if none exists, it will return `-1`

  ```js
  var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var indexThree = numberList.findIndex((n) => n === 3);
  console.log(indexThree); // Output: 2
  ```

## Array Method 7: `flat`

## Array Method 8: `flatMap`

## Array Method 10: `fill`

## Array Method 12: `every`

## Array Method 7: `reduce()`

- `reduce()` takes a `callback` with (at least) two arguments, an `accumulator` and the current element. for each iteration, the return value of the `callback function` is passed on as the `accumulator` argument of the next iteration.

  ```js
  var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var sumList = numberList.reduce((acc, n) => acc + n);
  console.log(sumList); // Output: 45
  ```

## Array Method 8: `some()`

- `some()` takes a `predicate function` and return `true` if any of the elemnts in the array 'passes the test'

  ```js
  var priceList = [10, 20, 30, 40, 50];

  var priceListAboveThirty = priceList.some((priceItem) => priceItem >= 30);
  console.log(priceListAboveThirty); // Output: true
  ```

## Array Method 9: `every()`

- `every()` takes a `predicate function` and returns `true` if all of the elemnts in the array 'pass the test'

  ```js
  var priceList = [10, 20, 30, 40, 50];
  var priceListAboveThirty = priceList.every((priceItem) => priceItem >= 30);
  console.log(priceListAboveThirty); // Output: false
  ```

## Array Method 11: `fill()`

- `fill()` replaces all the elemnts in an `array` to a given value

  ```js
  var priceList = [10, 20, 30, 40, 50];
  var populateWithSeven = priceList.fill(7);
  console.log(populateWithSeven); // Output: [ 7, 7, 7, 7, 7 ]
  ```

## Array Method 13: `flat()`

- `flat()` creates a new array with all sub-array elements flattened into it. you can specify a depth. The default is 1

  ```js
  const numbers = [[1], [2], [3], [4], [5]];
  const flattened = numbers.flat(2);
  console.log(flattened); // Output: [ 1, 2, 3, 4, 5 ]
  ```

## Array Method 14: `flatMap()`

- `flatMap()` applies a `callback` to each element of the `array` and then flatten the result into an array. it combines `flat() `and `map()` in one function

  ```js
  const numbers = [[1], [2], [3], [4], [5]];
  const flattenedDoubles = numbers.flatMap((n) => n * 2);
  console.log(flattenedDoubles); // Output: [ 2, 4, 6, 8, 10 ]
  ```

# Resources
