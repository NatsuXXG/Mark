
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php wp_title(""); ?></title>


<?php wp_head(); ?>
</head>
<body>


<?php get_header() ?>
<!-- <h2> 这里是分类页面</h2> -->
<div style="width:1200px; margin:20px auto; padding:20px; border-radius:5px; box-shadow:3px 3px 30px -5px; text-align:center;">
    <h1><?php wp_title(""); ?></h1>  
</div>
<!-- 文章列表 -->
<?php 
    if(have_posts()){
        while(have_posts()){
            the_post(); 
?>  
    <div class="posts" style="width:1200px; margin:20px auto; padding:30px; border-radius:20px; box-shadow:3px 3px 30px -5px; ">
    <h2 style="letter-spacing:7px;">🔴 🔵 ⚫</h2>
    <br/>
        <h2 style="text-align:center;"> <a href="<?php the_permalink()?>"><?php the_title()?></a> </h2>
        <p style="text-align:center;"><?php the_time('Y年m月d日 h:i') ?></p>
        <div class="post_content" style="padding:18px 0px; text-align:center;"><?php the_excerpt(); ?></div>
        <div style="text-align:center;"><?php the_post_thumbnail('medium'); ?></div>

        <span> <?php the_tags('<span style="padding:4px 14px; border-radius:20px; box-shadow:0px 0px 1px 0px;">' , '</span>  <span style="padding:4px 14px; border-radius:20px; box-shadow:0px 0px 1px 0px;">' , '</span>' ); ?> </span>
        <span style="float:right;"><?php the_category(" "); ?></span>
        
    </div>
<?php
        }
    }
?>



<!-- <?php if( have_posts() ){
        while( have_posts()){
            the_post();
?>
<div class="posts" style="width:1200px; margin:20px auto; padding:20px; border-radius:5px; box-shadow:3px 3px 30px -5px; ">
    <h1><a href="<?php the_permalink()?>"><?php the_title(); ?></a></h1>
    <div><?php the_excerpt(); ?></div>
</div>
<?php
        }
}
?> -->

</body>
</html>