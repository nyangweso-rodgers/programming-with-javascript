# Array Methods

## Table Of Contents

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

## Array Method 2: `indexOf()`

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

## Array Method 5: `sort`

## Array Method 6: `indexOf`

## Array Method 7: `flat`

## Array Method 8: `flatMap`

## Array Method 9: `reverse`

## Array Method 10: `fill`

## Array Method 11: `includes`

## Array Method 12: `every`

## Array Method 13: `find()`

# Resources
