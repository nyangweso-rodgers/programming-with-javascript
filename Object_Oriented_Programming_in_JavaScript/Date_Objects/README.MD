# Date Objects
## Table of Contents
- [Date Objects](#Date-Objects)
- [Creating Date Objects]()
- [Date Methods](#Date-Methods)
- [Sample Programs](#Sample-Programs)
    - [create a program that prints the current time in the browser every second](#create-a-program-that-prints-the-current-time-in-the-browser-every-second)

# Date Objects
the __Date object__ enables us to work with dates. __Note__: 
* JavaScript counts months from 0 to 11: i.e., January = 0 and December = 11.
* Specifying a month higher than 11, will not result in an error but add the overflow to the next year:
* Specifying a day higher than max, will not result in an error but add the overflow to the next month:
* JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).

# Creating Date Objects
```js
    // Creating Date Objects

    // new Date()
    var currentDate = new Date(); // creates a new date object with the current date and time:
    console.log(currentDate); // Output: 2022-06-07T17:07:20.451Z

    // new Date(year, month, day, hour, minute, second)
    var currentDate = new Date(2022, 5, 7, 08, 10, 22);
    console.log(currentDate); // Outpuit: 2022-06-07T05:10:22.000Z

    // new Date(dateString)
    var currentDate = new Date("June 7, 2022 08:23");
    console.log(currentDate); // Output: 2022-06-07T05:23:00.000Z

    // new Date(Milliseconds) - JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
    // One day (24 hours) is 86 400 000 milliseconds.
    var currentDate = new Date(0);
    console.log(currentDate); // Output: 1970-01-01T00:00:00.000Z
```

# Date Methods
_Remarks_:
* JavaScript will (by default) output dates in full text string format:
```js
    // Date Methods in JavaScript

    // toString()
    var currentDate = new Date();
    console.log(currentDate); // 2022-06-07T17:33:19.352Z
    console.log(currentDate.toString()); // Tue Jun 07 2022 20:33:19 GMT+0300 (East Africa Time)

    // toUTCString() - converts a date to a UTC string (a date display standard).
    console.log(currentDate.toUTCString()) // Output: Tue, 07 Jun 2022 17:35:13 GMT

    // toDateString() - converts a date to a more readable format:
    console.log(currentDate.toDateString()) // Output: Tue Jun 07 2022

    // toISOString() - converts a Date object to a string, using the ISO standard format:
    console.log(currentDate.toISOString()) // Output: 2022-06-07T17:39:42.362Z

    // getDate() - returns the day of the month as a number(1-31)
    console.log(currentDate.getDate()) // Output: 7

    // parse() = parse a date string and returns the time difference since January 1, 1970
    var randomDate = new Date("June 7, 2022")
    console.log(Date.parse(randomDate)); // Output: 1654549200000

    // setInterval() - calls a function or evaluates an expression at specified intervals (in milliseconds).
    function myAlert () {
    alert('Hi');
    };
    setInterval(myAlert, 3000); // this will call myAlert function every 3 seconds (1000 ms = 1 second)
    myAlert(); 

    // getFullYear() - gets the year
    // getMonth() - gets the month
    // getHours() - gets the hour
    // getMinutes() - gets the minutes
    // getSeconds() - gets the seconds
    // getsMillisecond() - gets the milliseconds
    // getUTCDate() - returns the day of the month for the specified date according to the universal time
    // setDate()
    // setFullYear()
    // setHours()
    //setMilliseconds()
    // setMinutes()
    // setMonth()
    // setSeconds()
    // setTime()
    // setUTCDate()
```
# Sample Programs
# create a program that prints the current time in the browser every second
```js
    function printTime(){
    // we declared a function printTime(), which gets the current time from the date object, and prints it to the screen once every second, using the setInterval method
    var d5 = new Date();
    var hours = d5.getHours();
    var mins = d5.getMinutes();
    var secs = d5.getSeconds();
    document.body.innerHTML = hours + ":" + mins + ":" + secs; 
}
setInterval(printTime, 1000);

// the innerHTML property sets or returns the HTML content of the element.
    // in our case, we are changing the HTML content of our document's body.
    // this overwrites the content eery second, instead of printing it repeatedly to the screen
```