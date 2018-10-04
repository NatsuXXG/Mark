window.onload=function(){
    var box1 = document.getElementsByClassName('box1');
    var box2 = document.getElementsByClassName('box2');
    var buttons = document.getElementsByClassName('button_box');
    
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    var animated = false;//判断动画是否在动
    var timer;

    // 先封装一个换图片函数 并且动画函数
    function animate(offset){
        animated = 1;
        var oldleft = parseInt(box2.style.left);
        var newleft = oldleft + offset
        var time    = 300;//位移总时间
        var interval= 10; //位移间隔时间
        var speed   = offset/(time/interval);//每次位移量

        function go(){
            if((speed<0 && oldleft > newleft) || (speed>0 && oldleft < newleft))
            {
                list.style.left = oldleft + speed + 'px';
                setTimeout(go,interval);
            }
        }
    }
}