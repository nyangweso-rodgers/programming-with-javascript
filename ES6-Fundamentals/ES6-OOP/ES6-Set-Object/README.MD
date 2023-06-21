# ES6 `Set` Object

# ES6 Set
* a `Set` object can be used to hold unique values (no repetitions are allowed). the syntax `new Set([iterable])` creates a `Set` object where iterable is an array or any other iterable object of values. the size property returns the number of distinct values in a set. __for example__:
  
    ```js
        let set = new Set([1, 2, 5, 8, 48,8]);
        console.log(set.size); 
    ```
# `Set` Methods

# `set` Method: `add(value)` 
* adds a new element with the given value to the `set`.

    ```js
        let mySet = new Set();

        mySet.add(5).add(6).add(7);

        console.log(mySet); // Output: Set(3) { 5, 6, 7 }
    ```

# `set` Method: `delete(value)` 
* deletes a specified value from the `set`

# `set` Method: `has(value)`
* returns true if a specified value exists in the `set` and false otherwise

    ```js
        let mySet = new Set();

        mySet.add(5).add(6).add(7);

        console.log(mySet.has(9)); // Output: false
    ```

# `set` Method: `clear()`
* clears the `set`

# `set` Method: `values()` 
* returns an iterator of values in the `set`

    ```js
        let mySet = new Set();

        mySet.add(5).add(6).add(7);
        
        for (let i of mySet.values())
        console.log(i);
    ```