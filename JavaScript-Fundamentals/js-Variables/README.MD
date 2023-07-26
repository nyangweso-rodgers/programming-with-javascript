# Variables

## Table Of Contents

# Declaring Variables in JavaScript

# Method 1: using `let` keyword
```js
    // using `let` keyword
    let message;
    message = 'Hallo World!'; // store the string
```

# Method 2: using `var` keyword
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

# Variables Scope in `js`
# Variables Scope in `js`: Block Scope
* Case 1:
  
    ```js
        {
            var estate = 'Kitengela';
        }
        // console.log(estate); // Output: Kitengela
    ```
* Case 2:
  
  ```js
    {
	    let country = 'Kenya';
    }
    // console.log(country);  // ReferenceError: country is not defined
  ```

# Variables Scope in `js`: Global Scope
```js
    let myMessage = 'This is a global variable';

    function myFunction() {
        console.log(myMessage);
        // code here can also be used
    };
    //console.log(myMessage);
```