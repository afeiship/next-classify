import nx from '@jswork/next';

const EMPTY_STR = '';
const UNDERLINE = '_';
const camelCaseRE = /[-_.]+(.)?/g;

nx.classify = function (inStr) {
  const str = UNDERLINE + inStr || EMPTY_STR;
  return str.replace(camelCaseRE, function (_, chr) {
    return chr ? chr.toUpperCase() : EMPTY_STR;
  });
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.classify;
}

export default nx.classify;
