# Bitwise Operators

- **Bitwise Operators**: bitwise operators treat arguments as 32-bit integer and work on the level of their binary representation. these operators are not JavaScript specific. they are supported in most programming languages. the list of operators are as follows:

  - AND (&)
  - OR (|)
  - XOR (^)
  - NOT (~)
  - LEFT SHIFT (<<)
  - RIGHT SHIFT (>>)
  - ZERO-FILL RIGHT SHIFT (>>>)

- **Modify-in-place**: we often need to apply an operator to a variable and store the new result in thta same variable. for example:

  ```js
  let n = 2;
  n = n + 5;
  n = n * 2;
  // this notation can be shortened using the operators += and *=

  let n1 = 2;
  n1 += 5; // now n1 = 7 (same as n1 = n1 + 5)
  n1 *= 2; // now n1 = 14 (same as n1 = n1 * 2)
  console.log(n1); // 14

  // short "modify-and-assign" operators eixsts for all arithmetical and bitwise operators: /=, -=, e.t.c.
  // such operators have the same precedence as a normal assignment so they run after most other calculations
  let n2 = 2;
  n2 *= 3 + 5;
  console.log(n2); // 16 (right part evaluated first, same as n2 *= 8)
  ```
