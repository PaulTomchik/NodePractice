module.exports = function () {

  var stream_combiner = require('stream-combiner'),
        split         =  require('split')(),
        through       =  require('through'),
        createGzip    =  require('zlib').createGzip()

  var genres = Object.create(null);

  var aggregator = (function () {
    var genre;

    return function (data) {
      if (!data) return
      else data = JSON.parse(data);

      if (data.type === 'genre') {
        genre = data.name;
        genres[genre] = [];
      } else {
        genres[genre].push(data.name);
      }
    };
  })();

  function end () {
    for (var genre in genres) {
      this.queue("{\"name\":\"" + genre + "\",\"books\":[\"" + genres[genre].join('","') + "\"]}\n");
    }
    this.queue(null);
  }

  return stream_combiner( split, through(aggregator, end), createGzip );
};
