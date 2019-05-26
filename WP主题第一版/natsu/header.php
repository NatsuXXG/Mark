<link rel="stylesheet" href="style.css">


<!--   顶部栏   -->
<div class="top-null"></div>
<div class="fixed">
    <div class="top-nav">
        <div class="top-menu">
            <!-- 顶部logo -->
            <div class="logo"  >
                
               <!-- <h1 style="color:rgb(28,28,28); line-height:80px; text-align:center; font-size:44px;">N<h1> -->
            </div>
            <!-- 搜索栏 -->
            <div class="search-region">                  
                <!-- <?php get_search_form(); ?> --> 
                <!-- 谷歌的               -->
                <!-- <form class="search-box" action="http://www.google.com/search" target="_blank" method="get">
                    <div class="search-logo">🍥</div>
                    <input type="text" name="q" class="search-input" autocomplete=off>
                    <input type="submit" value="🍭" class="search-btn"> 
                </form> -->

                <!-- 百度的 -->
                <form class="search-box" action="http://www.baidu.com/s?" target="_blank" method="get">
                    <a href="javasrcipt:;" class="search-logo">百度</a>
                    <input type="text" name="word" class="search-input" autocomplete=off>
                    <input type="submit" value="🍭" class="search-btn"> 
                </form> 

            </div>
        </div>
        <!-- 右边装饰红绿灯 -->
        <div class="GYR">
            <span style="background-color:rgb(39,201,63);"></span>
            <span style="background-color:rgb(255,189,46);"></span>
            <span style="background-color:rgb(255,95,86);"></span>
        </div>        
    </div>
</div>

<!-- 侧边 主导航栏 菜单栏  -->
 <div class="menu">
<?php wp_nav_menu(array(
        'link_before' =>'<h1 style="margin:0 10px;">',
        'link_after' => '</h1>',
    )); ?>
</div>

<a class="go_top" href="#"><h1>👆</h1></a>    

<style>
/* 顶部栏 */
.top-null{ width:100%;  height:100px;  }
.fixed{
    position:fixed;
    top:0;
    width:100%; 
    height:100px; 
    border-radius:0 0 15px 15px;
    background-color:black; 
    z-index:999;
}
.top-nav{
    width:100%; 
    height:100px; 
    border-radius:15px;
    background-color:rgba(28,28,28,1); 
    /* color:rgba(253,52,124,0.9);  */
    box-shadow:3px 3px 30px -5px;

    overflow:hidden;
}
.top-menu{
    width:100%;
    height:100px;
    margin:auto;
    /* background-color:pink; */
    overflow:hidden /*这个用来触发bfc 防止margin塌陷*/
}
.logo{
    width:80px;
    height:80px;
    line-height:100px;
    background-color:pink;
    border-radius:25%;
    margin:10px;
    float:left;
    
}
/* 搜索框 */
.search-region{
    width:600px;
    height:40px;
    margin:30px auto;
    background-color:rgba(18,18,18,1);
    border-radius:4px;
    overflow:hidden;
}
.search-logo{
    width:60px;
    line-height:40px;
    font-size:20px;
    float:left;
    color:rgb(277,277,277);
    text-align:center;
    margin:0 10px;
}
/* 搜索框的输入框 */
.search-input{
    width:420px;
    height:40px;
    padding-left:10px;
    background-color:rgba(18,18,18,1);
    /* border-radius:8px; */
    border-color:rgba(28,28,28,1);
    border-top:none;
    border-bottom:none;
    font-size:20px;
    float:left;
    color:pink;
}
.search-btn{
    width:60px;
    background:none;
    border:none;
    line-height:40px;
    font-size:24px;
    float:left;
    margin:0 10px;
    text-align:center;
    cursor:pointer;  
}
input:focus{
    outline: none;
}
/* 装饰红绿灯 */
.GYR{
    width:330px;
    height:100px;
    position:absolute;
    right:0;
    top:0;
}
.GYR span{
    display: block;
    width:50px;
    height:50px;
    border-radius:50%;
    float:left;
    margin:25px;
}

/* 侧边主菜单栏 */
.menu{
    width:80px;
    /* background-color:blue; */
    position:fixed;
    top:132px;
    right:100px;
    z-index:997;
}
.menu li{
    width:80px;
    height:80px;
    line-height:80px;
    text-align:center;
    /* float:left; */
    list-style-type:none;
    overflow:hidden;
    margin:10px 0;
    background-color:rgba(28,28,28,1);
    border-radius:10px;
    box-shadow:3px 3px 30px -5px;
}

.menu li:hover,
.go_top:hover
{
    box-shadow:0 0 50px -2px;
}
/* 回到顶部 */
.go_top {
    width:80px;
    height:80px;
    line-height:80px;
    position:fixed;
    bottom:100px;
    right:100px;
    text-align:center;
    background-color:rgba(28,28,28,1);
    border-radius:10px;
    color:black;
    box-shadow:3px 3px 30px -5px;

    z-index:999;
}


/* 隐藏滚动条! */
body::-webkit-scrollbar{ 
	display: none;
}

body{ background-color:rgb(18,18,18);  }
h1,h2,h3,h4,h5,h6,p{color:rgb(277,277,277); }
li{ list-style-type:none;}
*{ margin:0;padding:0; }
a{ text-decoration:none; color:white; }  
</style>
