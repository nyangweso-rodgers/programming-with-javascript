# Rename Files

* To rename a file with the __File System__ module,  use the __fs.rename()__ method.

    ```js
        // Rename "mynewfile1.txt" to "myrenamedfile.txt":

        var fs = require('fs');

        fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
        });
    ```