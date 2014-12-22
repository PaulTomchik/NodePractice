(function () {

  var lineNum = 0;

  process.stdin
         .pipe(require('split')())
         .pipe(require('through')(
             function(line) {
               this.queue(line.toString()[(++lineNum % 2) ? 'toLowerCase' : 'toUpperCase']() + '\n');
             }))
         .pipe(process.stdout);
})();
