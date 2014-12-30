var http   = require('http'),
    series = require('async').series;

function requester (url) {

  return function (done) {
    http.get(url, function (res) {
      var chunks = [];

      res.on('data', function (data) {
            chunks.push(data.toString());
          })
         .on('end', function () {
            done(null, chunks.join());
         })

    }).on('error', function(e) {
      done(e);
    })
  }
}

series (
  {
    requestOne : requester(process.argv[2]), 
    requestTwo : requester(process.argv[3]) 
  },

  function (err, data) {
    if (err) console.error(err);
    else console.log(data);
  }
)
