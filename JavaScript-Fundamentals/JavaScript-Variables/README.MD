# Variables

## Table Of Contents

# Declaring Variables in JavaScript

# Method 1: using `let` keyword
```js
    // using `let` keyword
    let message;
    message = 'Hallo World!'; // store the string
```

# Method 2: using `var` keyword\
* the `var` keyword is almost the same as `let`. it also declares a variable but in an old fashioned way. there are subtle differences between "`var`" and "`let`" 

    ```js
        // using `var` keyword
        var name = "Nyangweso";
    ```

# Method 3: using `const` keyword
```js
    // Method 3: using const keyword - used to declare a constant(unchanging) variable
    const myBirthDay = '25.03.1994';
```

*_Remarks_: 
  * _When the value of a variable is changed, the old data is removed from the variable_
    ```js
        let message1;
        message1 = 'old variable';
        message1 = 'new variable';

        console.log(message1); // Output: 'new variable'
    ```
  * _we can also declare two variables and copy data from one into the other_
    ```js
        let firstName = 'rodgers';
        let secondName;

        // copy 'rodgers' from firstName into secondName
        secondName = firstName;

        // now, two variabels hold the same data
        alert(firstName);
        alert(secondName); // Output: 'rodgers'
    ```

  * __Functional languages__: _it is intersting to note that there exist __functional programming languages__ like __Scala__ and __Erlang__ that forbid changing variable values. in such languages, once tha value is stored, it's there forever. if we need to store something else, the language forces us to create/declare a new variable. we can't reuse the old one. though it may seem a little odd at first sight, these languages are quite capable of serious development_