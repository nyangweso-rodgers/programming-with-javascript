# Array Objects

# Introduction to JS Arrays
* __JS arrays__ store multiple values in a single variable. an __Array__ is a special type of __object__, it uses numbers to access its elements and an object uses name to access its members

# Creating JS Arrays
```js
    // Creating Arrays

    // using new Array
    var courses = new Array("HTML", "JavaScript", "CSS");
    console.log(courses); // Output: [ 'HTML', 'JavaScript', 'CSS' ]
    console.log(typeof(courses)); // object

    // you can also declear an array, tell it the number of elements it will store, and add the elements later
    var famousPlayers = new Array();
        // adding element dynamically
        famousPlayers[0] = 'Ronaldo';
        famousPlayers[1] = 'Messi';
        famousPlayers[2] = 'Pogba';
    console.log(famousPlayers); // Output: [ 'Ronaldo', 'Messi' ]

    // using Array literal - used for greater simplicity, readability, and execution speed
    var familyMembers = ['Rodgers', 'Wilson', 'Robert'];
```

# Accessing Array Elements
you refer to an array element by refering to the index number written in square brackets.
```js
    // Accessing Array Elements
    var courses = new Array("HTML", "JavaScript", "CSS");

    // [0] is the first element in an array. [1] is the second element. array indexes start with 0
    console.log(courses[0]); // HTML

    // attempting to access an index outside of the array, returns the value undefined
    console.log(courses[4]); // undefined
```
# Changing Array Elements
```js
    // Changing Array Elements
    var courses = new Array("HTML", "JavaScript", "CSS");
    courses[0] = ["C++"];
    console.log(courses[0]);  // C++
```

# Array Methods
```js
    // Array Methods
    var courses = new Array("HTML", "JavaScript", "CSS");

    // concat() - allows you to join arrays and create an entirely new array
    var javascriptFrameworks = ["React", "Aangular", "Vue"];
    console.log(courses.concat(javascriptFrameworks)); //Output: [ 'HTML', 'JavaScript', 'CSS', 'React', 'Aangular', 'Vue' ]

    // map() - creates a new array populated with the return value of the __callback__ function for each element in the array
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(value => value * 2);
    console.log(doubled); // [ 2, 4, 6, 8, 10 ]

    // forEach - ecutes a provided function once for each array element. the callback function does not expect a return value, and the forEach() method itself also returns undefined.
    const numbers = [1, 2, 3, 4, 5];
    const allAboveThree = numbers.forEach(n => console.log(n)); 
    console.log(allAboveThree); // 1, 2, 3, 4, 5

    // filter() - creates a new array containing only the elements that 'pass the test' implemented by the callback function. 
    // we call this type of callback a predicate function
    const numbers = [1, 2, 3, 4, 5];
    const even = numbers.filter(n => n % 2 === 0);
    console.log(even); // Output: [2, 4]

    const odd = numbers.filter(n => n % 2 !== 0);
    console.log(odd); // Output: [1, 3, 5]

    // find() - behaves similarly to the filter() method, but it only returns a single element. this method will stop at the first element that 'pass the test' and return that. if none exists, it will return undefined.
    const numbers = [1, 2, 3, 4, 5];
    const even = numbers.find(n => n === 3);
    console.log(even); // Output: 3

    // findIndex() - behaves similarly to the __find()__ method, but it returns an index instead of the element. this method will stop at the first element that 'pass the test' and return the index. if none exists, it will return -1
    const numbers = [1, 2, 3, 4, 5];
    const indexOfThree = numbers.findIndex(n => n === 3);
    console.log(indexOfThree); // Output: 2

    // reduce() - takes a callback with (at least) two arguments, an accumulator and the current element. 
    // for each iteration, the return value of the callback function is passed on as the accumulator argument of the next iteration.
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, n) => acc + n);
    console.log(sum); // Output: 15

    // some() - takes a predicate function and return  true if any of the elemnts in the array 'passes the test'
    const numbers = [1, 2, 3, 4, 5];
    const hasAboveThree = numbers.some(n => n > 3);
    console.log(hasAboveThree); // Output: true

    // every() - takes a __predicate function__ and returns true if all of the elemnts in the array 'pass the test'
    const numbers = [1, 2, 3, 4, 5];
    const allAboveThree = numbers.every(n => n > 3);
    console.log(allAboveThree); // Output: false

    // includes() - checks if an array includes a certain value among its elements, returning true or false
    const numbers = [1, 2, 3, 4, 5];
    const hasNumberFour = numbers.includes(4);
    console.log(hasNumberFour); // Output: true

    // fill() - replaces all the elemnts in an array to a given value
    const numbers = [1, 2, 3, 4, 5];
    const populateWithFour = numbers.fill(4);
    console.log(populateWithFour); // Output: [ 4, 4, 4, 4, 4 ]

    // reverse() - reverses the order of the elements in the array
    const numbers = [1, 2, 3, 4, 5];
    const reversed = numbers.reverse();
    console.log(reversed); // Output: [ 5, 4, 3, 2, 1 ]

    // flat() - creates a new array with all sub-array elements flattened into it. you can specify a depth. The default is 1
    const numbers = [[1], [2], [3], [4], [5]];
    const flattened = numbers.flat(2);
    console.log(flattened); // Output: [ 1, 2, 3, 4, 5 ]

    // flatMap() - applies a callback to each element of the array and then flatten the result into an array. it combines flat() and map() in one function
    const numbers = [[1], [2], [3], [4], [5]];
    const flattenedDoubles = numbers.flatMap((n) => n * 2);
    console.log(flattenedDoubles); // Output: [ 2, 4, 6, 8, 10 ]

    // sort() - used to sort the elements of an array and returning the sorting array. _NOTE:_ this method is mutating the original array
    const numbers = [2, 9, 3, 5, 1, 8];
    numbers.sort((a, b) => a - b);
    console.log(numbers); // Output: [ 1, 2, 3, 5, 8, 9 ]

``` 