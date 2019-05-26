<?php
//设置时区 亚洲/香港!
//也可以用date_default_timezone_set('PRC'); PRC是中国人民共和国
date_default_timezone_set("Asia/Hong_Kong");
echo date("Y年m月d日");
echo "<br>";
echo date("Y年m月j日");//j 没有前导零
echo "<br>";
echo date("Y年n月j日");//n 没有前导零
echo "<br>";
echo date("星期:l");//英文的
echo "<br>";
echo date("星期N");//中文的
echo "<br>";
echo date("今年过了z天");
echo "<br>";
echo date("今天过了W周");
echo "<br>";
echo date("现在是上午还是下午? : a");
echo "<br>";
echo date("现在是上午还是下午? : A");
echo "<br>";
echo date("现在的小时时间: G, g, H, h,");
echo "<br>";
echo date("现在的时间: H:i:s:u");//u是毫秒
echo "<br>";
echo date("本机所在时区:T");
echo "<br>";


?>