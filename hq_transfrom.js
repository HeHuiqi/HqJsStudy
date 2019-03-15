//转码前
require('babel-polyfill');
var input = [1, 2, 3];
input.map(item => item + 1);
console.log(input);

var newArray = Array.from(input, x => x * x);
console.log(newArray);


// 执行命令
// ./node_modules/.bin/babel index.js -o complied.js