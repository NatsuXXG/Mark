<?php

//开启 feed自动链接 功能
//所谓自动链接功能,就是在网页头元素中,添加一个link元素,而且元素的属性中要有feed地址!

add_theme_support('automatic-feed-links');


//开启 特色图像 功能
add_theme_support('post-thumbnails');


//开启 导航菜单 功能
register_nav_menu('top_nav','顶部导航');



?>