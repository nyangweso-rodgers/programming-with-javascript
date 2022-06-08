# Math Objects
## Table of Contents
- [Math Object](#Math-Object)
- [Properties of Math Object](#Properties-of-Math-Object)
- [Math Object Methods](#Math-Object-Methods)
- [Sample Programs](#Sample-Programs)

# Math Object
the __Math object__ allows you to perform mathematical tasks, and include several __properties__.

# Properties of Math Object
```js
    // Math Object properties

    // E - Euler's constant
    console.log(Math.E); // Output: 2.718281828459045

    // LN2 - Natural log of the value 2
    console.log(Math.LN2); // Output: 0.6931471805599453

    // LN10 - Natural log of the value 10
    console.log(Math.LN10); // Output: 2.302585092994046

    // LOG2E - the base 2log of Euler constant
    console.log(Math.LOG2E); // Output: 1.4426950408889634

    // LOG10E - the base 10 log of Euler constant (E)
    console.log(Math.LOG10E); // Output: 0.4342944819032518

    // PI - returns the constant pi
    console.log(Math.PI); // Output: 3.141592653589793
```
# Math Object Methods
The Math object cntains a number of methods that are used for calculations
```js
    // abs(x) - returns the absolute value of x
    console.log(Math.abs(8.5));

    // acos(x) - returns the arccosine of x, in radians
    console.log(Math.acos(0.6)); // Output: 0.9272952180016123

    // asin(x) - returns the arcsine of x, in radians
    console.log(Math.asin(0.6)); // Output: 0.6435011087932844

    // atan(x) - returns the arctangent of x as a numeric value between  -PI/2 and PI/2 radians
    console.log(Math.atan(0.6)); // Output: 0.5404195002705842

    // atan2(y, x) - returns the arctangent of the quotient of its arguments
    console.log(Math.atan2(2, 3)); // Output: 0.5880026035475675

    // ceil(x) - returns x, rounded upwords to the nearest integer
    console.log(Math.ceil(0.6)); // Output: 1

    // cos(x) - returns the cosine of x (x in radians)
    console.log(Math.cos(60)); // Output: -0.9524129804151563

    // exp(x) - returns the value E**2
    console.log(Math.exp(2)); // Output: 7.38905609893065

    // floor(x) - returns x, rounded downwards to the nearest integer
    console.log(Math.floor(2.5)); // Output: 2

    // log(x) - returns the natural logarithm (base E) of x
    console.log(Math.log(100)); // Output: 4.605170185988092

    // max(x, y, z, ..., n) - returns the number with the highest value
    console.log(Math.max(100, 101, 102)); // Output: 102

    // min(x, y, z, ..., n) - returns the number with the lowest value
    console.log(Math.min(100, 101, 102)); // Output: 100

    // pow(x, y) - returns the vaLUE OF X TO POWER Y
    console.log(Math.pow(2, 3)); // Output: 8

    // random() - returns a random number between 0 and 1
    console.log(Math.random()); // Output: 0.40255069510578156

    // sin(x) - returns the sin of x (x in radians)
    console.log(Math.sin(30)); // Output: -0.9880316240928618

    // sqrt(x) - returns the square root of x
    console.log(Math.sqrt(9)); // Output: 3

    // tan(x)- returns the tangen5t of an angle 
    console.log(Math.tan(60)); // Output: 0.320040389379563
```

# Sample Programs
* create a program that asks a user to enter a number and computes its square root
```js
    var n = prompt("Enter a random number: ", " ");
    var answer = Math.sqrt(n);

    document.write("The Square root of " + n + " is " + answer); 
```