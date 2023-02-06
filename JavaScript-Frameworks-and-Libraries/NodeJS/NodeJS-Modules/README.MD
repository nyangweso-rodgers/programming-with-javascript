# Node.js Modules

# What is a Module in Node.js?
* Consider modules to be the same as JavaScript libraries. A set of functions you want to include in your application.

# Built-in Modules
* Node.js has a set of built-in modules which you can use without any further installation. [ Built-in Modules Reference](https://www.w3schools.com/nodejs/ref_modules.asp)

# Include Modules
* To include a module, use the __require()__ function with the name of the module:

    ```js
        var http = require('http');
    ```

* Now your application has access to the __HTTP module__, and is able to create a server:

    ```js
        http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('Hello World!');
        }).listen(8080);
    ```

# Create Your Own Modules
* You can create your own modules, and easily include them in your applications.

* The following example creates a module that returns a date and time object:

    ```js
        // Example: Create a module that returns the current date and time:

        exports.myDateTime = function () {
        return Date();
        };
    ```

* Use the __exports__ keyword to make properties and methods available outside the module file.

* Save the code above in a file called "myfirstmodule.js"

# Include Your Own Module
* Now you can include and use the module in any of your Node.js files.

    ```js
        // Example: Use the module "myfirstmodule" in a Node.js file:

        var http = require('http');
        var dt = require('./myfirstmodule');

        http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("The date and time are currently: " + dt.myDateTime());
        res.end();
        }).listen(8080);
    ```

* Notice that we use __./__ to locate the module, that means that the module is located in the same folder as the Node.js file.