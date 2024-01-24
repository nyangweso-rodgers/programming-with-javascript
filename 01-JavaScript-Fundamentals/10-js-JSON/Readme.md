# JSON

## Table of Contents

# Introduction to Object Literals in JavaScript

- **Object literals** are created directly in JavaScript code using curly braces `{}`. They can contain **properties** and **methods**.
- Example:
  ```js
  var person = {
    firstName: "Rodgers",
    lastName: "Nyangweso",
    age: 21,
    sayHello: function () {
      console.log("Hello");
    },
  };
  ```
- **Usage**:

  - **Object literals** are used for creating **objects** within JavaScript code.

- **Parsing**:
  - No parsing is needed; **object literals** are directly usable in JavaScript.

# Introduction to JSON

- `JSON` is a data interchange format. It uses a subset of the **object literal** syntax but is a `string` representation. `JSON` is always a `string`, and it needs to be parsed to be used as a **JavaScript object**.
- Example:
  ```jsON
    // JSON
    {
        "firstName": "Rodgers",
        "lastName": "Nyangweso",
        "age": 21,
    }
  ```
- `JSON` is a storage format that is completely language independent and it is used to store and transport data.
- **Usage**:

  - **JSON** is a data interchange format used for communication between systems. It is a text-based format that can be easily transferred between different languages.

- **Parsing**:
  - `JSON` needs to be parsed using `JSON.parse()` to convert the `string` representation into a **JavaScript object**.

## `JSON.stringify()` Method

- JavaScript provides `JSON.stringify()` method to convert data from **object literal** format to `JSON` format.

  ```js
  // Object literal data
  let person = {
    firstName: "Rodgers",
    lastName: "Nyangweso",
    age: 20,
  };

  const jsonData = JSON.stringify(person);
  console.log(jsonData); // Output: {"firstName":"Rodgers","lastName":"Nyangweso","age":20}
  ```

## `JSON.parse()` Method

- You can also parse a **JSON string** into a JavaScript object using the `JSON.parse()` method. This converts the `JSON`-formatted string into a **JavaScript object**:

  ```js
  var jsonString = '{"first_name":"Rodgers", "last_name":"Nyangweso"}';
  console.log(jsonString); // Output: {"first_name":"Rodgers", "last_name":"Nyangweso"}
  console.log(typeof jsonString); // Output: string

  var jsonObject = JSON.parse(jsonString);
  console.log(jsonObject); // Output: { first_name: 'Rodgers', last_name: 'Nyangweso' }
  console.log(typeof jsonObject); // Output: object
  ```

## JSON Array

- **JSON arrays** work pretty much the same way as arrays in `js`, and can contain `strings`, `booleans`, `numbers`, and other `JSON` objects.
- Examples:

  - JSON Array with a single object:
    ```js
    // JSON Array
    [
      {
        firstName: "Rodgers",
        lastName: "Nyangweso",
        age: 20,
        active: true,
      },
    ];
    ```
  - JSON Array with 2 objects:

    ```js
    // JSON Array
    [
      {
        firstName: "Rodgers",
        lastName: "Nyangweso",
        age: 20,
        active: true,
      },
      {
        firstName: "Wilson",
        lastName: "Oyare",
        age: 20,
        active: true,
      },
    ];
    ```

- In JavaScript, after importing and parsing this **JSON array**, you would have an array of objects that you can access and manipulate. For example:

  ```js
  // JSON Array
  const jsonData = [
    {
      firstName: "Rodgers",
      lastName: "Nyangweso",
      age: 20,
      active: true,
    },
    {
      firstName: "Wilson",
      lastName: "Oyare",
      age: 20,
      active: true,
    },
  ];

  // Accessing data
  console.log(jsonData[0].firstName); // Output: Rodgers
  console.log(jsonData[1].firstName); // Output: Wilson
  ```

# Remarks
