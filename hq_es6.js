
var es6Code = 'let x = n => n+1';
//使用babel-core库可以用babel的API进行代码的转换
var babel_core = require('babel-core');
//开始转换
var es5Code = babel_core.transform(es6Code,{presets:['latest']}).code;
console.log("转换结果：\n"+es5Code);