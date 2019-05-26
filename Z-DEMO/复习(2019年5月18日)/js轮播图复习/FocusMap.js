window.onload=function(){
    var frame = document.getElementsByClassName('frame');//抓取展示框
    var big_box = document.getElementById('big_box');//抓取图片list
    var prev = document.getElementById('prev');//抓取上一步按钮
    var next = document.getElementById('next');//抓取下一步按钮
    var animated = false; //初始化动画不动
    var timer;            //定义一个值 后面要调用


    // 封装动画效果
    function animate(offset){
        // 说明此刻动画真在运行
        animated = true;
        // 设置新的要定义的向左长度 = 原来的向左度 + 传入的长度参数
        var newleft = parseInt(big_box.style.left) + offset  
        // alert(newleft)
        // var xxg = ; //现有的向左度
        var time = 300;//位移总时间
        var int = 10; //位移的间隔时间
        var speed = offset/(time/int); //每次的位移量=传入的长度/次数(总时间/每次时间)

        function go(){
            //在位移方向小于0且现有的向左度大于改变的度 代表照片框向左 整体展示向👉右     或  相反
            if ((speed <0 && parseInt(big_box.style.left)>newleft )||(speed>0 && parseInt(big_box.style.left)<newleft)){
                // 将向左度 = 现有的+每次的位移量
                big_box.style.left = parseInt(big_box.style.left) + speed + 'px';
                // 用倒数器去完成动画
                setTimeout(go,int);
            }
            else{
                // 当动画完成后  动画状态= 关闭
                animated = false;
                big_box.style.left = newleft + 'px';
                // 接下来的是最后一张和第一张的效果处理
                if(newleft > - 800){
                    big_box.style.left = -4000 + 'px';
                }
                if(newleft < -4000){
                    big_box.style.left = -800 + 'px';
                }
            }
        }
        go();

    }

    // 当prev被点下
    prev.onclick = function(){
        if(!animated){
            animate(800);
        }
    }
    // 当next被点下     如果图片没有在运动的时候才去执行
    next.onclick = function(){
        if(!animated){
            animate(-800);
        }
    }

    // 自动播放
    function play() {
        timer = setInterval(function(){next.onclick()},2000);
    }
    function stop() {
        clearInterval(timer);
    }
    frame.onmouseover = stop;
    frame.onmouout = play;
    play();






}