var stdin = process.stdin;

stdin.on('data', function (data) {
  for(var i=0; i < data.length; ++i) {
    if (data[i] == 46) {
      data[i] = 33;
    }
  }

  console.log(data);
});

