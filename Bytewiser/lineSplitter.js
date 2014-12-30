var fs = require('fs');

var path = process.argv[2];

fs.readFile(path, function(err, data) {
  if (err) {
    console.error('ERROR. Could not read file.\n');
    process.exit(1);
  }

  var lineStart = 0; 

  for (var i=0; i < data.length; ++i) {
    if (data[i] === 10) {
      console.log(data.slice(lineStart, i));
      lineStart = i + 1;
    }    
  }   

  console.log(data.slice(lineStart));
});
