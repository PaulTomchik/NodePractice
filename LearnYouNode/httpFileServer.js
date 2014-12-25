var fs   = require('fs'),
    http = require('http');

var port = process.argv[2],
    path = process.argv[3];

function getFileReadStream() {
  return fs.createReadStream(path);
}

http.createServer( function (req, res) {
  getFileReadStream().pipe(res); 
}).listen(port);
