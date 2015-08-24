var loaderUtils = require("loader-utils");

module.exports = function (source) {
  this.cacheable();

  var query        = loaderUtils.parseQuery(this.query);
  var file         = query.file;
  var prefix       = query.prefix;
  var replacements = require(file);

  var rule = prefix + '(.*)\\S';

  if (source.match(new RegExp(rule))) {
    var matches = source.match(new RegExp(rule, 'g'));

    matches.forEach(function (match) {
      match = match.replace(/\W/g, '');

      var replacement = replacements[process.env.NODE_ENV][match];

      source = source.replace(new RegExp(prefix + match, 'g'), replacement)
    });
  }

  this.callback(null, source);
};
