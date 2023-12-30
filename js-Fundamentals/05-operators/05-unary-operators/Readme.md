# Unary Operators

- The **increment** (`++`) and **decrement** (`--`) operators in JavaScript are part of the category of operators known as "**Unary Operators**." These operators specifically operate on a single operand. They are often used to increase or decrease the value of a variable by 1.

# Increment Operator (++):

- The **increment operator** adds 1 to the value of the operand.
  ```js
  let counter = 5;
  counter++; // Increment x by 1
  console.log(counter); // Output: 6
  ```
- The above example works the same as, but in a shorter way
  ```js
  let counter = 5;
  counter = counter + 1;
  ```

# Decrement Operator (--):

- The **decrement operator** subtracts 1 from the value of the operand.
  ```js
  let counter = 8;
  counter--; // Decrement counter by 1
  console.log(counter); // Output: 7
  ```
- The above example works the same as, but in a shorter way:

  ```js
  let counter = 8;
  counter = counter - 1;
  console.log(counter); // Output: 7
  ```

## Remarks

1. **Increment**/**Decrement** can only be applied to **variables**. trying to use it on a value like 8++ causes an error
2. the opertor `++` and `--` can be placed either before or after a **variable**.
   - when the operator goes before a variable it is in the '**prefix form**': `++counter`.
   - when the operator goes after a variable it is the '**postfix form**': `counter++`
   - both of these stements do the same thing, increase counter by 1. is there any difference? Yes but we can only see it if we use the returned value of `++/--`
   - the **prefix form** returns the new value (prior to incemrnt/decrement)
     ```js
     let counter = 1;
     let d = ++counter;
     console.log(d); // 2, the prefix form ++counter increments counter3 and returns the new value 2. so the alert shows 2
     ```
   - the **postfix form** returns the old value(prior to increment/decrement)
     ```js
     let counter = 1;
     let e = counter++;
     console.log(counter); // 1, the postfix form counter++ also increments counter4 but returns the old value (prior to increment). so the alert shows 1
     ```
   - to summarize: if the result of **increment**/**decrement** is not used there is no differnce in which form to use
     ```js
     let counter = 0;
     counter++; // OR,
     ++counter;
     console.log(counter); // Output: 1 the lines above did the same
     ```
   - if we'd like to increase a value and immediately use the result of the operator, we need the **prefix form**:
     ```js
     let counter = 0;
     console.log(++counter); // Output: 1
     ```
   - if we'd like to increment a value but use its previous value, we need the **postfix form**
     ```js
     let counter = 0;
     console.log(counter++); // Output: 0
     ```
