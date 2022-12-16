# for loop in ES6

# Introduction to for loop
* in __JavaScript__, we commonly use the __for loop__ to iterate over values in a list
    ```js
        let arr = [1, 2, 3];
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    ```
* The for...in loop is intended for iterating over the enumerable keys of an object. for example:
    ```js
        let obj = {a:1, b:2, c:3};
        for (let v in obj) {
            console.log(v);
        };
    ```
* _Remark_: _the for...in loop should NOT be used to iterate over arrays becaues, depending on the JS engine, it could iterate in an arbitrary order also, the iterating variable is a string, not a number, so if you try to do any math with the variable, you'll be performing string concatenation instead of addition_

* __ES6__ introduces the new __for...of__ loop, which creates a loop iterating over iterable objects for example:
    ```js
        let list = ["x", "y", "z"];
        for (let val of list) {
            console.log(val);
        };
    ```
* _during each iteration the val variable is assigned the corresponding element in the list_
* _the for...of loop workd for other iterable objects as well, including strings:_
    ```js
        for (let ch of "Hello") {
            console.log(ch);
        }
    ```
* _the for...of loop also works on the newly introduced collections (Map, Set, WeakMap, and WeakSet).._