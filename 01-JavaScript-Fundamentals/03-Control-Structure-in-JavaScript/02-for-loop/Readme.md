# `for` Loops in `js`

## Table Of Contents

# `for` loops

- **loops** can execute a block of code a number of times. they are handy in cases in which you want to run the same code repeatedly,adding a different value each time. JS has three types of loops:

  - `for`,
  - `while`, and
  - `do while`.

- **Syntax**
  ```js
  // syntax
  for (statement 1: statemtn 2: statement 3) {
      // code block to be executed
  };
  ```
  - `statement 1` is executed before the loop (the code block) starts
  - `statement 2` defines the condition for running the loop (the code block)
  - `statement 3` is executed each time after the loop (the code block) has been executed

# Example

## Task 1: lists numbers between 1 and 10 using a `for` loop

```js
// lists numbers between 1 to 10
for (i = 1; i <= 10; i++) {
  if (i == 5) {
    // once it reaches 5, it will break out of the loop
    break; // the break statement jumps out of a loop and continues executing the code after the loops
  }
  console.log(i + "<br/>");
}
```

- `statement 1` sets a variable before the `for` loop starts (`var i = 1`)
- `statement 2` defines the condition for the `for` loop to run ( i must be less than or equal to 10)
- `statement 3` increases a value (`i++`) each time the code block in the loop has been executed

## Task 2: lists numbers between 1 and 10 using a `for loop`

```js
// statement 1 is optional, and can be omitted, if your values are set before the loop starts
var i = 1;
for (; i <= 10; i++) {
  console.log(i + "<br/>");
}
```

## Task 3: Initaing more than one value in the first statement of a `for` Loop

```js
// also, you can initiate more than one value in statement 1, using commas to seperate them
for (i = 1, text = ""; i <= 5; i++) {
  text = i;
  console.log(i + "<br/>");
}
```

## Task 4: using a `return` keyword with a `for` Loop

```js
// you can also use the return keyword to return some value immediately from the loop inside of a fuction. This will also break the loop
for (i = 0; i <= 10; i++) {
  if (i == 5) {
    continue; // the continue statement breaks only one iteration in the loop, and continues with the next iteration
  }
  document.write(i + "<br/>"); // the value 5 is not printed because continue skips that iteration of the loop
}
```

# `for` Loop Use Cases

## 1. Iterate Values in a List

- in JavaScript, we commonly use the `for` loop to iterate over values in a list

  ```javascript
  // iterate a list using a for loop
  let sampleLists = [1, 2, 3];

  for (let i = 0; i < sampleLists.length; i++) {
    console.log(sampleLists[i]);
  }
  ```

## 2. Iterate keys in an Object

- The `for`...in loop is intended for iterating over the enumerable keys of an object.

  ```javascript
  // iterate keys in an object

  let sampleObject = { a: 1, b: 2, c: 3 };

  for (let objectElement in sampleObject) {
    console.log(objectElement); // Output: a, b, c
  }
  ```

# Remarks

## Remark 1

- the `for...in` loop should NOT be used to iterate over arrays becaues, depending on the JS engine, it could iterate in an arbitrary order also, the iterating variable is a string, not a number, so if you try to do any math with the variable, you'll be performing string concatenation instead of addition
- **ES6** introduces the new `for...of` loop, which creates a loop iterating over iterable objects for example:
  ```js
  let list = ["x", "y", "z"];
  for (let val of list) {
    console.log(val);
  }
  ```
  - during each iteration the `val` variable is assigned the corresponding element in the list
- the `for...of` loop works for other iterable objects as well, including strings:
  ```js
  for (let ch of "Hello") {
    console.log(ch);
  }
  ```
- the `for...of` loop also works on the newly introduced collections (`Map`, `Set`, `WeakMap`, and `WeakSet`)
