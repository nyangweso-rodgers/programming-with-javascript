# JavaScrip Promise

* __Promises__ are used to handle __asynchronous__ operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

* The most common use case of Promise is fetching data from a REST API. The __fetch API__ from JavaScript returns a __Promise__ because the HTTP request can take a lot of time and then we can call functions depending on whether the request succeeds or failed.

    ```js
        fetch('http://example.com/movies.json')

        // Handle success
        .then (response => response.json())

        // Handle error
        .catch(error => console.log(error));
    ```

* A __Promise__ is in one of these states:
    - pending: initial state, neither fulfilled nor rejected.
    - fulfilled: meaning that the operation was completed successfully.
    - rejected: meaning that the operation failed.

# Promise Syntax
```js
    let myPromise = new Promise(function(myResolve, myReject) {
        // "Producing Code" (may take sometime)

        myResolve(); // when successful
        myReject(); // when error
    });

    // "Consuming Code" (Must wait for a fulfilled Proise)
    myPromise.then{
        function(value) {/* code if successful */}
        function(error) { /* code if some error */}
    }
```

# Benefits of Promises -
- Improves Code Readability
- Better handling of asynchronous operations
- Better flow of control definition in asynchronous logic
- Better Error Handling