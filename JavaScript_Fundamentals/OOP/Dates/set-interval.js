
// setInterval()
var hello = setInterval(helloFunction, 1000);
var x = document.getElementById("set-interval");

function helloFunction() {
    x.innerHTML += "Hello, "
};

// Program to Display Time Every 1 sec
const myTime = setInterval(myTimer, 1000);
const y = document.getElementById("set-interval-method-to-display-time");

function myTimer() {

    // return new Date and time
    let dateTime = new Date();
    let date = dateTime.getDate();
    let hours = dateTime.getHours();
    let mins = dateTime.getMinutes();
    let secs = dateTime.getSeconds();
    // y.innerHTML = hours; // 
    y.innerHTML = "The Time is: " + hours + ":" + mins + ":" + secs;
    
};