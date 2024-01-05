// clearInterval Method

function greetMe() {
    console.log("Hello!");
}

var intervalID = setInterval(greetMe, 1000);

// clearInterval after 5 seconds

setTimeout(function() {
    clearInterval(intervalID);
    console.log("Interval cleared!");
}, 5000
);