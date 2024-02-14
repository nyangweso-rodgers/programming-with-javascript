# Array Methods

## Table Of Contents





















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


