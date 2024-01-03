# How To Create JavaScript Objects

## Table Of Contents

# Create Object using `class` keyword

```js
class person {
  // Data (properties)
  firstName;
  lastName;
  age;

  // Methods
  study() {
    // study
  }

  play() {
    // play
  }
}
```

# Create Object using Object Literal (Initializer)

- This approach allows you to create only a single **object**.
- Example:

  ```js
  var person = {
    name: "Rodgers",
    age: 28,
    favColor: "blue",
    height: 23,
  };

  console.log(person); // Output: { name: 'Rodgers', age: 28, favColor: 'blue', height: 23 }
  ```

# Create Object using object constructor function

```js
function persons(name, age, favColor, height) {
  this.name = name;
  this.age = age;
  this.favColor = favColor;
  this.height = height;
}

// once you have an object constructor, you can use the new keyword to create new objects of the same type
// p1 and p2 are now objects of the person type. their properties are assigned to the corresponding value
var p1 = new persons("Rodgers", 28, "blue", 43);
var p2 = new persons("Harvey", 1, "green", 10);

console.log(p1); // Output: persons { name: 'Rodgers', age: 28, favColor: 'blue', height: 43 }
console.log(p2); // Output: persons { name: 'Harvey', age: 1, favColor: 'green', height: 10 }
```
