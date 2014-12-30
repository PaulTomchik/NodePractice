process.stdin
  .on('data', function (data) {
    var uint8Arr = new Uint8Array(data);
    console.log(JSON.stringify(uint8Arr));
  })
