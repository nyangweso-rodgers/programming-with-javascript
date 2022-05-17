# Objects in JavaScript
__JS variables__ are containers for data values. __Objects__ are variables too but they contain many values. think of an __object__ as a list of values that are written as name:value pairs, seperated by colons.

# Creating objects using object literal (initializer)
this allows you to create only a single object
```js
    var person = {
    name : "Rodgers",
    age : 28,
    favColor : "blue",
    height : 23
    };
    // these values are called properties
```
* you can access properties in two ways:
    * objectName.propertyName
    * objectName['propertyName']
```js
    var person = {
    name : "Rodgers",
    age : 28,
    favColor : "blue",
    height : 23
    };

    var x = person.age;
    var y = person['age'];

    document.write(x); // 28
    document.write(y); // 28

    // JS built-in length property is used to count the number of characters in a property string
    document.write(person['name'].length); // 7
```

# creating objects using object constructor function
sometimes we need to set an "object type" that can be used to create a number of objects of a single type. this standard way to create an "object type" is to use an object constructor function.
```js
    // this function (person) is an object constructor, which takes parameters and assigns them to object properties
    // the this keyword refers to the current object
    // Note that this is not a variable. its a keyword, and its value cannot be changed
    function person(name, age, favColor, height) {
        this.name = name;
        this.age = age;
        this.favColor = favColor;
        this.height = height;
    };

    // once you have an object constructor, you can use the new keyword to create new objects of the same type
    // p1 and p2 are now objects of the person type. their properties are assigned to the corresponding value
    var p1 = new person("Rodgers", 28, "blue", 43);
    var p2 = new person("Harvey", 1, "green", 10);

    document.write(p1.age); // 28
    document.write(p2.age); // 1
```

# Object Methods
an __object method__ is a property that contains a function definition. use the following syntax to access an object method.
```js
    objectName.methodName();
```
* a __method__ is a function, belonging to an object. it can be referenced using __this__ keyword. the __this__ keyword is used as a reference to the current object meaning that you can access the objects properties and methods using it. defining methods is done inside the constructor function.
```js
    function persons(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    // we have defined a method changeFirstName for our person, which is a function that takes a parameter firstName and assigns to it the firstName property of the object.
    this.changeFirstName = function (firstName) {
        this.firstName = firstName;
    }
    };


    var p3 = new persons("Damaris", "Awuor", "11-11-1993");
    p3.changeFirstName("Oballa");

    document.write(p3.firstName); // Oballa
```
* you can also define the function outside of the constructor function and associate it with the object
```js
    function persons(firstName, lastName, age) {
    this.firstName  = firstName;
    this.lastName = lastName;
    this.age = age;
    this.yearOfBirth = bornYear;

    };
    // we've assigned the object's yearOfBirth property to the bornYear function
    // the this keyword is used to access the age property of the object which is going to call the method
    function bornYear() {
        return 2022 - this.age;
    };

    var p4 = new persons("Rodgers", "Nyangweso", 28);
    document.write(p4.yearOfBirth()); // 1994
```

# Core Objects 1: Arrays
* JS arrays store multiple values in a single variable. an __Array__ is a special type of __object__, it uses numbers to access its elements and an object uses name to access its members
# Ways of Creating Arrays
1. using new Array: 
```js
    var courses = new Array("HTML", "JavaScript", "CSS");
```
2.  you can also declear an array, tell it the number of elements it will store, and add thr elements later
```js
    var courses = new Array(3);
        courses[0] = "HTML";
        courses[1] = "CSS";
        courses[2] = "JS";
```
_Remark_:  _JS arrays are dynamic, so you can declear an array an array and not pass any arguments with the array() constructor. You can then add elements dynamically_
```js
     var courses = new Array();
        courses[0] = "HTML";
        courses[1] = "CSS";
        courses[2] = "JS";
        courses[3] = "c++"; 
```

3. using __Array literal__: _used for greater simplicity, readability, and execution speed,_
```js
    var courses = ["HTML", "CSS", "JavaScript"];
```
_Remarks_:
* _Remember that JS does not support arrays with named indexes. in JS, arrays always use numbered indexes. it is better to use an object when you want the to index to be a string(text).use an array when you want the index to be a number_
* _accessing Array elements_: you refer to an array element by refering to the index number written in square brackets.
    ```js
        var courses = new Array("HTML", "CSS", "JavaScript");
        // [0] is the first element in an array. [1] is the second element. array indexes start with 0
        document.write(courses[0]); // HTML

        // attempting to access an index outside of the array, returns the value undefined
        document.write(courses[4]); // undefined
    ```
* _changing Array elements_: example
    ```js
        var courses = new Array("HTML", "CSS", "JavaScript");
        // [0] is the first element in an array. [1] is the second element. array indexes start with 0

        document.write(courses[0]); // HTML

        courses[0] = ["C++"];
        document.write(courses[0]);  // C++
    ```

# Array Methods
1. __Length Property__ the length property of an array returns the length of an array(the number of array elements)
```js
    var courses = new Array("HTML", "CSS", "JavaScript");

    document.write(courses.length); // 3
    // if the array is empty, the length property returns 0
```

2. __concat() method__: allows you to join arrays and create an entirely new array
```js
    var languages = ["HTML", "CSS", "JavaSvript"];

    var javascriptFrameworks = ["React", "Aangular", "Vue"];

    var courses = languages.concat(javascriptFrameworks);

    document.write(courses); //  HTML,CSS,JavaSvript,React,Aangular,Vue
```
3. __map__: the __map() method__ creates a new array populated with the return value of the __callback__ function for each element in the array
```js
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(value => value * 2);
    console.log(doubled); // [ 2, 4, 6, 8, 10 ]
```
4. __forEach__: the __forEach()__ method executes a provided function once for each array element. the __callback function__ does not expect a return value, and the __forEach()__ method itself also returns undefined.
```js
    const numbers = [1, 2, 3, 4, 5];
    const allAboveThree = numbers.forEach(n => console.log(n)
); 
```
5. __filter__:the __filter()__ method creates a new array containing only the elements that '_pass the test_' implemented by the __callback function__. we call this type of callback a __predicate function__
```js
    const numbers = [1, 2, 3, 4, 5];
    const even = numbers.filter(n => n % 2 === 0);
    const odd = numbers.filter(n => n % 2 !== 0);
    console.log(even); // [2, 4]
    console.log(odd); // [1, 3, 5]
```
6. __find__: the __find()__ method behaves similarly to the __filter()__ method, but it only returns a single element. this method will stop at the first element that 'pass the test' and return that. if none exists, it will return undefined.
```js
    const numbers = [1, 2, 3, 4, 5];
    const even = numbers.find(n => n === 3);
    console.log(even);
```
7. __findIndex__: the __findIndex()__ method behaves similarly to the __find()__ method, but it returns an index instead of the element. this method will stop at the first element that 'pass the test' and return the index. if none exists, it will return -1
```js
    const numbers = [1, 2, 3, 4, 5];
    const indexOfThree = numbers.findIndex(n => n === 3);
    console.log(indexOfThree);
```
8. __reduce__: the __reduce()__ method takes a callback with (at least) two arguments, an __accumulator__ and the __current element__. for each iteration, the return value of the __callback function__ is passed on as the __accumulator argument__ of the next iteration.
```js
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, n) => acc + n);
    console.log(sum); // 15
```
9. __some__: the __some()__ function takes a __predicate function__ and return  true if any of the elemnts in the array 'passes the test'
```js
    const numbers = [1, 2, 3, 4, 5];
    const hasAboveThree = numbers.some(n => n > 3);
    console.log(hasAboveThree); // true
```
10. __every__: the __every()__ method takes a __predicate function__ and returns true if all of the elemnts in the array 'pass the test'
```js
    const numbers = [1, 2, 3, 4, 5];
    const allAboveThree = numbers.every(n => n > 3);
    console.log(allAboveThree); // false
```
11. __includes__: the __includes()__ method checks if an array includes a certain value among its elements, returning true or false
```js
    const numbers = [1, 2, 3, 4, 5];
    const hasNumberFour = numbers.includes(4);
    console.log(hasNumberFour);
```
12. __fill__: the __fill()__ method replaces all the elemnts in an array to a given value
```js
    const numbers = [1, 2, 3, 4, 5];
    const populateWithFour = numbers.fill(4);
    console.log(populateWithFour); 
```
13. __reverse__: the __reverse()__ method reverses the order of the elements in the array
```js
    const numbers = [1, 2, 3, 4, 5];
    const reversed = numbers.reverse();
    console.log(reversed);
```
14. __flat__: the __flat()__ method creates a new array with all sub-array elements flattened into it. you can specify a depth. The default is 1
```js
    const numbers = [[1], [2], [3], [4], [5]];
    const flattened = numbers.flat(2);
    console.log(flattened); // [ 1, 2, 3, 4, 5 ]
```
15. __flatMap__: the __flatMap()__ method applies a __callback__ to each element of the array and then flatten the result into an array. it combines __flat()__ and __map()__ in one function
```js
    const numbers = [[1], [2], [3], [4], [5]];
    const flattenedDoubles = numbers.flatMap((n) => n * 2);
    console.log(flattenedDoubles);
```
16. __sort__: the __sort()__ method is used to sort the elements of an array and returning the sorting array. _NOTE:_ this method is mutating the original array
```js
    const numbers = [2, 9, 3, 5, 1, 8];
    numbers.sort((a, b) => a - b);
    console.log(numbers);
```
_Remarks_:
* Define the following array:
```js
    const companies = [
        {name : "Company One", category : "Finance", start : 1981, end : 2000 },
        {name : "Company Two", category : "Agriculture", start : 1982, end : 2001},
        {name : "Company Three", category : "Manfacturung", start : 1983, end : 2002},
        {name : "Company Four", category : "Technology", start : 1984, end : 2003},
        {name : "Company Five", category : "Retail", start : 1985, end : 2004},
        {name : "Company Six", category : "Auto", start : 1986, end  : 2005 },
        {name : "Company Seven", category : "Transport", start :1987, end : 2006 },
        {name : "Company Eight", category : "Finance", start : 1988, end : 2007 },
        {name : "Company Nine", category : "Hospitality", start : 1989, end : 2008},
        {name : "Company Ten", category : "NGO", start : 1990, end : 2009}
    ];
```
* _using forEach_
```js
    // forEach
    companies.forEach(function(company) {
        console.log(company);
        console.log(company.name);
    });
```
# Core Objects 2: Math Object
the __Math object__ allows you to perform mathematical tasks, and include several __properties__:
* E - Euler's constant
* LN2 - Natural log of the value 2
* LN10 - Natural log of the value 10
* LOG2E - the base 2log of Euler constant
* LOG10E - the base 10 log of Euler constant (E)
* PI - returns the constant pi
```js
    document.write(Math.PI); // 3.141592653589793
    document.write(Math.E); // 2.718281828459045
```

# Math Object Methods
The Math object cntains a number of methods that are used for calculations
* abs(x) - returns the absolute value of x
* acos(x) - returns the arccosine of x, in radians
* asin(x) - returns the arcsine of x, in radians
* atan(x) - returns the arctangent of x as a numeric value between  -PI/2 and PI/2 radians
* atan2(y, x) - returns the arctangent of the quotient of its arguments
* ceil(x) - returns x, rounded upwords to the nearest integer
* cos(x) - returns the cosine of x (x in radians)
* exp(x) - returns the value E**2
* floor(x) - returns x, rounded downwards to the nearest integer
* log(x) - returns the natural logarithm (base E) of x
* max(x, y, z, ..., n) - returns the number with the highest value
* min(x, y, z, ..., n) - returns the number with the lowest value
* pow(x, y) - returns the vaLUE OF X TO POWER Y
* random() - returns a random number between 0 and 1
* sin(x) - returns the sin of x (x in radians)
* sqrt(x) - returns the square root of x
* tan(x)- returns the tangen5t of an angle

```js
    var number = Math.random();
    document.write(number); // 0.061984262288161895
```
* create a program that asks a user to enter a number and computes its square root
```js
    var n = prompt("Enter a random number: ", " ");
    var answer = Math.sqrt(n);

    document.write("The Square root of " + n + " is " + answer); 
```
# Core Objects 2: Date Object
the __Date object__ enables us to work with dates
# Date Objects
1. __setInterval()__ method: calls a function or evaluates an expression at specified intervals (in milliseconds).
```js
    function myAlert () {
    alert('Hi');
    };
    setInterval(myAlert, 3000); // this will call myAlert function every 3 seconds (1000 ms = 1 second)
    myAlert(); 
```
2. __newDate()__: creates a new date object with current date and time. JS dates are calculated in milliseconds from __01 January, 1970 00:00:00 Universal Time(UTC)__. one day contains 86, 400, 000 milliseconds
```js
    var currentDate = new Date()
    document.write(currentDate); // Sun Feb 20 2022 21:15:59 GMT+0300 (East Africa Time)
```
_Remark_: _the other ways to initialize dates allow for the creation of new date objects from the specified date and time_
```js
    var d1 = new Date(86400000);
    document.write(d1); // Fri Jan 02 1970 03:00:00 GMT+0300 (East Africa Time)

    var d2 = new Date("January 2, 2015 10:42:00");
    document.write(d2); // Fri Jan 02 2015 10:42:00 GMT+0300 (East Africa Time)

    var d3 = new Date(88,5,11,11,42,0,0);
    document.write(d3); // Sat Jun 11 1988 11:42:00 GMT+0300 (East Africa Time)
```
_Remark_: _JS counts months from 0 to 11. Date objects are static , rather than dynamic. the computer time is ticking, but date objects dont'd change, once created_
# Date Methods
* getFullYear() - gets the year
* getMonth() - gets the month
* getDate() - gets the day of the month
* getHours() - gets the hour
* getMinutes() - gets the minutes
* getSeconds() - gets the seconds
* getsMillisecond() - gets the milliseconds
```js
    var d4 = new Date();

    var hours = d4.getHours();
    document.write(hours); // gets the hour
```
_Remarks_:
* create a program that prints the current time in the browser every second
    ```js
        function printTime(){
        // we declared a function printTime(), which gets the current time from the date object, and prints it to the screen once every second, using the setInterval method
        var d5 = new Date();
        var hours = d5.getHours();
        var mins = d5.getMinutes();
        var secs = d5.getSeconds();
        document.body.innerHTML = hours + ":" + mins + ":" + secs; 
    }
    setInterval(printTime, 1000);

    // the innerHTML property sets or returns the HTML content of the element.
        // in our case, we are changing the HTML content of our document's body.
        // this overwrites the content eery second, instead of printing it repeatedly to the screen
    ```