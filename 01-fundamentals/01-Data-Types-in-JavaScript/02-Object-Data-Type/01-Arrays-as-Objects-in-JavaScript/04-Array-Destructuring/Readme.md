# Array Destructuring

## Table Of Contents

# Introduction to Array Destructuring

- allows us to unpack **Arrays** or **Objects** into a bunch of distinct **variables**.
- **Example**:

  ```js
  const myFullName = "Rodgers Nyangweso";

  // Array Destructuring
  const myNameArray = myFullName.split(" ");
  console.log(myNameArray); // Output: [ 'Rodgers', 'Nyangweso' ]

  // using destructuring concept
  let [firstName, lastName] = myNameArray;
  console.log(firstName); // Output: Rodgers
  console.log(lastName); // Output: Nyangweso
  ```

* **another example**:

  ```js
  let students = ["John Smith", "Rodgers Nyangweso", "Wilson Oyares"];
  let [studentOne, studentTwo, studentThree] = students;
  console.log(studentOne); // Output: "John Smith"
  console.log(studentTwo); // Output: "Rodgers Nyangweso"
  console.log(studentThree); // Output: "Wislson Nyangweso"
  ```

* we can also destructre an array returned by a function. E.g.,

  ```js
  let destructureFunction = () => {
    let students = ["John Smith", "Rodgers Nyangweso", "Wilson Oyares"];
    return students;
  };

  let [studentOne, studentTwo, studentThree] = destructureFunction();

  console.log(studentOne); // Output: "John Smith"
  console.log(studentTwo); // Output: "Rodgers Nyangweso"
  console.log(studentThree); // Output: "Wislson Nyangweso"
  ```
