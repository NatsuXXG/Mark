# ECMAScript 基础语法
> 1.基本数据类型 和 引用数据类型

    基本数据类型:number,string,boolean,undefined,null
    引用数据类型:Array,Object,Function

> 2.条件判断和循环

    switch(name){
        case 'xxx':
            break;
        case 'xxx':
            break;
        default:
            break;
    }
<br/>

    for(var i = 0; i < 10; i ++){

    }
<br/>

    if(条件){

    }else{

    }
<br/>

    三元运算
    1 > 3 ?  '真' : '假';
<br/>

> 3.赋值运算符，逻辑运算符

    =    赋值
    >
    <
    ==   比较的值的
    ===   比较的值和数据类型
<br/>



# 字符串方法
#### 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置 (找不到返回-1)
    xxg.search();
    
    例子:
    var str="Visit Runoob!"; 
    var n=str.search("Runoob");

    n = 6

### 大写化
    xxg.toUpperCase()
##### 小写化
    xxg.toLowerCase()
#### 字符串长度
    xxg.length;
#### 返回指定位置的字符
    xxg.charAt(指定位置)
#### 返回指定的字符\字符串首次出现的位置
    xxg.indexOf("",位置)
#### 分割
    xxg.split("-")//根据"-"来分割
    xxg.split("",5)//前五个,每个字符都分割
#### 提取
    xxg.substring(6) //第六个开始提取
    xxg.substring(0,5)//第0个开始 第5个结束,
    xxg.substr(0,5)//第0个开始 提取5位.

    xxg.replace(搜索词,"替换的词")


# Array - 数组
#### 数组连接
    xxg1.concat(xxg2)   
#### 分隔符连接         
    xxg1.concat(xxg2).join("-")   
#### 颠倒元素
    xxg1.concat(xxg2).reverse() 
#### 选定元素
    xxg1.concat(xxg2).slice(2,5)  
#### 升序
    function ffa(a,b){ return  a - b ;}
### 迭代方法
    for
    forEach() 仅能在数组对象中使用
    在函数中arguments 这个对象是伪数组
### 栈方法 后进先出
    push()
    pop()
### 堆方法 先进先出
    unshift()
    shift()


# Object - 对象
    var obj = {
        name:'xxg',
        age:18
    }


    //遍历对象
    for(var key in obj){
        obj[key]
    }


# 函数 
    1）普通函数
    function fn(){

    }
    fn();

    (2)函数表达式
    var fn = function(){}
    
    (3)自执行函数
    function(){
        this指向 一定是指向window
    }

### 构造函数
    new Object();
    new Array();
    new String();
    new Number();



#  Math - 数学方法 
    Math.ceil()     //向上取整
    Math.floor()    //向下取整
    Math.round()    //四舍五入
    Math.random()   //随机数(0~1之间) 
    Math.random()*10//(1~10之间)


# BOM(浏览器对象模型)
#### 警告框
    window.alert("");   
#### 确认框
    confirm("是否?");
#### 文本对话框
    prompt("题目","默认填的");
#### 打开新窗口
    window.open("",'_blank');
#### 倒计时
    setTimeout(function(){},时间(毫秒));
#### 取消倒计时
    clearTimeout()
#### 更新器:
    setInterval(函数,时间(毫秒));
#### 取消更新器
    clearInterval();
#### back 与 go 返回前一个浏览页面
    window.history.back();
    window.history.go(-1);
#### forward 与 go 返回下一个浏览的页面
    window.history.forward();
    window.history.go(1);
#### 得到节点类型
    xxg.nodeType 


# 元素选择器
#### 通过id来选择
    document.getElementById("id");
#### 通过Class来选择
    document.getElementsByClassName('xxg');
#### 通过name 来选择
    xg = document.getElementsByName("name");
    xg[1] //选择第几个name
#### 通过<标签> 来选择
    xg = document.getElementsByTagName("input");
    xg[2] //选择第几个input<标签>

#### 选择子节点
    xxg.childNodes 
#### 选择父节点
    xxg.parentNode 
#### 选择祖节点
    xxg.parentNode.parentNode
#### 选择第一项子节点
    xxg.firstChild
#### 选择最后项子节点
    xxg.lastChild 
#### 选择下一个兄弟节点
    xxg.nextSibling 
#### 选择上一个兄弟节点
    xxg.prevviousSibling 

#### 选择表单name
    document.forms["name"].value;



# 方法
#### 选择好的元素后绑定事件
    xxg.addEventListener("click",funciton(){ 

    })
#### 解除绑定事件\移除监听
    xxg.removeEventListener("事件名","函数名");
#### 创建节点
    var jd=document.createElement("p");
#### 创建段落
    var dl=document.createTextNode("这是一个段落");
#### 把段落"插入"到节点尾部
    jd.appendChild(dl);
#### 把段落"插入"到节点头部
    jd.insertBefore(dl);
#### 移除存在的元素
    jd.removeChild(dl);
#### 替换元素节点
    jd.replaceChild(替换元素,被替换元素);



# 属性
#### 改变内容
    xxg.innerHTML="改变内容";
#### 改变属性
    xxg.attribute=新属性;
#### 改变图片来源
    xxg.src="xxg.jpg";
#### 改变样式
    xxg.style.(color\fontSize\fontFamily\visibility)=新样式;
#### 得到属性
    xxg.getAttribute("id");
#### 得到节点名称:
    xxg.nodeName
#### 得到节点值:
    xxg.nodeValue
#### 得到节点类型:
    xxg.nodeType



# 事件
> （如果脱离html在JavaScript绑定事件就去掉前面的"on"）

## 鼠标事件

    onclick() //鼠标点击:

    ondblclick()//鼠标双击:

    onmousedown()//鼠标被按下:

    onmouseup()//鼠标按下后的松开:

    oncontextmenu()   //鼠标右键打开上下文菜单时触发  
    oncontextmenu="return false"//屏蔽右键菜单  

    onmouseenter() //鼠标移到: 不支持冒泡
    onmouseover()  //鼠标移到:影响子元素

    onmouseleave() //鼠标移开: 不支持冒泡
    onmouseout() //鼠标移开:影响子元素

    onmousemove() // 鼠标被移动:


## 键盘事件
    onkeydown() //键盘按下:

    onkeypress()//键盘按下并且松开:

    onkeyup() //键盘松开:


## 框架/对象(Frame/Object)事件

    onabort //图像的加载被中断

    onbeforeunload //即将离开页面(刷新或关闭)时触发

    onerror //加载文档或图像时发生错误

    onhashchange //该事件在当前 URL 的锚部分发生修改时触发。

    onload //浏览器已完成页面加载:

    onpageshow //该事件在用户访问页面时触发

    onpagehide //该事件在用户离开当前网页跳转到另外一个页面时触发

    onresize //窗口或框架被重新调整大小。

    onscroll //当文档被滚动时发生的事件。

    onunload // 用户退出页面。 <body> 和 <frameset>

## 表单 \ 文本 事件

    onchange //改变

    onfocus //聚焦:不支持冒泡
    onfocusin //聚焦:影响子元素

    onblur//失焦:不支持冒泡
    onfocusout //失焦:影响子元素

    oninput //有输入时

    onreset //表单重置时

    onsearch //用户向搜索域输入文本时触发<input="search">

    onselect //用户选取文本时触发<input>和<textarea>

    onsubmit//表单提交时触发




# 日期\时间

#### 日期转换为字符串
    xxg=new Date();
#### 返回年份(四位数) - 年
    xxg.getFullYear()
#### 返回月份(0~11) - 月
    xxg.getMonth()
#### 一个月中的某一天(1~31) - 日
    xxg.getDate()
#### 一周中的某一天(0~6) - 星期
    xxg.getDay()
#### 返回小时(0~23) -  时
    xxg.getHours()
#### 返回分钟(0~59) - 分
    xxg.getMinutes()
#### 返回秒速(0~59) - 秒
    xxg.getSeconds()
#### 返回毫秒(0~999) - 毫秒
    xxg.getMilliseconds()
#### 返回 1970 年 1 月 1 日至今的毫秒数。
    xxg.getTime()

# Document对象
    document.write(' <h1>可以直接写入格式 </h1>')**
#### 得到锚数
    document.anchors.length 
#### 得到照片img数
    document.images.length 
#### 得到表单数
    document.forms.length 
#### 得到链接\地址数目
    document.links.length 
#### 打开文件
    document.open("","replace")
#### 文档完整的URL
    document.URL 
#### 文档的标题
    document.title 
#### 文档最后的修改时间
    document.lastModified 
#### 加载这个文件的域名
    document.domain 





-----------------------------------
#### 用于将一个 JSON 字符串转换为 JavaScript 对象。
    JSON.parse() 
#### 方法用于将 JavaScript 值转换为 JSON 字符串。
    JSON.stringify();









