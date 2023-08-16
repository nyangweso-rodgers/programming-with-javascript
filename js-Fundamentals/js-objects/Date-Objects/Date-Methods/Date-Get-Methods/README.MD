
# `Date` Get Methods

# Description


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


# `getTime()` Method
* The `getTime()` returns the number of `milliseconds` since `January 1, 1970, 00:00:00 UTC`. 
* By subtracting the `milliseconds` of one date from the other, you can calculate the time difference between them.

    ```js
        var firstDate = new Date("1970-01-01");
        console.log("First Date: ", firstDate); // Output: 1970-01-01T00:00:00.000Z

        // Return the number of milliseconds since midnight January 1, 1970:
        console.log(firstDate.getTime()); // Output: 0
    ```
* OR

    ```js
        var someDay = new Date("2023-06-09");
        console.log("Some Day: ", someDay); // Output: Some Day:  2023-06-09T00:00:00.000Z
        // Returns the number of Milliseconds since midnight January 1, 1970: 1686268800000
        console.log(someDay.getTime()); // Output: 
    ```

* Calculate the difference between two dates
  
    ```js
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        var yesterDate = new Date("2023-06-08"); // Output: Yesterday's Time:  1686182400000
        var someDate = new Date("2023-06-09"); // Output: Some Day's Time 1686268800000
        var delta = someDate.getTime() - yesterDate.getTime();

        console.log("Yesterday's Time: ", yesterDate.getTime());
        console.log("Some Day's Time", someDate.getTime());
        // difference between the two dates in days
        console.log("Delta in Day: ", delta / day);
    ```
# `Date.now()` Method
* `Date.now()` returns number of `milliseconds` since `January 1, 1970`.

    ```js
        // Return the current date/time in milliseconds since January 1, 1970:
        const date = Date.now();
        console.log(date); // Output: 1686315195503
    ```