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

# Spread in Array Literals

- before **ES6**, we used the following syntax to add item at the middle of an array:

  ```js
  var sampleArray = ["one", "two", "five"];
  sampleArray.splice(2, 0, "three");
  console.log(sampleArray); // Output: [ 'one', 'two', 'three', 'five' ]
  ```

- **Remark**:
  - you can use methods such as `push`, `splice`, and `concat`, for example, to achiee this different positions of the array. however, in **ES6**, the **spread operator** let us do this more easily
    ```js
    let sampleArray = ["one", "two", "five"];
    let newArray = ["Three", "Four", ...sampleArray];
    console.log(newArray); // Output: [ 'Three', 'Four', 'one', 'two', 'five' ]
    ```

# Resources
