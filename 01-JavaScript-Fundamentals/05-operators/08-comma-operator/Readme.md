# Comma Operator

- **Comma**: the comma operator (`,`) is one of the rarest and most unusual operators. it is used to write a shorter code.the **comma operator** allows us to evaluate several expressions, dividing them with a comma ,. each one of them is evaluated but only the result of the last one is returned. for example:
  ```js
  let a1 = (1 + 2, 3 + 4);
  console.log(a1); // 7 (the result of 3 + 4)
  // here, the first expression 1 + 2 is evaluated and its result is thrown away.then, 3 + 4 is evaluated and returned as the result
  ```

## Remarks

- comma has a very low precedence. lower than `=`, so parentheses are important in the example above. without them, a1 = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a1 = 3, 7 then the assignment operator = assigns a1 = 3, and the rest is ignored\_
- why do we need an operator that throws away everything except the last expression? sometimes, people use it in more complex constructs to put several actions in one line. for example:
  ```js
      // three operations in one line
      for (a = 1, b = 3, c = a * b; a < 10; a++) {
          ...
      }
      // such tricks are used in JavaScript /
  ```
