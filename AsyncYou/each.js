var http   = require('http'),
    each = require('async').each;

each(process.argv.slice(2,4), function(url, done) {
  http.get(url, function(res) {
    res.on('data', function(){})
       .on('error', function(err) { done(err); });
  }).on('error', function(err) { done(err); });
},

function (err) {
  console.log(err);
});
