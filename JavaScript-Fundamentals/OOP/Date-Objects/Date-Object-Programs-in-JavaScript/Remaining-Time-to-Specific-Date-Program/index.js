
// calculate number of years from 1970/01/01:
const second = 1000 // Milliseconds
const minute = second * 60; 
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;


let displayRemainingTimeFunction = function displayRemainingTime(targetDate) {
    // calculate remaining time in milliseconds
    let remainingTime = new Date(targetDate) - new Date();

    // calculate remaining time
    let remainingSeconds = Math.floor(remainingTime / second);
    let remainingMinutes = Math.floor(remainingTime / minute);
    let remainingHours = Math.floor(remainingTime / hour);
    let remainingDays = Math.floor(remainingTime / day);


    // Display the remaining time
    console.log("Remaining time: ")
    console.log("Seconds: ", remainingSeconds);
    console.log("Minutes: ", remainingMinutes);
    console.log("Hours: ", remainingHours);
    console.log("Days: ", remainingDays);
};

let targetDate = "2023-06-15";

// display the results after 2 seconds
setInterval(displayRemainingTimeFunction, 2000, targetDate);