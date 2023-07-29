//  Objects in ES6

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
    }
]

let newUser = user.map(
    (i) => {
        //console.log(data);
        return {
            firstName: i.firstName,
            age: i.age
        };
    });
console.log(user);
console.log(newUser);