module.exports = function (counter) {

	var through  = require('through'),
			duplexer = require('duplexer');

  var countries = {},
      wStream;

  function tallyCountries (data) {
    countries[data.country] = (countries[data.country] || 0) + 1;
  }

  function end () {
    counter.setCounts(countries);
  }

  wStream = through(tallyCountries, end);

  return duplexer(wStream, counter);
};
