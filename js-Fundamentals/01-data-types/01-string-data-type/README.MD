# `js` Strings

## Table of contents
- [Further Reading]()
    1. [freeCodeCamp - JavaScript Basics – How to Work with Strings, Arrays, and Objects in JS](https://www.freecodecamp.org/news/javascript-basics-strings-arrays-objects/)

# How to Use Strings in `js`
* To create a `string` you can use the `String()` constructor or a `string literal`.
* Example:
    * Using the `String()` constructor:
        ```js
            // using the `String()` constructor
            let firstName = String('Rodgers');
        ```
    * Using string literals
        ```js
            // using the `String()` constructor
            let firstName = 'Rodgers';
        ```

# `string` Instance Methods
## `.charAt` Method
* access a character at a certain index in the string.

    ```js
        // access first character at a certain index in the string
        let firstName = 'Rodgers';
        // using indexing
        let firstLetter = firstName[0];
        // using .charAt
        let firstLetter = firstName.charAt(0);
    ```

## `.toUpperCase()` and `.toLowerCase()` Methods
```js
    let firstName = 'Rodgers';
    // using .toUpperCase and .toLowerCase methods
    let firstNameInUpperCase = firstName.toUpperCase();
    let firstNameInLowerCase = firstName.toLowerCase();
```

## `.concat()` Method
```js
    let firstName = 'Rodgers';
    let lastName = 'Nyangweso';

    let fullName = firstName.concat(lastName);
    console.log(fullName); // Output: RodgersNyangweso
```

## `.indexOf()` Method
* used to find the index of a certain character or a set of characters of a string:
    ```js
        let firstR = firstName.indexOf('r');
        console.log(firstR); // Output: 0
        console.log(fullName.indexOf('Nyang')); // Output: 7
    ```

## `.slice()` Method
* to get a substring of a given `string`
    ```js
        let firstName = 'Rodgers';
        console.log(firstName.slice(1, 4)); // Output: odg
    ```
* not passing any parameters will generate a copy of the ariginal string with no mutation

## `.split()` Method
* This method takes a pattern as an argument and divides the `string` into multiple substrings. 
* You might find yourself using this method to parse a `URL` or certain strings.

    ```js
        // 
        let fullName = 'Rodgers Nyangweso';
        let firstName = fullName.split(' ');

        console.log(firstName); // Output: [ 'Rodgers', 'Nyangweso' ]

        let nameLetters = fullName.split('');
        console.log(nameLetters); // Output: ['R', 'o', 'd', 'g', 'e', 'r', 's', ' ', 'N', 'y', 'a', 'n', 'g', 'w', 'e', 's', 'o']
    ```