// 删除目录
// 语法
// 以下为删除目录的语法格式：

// fs.rmdir(path, callback)
// 参数
// 参数使用说明如下：

// path - 文件路径。

// callback - 回调函数，没有参数。

// 实例

var fs = require("fs");
//执行钱创建一个空的 /tmp/test2  目录

console.log("准备删除木有 /tmp/test2")
fs.rmdir("/Natsu_Test/Note/Node.js/文件系统/tmp/test2",function(err){
    if(err){
        return console.error(err);
    }
    console.log("读取 /tmp 目录");
    fs.readdir("/Natsu_Test/Note/Node.js/文件系统/tmp/",function(err,files){
        if(err){
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
        })
    })
})