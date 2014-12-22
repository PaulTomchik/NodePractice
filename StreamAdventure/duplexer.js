(function () {
  module.exports = function (cmd, args) {
    var child = require('child_process').spawn(cmd, args);
    return require('duplexer')(child.stdin, child.stdout);
  };
})();
