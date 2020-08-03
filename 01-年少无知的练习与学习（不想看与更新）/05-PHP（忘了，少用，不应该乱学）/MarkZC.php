<?php
  $dbhost = 'localhost:3306';   // mysql服务器主机地址
  $dbuser = 'root';          // mysql用户名
  $dbpass = '';         // mysql用户名密码
  $xxg    = 'xxg';
$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$xxg);//把连接的信息赋值
if(!$conn)
{
  die('Could not connect:'.mysqli_error());
}
echo'数据库连接成功!<br>';





$fname = $_POST['fname'];
$fmima = $_POST['fmima'];
$phone = $_POST['phone'];



//名字
$ffname="SELECT * FROM js WHERE name='$fname'";
$fffname=mysqli_query($conn,$ffname);
$ffffname=mysqli_num_rows($fffname);//有多少条!
if($ffffname)
{
  echo '用户名存在!';
}
else
{
  $list="INSERT INTO js(name,password,phone) VALUES ('$fname','$fmima','$phone')";
  // var_dump($list);
  $xxgg=mysqli_query($conn,$list);
  if($xxgg)
  {
    echo '注册成功';
    echo "<script>window.location.herf('Mark登录.html')</script>";
  }
  else
  {
    echo '注册失败';
  }
}

?>




















