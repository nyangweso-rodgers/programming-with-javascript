// example: Create a new file using the appendFile() method:

var fs = require('fs');

fs.appendFile('new-file-1.txt', 'First Content', function(err) {
    if (err) throw err;
    console.log('Saved!');
});