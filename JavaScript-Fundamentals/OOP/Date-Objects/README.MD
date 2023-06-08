# Date Object

## Table Of Contents
- [Introduction to Dates Objects in JS](#Introduction-to-Dates-Objects-in-JS)

# Introduction to Dates Objects in JS
* __JS Date objects__ represent a single moment in time in a platform-independent format. __Date objects__ contain a Number that represents milliseconds since 1 January 1970 UTC.

# Creating `Date` Objects
There are 4 ways to create a date object.
1. __new Date()__: You can create a date object using the new Date() constructor.

    ```js
        const timeNow = new Date();
        console.log(timeNow); // Output: 2022-11-30T18:15:12.393Z
    ```
2. new Date(milliseconds)
3. new Date(Date string)
4. new Date(year, month, day, hours, minutes, seconds, milliseconds)

# `Date` Methods
# Date Method 1: `getDate()`
* `getDate()` returns the `integer` value between `1` and `31` that represents the `day` for the specified date on the basis of local time.

    ```js
        const timeNow = new Date();
        let date = timeNow.getDate();
        console.log(date); // Output: 30
    ```

# Date Method 2: `getDay()`
* `getDay()` returns the `integer` value between `0` and `6` that represents the `day` of the `week` on the basis of local time.

    ```js
        const timeNow = new Date();
        let day = timeNow.getDay();
        console.log(day); // Output: 3
        document.write(" Today's weekday : "+timeNow.getDay());
    ```
# Date Method 3: `getFullYear()`
* `getFullYears()` returns the `integer` value that represents the `year` on the basis of local time.

    ```js
        const timeNow = new Date();
        let year = timeNow.getFullYear();
        console.log(year); // Output: 2022
    ```

# Date Method 4: `getHours()`
* `getHours()` returns the `integer` value between `0` and `23` that represents the `hours` on the basis of local time.

    ```js
        const timeNow = new Date();
        let hour = timeNow.getHours();
        console.log(hour); // Output: 21
    ```
# Date Method 5: `getMinutes()`
* `getMinutes()` returns the `integer` value between `0` and `59` that represents the `minutes` on the basis of local time.

# Date Method 6: `getMonth()`
* `getMonth()` returns the `integer` value between `0` and `11` that represents the month on the basis of local time.

# Date Method 7: `getUTCDate()`
* `getUTCDate()` returns the `integer` value between `1` and `31` that represents the day for the specified date on the basis of universal time.

# Date Method 8: `toDateString()`
* `toDateString()` returns the `date` portion of a Date object.

# Date Method 9: `toJSON()`
* `toJSON()` returns a `string` representing the `Date` object. It also serializes the Date object during JSON serialization.

# Date Method 10: `toString()`
* `toString()` returns the date in the form of `string`.

# Date Method 11: `setTimeout()`
* `setTimeout()` allow us to schedule a `function`. 
* We willingly introduce delays in the execution of some functions to ensure a smooth & crash-free user experience. Potential use cases include:
    - _If we've requested some data to be fetched from an API & we've to run a function whose execution depends on the results from that API_
    - _If there's an authentication system & we've to show some sensitive data, we'll have to wait while the user credentials are being checked_

# Date Method 12: `setDate()`
* The `setDate()` method allows you to set the `day` of the month for a `Date` object. 

    ```js
        var d = new Date();
        console.log("Original date: " + d); // Output: Original date: Thu Jun 08 2023 21:33:49 GMT+0300 (East Africa Time)

        // or, using setDate()
        var dd = d.setDate(15);
        console.log('Updated date: ' + d); // Output: Updated date: Thu Jun 15 2023 21:33:49 GMT+0300 (East Africa Time)
    ```
# Date Method 13: `getTime()` Method
* The `getTime()` method returns the number of `milliseconds` since `January 1, 1970, 00:00:00 UTC`. By subtracting the `milliseconds` of one date from the other, you can calculate the time difference between them.