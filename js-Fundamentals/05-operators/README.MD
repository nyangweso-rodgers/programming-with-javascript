# Operators in JS

## Table Of Contents

# Operator?

- **Operator** is a special symbol used to perform operations on **operands** (values and variables).
- JavaScript Operator Types are:
  1. typeof operator and Type Conversions
  2. Arithmetic operator
  3. Math operator
  4. Assignment operator
  5. Unary operators
  6. Comparison operator
  7. Bitwise operator
  8. Comma operator

# Introduction to JS Operators

- An **operand** is what operators are applied to.
- **Unary operators** has single operand. E.g.,
  ```js
  // unary operator - has a single operand
  let x = 1;
  x = -x; // reverses the sign of a number
  console.log(x); // -1, unary negation was applied
  ```
- **Binary operator** has two operands:

  ```js
  //  binary operator - has two operands
  let y = 1,
    z = 6;
  console.log(x - y); // -5,  binary minus subtracts values
  ```

  - or, **string concatenation**, Binary +

    ```js
    // string concatenation, binary +
    let s = "my" + " string";
    console.log(s); // "my string"
    ```

# Operator Precendence

- if an expression has more than one operator, the execution order is defined by their precedence, or in other words, the default priority order of operators. e.g.,
  - the **multiplication**, (`*`) has a higher precedence than **addition**, `+`
  - **parentheses**, `()` overrides the precedence
- there are many operators in JS. every operator has a corresponding precedence number. the one with the larger one executes first. if the precedence is the same, the execution is from left ro right.