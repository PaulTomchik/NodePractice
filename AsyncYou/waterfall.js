var fs   = require('fs'),
    http = require('http'),
    waterfall = require('async').waterfall;

function getURL(cb) {
  fs.readFile(process.argv[2], function (err, data) {
    if (err) {
      cb('Could not read file.');
    } else {
      cb(null, data.toString());
    }
  });
}

function getRequester(url, cb) {
  var chunks = [];

  http.get(url, function (res) {
    res.on('data', function (data) {
        chunks.push(data.toString());
      })
      .on('end', function () {
        cb(null, chunks.join());
      })
  })
  .on('error', function(err) {
    cb(err);
  })
}

function logResponse (err, body) {
  if (err) {
    console.error(err);
  } else {
    console.log(body);
  }
}

waterfall([getURL, getRequester], logResponse);
