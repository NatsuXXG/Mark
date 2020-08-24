// 链式流
//压缩


// 链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。

// 接下来我们就是用管道和链式来压缩和解压文件。

// 创建 compress.js 文件, 代码如下：


var fs = require('fs');//fs用来读取写入文件
var zlib = require('zlib'); //zlib用来压缩解压


//压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

//之所以叫链式流 就是写成一条链
// 先读 然后 管道流-> 压缩 -> 管道流 -> 写入新的文件

console.log('文件压缩完成!!');























