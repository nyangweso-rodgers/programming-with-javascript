
// calculate number of years from 1970/01/01:
const second = 1000 // Milliseconds
const minute = second * 60; 
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

var getDateComponents = function() {
    // define current date
    var currentDate = new Date();
    var currentTime = currentDate.getTime();

    // define future date
    var futureDate = new Date("2023-12-31");
    var futureTime = futureDate.getTime();

    // delta in milliseconds
    var timeDelta = futureTime - currentTime;
    // delta in seconds
    var secondsDelta = Math.floor((futureTime - currentTime) / second);
    // delta in minutes
    var minutesDelta = Math.floor((futureTime - currentTime) / minute);
    // delta in hours
    var hoursDelta = Math.floor((futureTime - currentTime) / hour);
    // delta in days
    var daysDelta = Math.floor((futureTime - currentTime) / day);

    console.log(daysDelta);
};

getDateComponents();