# Array Methods

## Table Of Contents

## Array Method 1: `forEach`

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

# Resources
