# Random User Generator API

## Table of Contents

# API Description

- [RANDOM USER GENERATOR](https://randomuser.me/) API is A free, open-source API for generating random user data.

# Project Description

- Make a `GET` Request to the [RANDOM USER GENERATOR](https://randomuser.me/) API to get a random user.

  ```js
  // Random User Generator API

  const apiKey = "";
  const apiUrl = "https://randomuser.me/api/";

  const getRandomUserData = () => {
    fetch(apiUrl)
      .then((results) => {
        return results.json(); // turn the response into a js object
      })
      .then((data) => {
        console.log("Sample User: ", data);
      });
  };
  getRandomUserData();
  ```

- The `.then` method of the **Promise** is used to handle the response.
- The first `then` method calls `response.json()` to parse the response as `JSON`, and the second `then` method logs the response data to the `console`.
- The `catch` method is used to handle any `errors` that occur during the request.

# Resources
