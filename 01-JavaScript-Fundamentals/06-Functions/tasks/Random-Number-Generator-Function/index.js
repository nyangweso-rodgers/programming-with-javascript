
// console.log(Math.random());

getRandomNumberFunction = function getRandomNumber(min = 0, max = 1000) {
        const floatRandomNumber = Math.random();
        const randomAboveMin = min + floatRandomNumber;
        const delta = max - min;

        var theRandomNumber = Math.ceil(randomAboveMin * delta);
        //console.log(theRandomNumber);
        return theRandomNumber;
    };

//console.log(getRandomNumber(10, 20)); // Output: 16
//console.log(getRandomNumberFunction(109, 200)); // Output:

// using setInterval() method to print a random number every 2 seconds
setInterval(function() {
    getRandomNumberFunction(100, 200); // Calls the function with parameters 100 and 2000
}, 1000); // Calls the function with parameters