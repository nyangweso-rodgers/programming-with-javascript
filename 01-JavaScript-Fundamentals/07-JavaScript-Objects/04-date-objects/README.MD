# Date Objects in JavaScript

## Table Of Contents

# Introduction to Dates Objects in JS

- **JS Date objects** represent a single moment in time in a platform-independent format.
- **Date objects** contain a Number that represents milliseconds since `1 January 1970 UTC`.
  - Zero time is January 01, 1970 00:00:00 UTC.
  - 1 day (24 hours) = 86 400 000 milliseconds.
  - Now the time is: 1686309379254 milliseconds past January 01, 1970

# Creating Date Objects

- Date objects are created with the `new Date()` constructor.

* **REMARKS**:
  - JavaScript counts months from 0 to 11, January = 0 and December = 11;
  - Specifying a month higher than 11, will not result in an error but add the overflow to the next year:
  - Specifying a day higher than max, will not result in an error but add the overflow to the next month:

## Creating Date Object 1: `new Date()`

- `new Date()` creates a date object with the `current date and time`
  ```js
  // creating date objects in js
  const myDate = new Date();
  console.log(myDate); // 2023-11-23T11:20:01.771Z
  ```

## Creating Date Objects 2: `new Date(date string)`

```js
var secondDateObject = new Date("2023-06-09");
console.log(secondDateObject); // Output: 2023-06-09T00:00:00.000Z

var thirdDateObject = new Date("June 9, 2023 11:59:00");
console.log(thirdDateObject); // Output: 2023-06-09T08:59:00.000Z
```

## Creating Date Object 3: `new Date(year, month, ...)`

- `new Date(year, month, ...)` creates a date object with a specified `date` and `time`.
- 7 numbers specify `year`, `month`, `day`, `hour`, `minute`, `second`, and `millisecond` (in that order):

  ```js
  var fourthDateObject = new Date(2023, 5, 10);
  console.log(fourthDateObject); // Output: 2023-06-09T21:00:00.000Z
  ```

## Creating Date objects 4: `new Date(milliseconds)`

- `new Date(milliseconds)` creates a new date object as `milliseconds` plus zero time

  ````js
        // 01 January 1970 plus 100 000 000 000 milliseconds is:
        const d = new Date(100000000000);

        // January 01 1970 plus 24 hours is:
        const d = new Date(24 * 60 * 60 * 1000);
        // or
        const d = new Date(86400000);

        // 01 January 1970 plus 0 milliseconds is:
        const d = new Date(0);
    ```
  ````
