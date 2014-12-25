var http = require('http'); 

var port = process.argv[2];

var httpServer = http.createServer( function (req, res) {
  
  req.setEncoding('utf8');
  req.on('data', function(chunk) {
    res.write(chunk.toUpperCase());
  });
  req.on("end", function() {
    res.end();
  });
}); 
httpServer.listen(port);
