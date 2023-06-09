// creating Date objects

// new Date()
var firstDateObject = new Date();
//console.log(firstDateObject); // Output: 2023-06-09T11:19:40.565Z

// new Date(date string)
var secondDateObject = new Date("2023-06-09");
//console.log(secondDateObject); // Output: 2023-06-09T00:00:00.000Z

var thirdDateObject = new Date("June 9, 2023 11:59:00");
//console.log(thirdDateObject); // Output: 2023-06-09T08:59:00.000Z

// new Date(year, month, day, hour, minute, second, ....)
var fourthDateObject = new Date(2023, 5, 10);
//console.log(fourthDateObject); // Output: 2023-06-09T21:00:00.000Z

// new Date(milliseconds)