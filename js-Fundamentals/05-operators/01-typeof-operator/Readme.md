# The `typeof` Operator

- the `typeof` operator returns the type of an argument. it supports two types of syntax:

  ```js
  console.log(typeof 2); // Output: number
  console.log(typeof "2"); // Output: string
  console.log(typeof true); // Output: boolean
  console.log(typeof undefined); // Output: undefined
  console.log(typeof Math); // Output: object
  console.log(typeof Symbol("id")); // Output: symbol
  console.log(typeof null); // Output: object
  console.log(typeof alert); // Output: undefined
  ```

- **Remarks**:
  - for `null` it retuns `object`. this is an error in the language, it's not actually an `object`. it is an officially recognized error in `typeof`, kept for compatibility. of course, `null` is not an `object`, it is a special value with a seperate type of its own.
