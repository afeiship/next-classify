var nx = require('next-js-core2');
require('../src/next-classify');

describe('next/classify', function() {
  test('next-classify', function() {
    var str1 = 'font-size';
    var str2 = 'fontSize';
    var str3 = '_font-size';
    var str4 = '_font_size';
    var str5 = '_font-size';
    var str6 = 'font.size.small';

    expect(nx.classify(str1)).toBe('FontSize');
    expect(nx.classify(str2)).toBe('FontSize');
    expect(nx.classify(str3)).toBe('FontSize');
    expect(nx.classify(str4)).toBe('FontSize');
    expect(nx.classify(str5)).toBe('FontSize');
    expect(nx.classify(str6)).toBe('FontSizeSmall');
  });
});
