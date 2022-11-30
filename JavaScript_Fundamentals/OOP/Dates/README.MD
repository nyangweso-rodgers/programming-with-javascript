# Dates

## Table Of Contents

# Introduction to Dates Objects in JS
* __JS Date objects__ represent a single moment in time in a platform-independent format. __Date objects__ contain a Number that represents milliseconds since 1 January 1970 UTC.

# Creating Date Objects
There are 4 ways to create a date object.
1. __new Date()__: You can create a date object using the new Date() constructor.

    ```js
        const timeNow = new Date();
        console.log(timeNow); // Output: 2022-11-30T18:15:12.393Z
    ```
2. new Date(milliseconds)
3. new Date(Date string)
4. new Date(year, month, day, hours, minutes, seconds, milliseconds)

# Date Methods
1. __getDate()__: It returns the integer value between 1 and 31 that represents the day for the specified date on the basis of local time.

    ```js
        const timeNow = new Date();
        let date = timeNow.getDate();
        console.log(date); // Output: 30
    ```

2. __getDay()__: It returns the integer value between 0 and 6 that represents the day of the week on the basis of local time.

    ```js
        const timeNow = new Date();
        let day = timeNow.getDay();
        console.log(day); // Output: 3
        document.write(" Today's weekday : "+timeNow.getDay());
    ```

3. __getFullYears()__: It returns the integer value that represents the year on the basis of local time.

    ```js
        const timeNow = new Date();
        let year = timeNow.getFullYear();
        console.log(year); // Output: 2022
    ```

4. __getHours()__: It returns the integer value between 0 and 23 that represents the hours on the basis of local time.

    ```js
        const timeNow = new Date();
        let hour = timeNow.getHours();
        console.log(hour); // Output: 21
    ```

5. __getMinutes()__: It returns the integer value between 0 and 59 that represents the minutes on the basis of local time.
6. __getMonth()__: It returns the integer value between 0 and 11 that represents the month on the basis of local time.
7. __getUTCDate()__: It returns the integer value between 1 and 31 that represents the day for the specified date on the basis of universal time.
8. __toDateString()__: It returns the date portion of a Date object.
9. __toJSON()__: It returns a string representing the Date object. It also serializes the Date object during JSON serialization.
10. __toString()__: It returns the date in the form of string.