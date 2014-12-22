(function () {

  var port = process.argv[2],
      url  = require('url');

  function parseTime (queryString, res) {
    var date = new Date(queryString.iso);
        
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      'hour'   : date.getHours(),
      'minute' : date.getMinutes(),
      'second' : date.getSeconds()
    }));
  }

  function unixtime (queryString, res) {
    var date = new Date(queryString.iso);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 'unixtime' : date.getTime() }));
  }

  require('http').createServer( function (req, res) {
    var reqURL = url.parse(req.url, true);

    switch (reqURL.pathname) {
      case '/api/parsetime': 
        parseTime(reqURL.query, res);
        break;
      case '/api/unixtime':
        unixtime(reqURL.query,res);
        break;
      default:
        res.writeHead(404);
        res.end();
        break;
    }
  }).listen(port);

})();
