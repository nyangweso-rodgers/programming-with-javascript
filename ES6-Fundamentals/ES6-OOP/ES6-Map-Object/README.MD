# ES6 Map Object

# `ES6 Map`
* a `map` object can be used to hold `key/value `pairs. A key or value in a map can be anything (objects and primitive values). the syntax `new Map([iterable])` creates a Map object where iterable is an array or any other iterable object whose elements are arrays (with a key/value pair each). an object is similar to Map but there are important differences that make using a Map preferable in certain cases:
  
  * the keys can be any type including functions, objects, and new any primitie
  
  * you can get the size of a Map
  
  * you can directly iterate over a Map
  
  * performance of the Map is better in scenarios inolving frequent addition and removal of key/value pairs

* _Remarks_: 
  * the `size` property returns the  number of key/value pairs in a `Map`. for example:

    ```js
        let map = new Map([['k1', 'v1'], ['k2', 'v2']]);
        console.log(map);
        console.log(map.size); // 2
    ```
# `Map` Methods
# `Map` Method: `set(key, value)`
* adds a specified key/value pair to the `Map`. if the specified key already exists, value corresponding to it is replaced with the specified value.

# `Map` Method: `get(key)`
* gets the value corresponding to a specified key in the `map`. if the specified key doesn't exist, `undefined` is returned.

    ```js
        let map = new Map();
        map.set('k1', 'v1').set('k2', 'v2');

        console.log(map.get('k1')); // v1
    ```

# `Map` Method: `has(key)`
* returns true if a specified key exists in the `Map` and false otherwise

    ```js
        let map = new Map();
        map.set('k1', 'v1').set('k2', 'v2');

        console.log(map.has('k2')); // true
        
    ```

# `Map` Method: `delete(key)`
* deletes the key/value pair with a specified key from the `map`  and returns true. returns false if the element does not exist.

# `Map` Method: `clear()`
* removes all key/value pairs from the `map`

# `Map` Method: `keys()`
* returns an iterator of keys in the `map` for each element

# `Map` Method: `values()`
* returns an iterator of values in the `map` for each element

# `Map` Method: `entries()`
* returns an iterator of array[key, value] in the map for each element.

    ```js
        let map = new Map();
        map.set('k1', 'v1').set('k2', 'v2');

        for (let kv of map.entries()){
            console.log(kv[0] + " " + kv[1]);
        };
    ```