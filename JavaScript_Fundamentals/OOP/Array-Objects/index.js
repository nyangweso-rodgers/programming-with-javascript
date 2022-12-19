// Array Objects

// Generate an arry of numbers with numbers form 0 to max
var x = document.getElementById("random-numbers-array");
var numbersArray = [], max = 100;

for (
    var i=1; numbersArray.push(i++) < max;
    );
console.log(numbersArray); // Output: numbers = [1, 2, 3, -- 100]

x.innerHTML = numbersArray;
