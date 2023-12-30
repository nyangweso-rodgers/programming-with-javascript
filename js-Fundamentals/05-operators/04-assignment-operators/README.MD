# Assignment Operator

# Assignment Operator

- **Assignment**: let's note that the assignment (`=`) is also an operator. it's listed on the **precedence** table with a very low priority of 3. that's why when we assign a variable like `x = 2 * 2 + 1`, the calculations are done first and then `=` is evaliated, storing the result in `x`.

  ```js
  let h = 6 * 6 + 1;
  console.log(h); // 37
  ```

- it is possible to chain assignments
  ```js
  // it is possible to chain assignments
  let a, b, c;
  a = b = c = 2 + 2;
  console.log(a); // 4
  console.log(b); // 4
  console.log(c); // 4
  ```
- **chained assignment** evaluates from right to left: firts the right most expression `2 + 2` is evaluated and then assigned to the variable `c`, `b` and `a`. at the end, all the variables share the same value
