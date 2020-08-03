
/*移动设备                      宽度=设备屏幕宽度    初始化的缩放比例 自动适应手机屏幕的宽度 */
<meta name="viewport" content="width=device-width,initial-scale=1.0,shrink-to-fit=no">
/*bootstrap4核心css文件*/
<link href="bootstrap.min.css" rel="stylesheet">
/*bootstrap4核心js文件 在此之前要先加载一个jq文件*/
<script src="bootstrap.min.js"></script>

/* popper.min.js 用于弹窗、提示、下拉菜单 */
<script src="https://cdn.bootcss.com/popper.js/1.12.5/umd/popper.min.js"></script>





/*文本*/
{标题类}
.h1 ~ .h6       [改变字体 成 标题样式]
{对齐类}
.text-left      [左对齐]
.text-center    [中对齐]
.text-right     [右对齐]
{字形类}
.text-lowercase [小写]
.text-uppercase [大写]
.text-capitalize[首字母大写]
{标签}3
<p>             [默认14px; 行高:20px; 底部外边距:10px;]
<small>         [小标题]
<mark>          [标记]
<del>           [删除标记]
<ins><u>        [下划线]
<strong>        [加粗]

/*表格类*/
{表格类}
.table          [添加在<table>]
                        <thead>标题头  <tr>这一行 <th>标题
                        <tbode>t内容   <tr>这一行 <td>内容
.table-striped  [表格格线(条纹表格)]
.table-boder    [表格边框]
.table-bordered [带边框的表格]
.table-dark     [黑色背景表格]
.table-hover    [鼠标移表格时的高亮效果]

.table-small    [较小的表格]
.table-responsive[响应式表格:小于992px会显示滚动条]

/*颜色类*/
{颜色类}
.primary        [蓝色:主要]
.success        [绿色:成功]
.info           [浅蓝色:信息]
.warning        [黄色:警告]
.danger         [红色:危险]
.secondary      [灰色:不重要]
.light          [浅灰色]
.dark           [深灰色]
.white          [白色]
.active         [鼠标悬停时(高亮效果)]
{文本颜色类}
.text-success   [文本颜色:绿色     (以此类推)]
{背景颜色类}
.bg-success     [背景颜色:绿色     (以此类推)]
{表头颜色类}
.thead-success  [表头颜色:绿色     (以此类推)]
{表格底色类}
.table-success  [绿色底色:绿色     (以此类推)]
{提示框颜色}
.alert-success  [底色:绿色  的提示框(以此类推)]

/*图片类*/
.rounded        [圆角图片]
.rounded-circle [椭圆图片]
.img-thumbnail  [缩略图]
.img-fluid      [响应式图片]

.float-left     [图片左对齐]
.float-right    [图片右对齐]


/*按钮类*/
{单个按钮}
.btn            [基本按钮]
.btn-success    [(绿色)按钮]
.btn-outline-success[(绿色边框)按钮]
.btn-lg         [大号按钮]
.btn-sm         [小号按钮]

属性: disabled  [不可点击状态的按钮]
.disabled       [不可点击状态的按钮类 可以给标签的class加上]
{按钮组}
.btn-group      [在几个按钮的包裹 类 加上btn-group 会把这几个按钮变成一组]
.btn-group-vertical[垂直按钮组]
[后缀加上: -lg -sm - xs 按钮大小]


/*下拉菜单*/      按钮组的下拉菜单外包裹是.btn-group   原始的下拉菜单是 .dropdown 
{下拉菜单类}
/*{下拉菜单组(内嵌式)}*/
.dropdown-toggle 和 .dropdown-menu 和 .dropdown-item 
/*想垂直内嵌就写"btn-group-vertical"*/
(
 <div class="btn-group"> 
 <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">下拉</button>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="#">list1</a>
            <a class="dropdown-item" href="#">list2</a>
        </div>
  </div>
)

 /*{下拉菜单组(分离式)}*/
 /*.caret[用这个代替上面的按钮 ]*/
 (<div class="btn-group">
  <button type="button" class="btn btn-primary">
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
     <span class="caret"></span>
  </button>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="#">list1</a>
            <a class="dropdown-item" href="#">list2</a>
        </div>
  </div>
)
{下拉菜单中的分割线}
.dropdown-divider   [在要分割的地方加一个<div> 然后加上这个类]
{下拉菜单中的标题头}
.dropdown-header    [在下拉菜单中加一个<h5> 然后加上这个类]
{下拉菜单中激活状态与禁用状态}
.active   与  .disabled   [都写在下拉菜单里面<a>里 加上这两个类]
{下拉菜单对齐状态}
.dropdown-menu-right[(向右对齐)在下拉菜单的包裹盒子中]

{下拉菜单(上拉菜单)}
.dropup                 [代替.dropdown就可以了]





/*徽章类(Badges)*/
{徽章类}
.badge          [标准徽章<span>中]
.badge-success  [颜色徽章  (以此类推)]
.badge-pill     [💊药丸形状徽章]

/*进度条*/
{进度条}
.progress       [设置进度条的外边框    可以设置高度 style="height:20px;"(也可以不设置)]
.progress-bar   [设置在.progress里面 style="width:70%"]
                [bg-success(背景颜色-成功绿色)]
.progress-bar-striped   [条纹进度条]
.progress-bar-animated  [动画进度条(条纹会动)]


/*分页类*/
{分页类}
.pagination         [在<ul>里写   (可以设置大小 -lg -sm)]
.page-item          [在<ul>的<li>里]
.page-link          [在<ul>的<li>的<a>里]

.active             [(激活状态)]
.disabled           [(不可点击状态 <li>)]

{面包屑导航类}
.breadcrumb         [<ul>]
.breadcrumb-item    [<li>]


/*列表组类*/
{列表组类}
.list-group         [<ul>]
.list-group-item    [<li>或<a>]
.list-group-item-action[鼠标悬停状态]
.list-group-item-success[(背景颜色:成功绿)]

.active             [(激活状态)<li>]
.disabled           [(禁用状态)<li>]


/*卡片类*/
{卡片类}
.card               [(外)卡片组外包裹(在这外包裹组类 还可以设置 '背景颜色:bg-success''字体颜色text-white')]
.card-header        [(头部)写在卡片组里面的一个卡片]
.card-body          [(内容)写在卡片组里面的一个卡片]
    .card-title     [<h1>(内容里面的标题头)]
    .card-text      [<p>(内容里面的文本)]
    .card-link      [<a>(内容里面的链接)]
.card-img-top || .card-img-bottom      [图片在顶部 || 照片在底部]
.card-footer        [(底部)写在卡片组里面的一个卡片]

{文字覆盖图片}
.img-fluid          [写在最外包裹的盒子 表示是文字可以覆盖在图片上的类型]
然后再设置图片           .card-img-top
然后再设置包裹文字的盒子  .card-img-overlay




/*折叠类*/
{标准折叠}
.collapse[先设置一个按钮的数据data-toggle属性是"collapse" 然后数据关联data-target="#demo"]
(<button type="button" class="btn" data-toggle="collapse" data-target="#demo"></button>
 <div id="demo" class="collapse">
    内容
 </div>
)

.show [让默认隐藏改为显示]



{手风琴效果折叠}
/*使用data-parent属性来确保所有折叠元素在指定的父元素下 实现一个折叠选项展示时其他选项隐藏*/
<div id="xxg">[大盒子]
    /* 1 设置第一个卡牌盒子*/
    <div class="card">[卡片盒子]
            /*这个是盒子的头部信息 [data-parent写大盒子] 这个{手风琴效果}最重要的!*/
            <div class="card-header">[卡片盒子头部]      
                <a class="card-link" data-toggle="collapse" href="#xxgg1"> 选项一 </a>
            </div>
            <div id="xxgg1" class="collapse" data-parent="#xxg">
                <div class="card-body">[卡片盒子身体]
                    内容
                </div>
            </div>
    </div>
    /* 2 然后按照上面的步骤写 只要在[data-parent]写上大盒子的id 就可以实现手风琴效果*/
</div>





/*导航类*/
{导航类}
.nav            [<ul>]
.nav-item       [<li>]
.nav-link       [<a>]
.disabled       [不可点击状态]
.active         [激活状态]
{导航对齐}
.justify-content-center [<ul> 导航居中对齐]
.justify-content-end    [<ul> 导航靠右对齐]
{垂直导航}
.flex-column    [<ul> 配合.nav]
{导航等宽}
.nav nav-justified  [<ul>]


/*导航-选项卡类*/
{导航-选项卡类}
.nav .nav-tabs  [<ul>  这个就是设置合成选项卡类型的 其他的内容和导航的一样]

/*导航-胶囊导航*/
{导航-胶囊导航}
.nav .nav-pills [<ul>]

{选项卡和胶囊导航的下拉菜单}
(<li class="nav-item dropdown">
 <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:;"> dropdown</a>
 <div class="dropdown-menu">
    <a class="dropdown-item"></a>
 </div>
 </li>
)

/*********  选项卡切换!!!!!  *********/{{如果要胶囊卡切换 就换成.nav-pills}}
<ul class="nav nav-tabs"     role="tablist">
    <li class="nav-item"> [ 1 : 激活状态 ]
        <a class="nav-link active" data-toggle="tab" href="#xxg1">xxg1</a>   </li>
    <li class="nav-item"> [ 2 ] 
        <a class="nav-link"        data-toggle="tab" href="#xxg2">xxg1</a>   </li>
</ul>
<div class="tab-content">[容器]
    <div id="xxg1" class="container tab-pane active"><br> [ 1 : 容器 切换-窗格 激活状态 ]
        <h3>内容 标题1 </h3>
        <p> 内容 段落1 </p>
    </div>
    <div id="xxg2" class="container tab-pane fade"><br> [ 1 : 容器 切换-窗格 淡入淡出状态 ]
        <h3>内容 标题2 </h3>
        <p> 内容 段落2 </p>
    </div>
</div>
/*****************************************/





/*导航栏*/
{导航栏类}
.navbar                       [<div>或<nav>标准导航栏]
.navbar-expand-xl|lg|md|sm    [导航栏的大小    如果删除这个类的话 就会变成{垂直导航栏}]
.navbar-nav    [<ul>]
.nav-item      [<li>]
.nav-link      [<a>]
{导航栏颜色}(在设置导航栏底色的时候 还要考虑字体的颜色)
.bg-light       [设置背景颜色:灰色 <nav>或<div>]
.navbar-light   [这个的意思是说底色是明亮的  所以字体颜色要是 黑色的]
.navbar-dark    [这个的意思是说底色是暗黑的  所以字体颜色会是 明亮的]

{导航栏上的logo}
.navbar-brand   [<a>]
[除了字体还可以在<a></a>中包括图片]


/*********  导航栏自适应折叠!!!!!  *********/
{小屏幕中 导航栏会折叠起来成一个下拉菜单}
<nav class="navbar navbar-expand-md">{去掉navbar-expand-md就会一直变成小屏幕状态}            
    /*先制作一个按钮 在小屏幕的时候的按钮盒子 盒子里面装着下拉菜单*/
                                 [toggle切换]      [collapse崩溃]           [数据-目标=]
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#xxgg1">
        <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="xxgg1">
        <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link">选项1</a></li>
            <li class="nav-item"><a class="nav-link">选项2</a></li>
            <li class="nav-item"><a class="nav-link">选项3</a></li>
        </ul>
  </div>
  </nav>
/*****************************************/

{导航栏的下拉菜单}(设置一个a按钮 去关联)
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#"  id="navbardrop" data-toggle="dropdown"> 下拉菜单 </a>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Link 1</a>
        <a class="dropdown-item" href="#">Link 2</a>
        <a class="dropdown-item" href="#">Link 3</a>
    </div>
</li>




{导航栏的表单搜索栏}
.form-inline        [写在<form>]
.form-control       [写在<input>]

{输入框前的小标签}
.input-group-addon  [<span>       和<input>标签一起被<div class="input-group">包裹着 然后再被<form>包裹]

{导航栏内文本}
.navbar-text        [<span>]

{{{固定导航栏!!!!}}}
.fixed-top          [<nav>固定在顶部]
.fixed-bottom       [<nav>固定在底部]




/*表单类*/
{表单类}
{堆叠表单}
.form-group         [(输入表单) 的包裹壳     写在最外边的包裹层<div>] [其实最外层是<form>]
.form-control       [(输入表单) 的基础样式]

.form-check         [(复选框)   的包裹壳]
.form-check-label   [(复选框)   <label>]
.form-check-input   [(复选框)   的基础样式]

{内联表单}
.form-inline        [水平制表<from>                     没错 这次就真的写在最外层的<form>上了]

/*表单控件*/
<label for="sel1">表单-下拉菜单:</label>
<select class="form-conterol" id="sel1">
    <option>1</option>
    <option>2</option>
    <option>3</option>
</select>






/*自定义表单*/
{自定义复选框}
(先设置父元素)
.custom-control和.custom-checkbox  [<div>]
.custom-control-input              [(输入框(复选框)的类)]
.custom-control-label              [(label文本)]
{自定义单选框}
(一样先设置父元素)
.custom-control和.custom-radio     [<div>]
.custiom-control-input             [(输入框(单选框)的类)]
.custom-control-label              [(label文本)]
{水平显示}
.custom-control-inline             [<div>在外部元素]
{自定义选择菜单}
.custom-select                     [<select> (-sm -lg)]
{自定义滑块控件}
.custom-range                      [<input> type="range"]
{自定义文件上传控件}
(父元素):
.fustom-file                       [<div>]
.custom-file-input                 [<input>]









/*********  Bootstrap轮播图!!!!!  *********/
{轮播图}{carousel}
<div id="xxg" class="carousel slide" data-ride="carousel">

    [指示符]
    <ul class="carousel-indicators">
        <li data-target="#xxg" data-slide-to="0" class="active"></li>
        <li data-target="#xxg" data-slide-to="1"></li>
        <li data-target="#xxg" data-slide-to="2"></li>
    </ul>

    [轮播图片]
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="">
        </div>
        <div class="carousel-item">
            <img src="">
        </div>
        <div class="carousel-item">
            <img src="">
        </div>
    </div>

    [左右切换按钮]
    <a class="carousel-control-prev" href="#xxg" data-slide="prev">
      <span class="carousel-control-prev-icon">
    </a>   
    <a class="carousel-control-next" href="#xxg" data-slide="next">
      <span class="carousel-control-next-icon">
    </a>


</div>
/*****************************************/
{轮播图上添加描述}
在每个<div class="carousel-item">内添加
<div class="carousel-caption">





/****************  模态框  ****************/
{模态框}{modal}
[先设置一个 打开模态框的按钮]
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#xxgg">
</button>


[模态框main]
<div class="modal fade" id="xxgg">
    <div class="modal-dialog">[..对话 在这里可以加(.modal-sm)控制大小]
        <div class="modal-content">[..内容]


        [模态框头部]
        <div class="modal-header">
            <h4 class="modal-title">模态框头部</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        [模态框主体]
        <div class="modal-body">
            模态框内容...
        </div>

        [模态框底部]
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
        </div>




        </div>
    </div>
</div>
/*****************************************/




/* 提示类 */
{小提示类}(鼠标移到显示)(移走消失)
[先创建小提示框]
<a href="#" data-toggle="tooltip" title="提示内容">
    (属性: data-placement="top"  设置提示出现的位置)
[在jq里写]
    $('[data-toggle="tooltip"]').tooltip();



{弹出框类}(鼠标点击出现)(默认再点多一次就消失)
[一样先 创建弹出框]
<a href="#" data-toggle="popover" title="标题" datacontent="内容">
    (属性: data-placement="top"  设置提示出现的位置)
[在jq里写]
    $('[data-toggle="popover"]').popover();

[[[设置data-trigger="focus"]点击外部元素关闭弹出框]]
[[[设置data-trigger="hover"]移到显示,移走消失]]




/************** 滚动监听(Scrollspy) ****************/
[创建滚动监听]
/*需要设置相对定位*/
body{
    position:relative;
}
[可滚动区域]
    /*(数据-监听="滚动") (数据-目标="导航栏类") (数据-偏移量="50")*/
<body data-spy="scroll" data-target=".navbar" data-offset="50">

    [设置导航栏 的<a>标签的href]
<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="#xg1"> xg1 </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#xg2"> xg2 </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#xg3"> xg3 </a>
        </li>
    </ul>
</nav>

    [下面是内容部分]
    <div id="xg1" class="container-fluid bg-success" style="padding:70px 0"
        <h1>标题1</h1>
        <p>内容</p>
    </div>
    <div id="xg2" class="container-fluid bg-success" style="padding:70px 0"
        <h1>标题2</h1>
        <p>内容</p>
    </div>
    <div id="xg3" class="container-fluid bg-success" style="padding:70px 0"
        <h1>标题3</h1>
        <p>内容</p>
    </div>
</body>
/*******************************************************/



/* 小公举 (小工具)*/
{边框}
.border             [可以设置边框]
{边框颜色}
.boeder-success     [设置边框颜色]
{圆角效果}
.rounded            [设置圆角效果]
((-top)(-right)(-bottom)(-left) (圆形-circle) (没有圆角-0))
{浮动}
.float-left         [左浮动]
.float-right        [右浮动]
((float-sm-right)设置什么尺寸的时候浮动[响应式浮动])
{居中对齐}
.mx-auto            [居中对齐]
{宽度}
.w-25               {宽度:25的意思 还可以调的}
{高度}
.h-25               {高度:25 和宽度一样}






/* 容器 容器!*/
{容器类}
.container[固定宽度支持响应布局的容器]
.container-fluid[100%宽度]

{网格类}
.col   [所有设备]
.col-sm[=>576px]
.col-md[=>768px]
.col-lg[=>992px]
.col-xl[=>1200px]


{超大屏幕类}
.jumbotron      [居中的博客大标题]
.jumbotron-fluid[全屏的博客大标题]


{信息提示框类}
.alert              [提示框]

.alert-dismissable  [关闭提示框]
(<button type="button"  class="close" data-dismiss="alert">&times;</button>)
/*&times;   是X的HTML实体字符 表示关闭操作*/

.fade .show         [提示框关闭 淡出淡入的效果]




//////////*  Bootstrap4 的重中之重  */////////
//////////*  弹性盒子(flexbox)布局  */////////
.d-flex             [弹性盒子]
.d-inline-flex      [同一行的弹性盒子容器]

.flex-row           [(默认)子元素水平显示]
.flex-row-reverse   [右对齐显示]  

.flex-column        [(垂直显示)]
.flex-colum-reverse [翻转垂直显示]

{内容排列}
.justify-content-*  [*]
(start  (默认))
(end    (靠右))
(center (居中))
(between(之间))
(around (围绕))

{等宽}
.flex-fill          [加在.d-flex盒子里面的<div>盒子]

{扩展}
.flex-grow-1        [扩展这个类的盒子 去补充 大盒子剩余的空间]

{排列}
.order-1  (1~12)    [按数字来排列盒子]

{外边距}
.mr-auto            [<小盒子>设置右边外边距:auto]
.ml-autl            [设置左边外边距:auto]

{包裹}
.flex-nowrap        [(默认)单行]
.flex-wrap          [多行]
.flex-wrap-reverse  [多行翻转]

{内容对齐}
.align-content-*    [<外边的大盒子> 控制垂直方向上如何堆叠子元素]

((-start)默认)
((-eng)  靠后)
((-center)垂直居中)
((-around)行与行之间均匀)
((-stretch)利用盒子高度填充满)



{子元素对齐}
.align-items-*      [<外边的大盒子> 设置单行子元素 ]

((-start)默认)
((-eng)  靠后)
((-center)垂直居中)
((-around)行与行之间均匀)
((-stretch)利用盒子高度填充满)

{指定子元素对齐方式}
(刚刚上面那些都是放在外边的大盒子的 指定了所有的子元素
现在我们要单单指定盒子里面的一个子元素来实现各种对齐方式)

.align-self-*       [里面的<小盒子>]







/*多媒体对象*/
{基础多媒体对象}
.media [外盒子] 和 .media-body [里盒子]
(外盒子 包裹着一个图片和一个(.media-body内容盒子))

{多媒体嵌套}
可以在.media-body里面嵌套[多媒体对象]

{(图片)显示在右边}
(外盒子 先写(.media-body内容盒子) 再加<img>设置图片)

{(图片)定位}
.align-self-*       [<img>]
(-start)            [(默认)顶部]
(-center)           [垂直居中]
(-end)              [(尾部)底部]












/**/
【】

