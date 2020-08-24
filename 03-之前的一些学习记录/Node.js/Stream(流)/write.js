var fs = require('fs');
var data = '测试写入1!  '

//创建一个写入流
var writerStream = fs.createWriteStream('inputt.txt');


//使用utf-8 写入
writerStream.write(data,'UTF8');


//标记文件末尾
writerStream.end();


//处理流事件 --> data , end ,and error
writerStream.on('finish',function(){
    console.log('写入完成')
})

writerStream.on('error',function(err){
    console.log(err.stack)
})

console.log('程序执行完毕!')




