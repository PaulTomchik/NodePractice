var split   = require('split'),
through = require('through');

var lineNum = 0;

process.stdin
       .pipe(split())
       .pipe(through(
           function(line) {
             this.queue(line.toString()[(++lineNum % 2) ? 'toLowerCase' : 'toUpperCase']() + '\n');
           }))
       .pipe(process.stdout);
