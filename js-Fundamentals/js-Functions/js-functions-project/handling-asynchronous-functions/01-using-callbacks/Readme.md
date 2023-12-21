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

# Typical Use Case of Callback Function with `setTimeout()`

- the `setTimeout()` function is used to schedule the execution of a function or the execution of a specified code block after a specified amount of time has elapsed. It allows you to introduce a delay in the execution of a particular piece of code.
- Syntax:
  ```js
    // setTimeout() syntax
    setTimeout(function, delay, parameter1, parameter2, ...);
  ```
  - where:
    - `delay`: The time (in milliseconds) to wait before the execution of the function or code block.
    - `function`: The function or code block to be executed after the specified delay.
    - `parameter1`, `parameter2`, ...: Optional parameters that can be passed to the function when it is executed.
- Example1:

  - Print `Rodgers Nyangweso` after 2 seconds:

    ```js
    function greetMe(myName) {
      console.log("Hello, " + myName);
    }

    // Execute the greetMe function after a delay of 2000 milliseconds (2 seconds)
    setTimeout(greetMe, 2000, "Rodgers Nyangweso");
    ```

  - **note**:

    - note that the delay is not guaranteed to be precise. The actual delay may be longer if the browser or the environment is busy with other tasks.
    - Additionally, `setTimeout()` returns a unique identifier (a timer ID) that can be used with the `clearTimeout()` function to cancel the execution of the scheduled function before it occurs.

      ```js
      function greetMe(myName) {
        console.log("Hello, " + myName);
      }

      var timeId = setTimeout(greetMe, 2000, "Rodgers Nyangweso");
      // cancell the execution of the scheduled function
      clearTimeout(timeId);
      ```

    - This is useful if, for some reason, you want to cancel the execution of the scheduled code before it runs.
    - Intead of passing the name of a function as an argument to another function, you can always pass the whole function instead.

      ```js
      // Execute the greetMe function after a delay of 2000 milliseconds (2 seconds)
      setTimeout(function () {
        greetMe("Rodgers Nyangweso");
      }, 2000);

      function greetMe(myName) {
        console.log(myName);
      }
      ```

    - here, `function() {greetMe("Rodgers Nyangweso");}` is used as a **callback**. The complete function is passed to `setTimeout()` as an argument.

# Typical Use Case of a Callback Function with `setInterval()`

- If you need to repeatedly execute a function at fixed intervals, you would typically use `setInterval() `instead.
- The `setInterval()` function works similarly to `setTimeout()`, but it continues to execute the specified function at the specified interval until it is canceled.
- When using the JavaScript function `setInterval()`, you can specify a **callback** function to be executed for each interval:
- Example:

  ```js
  // setInterval()
  // Display current date and time every 1 sec
  function displayCurrentDateTime() {
    let currentDateTime = new Date();
    console.log(currentDateTime);
  }

  setInterval(displayCurrentDateTime, 1000);
  ```

## Remarks

- You can use `setInterval()` and `setTimeout()` together to create a scenario where a function is executed at regular intervals and then stops after a certain delay.

  ```js
  // Display Current Date and Time Every Second
  function displayCurrentDateTime() {
    let currentDatetIME = new Date();
    document.getElementById("displayCurrentDateTimeContainer").innerHTML =
      currentDatetIME.getHours() +
      ":" +
      currentDatetIME.getMinutes() +
      ":" +
      currentDatetIME.getSeconds();
  }

  // Set up an interval to execute printMessage every 1000 milliseconds
  var intervalId = setInterval(displayCurrentDateTime, 1000);

  // // Set up a timeout to stop the interval after 5000 milliseconds (5 seconds)
  setTimeout(function () {
    clearInterval(intervalId); // Stop the interval
    console.log("Interval has expired after 5000 milliseconds");
  }, 5000);
  ```

# Callback Alternatives

- With **asynchronous** programming, JavaScript programs can start long-running tasks, and continue running other tasks in paralell.
- But, **asynchronus** programmes are difficult to write and difficult to debug.
- Because of this, most modern **asynchronous** JavaScript methods don't use callbacks. Instead, in JavaScript, **asynchronous** programming is solved using **Promises** instead.
