var bufs = [];

process.stdin
  .on('data', function (data) {
    bufs.push(data); 
  })
  .on('end', function () {
    console.log(Buffer.concat(bufs));
  })
