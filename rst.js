'use strict';

//转码前
require('babel-polyfill');
// import 'babel-polyfill';
var input = [1, 2, 3];
input.map(function (item) {
  return item + 1;
});
console.log(input);

var newArray = Array.from(input, function (x) {
  return x * x;
});
console.log(newArray);

// 执行命令
// ./node_modules/.bin/babel index.js -o complied.js
