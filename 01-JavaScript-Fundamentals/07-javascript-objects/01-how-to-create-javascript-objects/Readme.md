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

# ES6 Classes

- a **class** uses the keyword `class` and contains a constructor methos for initializing.
- **example**:

  ```js
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  // a declared class can then be used to create multiple objects using the keyword new
  const square = new Rectangle(5, 5);
  const poster = new Rectangle(2, 3);
  ```

## Class Methods in ES6

**ES6** introduced a shorthand that does not require the keyword **function** for a **function** assigned to a method's name.

- one type of class method is the prototype method, which is available to object of the class. **for example**:

  ```js
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    get area() {
      return this.calcArea();
    }
    calcArea() {
      return this.height * this.width;
    }
  }
  const square = new Rectangle(5, 5);
  console.log(square.area);

  // in the above code, area is a getter, calcArea is a method:
  ```

* another type of method is the static method which cannot be called through a class instance. static methods are often used to create utility functions for an application. **for example**:

  ```js
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.hypot(dx, dy);
    }
  }
  const p1 = new Point(7, 2);
  const p2 = new Point(3, 8);

  console.log(Point.distance(p1, p2));

  // as you can see, the static distance method is called directly using the class name, without an object
  ```

## Inheritance in ES6

- the `extends` keyword is used in **class** declarations or class expressions to create a child of a class.the child inherits the properties and methods of the parent. **for example**:

  ```js
  class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(this.name + " makes noise. ");
    }
  }
  class Dog extends Animal {
    speak() {
      console.log(this.name + " barks. ");
    }
  }
  let dog = new Dog("Rex");
  dog.speak();
  // in this code, the Dog class is a child of the Animal class, inheriting its properties and methods
  ```

# ES6 Objects

- **ES6** introduces shorthand notations and computed property names that make declaring and using **objects** easier to understand.
- the new method definition shorthand does not require the colon `(:)` or `function` keyword in the `grow function` of the `person` object declaration.
  ```js
  let person = {
    firstName: "Rodgers",
    lastName: "Nyangwesos",
    age: 21,
    grow() {
      this.age += 2;
    },
  };
  person.grow();
  console.log(person.age); // Output: 23
  ```
- you can also use a property value shorthand when initializing **properties** with a `variable` by the same name. Example:

  ```js
  let firstName = "Rodgers";
  let lastName = "Nyangwesos";
  let age = 21;

  let person = {
    firstName,
    lastName,
    age,
  };

  console.log(person); // Output: { firstName: 'Rodgers', lastName: 'Nyangwesos', age: 21 }
  console.log(person.firstName); // Output: Rodgers
  ```

- **Note**:

  - when creating an object by using duplicate property names, the last property will overwrite the prior ones of the same name. for example:

    ```js
    let person = {
      firstName: "Rodgers",
      firstName: "Nyangwesos",
      firstName: "Omondi",
    };
    console.log(person.firstName); // Output: Omondi
    ```

## `Object.assign()` in ES6

- **ES6** adds a new **Object** method `assign()` that allows us to combine multiple sources into one target to create a single new **object**.
- `Object.assign()` is also useful for creating a duplicate of an existing object.
- Example: how to combine objects:

  - first parameter is the target object you want to apply new properties to
  - every parameter after the first will be used as sources for the target.

    ```js
    let person = {
      firstName: "Rodgers",
      lastName: "Nyangwesos",
      age: 26,
    };

    let anotherPerson = {
      firstName: "Wilson",
      lastName: "Oyare",
      age: 30,
    };

    let person3 = Object.assign({}, person, anotherPerson);
    console.log(person3); // Output: { firstName: 'Wilson', lastName: 'Oyare', age: 30 }
    ```

* **Remark**:

  - in the following example, assignment is used to try to generate a new object. however, using `=` creates a new a reference to the base object. because of this reference, changes intended for a new object mutate the original object.

    ```js
    let person = {
      firstName: "Rodgers",
      lastName: "Nyangwesos",
      age: 26,
    };

    let anotherPerson = {
      firstName: "Wilson",
      lastName: "Oyare",
      age: 30,
    };

    let person3 = anotherPerson;
    console.log(person3); // Output: { firstName: 'Wilson', lastName: 'Oyare', age: 30 }
    person3.firstName = "John";
    console.log(person3.firstName); // Output: John
    console.log(anotherPerson.firstName); // Output: John
    ```

    - to avoid this (mutations), use `Object.assign()` to create a new object.

## Object Desctructuring in ES6

- **Object destructuring** unpacks `properties` into distinct `variables`

  ```js
  let person = {
    firstName: "Rodgers",
    lastName: "Nyangwesos",
    age: 26,
  };

  let { firstName, lastName } = person;
  console.log(firstName); // Output: Rodgers
  console.log(lastName); // Output: Nyangwesos
  ```
