# Working with APIs JavaScript

## Table Of Contents
- [Different ways to call API in JavaScript](#Different-ways-to-call-API-in-JavaScript)
    
- [Further Reading]()
    1. [W3Schools - Web Geolocation API](https://www.w3schools.com/js/js_api_geolocation.asp)
    - [Medium - Most Common Ways to Make HTTP Requests in JavaScript](https://javascript.plainenglish.io/most-common-ways-to-make-http-requests-in-javascript-85c112ecf48a)
    - [freeCodeCamp - HTTP Networking in JavaScript –Handbook for Beginners](https://www.freecodecamp.org/news/http-full-course/)
    - [freeCodeCamp - JavaScript Post Request – How to Send an HTTP Post Request in JS](https://www.freecodecamp.org/news/javascript-post-request-how-to-send-an-http-post-request-in-js/)
    - [Hashnode - Working with APIs In Javascript](https://shreya-trivedi.hashnode.dev/working-with-apis-in-javascript)

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

## `XMLHttpRequest`
* `XMLHttpRequest` API is another web API that lets you get data from an API using `js` without refreshing the web page. 
* Despite its name, the `XMLHttpRequest` API is not limited to `XML` data. You can also request `JSON` data via this API.

## `Axios`
* `Axios` is an open-source, promise-based `HTTP` client. It uses JavaScript’s promises to send `HTTP` requests and manage their responses.

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

# Lists Of Sample `APIs`
Index | API | Description | Requires API Key |
| ----------- | -------------- | ----------------- | ------------- |
1 | [RANDOM USER GENERATOR](https://randomuser.me/) API | A free, open-source API for generating random user data. | False |
2 | [OpenWeatherMap](https://openweathermap.org/api) API | | True
3 | [API-FOOTBALL (3.9.2)](https://www.api-football.com/) | Restful API for football data | 
