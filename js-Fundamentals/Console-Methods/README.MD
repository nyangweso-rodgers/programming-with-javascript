# Console Methods

## Table of Contents
- [Console Methods](#Console-Methods)
    - console.log()
    - console.error()
    - console.warn()
    - console.time()
    - console.group()
    - console.table()
    - console.assert()
    - console.trace()
    - console.count()
    - console.dir()

# Examples

# console.log()
* prints the message on the console
    ```js
        const sampleObject = {firstName : "Rodgers", lastName : "Nyangweso"};
    console.log(sampleObject); // Output: { firstName: 'Rodgers', lastName: 'Nyangweso' }
    ```
# console.error()
* outputes an error message in the console. Helps in testing
    ```js
        console.error("This is an error message"); // Output: This is an error message
    ```

# console.warn()
* outputs a warning message in the console
    ```js
        console.warn("This a warning!") // output: This a warning!
    ```
# console.time()
* measure how long a task in the code takes to run
* __console.timeLog()__ - Outputs the current value of the time
* __console.timeEnd()__ - stops timing the opration and outputs the final value of the timer
    ```js
        const message = "Time taken: ";
    console.time(message); // Output: undefined
    console.timeLog(message); // Output: Time taken: : 0.081ms
    console.timeEnd(message); // Output: Time taken: : 0.34ms
    ```

# console.group()
* groups the message in the console. very helpful when there are too many messages
* __console.groupEnd()__ - this ends the group which is initiated lastly
    ```js
        console.group('Group I');
        console.group('First message under Group I'); 
        console.group('Second message under Group I'); 
        console.group('This group will be made under Group I'); 
        console.log('First message under sub-group of I');
        console.groupEnd('Exits the subgroup');
        console.groupEnd('Exits Group I');
        console.groupEnd('Exits Group I');
        console.log(2)
    ```


# console.table()
* outputs the array of objects in a clean and clear tabular form.
    ```js
        const people = [
            {firstName : "Rodgers", lastName: "Nyangweso", age: 28, location: "Nairobi"},
            {firstName : "Wilson", lastName : "Nyangweso", age : 57, location : "Kisumu"}
    ]
    console.table(people);
    ```

# console.assert()
* outputs the message only when the condition (first argument) is evaluated as false

    ```js
        const year = 2022;
        console.assert(year > 2023, 'This is true'); // Output: Assertion failed: This is true
    ```

# console.trace()
* traces how the code ended up at a certain point. very helpful method as it simplifies the debugging process
    ```js
        function addition(x, y) {
        console.log(x + y);
        };

        function multiplication(x, y) {
            console.trace(x * y);
        };
        addition(2, 3); // Output: 5
        multiplication(2, 3);
    ```


# console.count()
* outputs the number of times a call is called in the console
* __console.countReset()__ - resets the counter

    ```js
        for (i = 1; i <= 2; i++) {
        console.count();
    };

    for (i = 1; i <= 2; i++) {
        console.count();
    }
    ```

# console.dir()
* outputs the properties of the specified  objects in the console
    ```js
        const person = {firstName : "Rodgers", lastName : "Nyangweso"};
        console.log(person); // Outputs: { firstName: 'Rodgers', lastName: 'Nyangweso' }
        console.dir(person); // Output: 
    ```