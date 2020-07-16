window.onload=function(){

    // 封装一个函数 调取id
function ab(id){
    return typeof id==='string'?document.getElementById(id):id;
}

    // 获取鼠标滑过或点击的标签和要切换的内容的元素
    var titles=ab('notice-tit').getElementsByTagName('li'),
        divs=ab('notice-con').getElementsByTagName('div');
    //    alert(titles.length);

    //  if(titles.length!=divs.length)
    //     return;
    
        //遍历titles下的所有li
    for(var i=0;i<titles.length;i++){
        titles[i].id = i;

        //[绑定事件] 当鼠标滑过某个内容的时候
        titles[i].onmouseover=function(){
            // 清除所有高亮样式 //隐藏所有内容
             for(var j=0;j<titles.length; j++ ){
                 titles[j].className='';
                 divs[j].style.display='none';
             }
             //设置当前li的高亮样式
            
            this.className='select';
          
            //显示内容
            divs[this.id].style.display='block';
        }
    }


    // xxg
    // 封装调取id的函数
    function bb(id){
        return  document.getElementById(id);
    }
    //鼠标点击切换内容 先赋值
    var tab_h=bb('tab-head').getElementsByTagName('li');
    var tab_b=bb('tab-body').getElementsByTagName('div');
    for(var i=0; i<tab_h.length;i++){
        tab_h[i].id=i;
        tab_h[i].onmousedown=function(){
            //清除高亮 和 所有内容
            for(var j=0;j<tab_h.length;j++){
                tab_h[j].className='';
                tab_b[j].style.display='none';
            }
            //对应高亮class显示
            this.className='ss';
            //对应内容显示
            tab_b[this.id].style.display='block';
        }   
    }



    
    //yc延迟 先赋值
    var yc_h=document.getElementById('yc-head').getElementsByTagName('li');
    var yc_b=document.getElementById('yc-body').getElementsByTagName('div');
    var timerr=null;//定义一个空变量
    // 遍历有那个li被滑过
    for(var i=0; i<yc_h.length ; i++){
        // 先把对应的标题赋值对应的id属性
        yc_h[i].id=i;
        // 绑定滑过事件事件
      
        yc_h[i].onmouseover=function(){
            // 用that这个变量来引用滑过的li
            var that=this;
            // 判断是否在工作
            if(timerr){
                clearTimeout(timerr);
                timerr=null;
            }
            // 如果不是就进行定时器工作进行更换
            timerr=setTimeout(function(){
                // 清除样式和内容
                for(var j=0;j<yc_h.length;j++){
                yc_h[j].className='';
                yc_b[j].style.display='none';
                }
    
                // 滑过的对应的 显示内容和标题样式
                that.className="ycss";
                // 根据id来选到对应的板块
                yc_b[that.id].style.display='block';
                            
            },500)  
        }
    }







    // 自动zd
    //当前高亮显示的页签的索引 全局变量
     indexx=0;
     zd_timer=setInterval(zdtab,2000);
        // 获取鼠标滑过或点击的标签和要切换的内容的元素
        var zd_h=document.getElementById('zd-head').getElementsByTagName('li');
        var zd_b=document.getElementById('zd-body').getElementsByTagName('div');
    
          if(zd_h.length!=zd_b.length)
             return;
        
            //遍历zd_h下的所有li
            for(var i=0;i<zd_h.length;i++){
                zd_h[i].id = i;
                zd_h[i].onmouseover=function(){
                    //清除一下定时器
                    clearInterval(zd_timer);
                    change_zd(this.id);
                }
                
                //鼠标离开以后执行自动切换函数
                zd_h[i].onmouseout=function(){
                    zd_timer=setInterval(zdtab,2000);;
                }
            }
       //调用自动播放函数
        if(zd_timer){
            clearInterval(zd_timer);
            zd_timer=null;
        }
        zd_timer=setInterval(zdtab,2000);
        function zdtab(){      
            //添加定时器 改变当前高亮的索引     
                indexx++;
                if(indexx>=zd_h.length){ indexx=0;}
                change_zd(indexx);      
        }
        //封装显示函数
        function change_zd(zdIndexx){
            for(var z=0;z<zd_h.length;z++){
                zd_h[z].className='';
                zd_b[z].style.display='none';
            }
            zd_h[zdIndexx].className='zdss';
            zd_b[zdIndexx].style.display='block';
            indexx=zdIndexx;
        }

        //优化一下 当停在内容的时候也停止自动切换 然后离开就进行自动
        var nr=document.getElementById('zd-body')
        nr.onmouseover=function(){
            clearInterval(zd_timer);
        }
        nr.onmouseout=function(){
            zd_timer=setInterval(zdtab,2000);
        }
}








