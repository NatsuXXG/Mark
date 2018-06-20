<?php
	
	//echo是显示输出
	//var_dump()	显示数据类型和值

	//字符串当中 ""里会优先引用一些设定过的了的变量 ''这个这直接表达出写出来的东西
	$xxg = '谢夏戈';
	echo $xxgg = "$xxg 很强";
	echo "<br />";
	echo $xxgg2= '$xxg 很强';

	//fopen 打开文件
	//fgets 读取一行文本
	//fclose 关闭文本
	

	// &= 是赋值 和 = 差不多 但是&=是指向同一地址 原地址被改变 赋值与被赋值都被改变
	//<> 这个和 != 都表示 不等
	//!== 表示 非全等 (意思是只要不是全部都相当的 就返回 真)
	// 三元比较符("?:"):   $a => 60? "及格":"不及格";   (真:显示及格, 假:显示不及格)

	//[逻辑-与或非]
	// A and B   A && B  (逻辑与)
	// A or  B   A || B  (逻辑或)
	// A xor B (异或)[有且只有一个真 才能是真!]
	// !A (逻辑非)

	//字符串连接符号: "."    比如$A .= "123"; 在A的后面加上"123",   比如$B=$A."123"这样也可以;
	//ceil()                向上取整

	//[作用域]
	//global 				调用全局变量
	//$GLOBALS['变量名']     全部全局变量储存在这里面
	//static 				在局部变量前加上这个 函数完后不会被删除

	//PHP EOF(heredoc)定义字符串方法
	//数据类型:(string字符串)(integer整型)(float浮点型)(boolean布尔型)(array数组)(object对象)(null空值)

	//define("常量名","值","bool(是否对大小写不敏感,默认敏感)");  [全局的]
	//strlen() 				返回字符串长度
	//strpos()				查到相应字符串的位置
	//intdiv()  			整除运算符
	//PHP_EOL 				是一个换行符 兼容很大平台
	//A ?? B  				类似三元运算符
	
	//组合比较符
	echo "<br>";
	echo 1 <=> 2; //-1
	echo "<br>";
	echo 2 <=> 1; //1
	echo "<br>";

	//当前时间 时
	$t=date("H");
	echo $t."点";

	//switch()
	//case
	//default
	
	//[数组]
	//$ABC = array("")   	用array建立数组
	//count()        		获取数组长度(就是获取这个组有多少个东西)
	
	//关联数组
	//$ABC = array("XXG"=>"100","YT"=>"0"); 类似字典
	//遍历数组 ($ABC as $x=>$x_value)

	//sort()   				数组升序
	//rsort()				数组降序
	//asort()				根据数组的-值 进行升序
	//arsort()						 -值 	 降序
	//ksort()				根据数组的-键 进行升序
	//krsort()						 -键 	 降序




	//[超级全局变量(superglobals)]
	//$GLOBALS['A']   超级全局变量组
	//$_SERVER[]	  信息
	//$_REQUEST		  用于收集HTML表单提交的数据
	//$_POST[]		  用于收集HTMl表单提交的数据
	//$_GET[]		  用于收集HTML表单提交的数据
	


	//foreach($x as $x_value) 循环遍历

	//function XXG(){}   创建PHP函数

	

	//[PHP魔术常量]
	//__LINE__				当前行号
	//__FILE__				当前文件路径
	//__DIR__				当前文件位置
	//__FUNCTION__			当前函数名
	//__CLASS__				当前类名
	//__TRAIT__				
	//__METHOD__			当前函数名
	//__NAMESPACE__			命名空间





































 ?>