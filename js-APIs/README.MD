# Working with APIs JavaScript

## Table Of Contents
- [Different ways to call API in JavaScript](#Different-ways-to-call-API-in-JavaScript)
- [APIs]()
    - [Geolocation API](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/APIs_and_Data_in_Javascript/Geolocation_API)
    
- [Further Reading]()
    - [How to get data from an API in JavaScript?](https://rapidapi.com/guides/how-to-get-data-from-api-javascript?utm_source=twitter.com%2FRapid_API&utm_medium=DevRel&utm_campaign=DevRel)
    - [Medium - Most Common Ways to Make HTTP Requests in JavaScript](https://javascript.plainenglish.io/most-common-ways-to-make-http-requests-in-javascript-85c112ecf48a)
    - [freeCodeCamp - HTTP Networking in JavaScript –Handbook for Beginners](https://www.freecodecamp.org/news/http-full-course/)
    - [freeCodeCamp - JavaScript Post Request – How to Send an HTTP Post Request in JS](https://www.freecodecamp.org/news/javascript-post-request-how-to-send-an-http-post-request-in-js/)
    - [Hashnode - Working with APIs In Javascript](https://shreya-trivedi.hashnode.dev/working-with-apis-in-javascript)

# Making `HTTP` Requests (Fetch, Axios)

## `fetch API`
* The `Fetch API` is a `web API` provided by the browser, so developers can call other public `API` using it. 
* The browser exposes it by giving out a `fetch` method that takes multiple parameters. The first is the `API` you want to call, whereas the second optional parameter is an object that holds all the information you need to make the request successful.
* `fetch` function returns a `Promise` that resolves to the response from the server. You can then use the `json()` method of the response object to parse the response as `JSON`.
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
# Lists Of Sample `APIs`
Index | API | Description | Requires API Key |
| ----------- | -------------- | ----------------- | ------------- |
1 | [RANDOM USER GENERATOR](https://randomuser.me/) API | A free, open-source API for generating random user data. | False |
2 | [OpenWeatherMap](https://openweathermap.org/api) API | | True
3 | | 
