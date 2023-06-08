
var currentDate = new Date("2023-06-01");
var futureDate = new Date("2023-12-01");

// Example 1 -> Variance between two date objects
// variance in Milliseconds
var differenceInMilliseconds = futureDate.getTime() - currentDate.getTime();
console.log("Variance in Milliseconds:" + differenceInMilliseconds); // Output: Variance in Milliseconds:15811200000

// variance in Seconds
var differenceInSeconds = differenceInMilliseconds / 1000;
//console.log("Variance in Seconds:" + differenceInSeconds); // Output: 

// variance in Minutes
var differenceInMinutes = differenceInMilliseconds / 60;
//console.log("Variance in Minutes:" + differenceInMinutes); // Output: 

// variance in Hours
var differenceInHours = differenceInMilliseconds / (60 * 60 * 1000);
//console.log("Variance in Hours:" + differenceInHours); // Output: 

// variance in Days
var differenceInDays = differenceInMilliseconds / (24 * 60 * 60 * 1000);
//console.log("Variance in Days:" + differenceInDays); // Output: 

// Example 2 -> Variance between an integer and a date object
var anotherDate = new Date('2023-06-08');
var daysToSubtract = 7;

var varianceInMilliseconds = anotherDate.setDate(anotherDate.getDate() - daysToSubtract); // Output
//console.log(anotherDate.setDate(anotherDate.getDate() - daysToSubtract));

console.log(varianceInMilliseconds);  // Output: 1685577600000
console.log('The new date is: ' + anotherDate); // Output: The new date is: Thu Jun 01 2023 03:00:00 GMT+0300 (East Africa Time)