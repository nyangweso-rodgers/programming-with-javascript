# How to Create Arrays in JavaScript

# Create an array

## 1. using `new Array()`

```js
// using `new Array()`
let names = new Array("Rodgers", "Nyangweso");
console.log(names); // Output: [ 'Rodgers', 'Nyangweso' ]
console.log(typeof names); // Output: object
```

- **Remark**

  - you can also declear an **array**, tell it the number of elements it will store, and add the elements later.

    ```js
    var priceList = new Array();

    // add elements dynamically
    priceList[0] = 10;
    priceList[1] = 20;
    priceList[2] = 30;

    // display the price list
    console.log(priceList); // Output: [ 10, 20, 30 ]
    ```

## 2. using Array Literal

- this is used for greater simplicity, readability and execution speed
  ```js
  // declare a new array using `array literals`
  var priceList = [10, 20, 30];
  var familyMembers = ["Rodgers", "Wilson", "Robert"];
  ```

# Accessing Array Elements

- you refer to an array element by refering to the **index** number written in square brackets.

  ```js
  // Accessing Array Elements
  var priceList = [10, 20, 30, 40, 50];
  console.log(priceList[0]); // Output: 10
  ```

# Changing Array Elements

```js
// Changing Array Elements
var priceList = [10, 20, 30, 40, 50];

priceList[1] = 90;
console.log(priceList); // Output: 90
```

# Use Cases

## Generate Array of Positive Integers

```js
// generate array of positive numbers
let arrayOfPositiveNumbers = [];
for (var i = 0; arrayOfPositiveNumbers.push(i++) < 100; );

console.log(arrayOfPositiveNumbers);
```

- or, using Arrow Functions:

  ```js
  let arrayOfPositiveNumbers = [];

  const positiveIntegerNumbers = () => {
    let max = 100;
    for (let i = 0; i < max; i++) {
      arrayOfPositiveNumbers.push(i);
    }
  };
  positiveIntegerNumbers(); // Call the function to populate the array
  console.log(arrayOfPositiveNumbers);
  ```

# Array Methods

## Array Method 1: `concat()`

- `concat()` allows you to join arrays and create an entirely new array

  ```js
  var priceList = [10, 20, 30, 40, 50];
  console.log(priceList); // Output: priceList = [ 10, 20, 30, 40, 50 ]
  var newPriceItem = [35];

  priceList = priceList.concat(newPriceItem);
  console.log(priceList); // Output: [ 10, 20, 30, 40, 50, 35 ]
  ```

## Array Method 3: `forEach()`

- `forEach()` executes the given function once for each of the array elements. The `callback function` does not expect a `return` value, and the `forEach()` method itself also returns `undefined`.

  ```js
  var priceList = [10, 20, 30, 40, 50];

  var itemPrices = priceList.forEach((itemPrice) => console.log(itemPrice));
  console.log(itemPrices); // Output: 10, 20, 30, 40, 50
  ```

## Array Method 4: `filter()`

- `filter()` creates a new array containing only the elements that 'pass the test' implemented by the callback function.
- we call this type of callback a `predicate function`

  ```js
  var priceList = [10, 20, 30, 40, 50];

  var topThreePriceList = priceList.filter((itemPrices) => itemPrices >= 30);
  console.log(topThreePriceList); // Output: [ 30, 40, 50 ]
  ```

- Use case: get even numbers from a list of positive integers

  ```js
  var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var evenNumberList = numberList.filter((n) => n % 2 === 0);

  console.log(evenNumberList); // Output: [2, 4, 6, 8]
  ```

## Array Method 5: `find()`

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

## Array Method 10: `includes()`

- `includes()` checks if an array includes a certain value among its elements, returning true or false

  ```js
  var priceList = [10, 20, 30, 40, 50];

  var hasNumberTen = priceList.includes(10);
  console.log(hasNumberTen); // Output: true
  ```

## Array Method 11: `fill()`

- `fill()` replaces all the elemnts in an `array` to a given value

  ```js
  var priceList = [10, 20, 30, 40, 50];
  var populateWithSeven = priceList.fill(7);
  console.log(populateWithSeven); // Output: [ 7, 7, 7, 7, 7 ]
  ```

## Array Method 12: `reverse()`

- `reverse()` reverses the order of the elements in the array

  ```js
  var priceList = [10, 20, 30, 40, 50];
  var reversedPriceList = priceList.reverse();
  console.log(reversedPriceList); // Output: [ 50, 40, 30, 20, 10 ]
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

## Array Method 15: `.sort()`

- `sort()` used to sort the elements of an array and returning the sorting array.
- _NOTE:_ this method is mutating the original array

  ```js
  const numbers = [2, 9, 3, 5, 1, 8];
  numbers.sort((a, b) => a - b);
  console.log(numbers); // Output: [ 1, 2, 3, 5, 8, 9 ]
  ```

## Array Method 16: `.indexOf()`

```js
let names = ["Rodgers", "Nyangweso"];
// find the index where Rodgers occurs for the first time
console.log(names.indexOf("Rodgers")); // Output: 0
```

## Array Method 17: `.push()` and `.pop()`

- `js` arrays are dynamic, hence we can add elements using the `push()` method and remove the last element using the `pop()` method
- An important note is that both of those methods mutate the original array.
- Examples:

  - using `.push()`

  ```js
  let names = ["Rodgers", "Nyangweso"];

  names.push("Omondi");
  console.log(names); // Output: [ 'Rodgers', 'Nyangweso', 'Omondi' ]
  ```

  - using `.pop()`

  ```js
  let names = ["Rodgers", "Nyangweso"];

  names.pop();
  console.log(names); // Output: [ 'Rodgers']
  ```
