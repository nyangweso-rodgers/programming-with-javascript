# Arithmetic Date Operations - Subtraction


# Notes
* 1 sec = 1000 Milliseconds

# Subtraction of two `date` objects
```js
    var currentDate = new Date("2023-06-01");
    var futureDate = new Date("2023-12-01");

    // Example 1 -> Variance between two date objects
    // variance in Milliseconds
    var differenceInMilliseconds = futureDate.getTime() - currentDate.getTime();
    console.log("Variance in Milliseconds:" + differenceInMilliseconds); // Output: Variance in Milliseconds:15811200000
```

# Subtraction of an integer value from a `date` object

```js
    var anotherDate = new Date('2023-06-08');
    var daysToSubtract = 7;

    var varianceInMilliseconds = anotherDate.setDate(anotherDate.getDate() - daysToSubtract); // Output
    //console.log(anotherDate.setDate(anotherDate.getDate() - daysToSubtract));

    console.log(varianceInMilliseconds);  // Output: 1685577600000
    console.log('The new date is: ' + anotherDate); // Output: The new date is: Thu Jun 01 2023 03:00:00 GMT+0300 (East Africa Time)
```