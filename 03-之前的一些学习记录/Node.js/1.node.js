console.log('hello world')  //尝试node.js 里打印

var http = require("http");   //用node自带组件 require请求(http)

//create 创建 Server 服务器    请求     响应 
http.createServer(function (request, response){
    //写入头文件
    response.writeHead(200,{'Content-Type':'text/plain'})

    // 结束
    response.end('Hello world\n')
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/')