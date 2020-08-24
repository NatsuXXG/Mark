
// require 是node自带的函数   "fs"是调用的函数方法
var fs = require("fs");

// 读取文件-异步
var data =fs.readFileSync('input.txt');

// 打印出data的字符串
console.log(data.toString());
console.log("程序执行结束! (会等待执行完上面的))");