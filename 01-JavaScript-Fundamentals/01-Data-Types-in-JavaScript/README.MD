# Data Types in JavaScript

## Table of Contents

# Introduction to Data Types in JavaScript

A **variable** in JS can contain any data type. a variable can at one moment be a `string` and at another be a `number`. Programming languages that allow such things are called "**dynamically typed**", meaning that there are data types, but variables are not bound to any of them.

# Data Types in JS

## 1. Number Data Type

- represents both `integer` and `floating` point numbers

  ```js
  // Number
  let age = 56; // integer
  let height = 13.5; // float
  ```

- Remarks:

  - there are many operations for numbers, e.g.,
    - multiplication (`*`),
    - division (`/`),
    - addition (`+`),
    - subtraction (`-`) and so on
    - Mathematical Operations are safe: doing maths is 'safe' in javascript. we can do anything, divide by zero, treat non-numeric strings as numbers, e.t.c., the script will never stop with a fatal error ("die"). at worst, we'll get **NaN** as a result

## 2. `Infinity` and `-Infinity` Data Type

- Besides regular numbers, there are so-called "**special numeric values**" which also belong to this data type

```js
// Infinity - represents a number whose value is greater than any other number.  we can get as a result of division by zero
console.log(5 / 0); // Output: Infinity

// or just reference it directly
console.log(Infinity); // Output: Infinity

// -Infinity
console.log(-Infinity); // -Infinity
```

## 3. `NaN` Data Type

- `NaN` represents a computational error. it is a result of an incorrect or `undefined` mathematical operation,
- `NaN` is sticky and any operation on `NaN` returns `NaN`. so if there is a `NaN` somewhere in a mathematical expression, it propagates to the whole result

  ```js
  // for instance
  console.log("not a number" / 2); // Output: NaN
  console.log("not a number" / 2 + 6); // Output: NaN
  ```

## 4. Boolean Data Type

**Boolean** (logical type) has only two values: `true` and `false`. this type is mostyly used to store yes/no values

    ```js
    let nameFieldChecked = true;
    let ageFieldChecked = false;

    // boolean values also comes as a result of comparison
    let isGreater = 4 > 1;
    console.log(isGreater); // Output: true
    ```

## 5. `null` Data Type

- the special `null` value does not belong to any of the types described above. it forms a seperate type of its own which contains only the `null` value:

  ```js
  let age = null;
  ```

- Remarks
  - in JS, `null` is not a reference to "**non-existing object**" or a "**null pointer**" like in othere some languages. it's just a special value that represents "**nothing**", "**empty**", or a "**value unknown**".
  - the code above states that the age is unknown or empty for some reasons

## 6. `undefined` Data Type

- the special value `undefined` also stands apart. it makes a type of its own just like `null`. the meaning of `undefined` is "**value not assigned**". if a variable is _defined but not assigend_, then its value is `undefined`

  ```js
  let x;
  console.log(x); // shows undefined
  ```

- Technically, it is possible to assign `undefined` to any variable. but it's not recommended to do that. normally, you should use null to assign an "empty" or "unknown" value to a variable. and we use "`undefined`" for checks like seeing if a variable has ben assigned.
  ```js
  //
  let y = 12346;
  y = undefined;
  console.log(y); // undefined
  ```

## 7. Object Data Type

- the **object** type is special. all the other types are called "**primitive**" because their value can contain only a single thing(be it a **string**, a **number** or whatever). in contrast, **objects** are used to store collections of data and more complex entities. the symbol type is used to create a unique identifier for objects.

```js
// Creating an Object in JS
var emp = {
  name: "Rodgers",
  age: 26,
};

console.log(emp); // Output: { name: 'Rodgers', age: 26 }
```
