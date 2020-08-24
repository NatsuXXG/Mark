//  [-- 管道流 --]


//readerStream.pipe 就是'管道流'方法
//先 创建一个读的  和 一个写的 

//然后 读的.pipe管道[传] -> 写的





var fs = require('fs');

var readerStream = fs.createReadStream('input.txt');

var writerStream = fs.createWriteStream('inputt.txt');


readerStream.pipe(writerStream);

console.log('程序执行完成')