var fs = require("fs");

var dirPath   = process.argv[2],
    extension = process.argv[3];

function callback (err, list) {
  var lastIndex;

  list.forEach(function(file) {
    if (((lastIndex = file.lastIndexOf('.')) != -1) && (file.substring(lastIndex + 1) === extension)) {
        console.log(file);
    }
  });
}

fs.readdir(dirPath, callback);
