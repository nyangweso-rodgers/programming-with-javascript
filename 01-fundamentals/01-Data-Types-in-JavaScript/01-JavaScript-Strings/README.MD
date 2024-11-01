# String Data Type

## Table of contents

# How to Use Strings in `js`

- To create a `string` you can use the `String()` constructor or a `string literal`.
- Example:
  - Using the `String()` constructor:
    ```js
    // using the `String()` constructor
    let firstName = String("Rodgers");
    console.log(typeof firstName); // Output: string
    ```
  - Using string literals
    ```js
    // using the `String()` constructor
    let firstName = "Rodgers";
    console.log(typeof firstName); // Output: string
    ```

# Template Strings/Literals in ES6

- **Template literals** are a way to output `variables` in a string.
- Prior to **ES6** we had to break the `string`. Example:

  ```js
  let firstName = "Rodgers";
  let lastName = "Nyangweso";
  const myName = firstName + " " + lastName;

  console.log(myName); // Output: "Rodgers Nyangweso"
  ```

* **ES6** intoduces a new way of outputting `variable` values in `strings`. the same code above can be written as:

  ```js
  // Template Literals
  let firstName = "Rodgers";
  let lastName = "Nyangweso";

  const myName = `${firstName} ${lastName}`;
  console.log(myName); // Output: "Rodgers Nyangweso"
  ```

# JavaScript `String` Methods

## 1. `string` Instance Methods

### 1.1 `.charAt` Method

- access a character at a certain index in the string.

  ```js
  // access first character at a certain index in the string
  let firstName = "Rodgers";
  // using indexing
  let firstLetter = firstName[0];
  ```

- or,
  ```js
  // using .charAt
  let firstName = "Rodgers";
  let firstLetter = firstName.charAt(0);
  console.log(firstLetter);
  ```

## 2. `.toUpperCase()` Method

```js
let firstName = "Rodgers";
// using .toUpperCase method
let firstNameInUpperCase = firstName.toUpperCase();
```

## 3. `.toLowerCase()` Method

```js
let firstName = "Rodgers";
// using .toLowerCase methods
let firstNameInLowerCase = firstName.toLowerCase();
```

## 4. `.concat()` Method

```js
let firstName = "Rodgers";
let lastName = "Nyangweso";

let fullName = firstName.concat(lastName);
console.log(fullName); // Output: RodgersNyangweso
```

## 5. `.indexOf()` Method

- used to find the index of a certain character or a set of characters of a string:
  ```js
  let firstR = firstName.indexOf("r");
  console.log(firstR); // Output: 0
  console.log(fullName.indexOf("Nyang")); // Output: 7
  ```
- before **ES6**, we only used the `indexOf()` method to find the position of the text in the string.
- **ES6** has replaced this with a version that has a cleaner and more simplified syntax:

  ```js
  let myFullName = `${firstName} ${lastName}`;
  console.log(myFullName); // Output: "Rodgers Nyangweso"

  console.log(myFullName.startsWith("Rod")); // Output: true
  console.log(myFullName.startsWith("rod")); // Output: false
  console.log(myFullName.startsWith("Rod", 0)); // Output: true
  console.log(myFullName.startsWith("Rod", 1)); // Output: false
  console.log(myFullName.endsWith("eso")); // Output: true
  console.log(myFullName.includes("Rod")); // Output: true
  ```

## 6. `.slice()` Method

- to get a **substring** of a given `string`
  ```js
  let firstName = "Rodgers";
  console.log(firstName.slice(1, 4)); // Output: odg
  ```
- not passing any parameters will generate a copy of the ariginal string with no mutation

## 7. `.split()` Method

- This method takes a pattern as an argument and divides the `string` into multiple **substrings**.
- You might find yourself using this method to parse a `URL` or certain strings.

  ```js
  //
  let fullName = "Rodgers Nyangweso";
  let firstName = fullName.split(" ");

  console.log(firstName); // Output: [ 'Rodgers', 'Nyangweso' ]

  let nameLetters = fullName.split("");
  console.log(nameLetters); // Output: ['R', 'o', 'd', 'g', 'e', 'r', 's', ' ', 'N', 'y', 'a', 'n', 'g', 'w', 'e', 's', 'o']
  ```

# Resources

1. [freeCodeCamp - JavaScript Basics – How to Work with Strings, Arrays, and Objects in JS](https://www.freecodecamp.org/news/javascript-basics-strings-arrays-objects/)
