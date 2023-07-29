# ES6 - Object Oriented Programming

## Table of Contents
- [Further Reading]()
    1. []()


# Overview Of `ES6 Objects`
*  `ES6` introduces shorthand notations and computed property names that make declaring and using `objects` easier to understand. the new method definition shorthand does not require the colon `(:)` or `function` keyword in the `grow function` of the tree object declaration.

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

* _Remarks_: 
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
* with `ES6`, you can now use __computed property names__. Using the square bracket notation `[]`, we can use an expression for a property name, including concatenating strings. this can be useful in cases where we want to create certain objects based on user data (e.g., id, email, and so on). here are examples:

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

# `Object.assign()` in `ES6`
* `ES6` adds a new `Object` method `assign()` that allows us to combine multiple sources into one target to create a single new object. `Object.assign()` is also useful for creating a duplicate of an existing object. _let's look at the following example to see how to combine objects_.
  
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

* _Remarks_:
  * here, we used `Object.assign()` where the first parameter is the target object you want to apply new properties to. every parameter after the first will be used as sources for the target.

  * there are no limitations on the number of source parameters. however, order is important because properties in the second parameter will be overriden by properties of the same name in third parameter, and so on.
  
  * in the example above, we used a `new object{}` as the target and used two objects as sources.
  
  * try changing the order of second and third parameters to see what happens to the result.
  
  * now, let's see how we can use `assign()` to create a duplicate object without creating a reference (mutating) to the base object. 
  * in the following example, assignment was used to try to generate a new object. however, using = creates a new a reference to the base object. because of this reference, changes intended for a new object mutate the original object.


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
  * _finally, you can assign a valueto an object property in the Object.assign() statement_. for example:

    ```js
        let person4 = {
            name: 'rodgers',
            age: 25
        };
        let newPerson4 = Object.assign({}, person, {name:'jane'});
        console.log(newPerson4.name); // jane
    ```


# Object Desctructuring in `ES6`
* similar to Array destructuring, __Object destructuring__ unpacks properties into distinct variables

    ```js
        let obj3 = {
            h:100,
            s:true
        };
        let {h, s} = obj3;
        console.log(h); // 100
        console.log(s); //true
    ```
* _Remarks_:
  * we can assign without declaration, but there are some syntax requirements for that
  
      ```js
              let a, b; ({a, b} = {a: 'hello', b: 'jack'});
              console.log(a +b); // hello jack
      ```
  * the () without a semicolon (;) at the end are mandatory when destructuring without a declaration. however, you can also do it as follows where the () are not required
  
      ```js
          let {a, b} = {a: 'hello', b: 'jack'};
          console.log(a + b);
      ```
  * you can also assign the object to new variable names_. for example:
  
      ```js
          var o = {h: 42, s: true};
          var {h: foo, s: bar} = o;
          console.log(h); // Error
          console.log(foo); //42
      ```

  * finally, you can assign default values to variables, in case the value unpacked from the object is undefined. for example:

      ```js
          var obj4 = {id: 42, name:'rodgers'};
          let {id = 10, age = 25} = obj4;

          console.log(id); // 42
          console.log(age); // 20
      ```