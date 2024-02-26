# Getting Started with Express

## Table Of Contents

# Getting Started with Express

## Step #1: Create `01-Getting-Started-with-Express` Folder

- Create a `01-Getting-Started-with-Express` folder and initialize it by:
  ```sh
    mkdir 01-Getting-Started-with-Express
    cd 01-Getting-Started-with-Express
    npm init -y
  ```

## Step #2: Install Dependencies

- Install the following dependecies
  ```sh
      npm i express nodemon
  ```
- or,
  ```sh
    npm i nodemon --save--dev
  ```
- we are using `nodemon` for development, because when our app is deployed, `nodemon` does not have to be installed on any server where we will run our application.

## Step #3: Create a `gitignore` file and add the following

```gitignore
    node_modules/
    .env
```

## Step #4: Create a `server.js` File with the following

```js
// server.js

const express = require("express");

// create an express application object
const app = express();

// create a PORT that the server is listening on
const PORT = process.env.PORT || 3000; //use environment variables and if not, 3000

// define routes
app.get("/", (req, res) => {
  res.send("Hello World!"); //Sending back a text response
});
```

- First, specify a [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods?retiredLocale=de). `GET` is the default one used to open web pages, hence `app.get(...)`.
  - The first argument is the path. We're specifying `/` as it is the home page opened. This could be anything like `/my-page` or more complicated paths.
  - The second argument is a **callback function**. This function is executed once somebody requests this web page/route. There are two arguments for this callback function, `req` with request information from the visitor and `res` with the response information that you send back. In this case, we're sending back (`res.send(...);`) the text "`Hello World!`". This could contain all sorts of stuff - from images to HTML.

## Step #5: Run the Server on the specified port

- Finally, we run the server on the specified port:

  ```js
  // server.js

  const express = require("express");

  // create an express application object
  const app = express();

  // create a PORT that the server is listening on
  const PORT = process.env.PORT || 3000; //use environment variables and if not, 3000

  // define routes
  app.get("/", (req, res) => {
    res.send("Hello World!"); //Sending back a text response
  });

  // run the server on port 3000
  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });
  ```

## Step #6: Run the application

- Modify the generated `package.json` file with the following:
  ```json
    "scripts": {"start": "node server.js", "dev": "nodemon server.js"}
  ```
- This step accomplishes two things:
  - it allows `nodemon` to automatically restart the server whenever you make changes to your server side code
  - we no longer have to use the command "`node server.js`" to start the server. The server can now be started with the command "`npm start`".
- In the terminal, execute:
  ```sh
    npm run dev
  ```
  - this will run the dev script and print "Listening on port 3000" in the terminal implying that the server is running.
- Open up your browser and go to http://localhost:3000 where youll see "Cannot GET /". This means that the server is running but we have not defined a "get" route for "/".