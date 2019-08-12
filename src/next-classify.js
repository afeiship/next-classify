(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var EMPTY_STR = '';
  var UNDERLINE = '_';
  var camelCaseRE = /[-_.]+(.)?/g;

  nx.classify = function(inStr) {
    var str = UNDERLINE + inStr || EMPTY_STR;
    return str.replace(camelCaseRE, function(match, chr) {
      return chr ? chr.toUpperCase() : EMPTY_STR;
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.classify;
  }
})();
