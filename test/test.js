var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-classify');

describe('next/classify', function () {

  it('next-classify', function () {

    var str1 = 'font-size';
    var str2 = 'fontSize';
    var str3 = '_font-size';
    var str4 = '_font_size';
    var str5 = '_font-size';

    assert.equal( nx.classify(str1), 'FontSize');
    assert.equal( nx.classify(str2), 'FontSize');
    assert.equal( nx.classify(str3), 'FontSize');
    assert.equal( nx.classify(str4), 'FontSize');
    assert.equal( nx.classify(str5), 'FontSize');
  });

});
