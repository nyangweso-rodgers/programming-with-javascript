// Object Oriented Programming in JavaScript

// Creating Objects in JS

// Method 1: using object literal (initializer) - this allows you to create only a single object
var person = {
    name : "Rodgers",
    age : 28,
    favColor : "blue",
    height : 23
    };
    // these values are called properties
console.log(person); // Output: { name: 'Rodgers', age: 28, favColor: 'blue', height: 23 }

// Method 2:using object constructor function
// this function (person) is an object constructor, which takes parameters and assigns them to object properties
// the this keyword refers to the current object
// Note that this is not a variable. its a keyword, and its value cannot be changed
function persons(name, age, favColor, height) {
    this.name = name;
    this.age = age;
    this.favColor = favColor;
    this.height = height;
};

// once you have an object constructor, you can use the new keyword to create new objects of the same type
// p1 and p2 are now objects of the person type. their properties are assigned to the corresponding value
var p1 = new persons("Rodgers", 28, "blue", 43);
var p2 = new persons("Harvey", 1, "green", 10);

console.log(p1); // Output: persons { name: 'Rodgers', age: 28, favColor: 'blue', height: 43 }
console.log(p2); // Output: persons { name: 'Harvey', age: 1, favColor: 'green', height: 10 }

// Object Methods in JS
function firstPerson(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;

    // we have defined a method changeFirstName for our firstPerson, which is a function that takes a parameter firstName and assigns to it the firstName property of the object.
    this.changeFirstName = function (firstName) {
        this.firstName = firstName;
    }
    };
    var p3 = new firstPerson("Rodgers", "Omodndi", "25-05-1994");
    p3.changeFirstName("Nyangweso");

    console.log(p3.firstName); // Output: Nyangweso