// Object Oriented Programming in JS

// creating objects using Object Literal (initializer)
var person = {
    name: "Rodgers",
    age: 28,
    favColor: "blue",
    height: 23
};

console.log(person); // Output: { name: 'Rodgers', age: 28, favColor: 'blue', height: 23 }

// Creating Objects: Method 2:using object constructor function

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

console.log(p1);