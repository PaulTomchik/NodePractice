var http = require('http'),
    map  = require('async').map;

map(process.argv.slice(2,4), function(url, done) {
  var chunks = [];

  http.get(url, function(res) {
    res.on('data', function(chunk) {
          chunks.push(chunk.toString());  
        })
       .on('end', function() {
        done(null, chunks.join());
       })
       .on('error', function(err) { done(err); });
  }).on('error', function(err) { done(err); });
},

function (err, data) {
  if (err) console.log(err);
  else console.log(data);
});
