<?php
    // 调用php的调用数据库
    require_once('conn.php');
    
    $bname=$_POST['bname'];
    echo "<script> alert('$bname')</script>" ;
    $del="DELETE FROM Note WHERE id='$bname'";
    $dell=mysqli_query($conn,$del);
    if($dell){
        echo "<script> alert('删除成功!')</script>" ;
    }
    else{
        echo "<script> alert('删除失败!')</script>" ;
    }
    

?>