# Data Types with `ES6`

## Table of Contents

# Repeating Strings 
* Before __ES6__, the following syntax was the correct way to repeat a string multiple times.
  
    ```js
        console.log(Array(3 + 1).join("foo"));
    ```
* with the new syntax, it becomes:
  
    ```js
        console.log("foo".repeat(7));
    ```

# Searching Strings
* before `ES6`, we only used the `indexOf()` method to find the position of the text in the string. __for example__:
  
    ```js
        "sololearn".indexOf("solo") === 0; //true
        "sololearn".indexOf('solo') === (4 - "solo".length); //true
        "sololearn".indexOf("lole") !== -1; // true
        "sololearn".indexOf("olo", 1) !== -1 ; // true
        "sololearn".indexOf("olo", 2) !== -1; // false
    ```

* `ES6` has replaced this with a version that has a cleaner and more simplified syntax:
  
    ```js
        "SoloLearn".startsWith("Solo", 0); // true
        "SoloLearn".endswith("Solo", 4); // true
        "SoloLearn".includes("lole"); // true
        "SoloLearn".includes("ole", 1); // true
        "SoloLearn".includes("olo", 2); // false
    ```