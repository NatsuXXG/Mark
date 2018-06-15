
$(document).ready(function(){
	//屏蔽别人消息
	$(".main_mid").on('click',".close",function(){
		$(this).parent().remove();
	 })	
	//删除自己评论
	$(".main_mid").on('click',".scpl",function(){
		$(this).parent().parent().remove();
	})
	
	//评论按钮
	$(".main_mid").on('click',".plan",function(){
		var x1=$(this).parent().parent().parent().parent().find(".pinglun").css("display");
		var x2=$(this).parent().parent().parent().parent().find(".pinglunqu").css("display");
		if(x1=="none"){
		$(this).parent().parent().parent().parent().find(".pinglun").css("display","block");
		$(this).parent().parent().parent().parent().find(".pinglunqu").css("display","block");
		}
		else{
			$(this).parent().parent().parent().parent().find(".pinglun").css("display","none");
			$(this).parent().parent().parent().parent().find(".pinglunqu").css("display","none");
		}
		
	})

	//发布框发布东西	
	$(".fabuk3").click(function(){
			var xxg=$(".fabuk textarea").val();//获得发布文本里面的字符串!
			
			if(xxg.length>0 && xxg.length<141){//限制字数!	
			$(".fabuk").after('<div class="xx" id="xx"> <img src="images/岚切.jpg" width="50px" height="50px" alt="头像"> <h4 name="昵称">Natsu谢夏戈</h4><a class="close" href="javascript:;"><!--关闭按钮--><img src="images/关闭.png" width="20px" height="20px"/></a><p class="time">6月8日 23:58 </p><div class="fabu">	<p>'+xxg+'</p></div><div class="fabugnk"><ul><li><a href="javascript:;" style="border:none;">分享</a></li><li><a href="javascript:;">转发</a></li><li><a class="plan" href="javascript:;">评论</a></li><li><a href="javascript:;">点赞</a></li></ul></div><div	class="pinglun" style="display: none"><!--评论框--><img src="images/岚切.jpg" width="40px" height="40px" alt="头像"><textarea></textarea><input class="plan2"   type="submit" value="评论"/></div>');
				//清空输入框
				$(".fabuk textarea").val('');	
				}
			if(xxg.length==0){alert("不能发送空内容!")}
			if(xxg.length>140){alert("超过了字数限制!")}
			 })
	
	//评论框评论东西
	$(".main_mid").on('click',".plan2",function(){
			var xxgg=$(this).prev().val()
			if(xxgg.length>0 && xxgg.length<141){
			$(this).parent().after('<div  class="pinglunqu" user="self"  style="display: block"><!--评论区--><img src="images/岚切.jpg" width="30px" height="30px" alt="头像"><div class="plr"><a name="昵称" href="#">Natsu谢夏戈 :  </a><p class="time">6月8日 23:58 </p></div><div class="pl"><p>'+xxgg+'</p><a href="javascript:;">点赞</a><a href="javascript:;">回复</a><a class="scpl" href="javascript:;" >删除</a></div></div>');
				//清空评论输入框
				$(this).prev().val('');
			}
			if(xxgg.length===0){alert("不能发送空内容!")};
			if(xxgg.length>140){alert("超过了字数限制!")};
	})

	
	
})


