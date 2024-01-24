# JavaScript APIs

## Table of Contents

# Fetch API

- **Fetch API** is an interface through which `js` can make `HTTP` requests.

## Fetch API Syntax

- The browser exposes it by giving out a `fetch` method that takes multiple parameters. The first is the **API** you want to call, whereas the second optional parameter is an object that holds all the information you need to make the request successful.

  ```js
  // fetch syntax
  fetch("API URL")
    .then((response) => {
      // Do something with the response
    })
    .catch((error) => {
      // handle any error that
    });
  ```

- `fetch` function returns a **Promise** that resolves to the response from the server. You can then use the `.json()` method of the response object to parse the response as `JSON`.

## Working with API Keys

- Many APIs require authentication through **API keys** to ensure that only authorized users can access their data.
- Example:

  - include API key in a request

    ```js
    // fetch API using API key
    const apiKey = ""; //TODO: insert a valid API key
    const apiUrl = ""; //TODO: insert a valid API url

    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };

    fetch(apiUrl, requestOptions)
      .then((response) => {
        //TODO: do something with the response
      })
      .then((data) => {
        //TODO: do something with the data
      })
      .catch((error) => {
        //TODO: handle error message
      });
    ```

## How to make Get Requests

- How to make a `GET` request using `fetch`

  ```js
  // define API url
  const apiUrl = "https://api.example.com/data";

  // make a GET request
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error("Error", err);
    });
  ```

  - we have defined an API we want to call.
  - We used the `fetch` function to make a `GET` request to the **API URL**. The `fetch` function returns a **Promise**.
  - The `.then()` method handles the **asynchronous** response from the server.
  - The `response.ok` property is checked to ensure the response is valid.
  - We parse the JSON data using the `response.json()` method.
  - Finally, we log the data to the console, or handle any errors that may occur.

## How to Handle Responses

- When you make an API call, the server responds with data. How you handle this data depends on your application's requirements. You can:
  - simply logged the data to the console. However, OR
  - displaying it on a web page. or
  - storing it in a database.
- Examples:

  - displays the API data in an `HTML` element:

    ```js
    // define API url
    const apiUrl = "https://api.example.com/data";
    const outputElement = document.getElementById("output");

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Display data in an HTML element
        outputElement.textContent = JSON.stringify(data, null, 2);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    ```

## How to Handle Errors

## How to make POST requests

## How to work with API keys

# Lists Of Sample `APIs`

| Index | API                                                   | Description                   | Requires API Key |
| ----- | ----------------------------------------------------- | ----------------------------- | ---------------- |
| 1     | [API-FOOTBALL (3.9.2)](https://www.api-football.com/) | Restful API for football data |

# Resources

1. [freeCodeCamp - How to Call an API in JavaScript – with Examples](https://www.freecodecamp.org/news/make-api-calls-in-javascript/)
