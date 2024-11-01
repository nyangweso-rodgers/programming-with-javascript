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