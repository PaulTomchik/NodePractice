var hexBuffer = new Buffer(process.argv.slice(2), 'ascii');

console.log(hexBuffer.toString('hex'));
