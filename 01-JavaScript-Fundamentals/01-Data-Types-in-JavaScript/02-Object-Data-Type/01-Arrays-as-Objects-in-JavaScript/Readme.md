# JavaScript Arrays

## Table of Contents

# Introduction to JavaScript Arrays

- Array store multiple values in a single `variable`.
- an **Array** is a special type of `Object`, it uses numbers to access its elements and an **Object** uses name to access its members

# How to Create JavaScript Arrays

## 1. Create JavaScript Array using `new Array()`

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

## 2. Create JavaScript Array Using Array Literal

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

# Resources
