(function () {
  var trumpet = require('trumpet'),
      through = require('through'),
      tr      = trumpet();

  var stream = tr.select('.loud').createStream();

  stream.pipe(through(function(loudText) {
    this.queue(loudText.toString().toUpperCase());
  })).pipe(stream);

  process.stdin.pipe(tr).pipe(process.stdout);
})();
