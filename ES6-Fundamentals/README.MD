# ECMAScript 6

## Table Of Contents
- [Introduction to `ES6`](#Introduction-to-`ES6`)

- [ES6 Fundamentals](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/ES6-Fundamentals)
   1. [ES6 Variables](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/ES6-Fundamentals/ES6-Variables)
   2. [ES6 Control Flow](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/ES6-Fundamentals/ES6-Control-Flow)
   3. [ES6 Functions](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/ES6-Fundamentals/ES6-Functions)

- [Further Reading]()
    1. []()

# Introduction to `ES6`
* `ECMAScript` (`ES`) is a scripting language specification created to standardize `JavaScript`. The sixth edition, initially known as `ECMAScript 6` (`ES6`) and later renamed to `ECMAScript 2015`, adds significant new syntax for writing complex applications, including:
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

* i.e., `ES6` is a superset of `JavaScript` (`ES5`). the reason that `ES6` became so popular is that it introduced new conventions and OOP concepts such as classes.

* _`ES6` code will run only in browsers that support it older devices and browsers that do not support ES6 will return a syntax error_


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



# Built-in Methods
__ES6__ also introduced new built-in methods to make several tasks easier