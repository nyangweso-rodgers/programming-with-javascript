// for loops

// lists numbers between 1 to 10
for (i=1; i<=10; i++) {
    if (i == 5) { // once it reaches 5, it will break out of the loop
        break; // the break statement jumps out of a loop and continues executing the code after the loops
    }
console.log(i + "<br/>");
};
// statement 1 sets a variable before the for loop starts (var i = 1)
// statement 2 defines the condition for the for loop to run ( i must be less than or equal to 10)
// statement 3 increases a value (i++) each time the code block in the loop has been executed

// statement 1 is optional, and can be omitted, if your values are set before the loop starts
var i = 1;
for (; i<=10; i++) {
console.log(i + "<br/>")};

 // also, you can initiate more than one value in statement 1, using commas to seperate them
 for (i =1, text=""; i <= 5; i++){
    text = i;
    console.log(i + "<br/>");
    };

    
// you can also use the return keyword to return some value immediately from the loop inside of a fuction. This will also break the loop
for (i = 0; i <= 10; i++) {
if (i == 5) {
    continue; // the continue statement breaks only one iteration in the loop, and continues with the next iteration
}
document.write(i + "<br/>"); // the value 5 is not printed because continue skips that iteration of the loop
}



// example
var sum = 0;
for (i = 4; i < 8; i++) {
if (i == 6) {
    continue;
}
sum += i;
}
console.log(sum); // Output: 16