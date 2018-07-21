<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>测试一下3</title>
</head>

<body>   
  
  <?php
  // 定义变量并默认设为空值
    $nameErr = "";
    $name = "";

    // 服务器   [请求 的 方法] ==  POST   (就是看看有没有按下提交按钮)
  if($_SERVER["REQUEST_METHOD"] == "POST"){

    // 检查 得到的这个"name" 是不是空值
    if(empty($_POST["name"])){
      // 如果没写东西就提示要写东西
        $nameErr = "名字是必填项";
    }else{
      // 如果有写东西就送去"test_input"这个方法检测
      $name = test_input($_POST["name"]);

      // 如果 $name 不是 正则表达式 这样的话 
      if(!preg_match("/^[a-zA-z]*$/",$name)){
        $nameErr ="只允许字母和空格";
        $name="";
      }
    }
  }

  
  // 下面写一个错误报告的方法
  function test_input($data){
    // trim是去除不必要的字符 比如空格 tab等
    $data = trim($data);
    // stripslashes是去除反斜杠
    $data = stripslashes($data);
    // htmlspecialchars是把符号返回到真正的符号原型
    $data = htmlspecialchars($data);
    
    // 然后返回出去
    return $data;
  } 
  ?>  



        <!-- 下面是一个简单的表格 -->  <!--  htmlspecialchars()-->
  <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>"> 

    名字 : <input type="text" name="name" value="<?php echo $name ?>" >
    
    <span> <?php echo $nameErr; ?> </span> <!-- 显示错误报告 -->
    <br>
    <input type="submit" value="提交">
    <br>
  </form>

  <?php
    echo  $name;
  ?>
</body>
</html>