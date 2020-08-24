

{{{ 数据类型 }}}

       typeof()       [返回这个值是什么类型]
    1. Undefined      [只变量初始化未赋值时,变量的值就是'undefined']
    2. Null           [用typeof检测null会返回'object']
    3. Boolean        ['true' 和 'false']
    4. Number         [整数和小数都是number 这里不像其他语言有分int和flost]
        [NaN]         [NaN 不等于 NaN]
       Number(数值转换)[什么类型都可以转换成Number 
                        纯字符串转换成 - NaN
                        空字符串转换成 - 0
                        数字字符串换成 - 数字
                        布尔          - 1或0
                        null         - 0
                        undefined    - NaN   ]
        parseInt       [转换成整数]
        parseFloat     [转换成浮点型小数]
    5.String          [字符串类型]
        toString       [转换成'字符串']

        
     Object
        Constructor(构造函数)  [保存用于创建当前对象的函数]
        hasOwnProperty   [检查给定属性在当前对象实例中是否存在]
        isPrototypeOf(object)  [检查传入的对象是否是另一个对象的原型]
        toLocaleString()    [返回对象的字符串表示,该字符串与执行环境的地区对应]
        toString()  [返回对象的字符串表示]
        valueOf() [返回对象字符串,数值,布尔值表示通常与toString()方法端返回值相同]
  *{{Object是所有对象的基础, 因此所有对象都具有这些基本的属性和方法}}