window.onload=function(){
    var container = document.getElementById('container');
    var list      = document.getElementById('list');
    var buttons   = document.getElementById('buttons').getElementsByTagName('span');
    var prev      = document.getElementById('prev');
    var next      = document.getElementById('next');
    var index     = 1;
    var animated   =  false;//判断动画是否在动
    var timer ;

    // 先用遍历消除所有的on 然后在给相对的点 on
    function showButton(){
        for( var i = 0 ; i < buttons.length ; i++){
            if(buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index-1].className = 'on';
    }

    // 封装一个换图片的函数 并且动画函数
    function animate(offset){
        animated = true;
        var newleft = parseInt(list.style.left) + offset  
        var time    = 300;//位移总时间
        var interval= 10 ;//位移间隔时间;
        var speed   = offset/(time/interval);//每次的位移量

        function go(){
            if ((speed<0 && parseInt(list.style.left) >newleft) ||( speed>0 && parseInt(list.style.left) < newleft)){
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go,interval);
            }
            else{
                animated = false;
                list.style.left = newleft + 'px'
                if(newleft > -1194){
                    list.style.left  = -5970 + 'px'
                }
                if( newleft < -5970){
                    list.style.left  = -1194 + 'px'
                }
            }
        }

      go();  
        
    }

    // 当点击按钮的时候就去调用换照片函数
    next.onclick = function(){
        if(!animated){
            if(index==5){
                index=1;
            }
            else{
                index += 1;
            }
            showButton();
            animate(-1194);
        }
    }
    prev.onclick = function(){
        if(!animated){
            if(index==1){
                index=5; 
            }
            else{
                index -= 1;
            }
            showButton();
            animate(1194);
        }   
    }


    // 遍历看看那个按钮被按下了 就去到对应的图片 调用函数
    for (var i = 0 ; i <buttons.length; i++){
        buttons[i].onclick=function() {
            if(this.className =='on'){
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset  = -1194 * (myIndex-index);
            index = myIndex;
            showButton();
            animate(offset);
            
        }
    }


    // 自动播放 切换  每隔2秒 触发点击事件  更新器
    function play(){
        timer = setInterval(function(){next.onclick();},2000); 
    }
    function stop(){
        clearInterval(timer);
    }
    container.onmouseover = stop;
    container.onmouseout = play;
    play();




}