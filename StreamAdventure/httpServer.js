var through = require('through'),
    http    = require('http');

http.createServer( function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(
          function (buf) {
            this.queue(buf.toString().toUpperCase());
          }
        ))
      .pipe(res);
  } else {
    res.writeHead(501);
    res.end();
  }
}).listen(process.argv[2]);
