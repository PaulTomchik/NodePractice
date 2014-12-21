(function () {

  var http = require("http"),
      urls = [ process.argv[2], process.argv[3], process.argv[4] ];

  function newCollector () {
    var charCount = 0,
        dataArr   = [];

    function collect (data) {
      charCount += data.length;
      dataArr.push(data);
    }

    function print () {
      console.log(dataArr.join(''));
    }

    return { collect: collect, print: print };
  }

  var orderedPrinter = (function() {
    var printFuncs = [];

    return function(index, printFunc) {
      var i;

      printFuncs[index] = printFunc;

      /* Make sure all lower numbered printFuncs were called. */
      for (i=0; i < index; ++i) {
        if (!printFuncs[i]) return;
      } 

      printFunc();
      printFunc[index] = "DONE";

      /* Take care of the Queued up print functions. */
      for (++i; i < printFuncs.length; ++i) {
        if (printFuncs[i]) {
          printFuncs[i]();
          printFuncs[i] = "DONE";
        } else return;
      }
    };
  })();

  urls.forEach(function (url, i) {
    http.get(url, function(response) {
      var collector = newCollector();
      response.setEncoding('utf8');

      response.on('data', collector.collect);
      response.on('end', function() { orderedPrinter(i, collector.print); } );
      response.on('error', console.error);
    });
  });
})();
