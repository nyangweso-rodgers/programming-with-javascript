# Date Objects - Creating Date Objects in JavaScript

## Table of Contents
- [Further Reading]()
  - [w3Schools - JavaScript Date Objects](https://www.w3schools.com/js/js_dates.asp)

# Introduction - Creating Date Objects in JavaScript
* Date objects are created with the `new Date()` constructor.
  
* __REMARKS__: 
  * JavaScript counts months from 0 to 11, January = 0 and December = 11;
  * Specifying a month higher than 11, will not result in an error but add the overflow to the next year:
  * Specifying a day higher than max, will not result in an error but add the overflow to the next month:


# 9 Ways - Creating Date Objects in JavaScript
# `new Date()`
* `new Date()` creates a date object with the `current date and time`

    ```js
        var firstDateObject = new Date();
        console.log(firstDateObject); // Output: 2023-06-09T11:19:40.565Z
    ```

# `new Date(date string)`
```js
    var secondDateObject = new Date("2023-06-09");
    console.log(secondDateObject); // Output: 2023-06-09T00:00:00.000Z

    var thirdDateObject = new Date("June 9, 2023 11:59:00");
    console.log(thirdDateObject); // Output: 2023-06-09T08:59:00.000Z
```

# `new Date(year, month, ...)`
* `new Date(year, month, ...)` creates a date object with a specified `date` and `time`.
* 7 numbers specify `year`, `month`, `day`, `hour`, `minute`, `second`, and `millisecond` (in that order):

    ```js
        var fourthDateObject = new Date(2023, 5, 10);
        console.log(fourthDateObject); // Output: 2023-06-09T21:00:00.000Z
    ```

# `new Date(milliseconds)`
* `new Date(milliseconds)` creates a new date object as `milliseconds` plus zero time

    ```js
        // 01 January 1970 plus 100 000 000 000 milliseconds is:
        const d = new Date(100000000000);

        // January 01 1970 plus 24 hours is:
        const d = new Date(24 * 60 * 60 * 1000);
        // or
        const d = new Date(86400000);

        // 01 January 1970 plus 0 milliseconds is:
        const d = new Date(0);
    ```