# Using a Package

* Once the package is installed, it is ready to use.

* Include the "__upper-case__" package the same way you include any other module:

    ```js
        var uc = require('upper-case');
    ```

* Create a Node.js file that will convert the output "Hello World!" into upper-case letters:

    ```js
        var http = require('http');
        var uc = require('upper-case');
        http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(uc.upperCase("Hello World!"));
        res.end();
        }).listen(8080);
    ```

* Save the code above in a file called "demo-upper case.js", and initiate the file: