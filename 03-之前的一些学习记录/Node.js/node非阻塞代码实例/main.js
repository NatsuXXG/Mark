
// require 是node自带的函数   "fs"是调用的函数方法
var fs = require("fs");


// fs这个方法应该是用来读取 和写入文件用的方法

// 读取文件读取这个文件的时候 去执行一下匿名回调函数
// 输入一下错误 或者 数据 
fs.readFile('input.txt',function(err,data){
    if(err) return console.log(err);
    console.log(data.toString());
})
// 因此，阻塞是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内。

// 这句话的意思是 因为没有阻塞的原因 ,所以如果你在下面执行'console.log(data.toString())的时候 由于他还没有读取完data的文件 导致没有toString这个方法  就无法读取了  跟阻塞不同 阻塞会等待读取完才继续往下执行,   所以才要写进回调函数里  (而回调函数就是等数据返回了以后进行的操作!!!)

console.log('程序执行结束(非异步 所以不会等待上面的执行完)')