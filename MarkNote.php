<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Note</title>
  <link href="/css/Note.css" rel="stylesheet" type="text/css">
  <script src="jQuery/jquery-3.3.1.js" type="text/javascript"></script>
  <script src="/js/Note.js" type="text/javascript"></script>
</head>
<body>
   
  <!-- 顶部导航栏 -->
  <div class="top_fk">
    <div class="top_menu">
        <ul>
          <li class="top_x">Note</li>
        </ul>
    </div>
  </div>

  <!-- 身体 -->
  <div class="main">
    <!-- 左边菜单栏 -->
    <div class="left">
      <div class="mp">
        <img src="images/默认头像.jpg">
        <a>用户名</a>
      </div>
      <a class="add" href="javascript:;">写日志</a>

      <div class="note-menu">
        <ul>
        <?php
        $dbhost = 'localhost:3306';   // mysql服务器主机地址
        $dbuser = 'root';          // mysql用户名
        $dbpass = '';         // mysql用户名密码
        $xxg    = 'xxg';
        $conn = mysqli_connect($dbhost,$dbuser,$dbpass,$xxg);//把连接的信息赋值
        mysqli_query($conn,"set names utf8");//设置编码 防止中文乱码

        $btt="SELECT * FROM Note";         //查询标题
        $bbtt=mysqli_query($conn,$btt);
        while($arr = mysqli_fetch_array($bbtt))
        {
        ?>
          <a href="javascript:;" id="<?php echo $arr['id']?>"><?php echo $arr['bt']  ?></a>
          <?php } ?>
        </ul>
      </div>
    
    </div>

         
    <!-- 日志 -->
    <div class="note">
       <?php
        
        @$id=$_GET['xxx'];
        if(!$id){
          $id=1;
        }
        // echo "<script> alert('$id'); </script>";
        $xxgg = "SELECT * FROM Note WHERE id='$id'";
        $xxgg2=mysqli_query($conn,$xxgg);
        $arrr=mysqli_fetch_array($xxgg2);
       ?>    
       
        <h1><?php echo $arrr['bt'] ?></h1>
        <span><?php echo $arrr['time'] ?></span>
        <p><?php echo $arrr['nr'] ?></p>
        
        
    </div>
  </div>



  <!-- 输入框 -->
  <div class="srk_fk">
    <div class="srk">
      <div class="srk_gb">
        <a id="a1" href="javascript:;"></a>
        <a id="a2" href="javascript:;"></a>
        <a id="a3" href="javascript:;"></a>
      </div>
      <form method="POST" action="/PHP/Note.php">
        <textarea class="bt" name="bt" placeholder="标题"></textarea>
        <textarea class="nr" name="nr" placeholder="写下你的日记吧!"></textarea>
        <span class="nrr">0</span><p>/3000</p>
        <input type="submit" value="保存日记" class="sub">
      </form>
    </div>
  </div>
</body>



</html>