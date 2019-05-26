<?php
  $dbhost = 'localhost:3306';   // mysql服务器主机地址
  $dbuser = 'root';          // mysql用户名
  $dbpass = '';         // mysql用户名密码
  $xxg    = 'xxg';      //数据库名!
$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$xxg);//把连接的信息赋值




$name = $_POST['name'];
$mima = $_POST['mima'];




$xxgg = "SELECT * FROM js where name='$name'";
$xxggg=mysqli_query($conn,$xxgg);
$xxx=mysqli_num_rows($xxggg);
// var_dump($xxx);
if(!$xxx)
{
  echo "<script>alert('用户名或密码错误!'); history.back();</script>";

}
else
{ 
  $num=mysqli_fetch_array($xxggg);
  if($mima==$num['password']){
    echo "<script>location.href='../Mark5.html'</script>";
  }
  else
  {
    echo "<script>alert ('用户名或密码错误!'); history.back();</script>";
  }
}











?>