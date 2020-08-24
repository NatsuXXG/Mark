
// 获取 URL 的参数
// 我们可以使用 url.parse 方法来解析 URL 中的参数，代码如下：

var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();
 
}).listen(3000);


console.log("Server running at http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com")


// 在浏览器中访问 http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com 然后查看返回结果: