// json


const personJSON = '{"firstName" : "Rodgers", "lastName" : "Nyangweso", "gender" : "male", "age" : 20}'
const personObject = JSON.parse(personJSON);
console.log(personObject); //