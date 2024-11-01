# `setTimeout()` Method

# Description
* `setTimeout()` allow us to schedule a `function`. 
* `setTimeout()` method is used to execute a specified `function` or `code` snippet after a specified delay (in `milliseconds`). 
* It schedules a one-time execution of the function or code snippet after the specified delay.
* We willingly introduce delays in the execution of some functions to ensure a smooth & crash-free user experience. Potential use cases include:
    - _If we've requested some data to be fetched from an API & we've to run a function whose execution depends on the results from that API_
    - _If there's an authentication system & we've to show some sensitive data, we'll have to wait while the user credentials are being checked_

#  Syntax
```javascript
    // setTimeout syntax
    setTimeout(function, delay, param1, param2, param3, ...);
```
* where:
  * `function` - specifies the function to be executed after the delay.
  * `delay` - determines the time delay (in `milliseconds`) before the function is executed.
  * `param1`, `param2`, ...: These are optional parameters that can be passed to the function.

# Remarks
* __NOTE__: `setTimeout()` schedules the execution of a function after a specified delay, while `setInterval()` repeatedly executes a function at a defined interval.


# Examples
# Example 1: Function to be executed after 2 seconds

```javascript
    function greetMe(name) {
    console.log(`Hello, ${name}!`);
    }
    // the function will be called after a delay of 2 seconds = 2000 Milliseconds
    // after the delay the function will be called once
    setTimeout(greetMe, 2000, 'Nyangweso'); 
```