<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php  bloginfo(); ?></title>
<?php wp_head(); ?>
</head>
<body>
            <!-- 首页   -->

<?php  get_header(); ?>

<div class="main">

        <div class="web-icon-box">
            <ul>
                <a href="https://www.bilibili.com/" target="_blank"><li class="web-icon">
                    <img src="<?php bloginfo('template_directory'); ?>/images/bilibili.png"/>
                    <div class="icon-text">哔哩哔哩</div>
                </li></a>

                <a href="https://www.weibo.com/" target="_blank"><li class="web-icon">
                    <img src="<?php bloginfo('template_directory'); ?>/images/weibo.jpg"/>
                    <div class="icon-text">微博</div>
                </li></a>

                <a href="https://www.zhihu.com/" target="_blank"><li class="web-icon">
                <img src="<?php bloginfo('template_directory'); ?>/images/zhihu.jpg"/>
                    <div class="icon-text">知乎</div>
                </li></a>

                <a href="https://www.youtube.com" target="_blank"><li class="web-icon">
                    <img src="<?php bloginfo('template_directory'); ?>/images/youtube.png"/>
                    <div class="icon-text">YouTube</div>
                </li></a>

                <a href="https://www.facebook.com" target="_blank"><li class="web-icon">
                    <img src="<?php bloginfo('template_directory'); ?>/images/facebook.jpg"/>
                    <div class="icon-text">Facebook</div>
                </li></a>

                <a href="https://www.instagram.com/" target="_blank"><li class="web-icon">
                    <img src="<?php bloginfo('template_directory'); ?>/images/instagram.png"/>
                    <div class="icon-text">Instagram</div>
                </li></a>

                <a href="https://github.com/" target="_blank"><li class="web-icon">
                    <img src="<?php bloginfo('template_directory'); ?>/images/github.png"/>
                    <div class="icon-text">GitHub</div>
                </li></a>

                <a href="https://www.taobao.com/" target="_blank"><li class="web-icon">
                    <img src="<?php bloginfo('template_directory'); ?>/images/taobao.png"/>
                    <div class="icon-text">淘宝</div>
                </li></a>

                <a href="https://www.ithome.com/" target="_blank"><li class="web-icon">
                    <img src="<?php bloginfo('template_directory'); ?>/images/IThome.jpg"/>
                    <div class="icon-text">IT之家</div>
                </li></a>
                
            </ul>
        </div>

    <div class="main-left">
        <h1>rss订阅新闻资讯</h1> 
    </div>
    <div class="main-right">
        <div class="weibo-top-search"><h1>微博热搜</h1></div>
        <div class="baidu-top-search"><h1>实时热搜排行榜</h1></div>
    </div>
</div>


<style>
.main{
    width:1200px;
    min-height:1000px;
    /* background-color:red; */
    margin: 10px auto;
}
/* 常用网站框框 */
.web-icon-box{
    width:90%;
    /* min-height:200px; */
    background-color:rgba(28,28,28,1);
    border-radius:10px;
    margin:0.5%;
    margin-bottom:10px;

    text-align:center;
    box-shadow:3px 3px 30px -5px;
    /* display:none; */
    padding:2% 4.5%;
    overflow:hidden;/* 又是一个margin塌陷*/
}
/* 常用网站框框里面的图标区域  li     1200*90%=1080  1080/9个图标=120px   */ 
.web-icon{
    width:100px;
    height:100px;
    margin:10px;
    /* background-color:pink; */
    float:left;
    border-radius:10px;
    text-align:center;
}
/*  图标*/
.web-icon img{
    display:block;
    width:70px;
    height:70px;
    /* background-color:pink; */
    border-radius:22%;
    margin:0px 15px 10px;
}
/*  名称*/


/*  */
.main-left{
    width:69%;
    min-height:1000px;
    background-color:rgba(28,28,28,1);
    float:left;
    margin:0 0.5%;
    border-radius:10px;

    text-align:center;
    box-shadow:3px 3px 30px -5px;
}
.main-right{
    width:29%;
    min-height:1000px;
    /* background-color:rgba(28,28,28,1); */
    float:right;
    margin:0 .5%;
}
.weibo-top-search{
    width:100%;
    min-height:300px;
    background-color:rgba(28,28,28,1);
    border-radius:10px;
    margin-bottom:10px;

    text-align:center;
    box-shadow:3px 3px 30px -5px;
}
.baidu-top-search{
    width:100%;
    min-height:300px;
    background-color:rgba(28,28,28,1);
    border-radius:10px;
    margin-bottom:10px;
    
    text-align:center;
    box-shadow:3px 3px 30px -5px;
}




</style>

</body>
</html>