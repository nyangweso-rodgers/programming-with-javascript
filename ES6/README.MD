9# ECMAScript 6 (ES6)

## Table Of Contents

# ES6 Rest Parameters

prior to **ES6**, if we wanted to pass a variable number of arguments to a function, we could use the arguments object, an array-like object, to access the parameters passed to the function. **for example**:

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

we can pass any number of arguments to the function and access it using the arguments object while this does the job, **ES6** provides a more readable syntax to achieve variable numbers of parameters by using a rest parameter.

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

- _the ...nums parameters is called a **rest parameter**. it takes all the "extra" arguments passed to the function, the three dots (...) are called the Spread operator_
- _only the last parameter of a function may be marked as a rest parameter. if there are no extra arguments, the rest parameter will simply be an empty array; the rest parameter will neer be undefined_

# The Spread Operator

this operator is similar to the **Rest Parameter** but it has another purpose when used in objects or arrays or function calls (arguments)

# Spread in function calls

it is common to pass the elements of an array as arguments to a function. beforr **ES6**, we used the following method:

```js
function myFunction(w, x, y, z) {
  console.log(w + x + y + z);
}
var args = [1, 2, 3];
myFunction.apply(null, args.concat(4));
```

**ES6** provides an easy way to do the example above with spread operators:

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

before **ES6**, we used the following syntax to add item at the middle of an array:

```js
var arr5 = ["one", "two", "five"];
arr5.splice(2, 0, "three");
arr5.splice(3, 0, "four");
console.log(arr5);
```

_Remark_: _you can use methods such as push, splice, and concat, for example, to achiee this different positions of the array. however, in ES6, the spread operator let us do this more easily_

```js
let newArr = ["three", "four"];
let arr6 = ["one", "two", ...newArr, "five"];
console.log(arr6);
```

# Spread in object literals

in objects, it copies the own enumerable properties from the provided object onto a new object

```js
const obj6 = {
  foo: "bar",
  x: 42,
};
const obj7 = {
  foo: "baz",
  y: 5,
};
const cloneObj = { ...obj6 }; // {foo: "bar", x:42}
const mergeObj = { ...obj6, ...obj7 }; // {foo: 'baz', x: 42, y:5}
```

however, if you try to merge them you will not get the result you expected

```js
const obj6 = {
  foo: "bar",
  x: 42,
};
const obj7 = {
  foo: "baz",
  y: 5,
};
const merge = (...objects) => ({ ...objects });

let mergedObj = merge(obj6, obj7); // {0: {foo: 'baz', x: 42}, 1:{foo: 'baz',y:5}}
let mergedObj2 = merge({}, obj6, obj7); // {0: {}, 1: {foo: 'bar', x:42}, 2: { foo: 'baz', y: 5}}

// shallow cloning or merging objects is possible with another operator called Object.assign()
```

# Iterators and Generators

**Symbol.iterator** is the default iterator for an object. the for...of loops are based on this type of iterator. in the example below, we will see how we should implement it and how generator functions are used.

```js
let myIterableObj = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};
console.log([...myIterableObj]); //[1, 2, 3]
```

_Remarks_:

- _first, we create an object and use the Symbol.iterator and generator function to fill it with some values._
- _in the second line of the code, we use a\* with the function keyword. it's called a generator function (or gen function)_. for exmaple:
  ```js
  // here is a simple case of how gen functions can be useful:
  function* idMaker() {
    let index = 0;
    while (index < 5) yield index++;
  }
  var gen = idMaker();
  console.log(gen.next().value);
  ```
- _we can exit and re-enter generator functions later. their variable bindings (context) will be saved across re-entrances._
- _they are very powerful tool for asynchronous programming, especially when combined with Promises._
- _they can also be useful for creating loops with special requirements._
- _we can nest generator functions inside each other to create more complex structures and pass them arguments while we are calling them._
- the example below will show a useful case of how we can use generator functions and Symbol.iterators together
  ```js
  const arr7 = ["0", "1", "4", "a", "9", "c", "16"];
  const my_obj = {
    [Symbol.iterator]: function* () {
      for (let index of arr7) {
        yield `${index}`;
      }
    },
  };
  const all_1 = [...my_obj]
    .map((i) => parseInt(i, 10))
    .map(Math.sqrt)
    .filter((i) => i < 5)
    .reduce((i, d) => i + d);
  console.log(all_1);
  ```
- we create an object of 7 elements by using Symbol.iterator and generator functions.
- in the second part, we assign our object to a constant all_1.
- at the end we print its value
