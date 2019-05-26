
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php wp_title("") ?></title>


<?php wp_head(); ?>
</head>
<body>
    
<!-- 头顶 -->
<?php get_header() ?>

<!-- <h2 style="text-align:center;">这是详情页(single.php)</h2> -->



<?php  if ( have_posts() ) :   ?>
	<?php  while(have_posts()): ?>
		<?php  the_post();   ?>
			<div class="post" style="width:1200px; margin:40px auto; padding:50px; border-radius:10px; box-shadow:3px 3px 30px -5px;">
				<h1 style="text-align:center;"><?php  the_title(); ?></h1>
				<div style="text-align:center;"><h4> <?php   the_time("Y年m月d h:i"); ?></h4> <span>作者 : <?php the_author()  ?></span></div>

				<div><?php the_content(); ?></div>
			</div>
	<?php  endwhile;  ?>
<?php  endif;  ?>








</body>
</html>
