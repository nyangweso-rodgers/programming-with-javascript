# JavaScript Object Notation (`JSON`)

## Table Of Contents

# Introduction to `JSON`
* `JSON` is a storage format that is completely language independent and it is used to store and transport data.

## Syntax: Object Literal
```js
    let person = {
        firstName: 'Rodgers',
        lastName: 'Nyangweso',
        age: 20
    }
```

## Syntax: `JSON`
```json
    {
        "firstName": "Rodgers",
        "lastName": "Nyangweso",
        "age": 20
    }
```

## `JSON.stringify()` Method
* `js` provides `JSON.stringify()` method to convert data from object literal format to `JSON` format.

    ```js
        // Object literal data
        let person = {
            firstName: 'Rodgers',
            lastName: 'Nyangweso',
            age: 20
        };

        const jsonData = JSON.stringify(person);
        console.log(jsonData); // Output: {"firstName":"Rodgers","lastName":"Nyangweso","age":20}
    ```

# `JSON` Object Literal
* This is a `JSON string`:

    ```js
        // JSON string
        const person = '{"firstName" : "Rodgers", "lastName" : "Nyangweso", "gender" : "male", "age" : 20}'
        console.log(person); // Output: {"firstName" : "Rodgers", "lastName" : "Nyangweso", "gender" : "male", "age" : 20} 
    ```
* Inside the `JSON string` there is a `JSON object literal`:

    ```js
        // json object literal
        {"firstName" : "Rodgers", "lastName" : "Nyangweso", "gender" : "male", "age" : 20}
    ```
* _Remarks_:
  * It is a common mistake to call a `JSON object literal` "a `JSON object`".
  * `JSON` cannot be an object. `JSON` is a string format.
  * The data is only `JSON` when it is in a string format. When it is converted to a `js variable`, it becomes a `js object`.

# `js` Objects and `JSON.parse()` Method
* create `js object` from a `JSON object literal`

    ```js
        // define a js object from a JSON object literal
        const personObject = {"firstName" : "Rodgers", "lastName" : "Nyangweso", "gender" : "male", "age" : 20}; // Output: 
    ```
## `JSON.parse()`
* Normally, you create a `js object` by parsing a `JSON string`:

    ```js
        // define a js object from a JSON string
        const personJSON = '{"firstName" : "Rodgers", "lastName" : "Nyangweso", "gender" : "male", "age" : 20}'
        const personObject = JSON.parse(personJSON);
        console.log(personObject); // { firstName : "Rodgers", lastName : "Nyangweso", gender: "male", age: 20}
    ```


# JSON Array
* `JSON` arrays work pretty much the same way as arrays in `js`, and can contain `strings`, `booleans`, `numbers`, and other `JSON` objects.

    ```js
        // JSON Array
        [
            {
                "firstName" : "Rodgers",
                "lastName" : "Nyangweso",
                "age" : 20,
                "active" : true
            },
            {
                "firstName" : "Wilson",
                "lastName" : "Oyare",
                "age" : 20,
                "active" : true
            }
        ]
    ```