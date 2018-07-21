<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Note6</title>
        <link rel="stylesheet" href="css/Mark6.css" type="text/css">
        <script src="jQuery/jquery-3.3.1.min.js" type="text/javascript"></script>
        <script src="js/Mark6.js" type="text/javascript"></script>
	</head>
	<body> 
        
        <!-- 导航栏 浮空盒子-->
        <div class="navbar_fixed">
            <!-- 导航栏盒子 -->
            <div class="navbar">
                 <!-- 名片 -->        
                <div class="mp">
                    <img src="images/默认头像.jpg">
                    <a>用户名</a>
                </div>

                <!-- 导航 -->
                <ul>
                    <li><a href="Mark6.html">主页</a></li>
                    <li><a href="MarkNote.php">Note</a></li>
                    <li><a href="javascript:;">音乐</a></li>
                    <li><a href="javascript:;">视频</a></li>
                    <li><a href="javascript:;">游戏</a></li>
                    <li><a href="javascript:;">画廊</a></li>
                    <li><a href="javascript:;">直播</a></li>
                </ul>
            </div>
        </div>

        <!-- 身体主要 -->
    <div class="main">
        <!-- 左边 -->
            <div class="main_left">
          <!-- 添加日记按钮和日记菜单 -->
            <a class="add" href="javascript:;">Add Note</a>
                <!-- 菜单 -->
                <div class="note-menu">
                    <ul>
                    <?php
                    $dbhost = 'localhost:3306';   // mysql服务器主机地址
                    $dbuser = 'root';          // mysql用户名
                    $dbpass = '';         // mysql用户名密码
                    $xxg    = 'xxg';
                    $conn = mysqli_connect($dbhost,$dbuser,$dbpass,$xxg);//把连接的信息赋值
                    mysqli_query($conn,"set names utf8");//设置编码 防止中文乱码

                    $btt="SELECT * FROM Note order by id desc";         //查询标题
                    $bbtt=mysqli_query($conn,$btt);
                    while($arr = mysqli_fetch_array($bbtt))
                    {
                    ?>
                    <a href="Note6.php?xxx=<?php echo $arr['id']?>" id="<?php echo $arr['id']?>"><?php echo $arr['bt']  ?></a>
                    <?php } ?>
                    </ul>
                </div> 
            </div>
          <!-- 中间 展示-->
            <div class="main_mid">
                    <div class="note"> 
                        <?php
                        @$id=$_GET['xxx'];
                        if(!$id){ $id=1; }
                        $xxgg = "SELECT * FROM Note WHERE id='$id'";
                        $xxgg2=mysqli_query($conn,$xxgg);
                        $arrr=mysqli_fetch_array($xxgg2);
                        ?>    
                        <a href="javascript:;" class=abc name="<?php echo $arrr['id'] ?>">删除</a> 
                        <h1><?php echo $arrr['bt'] ?></h1>   
                        <span><?php echo $arrr['time'] ?></span>
                        <p><?php echo $arrr['nr'] ?></p> 
                         
                    </div>
                    <!-- <div class="text">123</div> -->
                    
            </div>

            <div class="main_right">
                <div class="main_right_fk">
                </div>
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
        <textarea class="bt" name="bt" placeholder="标题(10字之内)"></textarea>
        <textarea class="nr" name="nr" placeholder="写下你的日记吧!"></textarea>
        <span class="nrr">0</span><p>/3000</p>
        <input type="submit" value="保存日记" class="sub">
      </form>
    </div>
  </div>


	</body>
</html>