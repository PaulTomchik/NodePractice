(function () {
  process.stdin
    .pipe(require('crypto').createDecipher('aes256', process.argv[2]))
    .pipe(process.stdout);
})();
