// 引入 events 模块
var events = require('events');

//创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var test1 = function index(){
    console.log('连接成功')
    console.log('多米罗1')
    //(连接成功后)触发 xxg 事件
    eventEmitter.emit('xxg')
}

// 绑定 触发事件
eventEmitter.on('click',test1);
//意思是绑定 当触发click事件时去执行 test1


//处理执行去执行test1 还可以执行匿名的程序 
eventEmitter.on('xxg',function(){
    console.log('数据接收成功')
    console.log('多米罗2')
})


//然后在这最后的时候 我们来出发多米罗骨牌的 第一张牌
eventEmitter.emit('click');

console.log('程序执行完毕!');
console.log('多米罗3')


