var fs = require('fs');

var path = process.argv[2];
var data = fs.readFileSync(path).toString();

var lineCount = 0;
var i;

for (i = 0; i < data.length; ++i) {
  if (data.charCodeAt(i) == 10)  ++lineCount;
}

console.log(lineCount);
