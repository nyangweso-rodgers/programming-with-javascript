# ES6 Promises

# ES6 Promises
* a __Promise__ is a better way for __asynchronous programming__ when compared to the common way of using a `setTimeout()` type of method. consider an example:
  
    ```js
        setTimeout(function() {
            console.log("work 1");
            setTimeout(function() {
                console.log("work 2");
            }, 1000);
        }, 1000);
        console.log("End");
    ```
* _Remarks_:
  * it prints 'End', 'work1', and 'work 2' in that order (the work is done asychronously).but is there are more events like this, the code becomes very complex.

  * `ES6` comes to the rescue in such situations. A `Promise` can be created as follows:

      ```js
          new Promise(function(resolve, reject) {
              // work
              if (success)
                  resolve(result);
              else
                  reject(Error('failure'));
          });
      ```
  * here, resolve is the method for success and reject is the method for failure
  
  * if a method returns a `promise`, its calls should use the then method which takes two methods as inputs, one for success and the other for failuer. for example:

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
  * it also prints 'End', 'work 1' and 'work 2' (the work is done asynchronously) but, this is clearly more readable than the previous example and in more complex situations it easier to work with_