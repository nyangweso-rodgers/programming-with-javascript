# `while` loop in `js`

## Table Of Contents

# `while` loops

- the `while` loop repeates through a block of code as long as a specified condition is `true`.

  ```js
  // syntax
  while (conditon) {
    // code block
  }
  // the condition can be any conditional statement that returns true or false
  ```

# Examples

## Task 1: print numbers between 1 and 10 using a `while` loop

```js
var c = 1;

while (c <= 10) {
  console.log(c + "<br/>");
  c++;
}
```

- the loop will continue to run as long as `c` is less than, or equal 10. each time the loop runs, it increases by 1
- if you fail to increase the variable used in the condition, the loop will never end
- make sure that the condition in a while loop eventually becomes false
- **Remarks**:
  - be careful writing conditions, if a condition is always `true`, the loop will run forever
