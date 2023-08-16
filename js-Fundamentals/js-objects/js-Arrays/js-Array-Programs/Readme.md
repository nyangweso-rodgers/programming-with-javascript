# `js` Array Programs

# Program 1: Generate `Array` of numbers from 0 to a maximum value 
* Example, by setting a minimum value to 100, we get:

    ```js
        var numbersArray = [], max = 100;

        for (
            var i=1; numbersArray.push(i++) < max;
            );
        console.log(numbersArray); // Output: numbers = [1, 2, 3, -- 100]
    ```