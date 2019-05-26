<?php
    $dbhost = 'localhost:3306';   // mysql服务器主机地址
    $dbuser = 'root';          // mysql用户名
    $dbpass = '';         // mysql用户名密码
    $xxg    = 'xxg';
    $conn = mysqli_connect($dbhost,$dbuser,$dbpass,$xxg);//把连接的信息赋值
    mysqli_query($conn,"set names utf8");//设置编码 防止中文乱码

?>