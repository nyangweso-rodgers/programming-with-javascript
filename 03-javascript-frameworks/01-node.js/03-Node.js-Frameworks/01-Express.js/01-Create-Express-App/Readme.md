# Create a Basic Express Application

# Setup

## Step #1: Create Ap Folder

- Create the app folder and initialize it:
  ```sh
    mkdir express.js-test-app
    cd express.js-test-app
    npm init -y
  ```

## Step #2: Install `express` Module

- Install `express` and create a basic Express.js application
  ```sh
    npm i express
  ```

## Step #3: Define `server.js` File

- Define `server.js` file and add the following code:

  ```js
  //server.js
  import express from "express";

  const app = express();
  const port = 3000;

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
  ```

- Remarks:

  - We can modify the `server.js` to return an `HTML`. Note that In a standard `Express.js` server, if you wish to send `HTML`, you should send it as a `string`.

    ```js
    //server.js
    import express from "express";

    const app = express();
    const port = 3000;

    app.get("/", (req, res) => {
      res.send("<div>Welcome!</div>");
    });

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
    ```

  - This change treats the `HTML` as a `string`, which is the expected format for res.send() in a plain Express.js application.

## Step #4: Start and Run the server

- Start the server from the terminal
  ```sh
   node server.js
  ```
