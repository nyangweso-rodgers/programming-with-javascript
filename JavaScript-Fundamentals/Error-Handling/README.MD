# Error Handling In JavaScript

* __Javascript__ uses the '__try...catch__' construct to handle errors.

* This construct helps us to 'try' to execute the instructions in the code and if there's some error, then catch it!

    ```js
        try {
        console.log('gets executed without errors');

        // no error here, so the catch will be skipped
        } catch (err) {
            console.log('Catch is ignored, because there are no errors');
        }
    ```

* if the '__try__' block doesn't run successfully and leads to an error, then the code inside '__catch__' block is executed.

    ```js
        try {
        console.log('gets executed w/o errors');

        // no error here, so the catch will be skipped
        } catch (err) {
            console.log('Catch is executed, because there are errors');
        }
    ```

* __Note__: Try...catch doesn't work for asynchronous code. For example, _if we use setTimeout() in try then even if there's an error, try...catch won't catch it._ This happens because by the time errors happen, try...catch has already been executed by the Javascript engine.

* We can also extend __try...catch__ to __try...catch...finally__. In this case, the code inside finally will get executed regardless of what happens in try...catch. This is useful for performing clean-up tasks or executing some code at the end of try...catch

    ```js
        try {
            return 1;
        } catch (err) {
            /*----------*/
        }finally {
            console.log( 'finally executed' );
        };
    ```