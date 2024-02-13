# Object Data Type in JavaScript

## Table Of Contents

# Introduction to Object Data Type in JavaScript

- JavaScript **objects** are written with curly braces `{}`.
- Object properties are written as `name:value`pairs, separated by commas.
- the **object** type is special. all the other types are called "**primitive**" because their value can contain only a single thing(be it a `string`, a **number** or whatever). in contrast, **objects** are used to store collections of data and more complex entities. the symbol type is used to create a unique identifier for objects.

  ```js
  // Creating an Object in JS
  var emp = {
    name: "Rodgers", // the key "name" stores the value "Rodgers"
    age: 26,
  };

  console.log(emp); // Output: { name: 'Rodgers', age: 26 }
  ```

# How to Create JavaScript Objects

## 1. Create Objects Using Object Literal (Initializer)

- This approach allows you to create only a single **object**. Example:

  ```js
  var person = {
    name: "Rodgers",
    age: 28,
    favColor: "blue",
    height: 23,
  };

  console.log(person); // Output: { name: 'Rodgers', age: 28, favColor: 'blue', height: 23 }
  ```

## 2. Create Object Using Object Constructor Function

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

### 3. Create Object Using Property Value Shorthand

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

- Note:

  - when creating an object by using duplicate property names, the last property will overwrite the prior ones of the same name. for example:

    ```js
    let person = {
      firstName: "Rodgers",
      firstName: "Nyangwesos",
      firstName: "Omondi",
    };
    console.log(person.firstName); // Output: Omondi
    ```

### 4. Create Object Using `Object.assign()` in ES6

- **ES6** adds a new **Object** method `assign()` that allows us to combine multiple sources into one target to create a single new **object**.
- `Object.assign()` is also useful for creating a duplicate of an existing object.
- Example: how to combine objects:

  - first parameter is the target object you want to apply new properties to
  - every parameter after the first will be used as sources for the target.

    ```js
    let firstPerson = {
      firstName: "Rodgers",
      lastName: "Nyangwesos",
      age: 26,
    };

    let secondPerson = {
      firstName: "Wilson",
      lastName: "Oyare",
      age: 30,
    };

    let thirdPerson = Object.assign({}, firstPerson, secondPerson);
    console.log(thirdPerson); // Output: { firstName: 'Wilson', lastName: 'Oyare', age: 30 }
    ```

- Remarks:

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

# Object Properties

- The `name:values` pairs in JavaScript objects are called **properties**:

## Accessing Object Properties

- You can access object **properties** in two ways:

### 1. Accessing Object Properties Usin `objectName.propertyName`

```js
const student = {
  firstName: "Rodgers",
  lastName: "Nyangweso",
  age: 18,
};
// Accessing Object Properties
console.log(student.firstName); // Output: Rodgers
```

### 2. Accessing Object Properties Using `objectName['propertyName']`

```js
const student = {
  firstName: "Rodgers",
  lastName: "Nyangweso",
  age: 18,
};
// Accessing Object Properties
console.log(student["firstName"]); // Output: Rodgers
```

### 3. Accessing Object Properties Using `in` Operator

- A special operator `in` is used to access.

  ```js
  // Object Data Type in JavaScript

  const student = {
    firstName: "Rodgers",
    lastName: "Nyangweso",
    age: 18,
  };
  // Accessing Object Properties
  console.log("firstName" in student); // Output: true
  console.log("favouriteColor" in student); // Output: false
  ```

- **Note** that on the left side of `in` there must be a property name. That’s usually a quoted string.

### 4. The `for..in` Loop

- There exists a special `for..in` loop used to iterate through all the keys of an object.
- Syntax:
  ```js
  // Syntax
  for (key in object) {
    // executes the body
  }
  ```
- Example:
  - Output all the properties of `student` object
    ```js
    const student = {
      firstName: "Rodgers",
      lastName: "Nyangweso",
      age: 18,
    };
    // Accessing Object Properties
    for (key in student) {
      console.log(key); // Output: firstName, lastName, age
    }
    ```
  - Output values for the keys:
    ```js
    const student = {
      firstName: "Rodgers",
      lastName: "Nyangweso",
      age: 18,
    };
    // Accessing Object Properties
    for (key in student) {
      console.log(student[key]); // Output: Rodgers, Nyangweso, 18
    }
    ```

# Object Methods

- Objects can also have **methods**.
- **Methods** are **actions** that can be performed on **objects**.
- **Methods** are stored in properties as **function** definitions. i.e., method is a function stored as a property.

# Objects Desctructuring in ES6

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

# Resources
