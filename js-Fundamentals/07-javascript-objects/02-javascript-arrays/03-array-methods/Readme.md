# Array Methods

## Array Method 2: `map()`

- `map()` creates a new array populated with the return value of the **callback function** for each element in the array

  ```js
  var priceList = [10, 20, 30, 40, 50];

  var doublePriceList = priceList.map((value) => value * 2);
  console.log(doublePriceList); // Output: [ 20, 40, 60, 80, 100 ]
  console.log(doublePriceList[0]); // Output: 20
  ```
