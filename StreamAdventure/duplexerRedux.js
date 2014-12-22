(function () {
  module.exports = function (counter) {

    var countries = {},
        wStream;

    function tallyCountries (data) {
      countries[data.country] = (countries[data.country] || 0) + 1;  
    }

    function end () {
      counter.setCounts(countries);
    }

    wStream = require('through')(tallyCountries, end);
    return require('duplexer')(wStream, counter);
  };
})();
