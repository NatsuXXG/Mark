<template>
  <div style="position:relative;">
    <div class="sport-home-header">
      <div class="head-top">
        <div class="left-menu" @click="openleftbar">
          <img src="../../../assets/leftmenu.png" alt="">
        </div>
        <div class="sport-title">{{typetitle}}</div>
        <div class="right-menu" @click="openrightbar">
          <img src="../../../assets/rightmenu.png" alt="">
        </div>
      </div>
      <div class="head-bottom" v-if="rule">
        <router-link v-if="rule" :to="link" tag="div" class="row-item" v-for="(link, index) in linkArr" :key="index">{{linkNames[index]}}</router-link>
      </div>
    </div>
    <div class="left-bar" @click="leftClose" ref="leftbar">
      <div class="left-menu-head">
        主菜单
      </div>
      <ul class="left-bar-ul">
        <router-link to="/sport/jrzqds" tag="li" class="left-bar-li">足球</router-link>
        <router-link to="/sport/jrlqds" tag="li" class="left-bar-li">篮球</router-link>
        <router-link to="/sport/jrwqds" tag="li" class="left-bar-li">网球</router-link>
        <router-link to="/sport/jrpqds" tag="li" class="left-bar-li">排球</router-link>
        <router-link to="/sport/jrbqds" tag="li" class="left-bar-li">棒球</router-link>
        <router-link to="/sport/jrqtds" tag="li" class="left-bar-li">其他</router-link>
        <!-- <router-link to="/mymessage" tag="li" class="left-bar-li">体育公告</router-link>
        <router-link to="/tygz" tag="li" class="left-bar-li">体育规则</router-link> -->
      </ul>
    </div>
    <div class="right-bar" @click="rightClose" ref="rightbar">
      <div class="right-bar-right">
        <div class="right-menu-head">
          玩法列表
        </div>
        <ul class="right-bar-ul" v-if="typetitle.indexOf('篮球')==-1">
          <router-link :to="link" tag="li" class="right-bar-li" v-for="(link, index) in typeArr" :key="index" >{{typeNames[index]}}</router-link>
        </ul>
        <ul class="right-bar-ul" v-else>
          <router-link  :to="link" tag="li" class="right-bar-li" v-for="(link, index) in typeArray" :key="index">{{typeNumbs[index]}}</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                linkNames: ['滚球', '今日', '早盘'],
                rule:true, //判断是否是体育规则
            }
        },
        props: {
            typetitle: {
                type: String
            },
            linkName:{
                type: String
            },
            linkArr: {
                type: Array,
                default: () => [
                    '/sport/zqgq', '/sport/jrzqds', '/sport/zpzqds'
                ]
            },
            typeNames: {
                type: Array,
                default: () => [
                    '单式', '波胆', '上半场波胆', '入球数', '半/全场', '滚球', '串关', '赛果'
                ]
            },
            typeArr: {
                type: Array,
                default: () => [
                  '/sport/jrzqds', '/sport/jrzqbd', '/sport/jrzqhalfbd', '/sport/jrzqrqs', '/sport/jrzqbqc', '/sport/zqgq','/sport/jrzqcg','/sport/result'
                ]
            },
            typeNumbs: {
                type: Array,
                default: () => [
                  '单式', '滚球', '串关', '赛果'
                ]
            },
            typeArray: {
                type: Array,
                default: () => [
                  '/sport/jrlqds', '/sport/lqgq','/sport/jrlqgg','/sport/result'
                ]
            }
        },
        created(){
            if(this.linkName==''){
                this.linkNames = []
                this.rule = false;
            }else{
                this.rule = true;
                this.linkNames =['滚球', '今日', '早盘']
            }


        },
        methods: {
            openleftbar (val) {
                this.$refs.leftbar.style.transform = 'translate3d(0, 0, 0)'
            },
            openrightbar () {
                this.$refs.rightbar.style.transform = 'translate3d(0, 0, 0)'
            },
            leftClose () {
                this.$refs.leftbar.style.transform = 'translate3d(-180%, 0, 0)'
            },
            rightClose () {
                this.$refs.rightbar.style.transform = 'translate3d(180%, 0, 0)'
            }
        }
    }
</script>

<style scoped>
  .sport-home-header {
    height: auto;
    background-color: #3071b8;
    border-bottom: 1px solid #3071b8 ;
  }
  .head-top {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
  .left-menu, .right-menu {
    display: flex;
    flex: 0 0 20%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .left-menu img, .right-menu img {
    width: 0.64rem;
    height: 0.64rem;;
  }
  .sport-title {
    display: flex;
    flex: 0 0 60%;
    height: 100%;
    align-items: center;
    justify-content: center;
    align-content: center;
    color: white;
    font-size: 0.32rem;
    font-weight: 700;
  }
  .head-bottom {
    display: flex;
    padding: 0.2rem;
    align-items: center;
    align-content: center;
    justify-content: center;
    color: white;
    font-size: 0.32rem;
  }
  .row-item {
    flex: 1;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
  }
  .row-item.router-link-active {
    border-radius: 12px;
    background-color: rgb(53,85,124);
  }
  /* 左右侧滑出栏 */
  .left-bar, .right-bar {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: 800px;
    background-color: rgba(0,0,0, 0.5);
    transition: all 0.5s linear;
    z-index: 2;
  }
  .left-bar {
    transform: translate3d(-180%, 0, 0);
  }
  .right-bar {
    transform: translate3d(180%, 0, 0);
  }
  .right-bar-right {
    float: right;
    width: 50%;
    height: 100%;
  }
  .left-menu-head, .right-menu-head {
    width: 50%;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.32rem;
    text-align: center;
    background: #3071b8 url('../../../assets/down-list.png') no-repeat 15% center;
    background-size: 0.64rem 0.64rem;
    color: white;
  }

  .left-bar-ul, .right-bar-ul {
    width: 50%;
    height: 100%;
    background-color: white;
    z-index: 3;
  }
  .left-bar-li, .right-bar-li {
    height: 0.8rem;
    font-size: 0.32rem;
    line-height: 0.8rem;
    text-align: center;
    border-bottom: 0.02rem solid #ccc;
  }
  .right-bar-ul {
    width: 100%;
  }
  .right-menu-head {
    width: 70%;
    padding-left: 30%;
  }
  .right-bar-ul {
    height: 100%;
  }
</style>
