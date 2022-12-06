# ECMAScript 6

## Table Of Contents
- [Introduction to ES6](#Introduction-to-ES6)

# Introduction to ES6
* __ECMAScript (ES)__ is a scripting language specification created to standardize __JavaScript__. The sixth edition, initially known as __ECMAScript 6__ (ES6) and later renamed to __ECMAScript 2015__, adds significant new syntax for writing complex applications, including:
    * classes and modules, 
    * iterators  and for/of loops, 
    * generators, 
    * arrow functions, 
    * binary data, 
    * typed arrays, 
    * collections (maps,sets and weak maps), 
    * promises, 
    * number and math enhancements, 
    * reflections, proxies. 

* i.e., __ES6__ is a superset of __JavaScript (ES5)__. the reason that __ES6__ became so popular is that it introduced new conventions and OOP concepts such as classes.

* _ES6 code will run only in browsers that support it older devices and browsers that do not support ES6 will return a syntax error_

# Template Literals in ES6
__Template literals__ are a way to output variables in a string. prior to __ES6__ we had to break the string for example:
```js
    let name = 'David';
    let msg = 'welcome';
    msg = msg + ' ' + name + '!';
    console.log(msg); // Output: welcome David!
```
__ES6__ intoduces a new way of outputting variable values in strings. the same code above can be written as:
```js
    let name = 'David';
    let msg = `welcome ${name}!`;
    console.log(msg); // Output: welcome David!
```
_Remarks_:
* _notice that tempalte literals are enclosed by the backtick (``) character instead of the double or single quotes. the ${expression} is a placeholder, and can include any expression, which will get evaluated and insered into the template literal_.for example:
    ```js
        let r = 8;
        let s = 34;
        let msg1 = `the sum is ${r + s}`;
        console.log(msg1);
    ```
* _to escape a backtick in a template literal, put a backlash\before the backtick_

# Loops in ES6
in __JavaScript__, we commonly use the __for loop__ to iterate over values in a list
```js
    let arr = [1, 2, 3];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
```
The for...in loop is intended for iterating over the enumerable keys of an object. for example:
```js
    let obj = {a:1, b:2, c:3};
    for (let v in obj) {
        console.log(v);
    };
```
_Remark_: _the for...in loop should NOT be used to iterate over arrays becaues, depending on the JS engine, it could iterate in an arbitrary order also, the iterating variable is a string, not a number, so if you try to do any math with the variable, you'll be performing string concatenation instead of addition_

__ES6__ introduces the new __for...of__ loop, which creates a loop iterating over iterable objects for example:
```js
    let list = ["x", "y", "z"];
    for (let val of list) {
        console.log(val);
    };
```
_Remarks_: 
* _during each iteration the val variable is assigned the corresponding element in the list_
* _the for...of loop workd for other iterable objects as well, including strings:_
    ```js
        for (let ch of "Hello") {
            console.log(ch);
        }
    ```
* _the for...of loop also works on the newly introduced collections (Map, Set, WeakMap, and WeakSet).._

# Functions in ECMAScript 6
prior to ES6, a __JS function__ was defined like this:
```JS
    function add(x, y) {
        var sum = x + y;
        console.log(sum);
    };
    add(67, 9); // Output: 76
```
__ES6__ introduces a new syntax for writing functions. the same function from above can be written as:
```js
    const add = (x, y) => {
        let sum = x + y;
        console.log(sum);
    }
    add(67, 9); // 76
```
_Remarks_:
* _this new syntax is quite handy when you just need a simple function with one argument. you can skip typing function and return, as well as some parentheseses and braces_. for example:
    ```js
    // the code below defines a function named greet that has one argument and returns a message
    const greet = x => "welcome " + x;
    alert(greet("David")); // Output: welcome David
    ```
* _if there are no parameters, an empty pair of parentheseses should be used, as in:_
    ```js
        const x = () => alert("Hi");
        x(); // Output: Hi
    ```
* _this syntax is very useful for inline functions._ for example: _let's say we have an array and for each element of the array we need to execute a function we use the forEach method of the array to call a function for each element_
    ```js
        var arr2 = [2, 3, 7, 8];
        arr2.forEach(function(el) {
            console.log(el * 2)
        }); // Output: 4, 6, 49, 64

        // however, in ES6, the code above can be rewritten as following which is shorter and looks pretty nice
        const arr3 = [2, 3, 7, 8];
        arr3.forEach(v => {
            console.log(v * 2)
        }); 
    ```
* __exercise__: _declare an arrow function that take an array and prints the odd elements_
    ```js
        const printOdds = (arr) => {
            arr.forEach(el => {
                if (el % 2 !=0) {
                    console.log(el);
                }
            })
        };

        var a = [1, 2, 3,4,5];
        printOdds(a); // 1, 3. 5
    ```
# Defalt Parameters in ES6
in __ES6__, we can put the default values right in the signature of the functions, for example:
```js
    function test(a, b = 3, c = 42) {
        return a + b + c;
    }
    console.log(test(5)); // 50
```
_Remarks_: 
* _here is an example of an arrow function with default parameters_
    ```js
        const test = (a, b = 3, c = 42) => {
            return a + b + c;
        }
        console.log(test(5)); // Output: 50
    ```
* _default value expressions are evaluated at function call time from left to right. this also means that default expressions can use the values previously-filled parameterts_

# ES6 Objects
__JavaScript variables__ can be Object data types that contain many values called properties. an __object__ can also have properties that are function definitions called __methods__ for performing actions on the object. __ES6__ introduce3s shorthand notations and computed property names that make declaring and using objects easier to understand. the new method definition shorthand does not require the colon (:) or function keyword in the grow function of the tree object declaration.
```js
    let tree = {
        height : 10,
        color : 'green',
        grow() {
            this.height += 2;
        }
    };
    tree.grow();
    console.log(tree.height); // Output: 12
```
_Remarks_: 
* _you can also use a property value shorthand when initializing properties with a variable by the same name._ for example:
    ```js
        // properties height and health are being initialized with variables named height and health:
        let height = 5;
        let health = 100;

        let athlete = {
            height, // height: height 
            health // health: health
        };
        console.log(athlete.height); //5
    ```
* _when creating an object by using duplicate property names, the last property will overwrite the prior ones of the same name_ for example:
    ```js
        var a = {x: 1, x: 2, x: 3, x: 4};
        console.log(a.x); //Output: 4
        // duplicate property names generated a  SyntaxError in ES6 when using strict mode. however, ES6 removed this limitation
    ```

# Computed Property Names
with __ES6__, you can now use __computed property names__. Using the square bracket notation [], we can use an expression for a property name, including concatenating strings. this can be useful in cases where we want to create certain objects based on user data (e.g., id, email, and so on). here are examples:

```js
    // example1
    let prop = 'name';
    let id = '1234';
    let mobile = '05738';

    let user = {
        [prop]: 'jack',
        [`user_${id}`]: `${mobile}`
    };
    console.log(user.name); // Output: jack
    console.log(user.user_1234); // Output: 05738

    // example2
    var param = 'size';
    var config = {
        [param]: 12,
        ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
    };
    console.log(config.mobileSize); // Output: 4
```

# Object.assign() in ES6
__ES6__ adds a new Object method __assign()__ that allows us to combine multiple sources into one target to create a single new object. __Object.assign()__ is also useful for creating a duplicate of an existing object. _let's look at the following example to see how to combine objects_.
```js
    let person = {
        name: 'rodgers',
        age: '25',
        sex: 'male'
    };
    let student = {
        name: 'bob',
        age: '56',
        xp: '2'
    };
    let newStudent = Object.assign({}, person, student);
    console.log(newStudent.name); //bob
    console.log(newStudent.age); //56
    console.log(newStudent.sex); // male
    console.log(newStudent.xp); // Output: 2
```
_Remarks_:
* _here, we used Object.assign() where the first parameter is the target object you want to apply new properties to. every parameter after the first will be used as sources for the target._
* _there are no limitations on the number of source parameters. however, order is important because properties in the second parameter will be overriden by properties of the same name in third parameter, and so on._
* _in the example above, we used a new object{} as the target and used two objects as sources._
* _try changing the order of second and third parameters to see what happens to the result._
* _now, let's see how we can use assign() to create a duplicate object without creating a reference (mutating) to the base object._ in the following example, assignment was used to try to generate a new object. however, using = creates a new a reference to the base object. because of this reference, changes intended for a new object mutate the original object.
```js
    let person2 = {
	name: 'rodgers',
	age: 25
    };
    let newPerson = person2; // newPerson references person
    newPerson.name = 'bob';
    console.log(person2.name); // bob
    console.log(newPerson.name); //bob
```
* _to avoid this (mutations), use Object.assign() to create a new object_. for example:
```js
    let person3 = {
        name: 'rodgers',
        age: 25
    };
    let newPerson3 = Object.assign({}, person3);
    newPerson3.name = 'ken';

    console.log(person3.name); // rodgers
    console.log(newPerson3.name); // ken
```
* _finally, you can assign a valueto an object property in the Object.assign() statement_. __for example__:
```js
    let person4 = {
        name: 'rodgers',
        age: 25
    };
    let newPerson4 = Object.assign({}, person, {name:'jane'});
    console.log(newPerson4.name); // jane
```

# Array Destructuring in ES6
the __destructuring assignment syntax__ is a JS expression that meks it possible to unpack values from arrays, or properties from objects, into distinct variables. __ES6__ has added a shorthand syntax for destructuring an array.
```js 
    // the following example demonstrates how to unpack the elements of an array into distinct variables.
    let arr4 = ['1', '2', '3'];
    let [one, two, three] = arr4;
    console.log(one); // 1
    console.log(two); // 2
    console.log(three); // 3
```
_Remarks_:
* _we can use also destructure  an array returned by a function._ __for example__:
    ```js
        let a1 = () => {
            return [4, 3, 5];
        };
        let [four, , five] = a1();
        console.log(four);
        console.log(five);
        // notice: we left the second argument's place empty
    ```
* _the destructuring syntax also simplifies assignment and swapping values_
    ```js
        let a, b, c = 4, d = 8;
        [a, b = 6] = [2]; // a = 2, b = 6
        [c, d] = [d, c]; // c= 8, d = 4
        console.log(c); //8
        console.lo(d); // 4
    ```
# Object Desctructuring in ES6
similar to Array destructuring, __Object destructuring__ unpacks properties into distinct variables
```js
    let obj3 = {
        h:100,
        s:true
    };
    let {h, s} = obj3;
    console.log(h); // 100
    console.log(s); //true
```
_Remarks_:
* _we can assign without declaration, but there are some syntax requirements for that_
    ```js
            let a, b; ({a, b} = {a: 'hello', b: 'jack'});
            console.log(a +b); // hello jack
    ```
* _the () without a semicolon (;) at the end are mandatory when destructuring without a declaration. however, you can also do it as follows where the () are not required_
    ```js
        let {a, b} = {a: 'hello', b: 'jack'};
        console.log(a + b);
    ```
* _you can also assign the object to new variable names_. __for example__:
    ```js
        var o = {h: 42, s: true};
        var {h: foo, s: bar} = o;
        console.log(h); // Error
        console.log(foo); //42
    ```
* _finally, you can assign default values to variables, in case the value unpacked from the object is undefined_. __for example:__
    ```js
        var obj4 = {id: 42, name:'rodgers'};
        let {id = 10, age = 25} = obj4;

        console.log(id); // 42
        console.log(age); // 20
    ```
# ES6 Rest Parameters
prior to __ES6__,  if we wanted to pass a variable number of arguments to a function, we could use the arguments object, an array-like object, to access the parameters passed to the function. __for example__:
```js
// let's write a function that checks if an array contains all the arguments passed.
    function containsAll(arr) {
        for (let k = 1; k < arguments.length; k++) {
            let num = arguments[k];
            if (arr.indexOf(num) === -1) {
                return false;
            }
        }
        return true;
    }
    let p = [2, 4, 6, 7];
    console.log(containsAll(p, 2, 4, 7)); // true
    console.log(containsAll(p, 6, 4, 9)); // false
```
we can pass any number of arguments to the function and access it using the arguments object while this does the job, __ES6__ provides a more readable syntax to achieve variable numbers of parameters by using a rest parameter.
```js
    function containsAll(arr, ...nums) {
        for (let num of nums) {
            if (arr.indexOf(num) === -1) {
                return false;
            }
        }
        return true;
    }
    let l = [2, 4, 6, 7];
    console.log(containsAll(l, 2, 4, 7));
    console.log(containsAll(l, 6, 4, 9));
```
_Remarks_:
* _the ...nums parameters is called a __rest parameter__. it takes all the "extra" arguments passed to the function, the three dots (...) are called the Spread operator_
* _only the last parameter of a function may be marked as a rest parameter. if there are no extra arguments, the rest parameter will simply be an empty array; the rest parameter will neer be undefined_

# The Spread Operator
this operator is similar to the __Rest Parameter__ but it has another purpose when used in objects or arrays or function calls (arguments)

# Spread in function calls
it is common to pass the elements of an array as arguments to a function. beforr __ES6__, we used the following method:
```js
    function myFunction(w, x, y, z) {
        console.log(w + x + y + z);
    }
    var args = [1, 2, 3];
    myFunction.apply(null, args.concat(4));
```
__ES6__ provides an easy way to do the example above with spread operators:
```js
    const myFunction = (w, x, y, z) => {
        console.log(w + x + y + z);
    };
    let args = [1, 2, 3];
    myFunction(...args, 4);

    // example:
    var dateFields = [1970, 0, 1]; // 1 jan 1970
    var date = new Date(...dateFields);
    console.log(date);
```

# Spread in array literals
before __ES6__, we used the following syntax to add item at the middle of an array:
```js
    var arr5 = ['one', 'two', 'five'];
    arr5.splice(2, 0, 'three');
    arr5.splice(3, 0, 'four');
    console.log(arr5);
```
_Remark_: _you can use methods such as push, splice, and concat, for example, to achiee this different positions of the array. however, in ES6, the spread operator let us do this more easily_
```js
    let newArr = ['three', 'four'];
    let arr6 = ['one', 'two', ...newArr, 'five'];
    console.log(arr6);
```

# Spread in object literals
in objects, it copies the own enumerable properties from the provided object onto a new object
```js
    const obj6 = {
        foo: 'bar',
        x: 42
    };
    const obj7 = {
        foo: 'baz',
        y: 5
    };
    const cloneObj = {...obj6}; // {foo: "bar", x:42}
    const mergeObj = {...obj6, ...obj7}; // {foo: 'baz', x: 42, y:5}
```
however, if you try to merge them you will not get the result you expected 
```js
    const obj6 = {
        foo: 'bar',
        x: 42
    };
    const obj7 = {
        foo: 'baz',
        y: 5
    };
    const merge = (...objects) => ({...objects});

    let mergedObj = merge(obj6, obj7); // {0: {foo: 'baz', x: 42}, 1:{foo: 'baz',y:5}}
    let mergedObj2 = merge({}, obj6, obj7); // {0: {}, 1: {foo: 'bar', x:42}, 2: { foo: 'baz', y: 5}}

    // shallow cloning or merging objects is possible with another operator called Object.assign()
```

# ES6 Classes
a class uses the keyword class and contains a constructor methos for initializing. __for example__:
```js
    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }
    // a declared class can then be used to create multiple objects using the keyword new
    const square = new Rectangle(5, 5);
    const poster = new Rectangle(2, 3);
```
_Remarks_:
* _class Declarations are not hoisted while Function Declarations are. if you try to access your class before declaring it, __ReferenceError__ will be returnbed_
* _you can also define a class with a class expression, where the class can be named or unamed._
    ```js
        // a named class looks like :
        var Square = class Rectangle {
            constructor(height, width) {
                this.height = height;
                this.width = width;
            }
        };
    ```
*  _in the unnamed class expression, a variable is simply assigned the class definition_
    ```js
        var Square = class {
            constructor(height, width) {
                this.height = height;
                this.width = width;
            }
        };
    ```
* _the constructor is a special method which is used for creating and initializing an object created with a class. there can be only one constructor in each class_

# Class Methods in ES6
__ES6__ introduced a shorthand that does not require the keyword __function__ for a function assigned to a method's name.

* _one type of class method is the prototype method, which is available to object of the class._ __for example__:
    ```js
        class Rectangle {
            constructor(height, width) {
                this.height = height;
                this.width = width;
            }
            get area() {
                return this.calcArea();
            }
            calcArea() {
                return this.height * this.width;
            }
        }
        const square = new Rectangle(5, 5);
        console.log(square.area); 

        // in the above code, area is a getter, calcArea is a method:
    ```
* _another type of method is the static method which cannot be called through a class instance. static methods are often used to create utility functions for an application_. __for example__:
    ```js
        class Point {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }
            static distance(a, b) {
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                return Math.hypot(dx, dy);
            }
        }
        const p1 = new Point(7, 2);
        const p2 = new Point(3, 8);

        console.log(Point.distance(p1, p2));

        // as you can see, the static distance method is called directly using the class name, without an object
    ```

# Inheritance in ES6
the __extends__ keyword is used in class declarations or class expressions to create a child of a class.the child inherits the properties and methods of the parent. __for example__:
```js
    class Animal {
        constructor(name) {
            this.name = name;
        }
        speak() {
            console.log(this.name + ' makes noise. ');
        }
    }
    class Dog extends Animal {
        speak() {
            console.log(this.name + ' barks. ');
        }
    }
    let dog = new Dog('Rex');
    dog.speak();
    // in this code, the Dog class is a child of the Animal class, inheriting its properties and methods
```
_Remarks_:
* _if there is a constructor present in the subclass, it needs to first call super() before using this.also, the super keyword is used to call parents maethod._ __for eample__
    ```js
        // we can modify the above code to the following:
        class Animal {
            constructor(name) {
                this.name = name;
            }
            speak() {
                console.log(this.name + ' makes noise. ');
            }
        }
        class Dog extends Animal {
            speak() {
                super.speak(); //Super
                console.log(this.name + ' barks. ');
            }
        }
        let dog = new Dog('Rex');
        dog.speak();
        // in this code, the parent's speak() method is called using the super keyword.
    ```

# ES6 Map and set

# ES6 Map
a map object can be used to hold key/value pairs. A key or value in a map can be anything (objects and primitive values). the syntax new Map([iterable]) creates a Map object where iterable is an array or any other iterable object whose elements are arrays (with a key/value pair each). an object is similar to Map but there are important differences that make using a Map preferable in certain cases:
* the keys can be any type including functions, objects, and new any primitie
* you can get the size of a Map
* you can directly iterate over a Map
* performance of the Map is better in scenarios inolving frequent addition and removal of key/value pairs

_Remarks_: _the size property returns the  number of key/value pairs in a Map_ for example:
```js
    let map = new Map([['k1', 'v1'], ['k2', 'v2']]);
    console.log(map);
    console.log(map.size); // 2
```
# Map Methods
* __set(key, value)__ - adds a specified key/value pair to the Map. if the specified key already exists, value corresponding to it is replaced with the specified value.
* __get(key)__ - gets the value corresponding to a specified key in the map. if the specified key doesn't exist, undefined is returned.
* __has(key)__ - returns true if a specified key exists in the Map and false otherwise
* __delete(key)__ - deletes the key/value pair with a specified key from the map  and returns true. returns false if the element does not exist.
* __clear()__ - removes all key/value pairs from the map
* __keys()__ - returns an iterator of keys in the map for each element
* __values()__ - returns an iterator of values in the map for each element
* __entries()__ - returns an iterator of array[key, value] in the map for each element.

for example:
```js
    let map = new Map();
    map.set('k1', 'v1').set('k2', 'v2');

    console.log(map.get('k1')); // v1

    console.log(map.has('k2')); // true

    for (let kv of map.entries()){
        console.log(kv[0] + " " + kv[1]);
    };
```

# ES6 Set
a Set object can be used to hold unique values (no repetitions are allowed). a value in a set can be anything (objects and primitive values). the syntax new Set([iterable]) creates a Set object where iterable is an array or any other iterable object of values. the size property returns the number of distinct values in a set. __for example__:
```js
    let set = new Set([1, 2, 5, 8, 48,8]);
    console.log(set.size); 
```
# DSet Methods
* __add(value)__ - adds a new element with the given value to the set.
* __delete(value)__ - deletes a specified value from the set
* __has(value)__ - returns true if a specified value exists in the set and false otherwise
* __clear()__ - clears the set
* __values()___ - returns an iterator of values in the set

for example:
```js
    let set2 = new Set();

    set2.add(5).add(8).add(3);

    console.log(set.has(9));

    for (let v of set2.values())
    console.log(v);
```

# ES6 Promises
a __Promise__ is a better way for __asynchronous programming__ when compared to the common way of using a setTimeout() type of method. consider an example:
```js
    setTimeout(function() {
        console.log("work 1");
        setTimeout(function() {
            console.log("work 2");
        }, 1000);
    }, 1000);
    console.log("End");
```
_Remarks_:
* _it prints 'End', 'work1', and 'work 2' in that order (the work is done asychronously).but is there are more events like this, the code becomes very complex._
* _ES6 comes to the rescue in such situations. A Promise can be created as follows:_
    ```js
        new Promise(function(resolve, reject) {
            // work
            if (success)
                resolve(result);
            else
                reject(Error('failure'));
        });
    ```
* _here, resolve is the method for success and reject is the method for failure_
* _if a method returns a promise, its calls should use the then method which takes two methods as inputs, one for success and the other for failuer_. for example:
    ```js
        function asyncFunc(work) {
            return new Promise(function(resolve, reject) {
                if (work === "")
                    reject(Error("Nothing"));
                setTimeout(function(){
                    resolve(work);
                }, 1000);
            });
        }

        asyncFunc("work1") // task 1
        .then(function(result) {
            console.log(result);
            return asyncFunc("work 2"); // task 2
        }, function(error) {
            console.log(error);
        })
        .then(function(result) {
            console.log(result);
        }, function(error) {
            console.log(error);
        });
        console.log("End");
    ```
* _it also prints 'End', 'work 1' and 'work 2' (the work is done asynchronously) but, this is clearly more readable than the previous example and in more complex situations it easier to work with_

# Iterators and Generators
__Symbol.iterator__ is the default iterator for an object. the for...of loops are based on this type of iterator. in the example below, we will see how we should implement it and how generator functions are used.
```js
    let myIterableObj = {
        [Symbol.iterator] :function* () {
            yield 1;
            yield 2;
            yield 3;
        }
    };
    console.log([...myIterableObj]); //[1, 2, 3]
```
_Remarks_:
* _first, we create an object and use the Symbol.iterator and generator function to fill it with some values._
* _in the second line of the code, we use a* with the function keyword. it's called a generator function (or gen function)_. for exmaple:
    ```js
        // here is a simple case of how gen functions can be useful:
        function* idMaker() {
            let index = 0;
            while (index < 5)
                yield index++;
        }
        var gen = idMaker();
        console.log(gen.next().value);
    ```
* _we can exit and re-enter generator functions later. their variable bindings (context) will be saved across re-entrances._
* _they are very powerful tool for asynchronous programming, especially when combined with Promises._
* _they can also be useful for creating loops with special requirements._
* _we can nest generator functions inside each other to create more complex structures and pass them arguments while we are calling them._
* the example below will show a useful case of how we can use generator functions and Symbol.iterators together
    ```js
        const arr7 = ['0', '1', '4', 'a', '9', 'c', '16'];
        const my_obj = {
            [Symbol.iterator]:
            function*() {
                for (let index of arr7) {
                    yield `${index}`;
                }
            }
        } ;
        const all_1 = [...my_obj]
        .map(i => parseInt(i, 10))
        .map(Math.sqrt)
        .filter((i) => i < 5)
        .reduce((i, d) => i + d);
        console.log(all_1);
    ```
* we create an object of 7 elements by using Symbol.iterator and generator functions.
* in the second part, we assign our object to a constant all_1.
* at the end we print its value

# Modules
it's a good practice to divide your related code into modules. before ES6, there were some libraries which made this possible (e.g., Require JS, Common JS. ES6 is now supporting this feature natively.

# Considerations when using modules:
* _the first consideration is maintainability_: a module is independent of other modules, making improvements and expansion possible without any dependancy on code or other modules.
* _the second consideration is namespacing_:. as we know vars are globally declared, so it's common to have namespace pollution where unrelated variables are accessible all over our code. modules solve this problem by creating a private space for variables.
* _another important consideration is reusability._: when we write code that can be used in other projects, modules make it possible to easily reuse the code without having to rewrite it in a new project

```js
    // example: lib/math.js
    export let sum = (x, y) => {return x + y; }
    export let pi = 3.14;

    // app.js
    import * as math from "lib/math"
    console.log('2p = + ${math.sum(math.pi, math.pi)}')
```
_Remarks_:
* here, we are exporting the sum function and the pi variable so we can use them in different files
* ES6 supports modules officially, however, some browsers are not supporting modules natively yet.so, we should use bundlers (builders) such as Webpack or Browserify to run our code

# Built-in Methods
__ES6__ also introduced new built-in methods to make several tasks easier

# Array Element Finding
the legacy way to find the first element of an array by its value and a rule  was the following:
```js
    [4, 5, 1, 8, 2].filter(function(x) {
        return x > 3;
    })[0];
```
_Remarks_:
* _the new syntax is cleaner and more robust_
    ```js
        [4, 5, ,1, 8, 2, 0].find(x => x > 3);
    ```
* _you can also get the index of the item above by using the findIndex() method_
    ```js
        [4, 5, ,1, 8, 2, 0].findIndex(x => x > 3);
    ```

# Repeating Strings 
Before __ES6__, the following syntax was the correct way to repeat a string multiple times.
```js
    console.log(Array(3 + 1).join("foo"));
```
with the new syntax, it becomes:
```js
    console.log("foo".repeat(7));
```

# Searching Strings
before ES6, we only used the indexOf() method to find the position of the text in the string. __for example__:
```js
    "sololearn".indexOf("solo") === 0; //true
    "sololearn".indexOf('solo') === (4 - "solo".length); //true
    "sololearn".indexOf("lole") !== -1; // true
    "sololearn".indexOf("olo", 1) !== -1 ; // true
    "sololearn".indexOf("olo", 2) !== -1; // false
```
ES6 has replaced this with a version that has a cleaner and more simplified syntax:
```js
    "SoloLearn".startsWith("Solo", 0); // true
    "SoloLearn".endswith("Solo", 4); // true
    "SoloLearn".includes("lole"); // true
    "SoloLearn".includes("ole", 1); // true
    "SoloLearn".includes("olo", 2); // false
```

