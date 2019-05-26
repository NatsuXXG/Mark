<?php
  $name=$_POST["name"];
  $mima=$_POST["mima"];
  echo $name;
  echo $mima;
  $txt=array(
    $name=>$mima 
  );
  $html=$name.".html";
  
  $fine=fopen("list.txt","a");
  fwrite($fine,var_export($txt, true));
  fclose($fine);
 

?>
