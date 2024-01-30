// example of map object

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

const grandChilren = user.map((userLists) => {
  return {
    firstName: userLists.firstName,
    lastName: userLists.lastName,
    age: userLists.age,
  };
});
console.log(user);
console.log(grandChilren);
