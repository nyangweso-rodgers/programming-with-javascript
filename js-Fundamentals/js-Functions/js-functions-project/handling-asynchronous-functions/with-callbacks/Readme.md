# Handling Asychronous Functions with Callbacks

# Case 1

- suppose you want to do a calculation and display the result:

  - we can call `calculateSum` function, save the result, then call another function, `displayResult`

    ```js
    function displayResult(result) {
      console.log(result);
    }

    function calculateSum(num1, num2) {
      let sum = num1 + num2;
      return sum;
    }

    let sampleResult = calculateSum(1, 1);
    displayResult(sampleResult); // Output: 2
    ```

    - the **problem** here is that we have to call two functions to display the result

  - Or, call `calculateSum` function which then calls the `displayResult` function:

    ```js
    function displayResult(result) {
      console.log(result);
    }

    function calculateSum(num1, num2) {
      let sum = num1 + num2;
      displayResult(sum);
    }

    calculateSum(1, 1); // Output: 2
    ```

    - the **problem** here is that you cannot prevent `calculateSum` function from displaying the result

- The above two problems leads us to bring **callback**

# Using Callbacks

- using a **callback**, we call `calculateSum` function with a callback, `myCallback` and let the `calculateSum` function run the `myCallback` function after calculation is done.

  ```js
  // using a callback
  function displayResult(result) {
    console.log(result);
  }

  function calculateSum(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }

  calculateSum(1, 1, displayResult); // Output: 2
  ```

- Here,
  - `displayResult` is called a **callback**, it is passed to `calculateSum` as an argument
