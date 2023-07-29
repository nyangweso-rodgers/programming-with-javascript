# `ES6` Objects and Classes

# `ES6` Objects
* `ES6` introduces shorthand notations and computed property names that make declaring and using `objects` easier to understand. 
* the new method definition shorthand does not require the colon `(:)` or `function` keyword in the `grow function` of the `person` object declaration.

    ```js
        let person = {
            firstName: "Rodgers",
            lastName: "Nyangwesos",
            age: 21,
            grow() {
                this.age += 2;
            }
        };
        person.grow();
        console.log(person.age); // Output: 23
    ```
* _Remarks_: 
  * you can also use a property value shorthand when initializing properties with a variable by the same name. Example:

    ```js
        let firstName = "Rodgers";
        let lastName = "Nyangwesos";
        let age = 21;

        let person = {
            firstName,
            lastName,
            age
        };

        console.log(person); // Output: { firstName: 'Rodgers', lastName: 'Nyangwesos', age: 21 }
        console.log(person.firstName); // Output: Rodgers
    ```
  * when creating an object by using duplicate property names, the last property will overwrite the prior ones of the same name. for example:

    ```js
        let person = {
            firstName: 'Rodgers',
            firstName: 'Nyangwesos',
            firstName: 'Omondi',
        };
        console.log(person.firstName); // Output: Omondi
    ```
## `Object.assign()` in `ES6`
* `ES6` adds a new `Object` method `assign()` that allows us to combine multiple sources into one target to create a single new object.
*  `Object.assign()` is also useful for creating a duplicate of an existing object.
*  Example: how to combine objects:
   *  first parameter is the target object you want to apply new properties to
   *  every parameter after the first will be used as sources for the target.
  
    ```js
        let person = {
            firstName: 'Rodgers',
            lastName: 'Nyangwesos',
            age: 26,
        };

        let anotherPerson = {
            firstName: 'Wilson',
            lastName: 'Oyare',
            age: 30
        };

        let person3 = Object.assign({}, person, anotherPerson);
        console.log(person3); // Output: { firstName: 'Wilson', lastName: 'Oyare', age: 30 }
    ```
* Remark:
  * in the following example, assignment is used to try to generate a new object. however, using `=` creates a new a reference to the base object. because of this reference, changes intended for a new object mutate the original object.

    ```js
        let person = {
            firstName: 'Rodgers',
            lastName: 'Nyangwesos',
            age: 26,
        };

        let anotherPerson = {
            firstName: 'Wilson',
            lastName: 'Oyare',
            age: 30
        };

        let person3 = anotherPerson;
        console.log(person3); // Output: { firstName: 'Wilson', lastName: 'Oyare', age: 30 }
        person3.firstName = 'John';
        console.log(person3.firstName); // Output: John
        console.log(anotherPerson.firstName); // Output: John
    ```
    * to avoid this (mutations), use `Object.assign()` to create a new object.

## Object Desctructuring in `ES6`
*  __Object destructuring__ unpacks `properties` into distinct `variables`

    ```js
        let person = {
            firstName: 'Rodgers',
            lastName: 'Nyangwesos',
            age: 26,
        };

        let {firstName, lastName} = person;
        console.log(firstName); // Output: Rodgers
        console.log(lastName); // Output: Nyangwesos
    ```

# `ES6` Classes

# `map()` Object
* a `map` object can be used to hold `key/value `pairs.

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
    ```
* the syntax `new Map([iterable])` creates a Map object .
* the `size` property returns the  number of key/value pairs in a `Map`. for example:
    ```js
        let students = new Map([['firstName', 'Rodgers'], ['lastName', 'Nyangweso']]);
        console.log(students); // Output: Map(2) { 'firstName' => 'Rodgers', 'lastName' => 'Nyangweso' }
        console.log(students.size); // Output: 2
    ```

## `map` Methods
### `Map` Method: `set(key, value)`
* adds a specified key/value pair to the `Map`. if the specified key already exists, value corresponding to it is replaced with the specified value.

### `Map` Method: `get(key)`
* gets the value corresponding to a specified key in the `map`. if the specified key doesn't exist, `undefined` is returned.

    ```js
        let students = new Map([['firstName', 'Rodgers'], ['lastName', 'Nyangweso']]);
        console.log(students); // Output: Map(2) { 'firstName' => 'Rodgers', 'lastName' => 'Nyangweso' }

        console.log(students.get('firstName')); // Output: Rodgers
    ```

### `Map` Method: `has(key)`
* returns true if a specified key exists in the `Map` and false otherwise

    ```js
        let students = new Map([['firstName', 'Rodgers'], ['lastName', 'Nyangweso']]);
        console.log(students); // Output: Map(2) { 'firstName' => 'Rodgers', 'lastName' => 'Nyangweso' }

        console.log(students.has('firstName')); // Output: true
    ```

### `Map` Method: `delete(key)`
* deletes the key/value pair with a specified key from the `map`  and returns true. returns false if the element does not exist.

### `Map` Method: `clear()`
* removes all key/value pairs from the `map`

### `Map` Method: `keys()`
* returns an iterator of keys in the `map` for each element

### `Map` Method: `values()`
* returns an iterator of values in the `map` for each element

### `Map` Method: `entries()`
* returns an iterator of array[key, value] in the map for each element.