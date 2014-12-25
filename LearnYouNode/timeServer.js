var net = require('net');

var portNum = process.argv[2];

function zeroPad(num) {
  return ('0' + num).slice(-2);
}

function getTimeString () {
  var date = new Date();

  return date.getFullYear() + '-' +
         zeroPad(1 + date.getMonth()) + '-' +
         zeroPad(date.getDate()) + ' ' +
         zeroPad(date.getHours()) + ':' +
         zeroPad(date.getMinutes()) + '\n';
}

var server = net.createServer( function (socket) {
  socket.end(getTimeString()); 
});
server.listen(portNum);
