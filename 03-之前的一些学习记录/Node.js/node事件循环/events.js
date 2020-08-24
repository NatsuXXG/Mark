// Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件，如下实例：



// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();


// 以下程序绑定事件处理程序：
// 绑定事件及事件的处理程序
eventEmitter.on('eventName', eventHandler);


// 我们可以通过程序触发事件：
// 触发事件
eventEmitter.emit('eventName');
