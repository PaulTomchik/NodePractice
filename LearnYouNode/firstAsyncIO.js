var fs = require('fs');

function callback(err, data) {
  var lineCount = 0;
  var i;

  for (i = 0; i < data.length; ++i) {
    if (data.charCodeAt(i) == 10)  ++lineCount;
  }

  console.log(lineCount);
}

var path = process.argv[2];
fs.readFile(path, 'utf8', callback);
