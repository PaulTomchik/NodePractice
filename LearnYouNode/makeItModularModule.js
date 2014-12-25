module.exports = function (dirPath, extension, callback) {
  var fs = require('fs');

  fs.readdir(dirPath, function(err, files) {
    var lastIndex;
  
    if (err) { 
      callback(err, null);
      return;
    }
    else callback(null, files.filter(function(file) {
      return (((lastIndex = file.lastIndexOf('.')) != -1) && (file.substring(lastIndex + 1) === extension));
    }));
  });
};
