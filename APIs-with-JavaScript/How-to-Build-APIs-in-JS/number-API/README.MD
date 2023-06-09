# Buidling a number API

# Description
* Let's create a quick __number API__ using which we can fetch even, odd, and prime numbers.

# Prerequisite: 
- [Node.js](https://t.co/YtXPb95G0X)

# Steps
- Let's start with creating an empty directory and initializing the project by running the following command.
    ```git
        mkdir number-API
        cd number-API
        npm init -y
    ```
- The next step is to create an empty JavaScript file (File name could be anything, in this case, it's index.js) and install [Express]( https://npmjs.com/package/express).
    ```git
        npm install express
    ```

- Now that everything is ready, let's require express to initialize the app and start the local server at port 3000.
    ```js
        const express = require('express');
        const app = express();

        // running the server
        app.listen(3000, () => console.log('App is running'));
    ```
- _Note_:
    - _the listen() function establishes the connection on a specified host or port._
    
    - _It takes two params:_
        - _The first is the port number or host._
        - _The second (optional) is a callback function that runs after listening to a specified host or value._

    - _It's not recommended that you use the browser to build or debug APIs due to security reasons._

