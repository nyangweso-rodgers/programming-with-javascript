var fs = require('fs');
var rs = fs.createReadStream('./demo-text-file.txt');
rs.on('open', function () {
  console.log('The file is open');
});