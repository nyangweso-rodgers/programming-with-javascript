# Working with APIs JavaScript

## Table Of Contents
- [Different ways to call API in JavaScript](#Different-ways-to-call-API-in-JavaScript)
    

# Making `HTTP` Requests (Fetch, Axios)

## `fetch API`
* `Fetch API` is an interface through which `js` can make `HTTP` requests.

### `Fetch` Syntax
* The browser exposes it by giving out a `fetch` method that takes multiple parameters. The first is the `API` you want to call, whereas the second optional parameter is an object that holds all the information you need to make the request successful.
  
    ```js
        // fetch syntax 
        fetch('API URL')
        .then(response => {
            // Do something with the response
        }).catch(error => {
            // handle any error that
        });
    ```

* `fetch` function returns a `Promise` that resolves to the response from the server. You can then use the `json()` method of the response object to parse the response as `JSON`.
* The `const fetch = require("node-fetch")` is used to import `node.js` package called `node-fetch` because fetch API  is not implemented in `Node.js`. But you don't need it to run your fetch API code into the browser.
  
* Example:

    ```js
        const getRandomUserData = () => {
        fetch('https://randomuser.me/api/') // URL to fetch data from
        .then(response => response.json()) // turn the response into a js object
        .then(data => {
            // do something with the data
            console.log("Sample User: ", data) // you can use the data to update the UI
        })
        .catch(error => console.error(error));
    };

    getRandomUserData();
    ```
    * The code makes a `GET` Request to the [RANDOM USER GENERATOR](https://randomuser.me/) API to get a random user.
    * The `then` method of the `Promise` is used to handle the response. 
    * The first `then` method calls `response.json()` to parse the response as `JSON`, and the second `then` method logs the response data to the `console`.
    * The `catch` method is used to handle any `errors` that occur during the request. 


# `js` Web APIs
## `js` Web APIs: Web Geolocation API
* The `getCurrentPosition()` method is used to return the user's position.
* __NOTE__:
  * The Geolocation API will only work on secure contexts such as HTTPS.
  * If your site is hosted on a non-secure origin (such as HTTP) the requests to get the users location will no longer function.

### The geolocation Object
* The Geolocation API is available through the `navigator.geolocation` object.
* To get the user’s current location, you call the `getCurrentPosition()` method of the `navigator.geolocation` object.
* Example:
  * Get the _latitude_ and _longitude_ of a user

    ```js
        const displayMyCoordinatesBtn = document.getElementById('displayMyCoordinatesBtn');
        const displayMyCoordinatesP = document.getElementById('displayMyCoordinatesP');

        // add event handlers to the button
        displayMyCoordinatesBtn.addEventListener('click', getLocation);
        // check if the geolocation is supported
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                displayMyCoordinatesP.innerHTML = "Geolocation is not supported on this browser!";
            }
        }

        function showPosition(position) {
            displayMyCoordinatesP.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude +
            "<br>Accuracy: " + position.coords.accuracy;
        }
    ```
