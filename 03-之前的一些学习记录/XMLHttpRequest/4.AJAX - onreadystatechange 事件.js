onreadystatechange 事件
当请求被发送到服务器时，我们需要执行一些基于响应的任务。

每当 readyState 改变时，就会触发 onreadystatechange 事件。

readyState 属性存有 XMLHttpRequest 的状态信息。

下面是 XMLHttpRequest 对象的三个重要的属性：
/////////////////////////////////////////
属性	                                                                                            描述
onreadystatechange	                                                    存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。

readyState	                                                                存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
                                                                            0: 请求未初始化
                                                                            1: 服务器连接已建立
                                                                            2: 请求已接收
                                                                            3: 请求处理中
                                                                            4: 请求已完成，且响应已就绪

 status	                                                                    200: "OK"
                                                                            404: 未找到页面


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
在 onreadystatechange 事件中，我们规定当服务器响应已做好被处理的准备时所执行的任务。

当 readyState 等于 4 且状态为 200 时，表示响应已就绪：
xmlhttp.onreadystatechange=function()
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
}



\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  {就是封装好一个loadXMLDoc}
使用回调函数
回调函数是一种以参数形式传递给另一个函数的函数。

如果您的网站上存在多个 AJAX 任务，那么您应该为创建 XMLHttpRequest 对象编写一个标准的函数，并为每个 AJAX 任务调用该函数。

该函数调用应该包含 URL 以及发生 onreadystatechange 事件时执行的任务（每次调用可能不尽相同）：

实例
var xmlhttp;
function loadXMLDoc(url,cfunc)
{
if (window.XMLHttpRequest)
  {// IE7+, Firefox, Chrome, Opera, Safari 代码
  xmlhttp=new XMLHttpRequest();
  }
else
  {// IE6, IE5 代码
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=cfunc;
xmlhttp.open("GET",url,true);
xmlhttp.send();
}


function myFunction()
{
    loadXMLDoc("/try/ajax/ajax_info.txt",function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        }
    });
}









