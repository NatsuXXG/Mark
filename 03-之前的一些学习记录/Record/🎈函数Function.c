

//////////////////{Function类型}/////////////////////////
        [操作符new + 构造函数Function  (不推荐)]
            var sum = new Function(....)

    {使用不带括号的函数名是访问函数指针,而非调用函数}

[没有重载](同函数名 下面会覆盖上面的)

{函数内部的对象 还有一个是this}
arguments.length      [参数的长度]
arguments             [转入的参数]
arguments.callee      [指向这个函数的指针,可以理解为这个函数的名字]
                      (这样做是为了防止这个函数被改名了 改调用这个属性 里面想
                      重复调用这个函数的公式就可以不被破坏)

this.       [引用执行函数的环境对象 this值]

.caller     [这个属性保存着调用当前函数的'函数'的引用]
            (比方 有一个函数里面调用了这个函数 
            用arguments.callee.caller就可以调用会原来引用这个函数的'函数')

[函数的属性]
length              [参数的个数]
prototype           []
    call()方法
    apply()方法


基本包装类型[Boolean][Number]
[String类型 - 字符串方法]
    .charAt(索引)           [输出索引位置的字符]
        也可以直接使用方括号:
        xxx.charAt(1)  等价  xxx[1]
    .charCodeAt(索引)       [输出索引位置的字符的字符编码]

[String类型 -字符串操作方法]
    .concat('要连接的字符串')  [用于连接字符串用的]
        大多数情况下使用 "+"
    .slice([开始],[结束])     //返回开始到结束'前'的字符(不包含结束那个)
        如果[开始]传入负数就倒数过来
    .substring([小的参数作为开始][大的作为结束])//返回开始到结束'前'的字符(不包含结束那个)
        会将负数转换成'0'
    .substr([开始],[返回字数])

[字符串位置] - [跟数组找位置差不多] -[没有找到就返回 -1 ]
    .indexOf(" ")      从前往后查字符串,返回找到第一个索引位置
    .lastIndexOf()     从后往前查字符串,返回找到第一个索引位置            
    {接收第二个参数, 表示从哪个索引开始搜索}

[trim()方法] - [删除前置和后缀的所有空格然后返回结果.]

{转换大小写}
            [toLocaleUpperCase()] - [toUpperCase()] 全变大
            [toLocaleLowerCase()] - [toLowerCase()] 全变小


[字符串匹配方法]
            1. match() [与RegExp的exec()方法相同,只接受一个参数
                        正则/或是RegExp对象]
            字符串对象.match(要匹配的正则);
            2. search(RegExp) [返回字符串中第一个匹配项的索引,没找到返回-1]
所谓RegExp 意思差不多是正则的意思, 比如: /at/ 

            3.替换
                replace([正则/字符串],[替换的字符])   方法
                    {如果要替换很多个 要用正则/g } 
            4.split('指定分隔符',分割数(比如 2 就返回2个))     [指定分隔符]


fromCharCode() 方法...



[单体内置对象]

    1. Global 对象
        encodeURI(uri)          [对整个URI进行编码]
        encodeURIComponent(uri) [对某一段进行编码]
        eval()                  [完整ECMAScript解析器,只接受一个参数,
                                即要执行的ES或jS字符串]
    2.Math 对象
        Math.E         [自然对数的底数,常量e的值]
        Math.LN
        Math.LOG
        Math.PI         [派 Π 🥧]
        Math.SQRT1_2    [1/2的平方根]
        Math.max()      [传入多个值 返回最大值]
        Math.min
        3.舍入方法
            Math.ceil()  [向上舍入]
            Math.floor() [向下舍入]
            Math.round() [四舍五入]
    4.random()方法
        Math.round()  随机数 - [ 0 ~ 1 ]
....5. Math还有很多方法,什么[绝对值] 可以查...