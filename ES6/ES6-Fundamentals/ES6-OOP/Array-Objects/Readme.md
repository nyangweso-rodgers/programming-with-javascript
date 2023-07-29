# Array Objects

## Table of Contents

# Rest Operator 

# Spread Operators


# Array Destructuring
* allows us to unpack `Arrays` or `Objects` into a bunch of distinct `variables`. Example:

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
* another example:
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
            return  students;
        }

        let [studentOne, studentTwo, studentThree] = destructureFunction();

        console.log(studentOne); // Output: "John Smith"
        console.log(studentTwo); // Output: "Rodgers Nyangweso"
        console.log(studentThree); // Output: "Wislson Nyangweso"
    ```

# Array Functions

# Array Function: `map()`
* `map()` iterates an array. 
* we can pass a `callback` function for performing specific operations in each array element.

    ```js
        let priceList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let doublePriceList = priceList.map(
            doubleFunction = (i) => {
                return i* 2;
            }
        );

        console.log(doublePriceList); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    ```

# Array Function: `reduce()`

# Array Function: `filter()`


# Array Function: `find()`

# Array Function: `findIndex()`