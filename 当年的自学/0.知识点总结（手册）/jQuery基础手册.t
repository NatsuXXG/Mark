$(document).ready(function() { 
//等页面的文档（document）中的节点都加载完毕后，再执行后续的代码因为我们在执行代码的时候，可能会依赖页面的某一个元素，我们要确保这个元素真正的的被加载完毕后才能正确的使用
$("div").html("你好!通过慕课网学习jQuery次啊是最佳的途径.")
});

//【jQuery基础选择器!】
//元素选择器 $("element")
//类选择器 $(".class")       
//id选择器$("#id")
// $("*") 是选择全部元素 的意思!

///【jQuery 层级选择器】///
//子选择器  $("div > p")
//后代选择器 $("div  p")
//相邻兄弟选择器 $("div + p") [不会向前选择] 选择所有紧接在“div”元素后的“p”元素
//一般兄弟选择器 $("div ~ p") [不会向前选择] 匹配“div”元素之后的所有 兄弟元素。具有相同的父元素，并匹配过滤“p”选择器

///【jQuery 基本筛选 选择器 】[选择某个元素里的哪个元素][根据元素选元素]
//第一个$(:first)					举例: $(.class:first) 找到第一个类
//最后一个$(:last)
//偶数个$(:even)
//奇数个$(:odd)
//选第几个$(:eq(?))
//选?数之后的$(:gt(?))
//选?数之前的$(:lt(?))
//不选这个用$(:not())

//【jQuery 内容筛选 】
//选择所有包含指定内容的元素 $(":contains('?')")      		 通过/根据 内容来找
//选择元素中至少包含指定选择器的元素 $(":has(?元素)")         通过/根据 元素来找
//选择含有子元素或者文本的元素 $("a:parent")                 有内容的a会被选中
//选择没有含子元素或文本的元素 $("a:empty")                 没有内容的a会被选中

//【jQuery 可见性筛选】
//选择所有显示的元素$(":visible")
//选择所有隐藏的元素$(":hidden")

//【jQuery 选择器之 属性选择器】
//$('div[name=p1]')						查找所有div中，属性name=p1的div元素
//$('div[p2]')							查找所有div中，有属性p2的div元素
//$('div[name|="-"]')					查找所有div中，有属性name中的值只包含一个连字符“-”的div元素
//$('div[name~="a"]') 			   	   	查找所有div中，有属性name中的值包含一个连字符“空”和“a”的div元素
//$('div[name^=imooc]') 				查找所有div中，属性name的值是用imooc开头的
//$('div[name$=imooc]')  				查找所有div中，属性name的值是用imooc结尾的
//$('div[name*="test"]')				查找所有div中，有属性name中的值包含一个test字符串的div元素
//$('div[testattr!="true"]') 			查找所有div中，有属性testattr中的值没有包含"true"的div

//【jQuery选择器之子元素筛选选择器】
//$('.first-div a:first-child')			查找class="first-div"下的第一个a元素  针对所有父级下的第一个
//$('.first-div a:last-child')			查找class="first-div"下的最后一个a元  针对所有父级下的最后一个
//$('.first-div a:only-child')			查找class="first-div"下的只有一个子元素的a元素  
//$('.last-div a:nth-child(2)') 		查找class="last-div"下的第二个a元素
//$('.last-div a:nth-last-child(2)') 	查找class="last-div"下的倒数第二个a元素

//【jQuery选择器之表单元素选择器】
//$(':input') 						:input 选择器基本上选择所有表单控件
//$('input:text')				匹配所有input元素中类型为text的input元素
//$('input:password')			匹配所有input元素中类型为password的input元素
//$('input:radio')				匹配所有input元素中的单选按钮,并选中
//$('input:checkbox')			匹配所有input元素中的复选按钮,并选中
//$('input:submit')				匹配所有input元素中的提交的按
//$('input:image')				匹配所有input元素中的图像类型的元
//$('input:button')				匹配所有input元素中类型为按钮的元素
//$('input:file')					匹配所有input元素中类型为file的元素

//【 jQuery选择器之表单对象属性筛选选择器】
//$('input:enabled') 				查找所有input所有可用的（未被禁用的元素）input元素。
//$('input:disabled')				查找所有input所有不可用的（被禁用的元素）input元素。
//$('input:checked')				查找所有input所有勾选的元素(单选框,复选框)
//$('input:selected')				查找所有option元素中,有selected属性被选中的选项

//【jQuery选择器之特殊选择器this】
//$(this)  							当前元素






///////////////【方法】//////////////
//【以下是 在选择器 选择完后 要进行的一些 方法!】

//【 .attr()与.removeAttr() 】
//attr(传入属性名)：获取属性的值
//attr(属性名, 属性值)：设置属性的值
//attr(属性名,函数值)：设置属性的函数值
//.removeAttr( attributeName ) : 为匹配的元素集合中的每个元素中移除一个属性（attribute）

//【 html()及.text() 】(方法)   jQuery的属性与样式之
//$('').html($('').html)       显示出html方法获取到的内容 		.html()是整个html文档结构
//$('').text($('').text)		显示出text方法获取到的内容		.text()是文本内容的合集
//$('').html('')				通过.html()方法替换html结构
//$('').text('')				通过.text()方法替换文本内容

//.val                                   用来读取 或者修改表单里的东西 和html 一样

//.addClass()                            用来添加样式 类
//.removeClass()                         用来删除样式 类

//.toggleClass()                         用来切换样式(会互斥)
//.toggleClass("c",true)                 true会添加"c"的样式     false会删除"c"的样式

//.css("background-color")				 获取背景颜色
//.css("background-color","red")	     设置背景颜色
//.css({								 设置多种样式!
//			"font-size" :"15px",
//			"border"	:"1px solid"	
//			})       


//【插入!】
//append()   			$('A'). append("B")  			A内部往后添加 B内容
//appendTo()				$('B'). appendTo("A")  	    B内容 添加到A内部

//prepend() 		  	$('A'). prepend("B")    		A内部首位置 添加 一个B内容
//prependTo()       $('B).prepend("A")   				B内容 添加到   A内部首位置!

//after()					$('A'). after("B") 				A内容 被 B元素插入到后面
//before()					$('A'). before("B") 			A内容 被 B元素插入到前面
//其实这两个差不多 就是插与被插的关系....】
//insertAfter()   		 $('A'). insertAfter("B") 			A内容插到	B元素后面
//insertBefore()			$('A'). insertAfter("B")			A内容插到 B元素前面


//【删除!】
//empty()     		 $("A").empty () 					A里面的内容被删除 但是A本身还在						
//remove()			$("A").remove()					A全部被删除 包括本身
//empty 是清空内容里面的所有后代节点 不能删除本身这个节点
//remove 是该节点与该节点包含的所有后代同时删除 可以提供一个筛选的表达式 然后删除!
//detach() 			$("A").detach()				A元素暂时隐藏起来(并非删除 数据还保留着!)


//【拷贝!】 【替换!】【包裹!】
//clone()			$("A").clone()						克隆A节点    不克隆事件
//							$("A").chone(true)				克隆A节点 还克隆事件

//【替换!】
//replaceWith()	$("A").replaceWith("B")			在 A这个地方的内容 替换成B的内容
//replaceAll() 	$("B").replaceAll("A")				把 B的内容  替换到  A这个地方的内容

//【包裹!】
//wrap()		$("A").wrap(<div></div>)			给A这个元素添加一个包裹着它的外壳
//wrapAll()	$("A").wrapAll(<div></div>)			给A这个元素的全部  包裹着
//wrapInner()	$("A").wraplnner(<p></p>)		给A这个元素里面添加一个父级包裹

//【删除包裹!】
//unwrap()	$("A").unwrap(<div></div>)		把A这个元素外壳的包裹删除掉!


//【 遍历 】
//children()	$("A").children()				抓取所有 A 元素的 所有子元素
//find()			$("A").find()				抓取所有 A 元素的	所有后代元素
//parent()		$("A").parent()					抓取所有 A 元素的 所有父级元素
//parents() 		$("A").parents()			抓取所有 A 元素的 所有祖辈元素
//closest()		$("A").closest()				抓取所有A元素 包括A元素和一个(符合的)祖辈元素 			
//next() 		$("A").next()					抓取所有A元素 的同辈下一个元素
//prev() 			$("A").prev()					抓取所有A元素 的同辈上一个元素
//siblings()		$("A").siblings()				抓取所有A元素 的同辈的所有元素
//add() 








////////【事件】///////////

//【鼠标事件】
//【 click() 】单击							$("A").click(function{})				元素绑定单击点击方法
//【 dblclick() 】双击						$("A").dblclick(function{})				元素绑定双击点击方法

//【 mousedown 】鼠标按下 		    $("A").mousedown()						
//【 mouseup 】鼠标弹起			 	$("A").mouseup()
//【 mousemove 】鼠标移动            $("A").mousemove()
//【 mouseover 】鼠标移入				$("A").mouseover()
//【 mouseout 】鼠标移出				 $("A").mouseout()

//【 mouseenter 】移入到元素内部				 $("A").mouseenter()
//【 mouseleave 】移出到元素外部		 $("A").mouseleave()
//【 hover 】(移入 移出)				$("A").hover( 移入 , 移出 )			直接定义了 移入和移出的两个方法	
    //【聚焦 失焦】
//【 focusin 】聚焦  					$("A").focusin()	
//【 focusout】失焦 					$("A").focusout()	


    //【表单事件】
//【focus()	】聚焦(不支持冒泡处理)	  $("A").focus()
//【blur() 】失焦(不支持冒泡处理)	  $("A").blur()
//【change()】监听表单的改变		  $("A").change()			文本框一般都在失焦后监听
//【select()】选中内容				 $("A").select()				只监听<input>和<textarea>
//【submit()】捕获提交表达动作		  $("A").submit()		内容里加 return false 可以阻止页面跳转


    //【键盘事件】
//【keydown()】按键落下		        $("A").keydown()				
//【keyup()】按键提起				$("A").keyup()
//【keypress()】监听键盘按键        $("A").keypress()			


    //【事件的绑定和解绑】
//【on()】绑定多事件              $("A").on('click',function(){})		
//【off()】卸载事件			      $("A").off()





//{隐藏显示动画}
//$('A').hide()  		隐藏元素
//$('A').show()  		显示元素
//$('A').toggle()  		显示与隐藏互相切换

//{滑动}
//$('A').slideDown() 	隐藏-下拉显示出来
//$('A').slideUp()   	显示-上卷隐藏起来_
//$('A').slideToggle()  上卷与下拉互相切换

//{淡出动画}
//$('A').fadeOut()		渐渐隐藏
//$('A').fadeIn()		渐渐显示
//$('A').fadeToggle()	渐显与渐隐互相切换
//$('A').fadeTo()		淡入到什么程度的效果

//$('A').animate({})	在{}中填入变化后的效果
//参数: duration		执行动画的时间 

//$('A').stop()			停止动画   .stop(true,true) 跳到动画结束

//{一些数学方法}
//$.each(['','']funtion(){})	遍历对象后使用的方法
//$.inArray('b'.['c'...]) 		在数组中查找b的索引
//$.trim($(''))					去除空格

//$('A').get()					根据索引位置获取目标元素
//$('A').index($('B'))			根据A元素里查找B元素的索引位置  (无参数就选第一个)


















