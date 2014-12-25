var http = require("http"),
    url  = process.argv[2];

var collector = (function () {
  var charCount = 0,
      dataArr   = [];

  function collect (data) {
    charCount += data.length;
    dataArr.push(data);
  }

  function print () {
    console.log(charCount);
    console.log(dataArr.join(''));
  }

  return { collect: collect, print: print };
})();

if(url) http.get(url, function(response) {
  response.setEncoding('utf8');

  response.on('data', collector.collect);
  response.on('end', collector.print);
  response.on('error', console.error);
});
