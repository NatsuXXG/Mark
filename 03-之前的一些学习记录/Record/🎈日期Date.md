


///////////////////////////{ 时间Date }///////////////////////
                    [new操作符 + Date构造函数]
    var now = new Date()  //获得当前日期和时间
    [如果要创建特定日期和时间创建日期对象,要传入该日期的毫秒数,从1970年1月1日]
所以:创建时间方法 👇
    1. Date.parse("May 25,200");[将字符串返回相应日期](否则返回NaN)
    2. Date.UTC(2019,5,5)   [中间的5 代表了 6月份]

    1. Date.now()  [返回调用这个方法时的日期和时间的毫秒数]
        使用方法:  var start = Date.now()  //开始
                    xxg()                 //随便使用一个函数
                  var stop =Date.now()    //结束
                  result = stop - start   //结束的时间 - 开始  就是函数运行的时间
  [日期格式化方法]
    .toDateString()          [星期 月 日 年]
    .toTimeString()          [时 分 秒 时区]
    .toLocaleDateString()    [(特定地区) 星期 月 日 年]
    .toLocaleTimeString()    [(特定格式) 时 分 秒]
    .toUTCString()           [完整UTC时期]
    ........
