<?php
  $dbhost = 'localhost:3306';   // mysql服务器主机地址
  $dbuser = 'root';          // mysql用户名
  $dbpass = '';         // mysql用户名密码
$conn = mysqli_connect($dbhost,$dbuser,$dbpass);//把连接的信息赋值
if(!$conn)
{
  die('Could not connect:'.mysqli_error());
}
echo'数据库连接成功!<br>';


////基本的格式都是先把一个要调用的命令给一个变量$xxg
////然后再用mysqli_query(联系主机,我要调用的命令)




////创建数据库(CREATE)(create)
// $xxg = 'CREATE DATABASE RUNOOB';
// $xxgg = mysqli_query($conn,$xxg);
// if(!$xxgg)
// {
//   die('创建数据库失败: '.mysqli_error($conn));
// }
// echo "数据库 RUNOOB 创建成功<br>";


////删除数据库(DROP)
// $xxg2='DROP DATABASE RUNOOB';
// $xxgg2= mysqli_query($conn,$xxg2);
// if(!$xxgg2)
// {
//   die('删除数据库失败: '.mysqli_error($conn));
// }
// echo "数据库 RUNOOB 删除成功<br>";


//选择数据库
mysqli_select_db($conn,'RUNOOB');




////创建数据库的数据表(CREATE TABLE)(create table)
// $xxg3 = "CREATE TABLE runoob_tbl(". //表名
//         "runoob_id INT NOT NULL AUTO_INCREMENT,".//ID
//         "runoob_title VARCHAR(100) NOT NULL,".//标题
//         "runoob_author VARCHAR(40) NOT NULL,".//作者
//         "submission_date DATE,".//提交时间
//         "PRIMARY KEY( runoob_id ))ENGINE=InnoDB DEFAULT CHARSET=utf8;";
//         //主键是(runoob_id)
// $xxgg3 = mysqli_query($conn,$xxg3);
// if(!$xxxg3)
// {
//   die('数据表创建失败:'.mysqli_error($conn));
// }
// echo "数据表创建成功<br>";




// //删除数据库的数据表(DROP TABLE)(drop table)
// $xxg4 = "DROP TABLE runoob_tbl";
// $xxgx4 = mysqli_query($conn,$xxg4);
// if(!$xxxg4)
// {
//   die('数据表删除失败:'.mysqli_error($conn));
// }
// echo "数据表删除成功<br>";



////设置编码 防止中文乱码
mysqli_query($conn,"set names utf8");




////插入数据(SQL INSERT INTO)(sql insert into)
////这里是设置数据
// $runoob_title = '学习python';
// $runoob_author = 'XXG';//RUNOOB.COM
// $submission_date = '2018-06-24';

// $xxg5="INSERT INTO runoob_tbl".
//       "(runoob_title,runoob_author,submission_date)".
//       "VALUES".
//       "('$runoob_title','$runoob_author','$submission_date')";
// //这里是插入方法
// $xxgg5 = mysqli_query($conn,$xxg5);
// if(!$xxgg5)
// {
//   die('无法插入数据:'.mysqli_error($conn));
// }
// echo"数据插入成功<br>";






////查询数据mysqli_query()和 SQL SELECT
////mysqli_fetch_array() 来使用或输出所有查询的数据
$xxg6 = 'SELECT runoob_id,runoob_title,runoob_author,submission_date
         FROM runoob_tbl';
    
$xxgg6 = mysqli_query($conn,$xxg6);
if(!$xxgg6)
{
  die('无法读取数据:'.mysqli_error($conn));
}


echo '<h2>菜鸟教程 mysqli_fetch_array测试<h2>';
echo '<table border="1"><tr><td>教程 ID</td><td>标题</td><td>作者</td><td>提交日期</td></tr>';
while($row = mysqli_fetch_array($xxgg6,MYSQLI_ASSOC))
{
  echo "<tr><td>{$row['runoob_id']}</td>".
       "<td>{$row['runoob_title']}</td>".
       "<td>{$row['runoob_author']}</td>".
       "<td>{$row['submission_date']}</td>".
       "</tr>";
}
echo "</table>";



////读取完内容要释放内存
mysqli_free_result($xxgg6);




////用WHERE(where)来读取指定的文件
$xxg7 = 'SELECT runoob_id,runoob_title,runoob_author,submission_date
         FROM runoob_tbl
         WHERE runoob_author="RUNOOB.COM"';

$xxgg7 = mysqli_query($conn,$xxg7);
if(!$xxgg7)
{
  die('无法读取指定数据:'.mysqli_error($conn));
}

echo'<h2>菜鸟教程 MySQL WHERE 子句测试<h2>';
echo'<table border="1"><tr><td>教程 ID</td><td>标题</td><td>作者</td><td>提交日期</td></tr>';
while($row = mysqli_fetch_array($xxgg7,MYSQLI_ASSOC))
{
  echo"<tr>".
      "<td>{$row['runoob_id']}</td>".
      "<td>{$row['runoob_title']}</td>".
      "<td>{$row['runoob_author']}</td>".
      "<td>{$row['submission_date']}</td>".
      "</tr>";
}
echo'</table>';

////读取完 再次释放内存!!!
mysqli_free_result($xxgg7);



////用UPDATE来更新数据 或者说 更改数据!!!!
$xxg8 = 'UPDATE runoob_tbl  
         SET  runoob_title="学习C/C++"
         WHERE runoob_id=3';

$xxgg8 = mysqli_query($conn,$xxg8);
if(!$xxgg8)
{
  die('无法更新数据:'.mysqli_error($conn));
}
echo'数据更新成功!<br>';



////用 DELETE 来删除数据

$xxg9 = 'DELETE FROM runoob_tbl
         WHERE runoob_id=3';
        
$xxgg9 = mysqli_query($conn,$xxg9);
if(!$xxgg9)
{
  die('无法删除数据:'.mysqli_error($conn));
}
echo'数据删除成功<br>';





////用 LIKE 来筛选指定的数据
$xxg10 = 'SELECT runoob_id,runoob_title,
          runoob_author,submission_date
          FROM runoob_tbl
          WHERE runoob_author LIKE "%COM"';

$xxgg10=mysqli_query($conn,$xxg10);
if(!$xxgg10)
{
  die('无法使用LIKE来读取指定数据:'.mysqli_error($conn));
}
echo'<h2>菜鸟教程 mysqli_fetch_array测试<h2>';
echo'<table border="1"><tr><td>教程 ID</td><td>标题</td><td>作者</td><td>提交日期</td></tr>';
while($row=mysqli_fetch_array($xxgg10,MYSQLI_ASSOC))
{
  echo"<tr>".
      "<td>{$row['runoob_id']}</td>".
      "<td>{$row['runoob_title']}</td>".
      "<td>{$row['runoob_author']}</td>".
      "<td>{$row['submission_date']}</td>";
}
echo'</table>';





////用 ORDER BY 来排列读取的数据 //(order by 按顺序)
$xxg11='SELECT runoob_id,runoob_title,
        runoob_author,submission_date
        FROM runoob_tbl
        ORDER BY submission_date ASC';

$xxgg11 = mysqli_query($conn,$xxg11);
if(!$xxgg11)
{
  die('无法用ORDER BY来读取数据:'.mysqli_error($conn));
}
echo '<h2>菜鸟教程 MySQL ORDER BY 测试<h2>';
echo '<table border="1"><tr><td>教程 ID</td><td>标题</td><td>作者</td><td>提交日期</td></tr>';
while($row = mysqli_fetch_array($xxgg11, MYSQLI_ASSOC))
{
    echo "<tr><td> {$row['runoob_id']}</td> ".
         "<td>{$row['runoob_title']} </td> ".
         "<td>{$row['runoob_author']} </td> ".
         "<td>{$row['submission_date']} </td> ".
         "</tr>";
}
echo '</table>';




////用 GROUP BY //(group by 分组)


////用JOIN
$xxg12 = 'SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a INNER JOIN tcount_tbl b ON a.runoob_author = b.runoob_author';
 
mysqli_select_db( $conn, 'RUNOOB' );
$xxgg12 = mysqli_query( $conn, $xxg12 );
if(! $xxgg12 )
{
    die('无法读取数据: ' . mysqli_error($conn));
}
echo '<h2>菜鸟教程 MySQL JOIN 测试<h2>';
echo '<table border="1"><tr><td>教程 ID</td><td>作者</td><td>登陆次数</td></tr>';
while($row = mysqli_fetch_array($xxgg12, MYSQLI_ASSOC))
{
    echo "<tr><td> {$row['runoob_id']}</td> ".
         "<td>{$row['runoob_author']} </td> ".
         "<td>{$row['runoob_count']} </td> ".
         "</tr>";
}
echo '</table>';




////NULL值处理 (IS NULL)(IS NOT NULL))









////使用事务(不知道怎么用... 哈哈)
mysqli_query($conn,"SET AUTOCOMMIT=0");//设置为不自动提交,因为MYSQL默认立即执行
mysqli_begin_transaction($conn);//开始事务定义

if(!mysqli_query($conn,"insert into runoob_transaction_test (id) values(8)"))
{
  mysqli_query($conn,"ROLLBACK");//判断当执行失败时回滚
}

if(!mysqli_query($conn,"insert inot runoob_transaction_test (id) values(9)"))
{
  mysqli_query($conn,"ROLLBACK");//判断执行失败时回滚
}
mysqli_commit($conn); //执行事务



















// 关闭数据库
mysqli_close($conn);

?>