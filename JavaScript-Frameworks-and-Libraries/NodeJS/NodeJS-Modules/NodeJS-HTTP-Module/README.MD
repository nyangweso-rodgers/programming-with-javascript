# Node.js HTTP Module

# The Built-in HTTP Module
* __Node.js__ has a built-in module called __HTTP__, which allows __Node.js__ to transfer data over the Hyper Text Transfer Protocol (HTTP).

* To include the __HTTP module__, use the __require()__ method:

    ```js
        var http = require('http');
    ```

# Node.js as a Web Server
* The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

* Use the __createServer()__ method to create an __HTTP server__:

    ```js
        // Example

        var http = require('http');

        // create a server object
        http.createServer(function (req, res) {
            res.write('Hello World'); // write a response to the client
            res.end(); // end the response
        }).listen(8080); // the server object listens on port 8080
    ```

* The function passed into the __http.createServer()__ method, will be executed when someone tries to access the computer on port 8080.

* Save the code above in a file called "demo-http.js", and initiate the file:

* Initiate demo_http.js:
* http://localhost:8080/

# Add an HTTP Header
* If the response from the __HTTP server__ is supposed to be displayed as HTML, you should include an __HTTP header__ with the correct content type:

    ```js
        var http = require('http');
        http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Hello World!');
        res.end();
        }).listen(8080);
    ```

* The first argument of the __res.writeHead()__ method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.

# Read the Query String
* The function passed into the __http.createServer()__ has a __req__ argument that represents the request from the client, as an object (http.IncomingMessage object).

* This object has a property called "__url__" which holds the part of the url that comes after the domain name:

    ```js
        var http = require('http');
        http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(req.url);
        res.end();
        }).listen(8080);
    ```

* Save the code above in a file called "demo_http_url.js" and initiate the file:

* http://localhost:8080/summer will produce __/summer__

# Split the Query String
* There are built-in modules to easily split the query string into readable parts, such as the URL module.

    ```js
        // Example
        // Split the query string into readable parts:

        var http = require('http');
        var url = require('url');

        http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var q = url.parse(req.url, true).query;
        var txt = q.year + " " + q.month;
        res.end(txt);
        }).listen(8080);
    ```

* Save the code above in a file called "demo_querystring.js" and initiate the file:

* The address: http://localhost:8080/?year=2017&month=July Will produce this result: 2017 July