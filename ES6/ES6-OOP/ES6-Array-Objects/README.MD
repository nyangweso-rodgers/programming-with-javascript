# ES6 - Array Objects

## Table of contents

# Array Element Finding
* the legacy way to find the first element of an array by its value and a rule  was the following:
  
    ```js
        [4, 5, 1, 8, 2].filter(function(x) {
            return x > 3;
        })[0];
    ```
* _Remarks_:
  * the new syntax is cleaner and more robust
  
      ```js
          [4, 5, ,1, 8, 2, 0].find(x => x > 3);
      ```
  * you can also get the index of the item above by using the `findIndex()` method
      ```js
          [4, 5, ,1, 8, 2, 0].findIndex(x => x > 3);
      ```


# Array Destructuring in `ES6`
* the __destructuring assignment syntax__ is a JS expression that meks it possible to unpack values from arrays, or properties from objects, into distinct variables. 
* `ES6` has added a shorthand syntax for destructuring an array.
  
    ```js 
        // the following example demonstrates how to unpack the elements of an array into distinct variables.
        let arr4 = ['1', '2', '3'];
        let [one, two, three] = arr4;
        console.log(one); // 1
        console.log(two); // 2
        console.log(three); // 3
    ```

* _Remarks_:
  * we can use also destructure  an array returned by a function. for example:

      ```js
          let a1 = () => {
              return [4, 3, 5];
          };
          let [four, , five] = a1();
          console.log(four);
          console.log(five);
          // notice: we left the second argument's place empty
      ```

  * the destructuring syntax also simplifies assignment and swapping values
  
    ```js
        let a, b, c = 4, d = 8;
        [a, b = 6] = [2]; // a = 2, b = 6
        [c, d] = [d, c]; // c= 8, d = 4
        console.log(c); //8
        console.lo(d); // 4
    ```