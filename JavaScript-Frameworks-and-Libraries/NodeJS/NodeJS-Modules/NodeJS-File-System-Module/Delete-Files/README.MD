# Delete Files

* To delete a file with the __File System__ module,  use the __fs.unlink()__ method.

* The __fs.unlink()__ method deletes the specified file:

    ```js
        // Delete "mynewfile2.txt":

        var fs = require('fs');

        fs.unlink('mynewfile2.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
        });
    ```