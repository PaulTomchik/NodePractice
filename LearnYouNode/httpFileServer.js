(function() {

  var fs   = require('fs'),
      port = process.argv[2],
      path = process.argv[3];

  function getFileReadStream() {
    return fs.createReadStream(path);
  }

  var httpServer = require('http').createServer( function (req, res) {
    getFileReadStream().pipe(res); 
  });
  httpServer.listen(port);
  
})();
