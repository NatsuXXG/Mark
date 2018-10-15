<?php
 $dbhost = 'localhost:3306';   // mysql服务器主机地址
 $dbuser = 'root';          // mysql用户名
 $dbpass = '';         // mysql用户名密码
 $xxg    = 'xxg';
 $conn = mysqli_connect($dbhost,$dbuser,$dbpass,$xxg);//把连接的信息赋值
 mysqli_query($conn,"set names utf8");//设置编码 防止中文乱码

 $btt="SELECT * FROM Note";         //查询标题

 $id = $_POST['xxx'];

 $xxgg = "SELECT * FROM Note WHERE id='$id'";
 $xxgg2=mysqli_query($conn,$xxgg);
 $arrr=mysqli_fetch_array($xxgg2);
 echo "标题:".$arrr['bt'];
 
?>