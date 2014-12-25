var fs = require('fs');

var path = process.argv[2];

function callback(err, data) {
  var lineCount = 0;
  var i;

  for (i = 0; i < data.length; ++i) {
    if (data.charCodeAt(i) == 10)  ++lineCount;
  }

  console.log(lineCount);
}

fs.readFile(path, 'utf8', callback);
