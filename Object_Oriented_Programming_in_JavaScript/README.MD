# Object Oriented Programming in JavaScript
## Table of Contents
- [Objects in JavaScript](#Objects-in-JavaScript)
- [Creating Objects in JavaScript](#Creating-Objects-in-JS)
- [Accessing Object Properties](#Accessing-Object-Properties)
- [Object Methods](#Object-Methods)
- [JS Core Objects]()
    - [Arrays Objects](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/Object_Oriented_Programming_in_JavaScript/Array_Objects)
    - [Date Objects](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/Object_Oriented_Programming_in_JavaScript/Date_Objects)
    - [Math Objects](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/Object_Oriented_Programming_in_JavaScript/Math_Objects)
# Objects in JavaScript
__JS variables__ are containers for data values. __Objects__ are variables too but they contain many values. think of an __object__ as a list of values that are written as name:value pairs, seperated by colons.

# Creating Objects in JS
```js
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
```
# Accessing Object Properties
```js
    // Accessing Objects in JS
    var person = {
                    name : "Rodgers",
                    age : 28,
                    favColor : "blue",
                    height : 23
                    };
    // objectName.propertyName
    var x = person.age;
    document.write(x); // Output: 28

    // objectName['propertyName']
    var y = person['age'];
    document.write(y); // Output: 28

    // JS built-in length property is used to count the number of characters in a property string
    document.write(person['name'].length); // 7
```
# Object Methods
an __object method__ is a property that contains a function definition. a __method__ is a function, belonging to an __object__. it can be referenced using __this__ keyword. the __this__ keyword is used as a reference to the current object meaning that you can access the objects properties and methods using it. defining methods is done inside the constructor function.
```js
    // Object Methods

    // use the following syntax to access an object method.
    objectName.methodName();

    // example1
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

    //  you can also define the function outside of the constructor function and associate it with the object
    function firstPerson(firstName, lastName, age) {
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

    var p4 = new firstPerson("Rodgers", "Nyangweso", 28);
    document.write(p4.yearOfBirth()); // 1994
```