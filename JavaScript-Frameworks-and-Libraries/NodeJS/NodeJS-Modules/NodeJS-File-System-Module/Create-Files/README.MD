# Create Files

* The File System module has methods for creating new files:
    - __fs.appendFile()__: method appends specified content to a file. If the file does not exist, the file will be created:
    - __fs.open()__
    - __fs.writeFile()__

* Create a new file using the appendFile() method:
    ```js
        var fs = require('fs');

        fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
        });
    ```
* The __fs.open()__ method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:

    ```js
        var fs = require('fs');

        fs.open('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
        });
    ```

* The __fs.writeFile()__ method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

    ```js
        var fs = require('fs');

        fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
        });
    ```