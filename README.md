# next-classify
> Converts string to camelized class name First letter is always upper case

## installation
```bash
npm install -S afeiship/next-classify --registry=https://registry.npm.taobao.org
```

## usage
```js
var str1 = 'font-size';
var str2 = 'fontSize';
var str3 = '_font-size';
var str4 = '_font_size';
var str5 = '_font-size';

nx.classify(str1);
// FontSize 

```
