// Object Data Type in JavaScript

const student = {
  firstName: "Rodgers",
  lastName: "Nyangweso",
  age: 18,
};
// Accessing Object Properties
for (key in student) {
  console.log(student[key]); // Output: Rodgers, Nyangweso, 18
}
