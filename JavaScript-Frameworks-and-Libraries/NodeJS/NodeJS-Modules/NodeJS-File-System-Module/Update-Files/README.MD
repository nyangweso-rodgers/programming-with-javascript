# Update Files

* The __File System__ module has methods for updating files:
    - __fs.appendFile()__
    - __fs.writeFile()__:

* The __fs.appendFile()__ method appends the specified content at the end of the specified file:

    ```js
        // Append "This is my text." to the end of the file "mynewfile1.txt":
        var fs = require('fs');

        fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
        if (err) throw err;
        console.log('Updated!');
        });
    ```

* The __fs.writeFile()__ method replaces the specified file and content:

    ```js
        // Replace the content of the file "mynewfile3.txt":

        var fs = require('fs');

        fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
        if (err) throw err;
        console.log('Replaced!');
        });
    ```