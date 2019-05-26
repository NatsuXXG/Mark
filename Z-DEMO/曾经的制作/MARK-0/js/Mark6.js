$(document).ready(function(){
    // 切换写日志
    $(".main").on('click',".add",function(){
      $(".srk_fk").css("display","block");
    })
    $(".srk_fk").on('click',"#a1",function(){
      $(".srk_fk").css("display","none");
    })
  
  
    //检查输入框有没有填写!
    $(".sub").on('click',function(){
      var bt = $(".bt").val().length;
      var nr = $(".nr").val().length;
      if(bt>10 || nr>3000){
        alert('你的"标题"或"内容"过长了哦!');
        return false;
      }
      if($(".bt").val()=="" && $(".nr").val()!=""){
        alert('你还没有写 "标题" 哦!');
        return false;
      }
      if($(".nr").val()=="" && $(".bt").val()!=""){
        alert('你还没有写 "内容" 哦!');
        return false;
      }   
      if($(".nr").val()=="" && $(".bt").val()==""){
        alert('你 "标题" 和 "内容" 都没有写哦 ! (๑ŐдŐ)b ');
        return false;
      }
      else{
        alert("保存日记成功了!");
        //  $('.nr').val('');
        //  $('.bt').val('');
      }
    })
  
    //监听文本框里面的字数!
    $(".nr").keyup(function(){
      var i = $(".nr").val().length;
      $(".nrr").html(i);
      //如果超过了 字就变红色
      if(i>3000){
        $(".nrr").css("color","red");
      }//否则就变回黑色
      if(i<=3000){
        $(".nrr").css("color","black");
      }
    })
    $(".nr").mousemove(function(){
      var i = $(".nr").val().length;
      $(".nrr").html(i);
      //如果超过了 字就变红色
      if(i>3000){
        $(".nrr").css("color","red");
      }//否则就变回黑色
      if(i<=3000){
        $(".nrr").css("color","black");
      }
    })
  
  




  
  //看看那个文章的id被按下
  //ajax:onreadystatechange和onload 的区别
  // $(".note-menu").on('click',"a",function(){
  //     var id = $(this).attr("id");
    // location.href="Note6.php?xxx="+id;
    

  //   $.post("../XXG.php",{xxx:id},
  //   function(data,status){
  //     alert("数据: " + data + "\n状态: " + status);
  //   }
  // );


    // //声明XMLHttpRequest对象
    // var xxg=new XMLHttpRequest();
    // //open
    // xxg.open("GET","../Note6.php,true);

    //  xxg.onreadystatechange=function()
    //  {  //readyState状态码        status HTTP状态码
    //    if(xxg.readyState==4 && xxg.status==200)
    //    {
    //     // $('.text').html(this.responseText);
    //     console.log(xxg.responseText);
    //   }
    //   // console.log("READYSTATE: ",xxg.readyState);
    // }
   
    // // xxg.onload = function(){ 
    // //   console.log(this.responseText);
    // // }


    // //发送请求
    // xxg.send();


    
  // })  
  
  $('.main_mid').on("click",".abc",function(){
    var xxg=confirm("是否要删除此日记?");
    if(xxg==true)
    {
      var  name=$(this).attr("name");
      $.post("../PHP/deleteNote.php",{bname:name});
    }
    else
    {
      return ;
    }
  })  
  
  
  
  
  
  
  



  
  })
  