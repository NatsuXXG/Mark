<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php the_title("") ?></title>

<?php wp_head(); ?>
</head>
<body>
    

<?php get_header()?>

<!-- <h2>这是页面 页</h2> -->

<div class="posts" style="width:1200px; margin:20px auto; padding:20px; border-radius:5px; box-shadow:3px 3px 30px -5px; ">
<?php  if ( have_posts() ) :    while(have_posts()):   the_post();   ?>
        <h1 style="text-align:center;"><?php the_title("") ?></h1>
        <br/>
        <p><?php the_content(); ?></p>
	<?php  endwhile;  ?>
<?php  endif;  ?>

</div>


</body>
</html>

