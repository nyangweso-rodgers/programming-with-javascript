# Recursive Functions

- **Recursion** is a process of calling itself. A `function` that calls itself is called a **recursive function**.
- A **recursive function** always has a condition that stops the function from calling itself.

- To prevent infinite recursion, you can use `if...else statement` where one branch makes the recursive call, and the other doesn't.

# Examples

## Example 1: Summation Function from 1 to N, natural numbers

- calculate the sum of natural numbers from 1 to n using the recursion

  ```js
  // calculate the sum of natural numbers from 1 to n using the recursion

  let sumNaturalNumbers = (n) => {
    if (n <= 1) {
      return n;
    }
    return n + sumNaturalNumbers(n - 1);
  };

  console.log(sumNaturalNumbers(4)); // Output: 10
  ```
