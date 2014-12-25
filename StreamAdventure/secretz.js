var crypto  = require('crypto'),
    gunzip  = require('zlib').createGunzip(),
    tar     = require('tar').Parse(),
    through = require('through');

var cipherName = process.argv[2],
    passPhrase = process.argv[3];

function entryHandler (entry) {
  if (entry.type !== 'File') return;

  function end () {
    this.queue(' ' + entry.path + '\n');
    this.queue(null);
  }

	var hasher = crypto.createHash('md5', { encoding: 'hex' });

  entry.pipe(hasher)
       .pipe(through(function(data) { this.queue(data); }, end))
       .pipe(process.stdout)
}

process.stdin
  .pipe(crypto.createDecipher(cipherName, passPhrase))
  .pipe(gunzip)
  .pipe(tar)
  .on('entry', entryHandler)
