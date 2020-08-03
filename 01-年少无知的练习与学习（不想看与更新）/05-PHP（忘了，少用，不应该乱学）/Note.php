<?php
  $dbhost = 'localhost:3306';   // mysql服务器主机地址
  $dbuser = 'root';          // mysql用户名
  $dbpass = '';         // mysql用户名密码
  $xxg    = 'xxg';
$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$xxg);//把连接的信息赋值


if($_SERVER['REQUEST_METHOD'] == 'POST'){
  if(isset($_REQUEST["bt"])){
    echo"成功";
  }
  else{
    echo"失败";
  }
}

$bt = $_REQUEST["bt"];
$nr = $_REQUEST['nr'];
var_dump($bt);
var_dump($nr);

mysqli_query($conn,"set names utf8");
date_default_timezone_set("Asia/Hong_Kong");
$time  = date("Y年n月j日 H:i:s");

$xxgg = "INSERT INTO Note(bt,nr,time) VALUES('$bt','$nr','$time')";
// var_dump($xxgg);
$list = mysqli_query($conn,$xxgg);
if($list){
   echo "<script>history.go(-1);</script>";
}
else{
  echo "<script>alert('保存失败!')</script>";
}





?>