# Routing in Express.js App

## Table Of Contents

# What is Routing?

- **Routing** refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (`GET`, `POST`, and so on).
- Each route can have one or more handler functions, which are executed when the route is matched.
  ```js
  app.METHOD(PATH, HANDLER);
  ```
- where:
  - `app` is an instance of express.
  - `METHOD` is an [HTTP request method](https://en.wikipedia.org/wiki/HTTP#Request_methods), in lowercase.
  - `PATH` is a path on the server.
  - `HANDLER` is the function executed when the route is matched.

# Routing Methods

- `app.get()` to handle `GET` requests
- `app.post` to handle `POST` requests
- You can also use the `app.all()` to handle all `HTTP` methods
- `app.use()` to specify middleware as the callback function.

# Define Routes

## Task #1: Respond with `hello express!` message on the home page

- Let's respond with `hello express!` message on the home page:

  ```js
  import express from "express";

  //create an express application object
  const app = express();

  app.get("/", (req, res) => {
    res.send("hello, express!");
  });

  const PORT = 3000; // Choose an available port like 3000, 8000

  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  ```

## Task #2: Respond to `POST` request on the root route `(/)`, the application’s home page:

```js
// ...

//respond to `GET` request on the root route `(/)`, the application home page:
app.post("/", (req, res) => {
  res.send("Got a POST request");
});

// ...
```

## Task #3: Respond to a `PUT` request to the `/user` route:

```js
// ...

//respond to `GET` request on the root route `(/)`, the application home page:
app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

// ...
```

## Task #4: Respond to a `DELETE` request to the `/user` route:

```js
// ...

//respond to `GET` request on the root route `(/)`, the application home page:
app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

// ...
```

# Serving static files in Express

# Resources

1. [Basic routing](https://expressjs.com/en/starter/basic-routing.html)
