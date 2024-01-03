# `map()` Object

## Table Of Contents

# `map()` Object

- a `map()` object can be used to hold `key/value `pairs.

  ```js
  const user = [
    {
      firstName: "Rodgers",
      lastName: "Nyangweso",
      age: 21,
    },
    {
      firstName: "Wilson",
      lastName: "Oyare",
      age: 31,
    },
  ];

  let newUser = user.map((i) => {
    //console.log(data);
    return {
      firstName: i.firstName,
      age: i.age,
    };
  });
  console.log(user);
  console.log(newUser);
  ```

- the syntax `new Map([iterable])` creates a Map object .
- the `size` property returns the number of `key`/`value` pairs in a `Map`. for example:

  ```js
  // create a new map object

  let students = new Map([
    ["firstName", "Rodgers"],
    ["lastName", "Nyangweso"],
  ]);

  console.log(students); // Output: Map(2) { 'firstName' => 'Rodgers', 'lastName' => 'Nyangweso' }
  console.log(students.size); // Output: 2
  ```

## `map` Methods

### 1. `set(key, value)`

- adds a specified key/value pair to the `Map`. if the specified key already exists, value corresponding to it is replaced with the specified value.

### 2. `get(key)`

- gets the value corresponding to a specified key in the `map`. if the specified key doesn't exist, `undefined` is returned.

  ```js
  let students = new Map([
    ["firstName", "Rodgers"],
    ["lastName", "Nyangweso"],
  ]);
  console.log(students); // Output: Map(2) { 'firstName' => 'Rodgers', 'lastName' => 'Nyangweso' }

  console.log(students.get("firstName")); // Output: Rodgers
  ```

### 3. `has(key)`

- returns true if a specified key exists in the `Map` and false otherwise

  ```js
  let students = new Map([
    ["firstName", "Rodgers"],
    ["lastName", "Nyangweso"],
  ]);
  console.log(students); // Output: Map(2) { 'firstName' => 'Rodgers', 'lastName' => 'Nyangweso' }

  console.log(students.has("firstName")); // Output: true
  ```

### 4. `delete(key)`

### 5. `clear()`

### 6. `keys()`

### 7. `values()`

### 8. `entries()`
