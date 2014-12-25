module.exports = function (cmd, args) {
	var child_process = require('child_process'),
	    duplexer      = require('duplexer');

  var child = child_process.spawn(cmd, args);

  return duplexer(child.stdin, child.stdout);
};
