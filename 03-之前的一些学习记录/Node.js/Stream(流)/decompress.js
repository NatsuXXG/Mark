//管道链式流 之 解压




var fs = require('fs') //用于读写
var zlib = require('zlib') //用于压缩 解压

//解压 input.txt.gz 文件为 decompress.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('decompress.txt'));


console.log('文件解压完成')





