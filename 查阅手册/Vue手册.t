【Vue】

/*一个大概的样式
<div id="xxg">{{msg}} </div> 

<script>
    new Vue({
        el: "#xxg",
        data: {
            msg:"hello world"
        }
    })
</script>
*/


/* 挂载点 */ {数据传输区域}
[挂载点的意思就是在<html>上的一个点 数据会传输到这个挂载点上]
<div id="xxg"> </div>


/* 模版1 */    [写在<html>]
<div id="xxg"> {{msg}} </div>

/* 模版2 */     [写在脚本上]
template: '<h1> hello {{msg}} </h1>',


/*实例*/
[实例就是模版和数据结合起来的一个整合.]


/*数据*/
data:{
    msg:"数据",
}

/*功能*/
methods: {
    xxgg: function(){}
}

/*模版指令*/
v-html              [可以转义<>]  (用法:<div v-html="msg">)

v-text              [不会转义<>]  (用法:<div v-text="msg">)

/*模版指令:功能绑定*/
v-on:click=""    [简写:"@click"] (用法:<div v-on:click="xxgg">)

/*模版指令:属性绑定*/
v-bind:title=""  [简写:":title"] (用法:<div v-bind:tile="xxg">)

/*模版指令:双向绑定*/
v-model=""        [双向数据绑定]      (用法:<input v-model="xxgg">)


/*计算*/ [对输入的值进行计算]
computed:{
    xxgg2:function(){}
}


/*监听*/ [如果监听的地方发生的变化]
watch:{
    xxgg2.function(){}
}

/*常见指令*/
v-if        [控制数据的'存在'与否]   (<div v-if="xxg8_1">)

v-show      [控制数据的'显示'与否]       (<div v-show="xxg8_2">)

v-for       [遍历出数据]    (<li v-for="item of xxg8_3"></li>)

/* 定义组件: */
[全局组件]
Vue.computed('组件名',{
    template: '',
})

[局部组件]
var todoitem = {
    template:'<li>item</li>',
}



/*打包*/[脚手架工具]
Vue-cli





