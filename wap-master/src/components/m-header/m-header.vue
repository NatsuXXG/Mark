<template>
  <div class="header-wrapper">
    <div class="header">
      <button class="buttons-left" @click="showslide">
        <span class="game-name">{{lotterytype}}</span>
        <img src="../../assets/back.png" alt="" class="game-back-icon">
      </button>
      <button class="buttons-right" @click="showpop"></button>
      <transition name="mini">
        <div class="btn-right-pop" v-show="popboolean">
          <div class="pop-content">
            <ul>
              <router-link tag="li" to="/statement">投注记录</router-link>
            </ul>
          </div>
          <div class="pop-arrow"></div>
      </div>
      </transition>
      <div class="money" v-if="usermoney">
        {{usermoney}}元
      </div>
      <router-link to="/login" tag="div" class="money" v-if="!usermoney">
        请登录！
      </router-link>
    </div>
    <div class="top-info-wrapper" ref="topinfowrap">
      <div class="recent" @click="resultShow" ref="recent">
        <p class="title">
          <span>近期开奖</span>
          <i class="arrow" :class="{'rotate':isRotate === true}"></i>
        </p>
        <div class="less-balls" v-if="recordHm.length < 8">
          <div class="less-wrap">
            <span class="less-ball" v-for="(ball, index) in recordHm" :key="index">{{ball}}</span>
          </div>
          <div class="num-sum">
            <span class="flex-hook">{{recordHm | filterSum}}</span>
            <span class="flex-hook">{{recordHm | filterLHH(lotteryLHH)}}</span>
            <span class="flex-hook" v-if="showniuniu">{{recordHm | fiterniuniu}}</span>
          </div>
        </div>
        <div class="eight-balls" v-else-if="recordHm.length === 8">
          <span class="eight-ball" v-for="(ball, index) in recordHm" :key="index">{{ball}}</span>
        </div>
        <div class="ten-balls" v-else>
          <span class="ten-ball" v-for="(ball, index) in recordHm" :key="index">{{ball}}</span>
        </div>
      </div>
      <div class="timestop" ref="timestop">
        <p class="periods">
          距{{currentPeriods}}期截止
        </p>
        <p class="countdown">{{endText}}</p>
      </div>
    </div>
    <transition name="mini">
      <div class="record" v-show="isRotate && records && this.records.length > 0">
        <div class="record-title">
          <span class="issue">期数</span> 
          <span class="prize">开奖号码</span>
        </div>
        <div class="list" ref="list">
          <ul>
            <li v-for="(item, index) in records" :key="index">
              <div class="issue">{{item.period}}</div>
              <div class="prize clearfix" v-if="recordHm.length < 20">
                <p class="ball-wrap"><span class="ball" v-for="(num, index) in item.result" :key="index">{{num}}</span></p>
                <p class="ball-wrap" v-if="lotteryBallJudge === 1"><span class="num-dxds" :class="num | filterDxColor(4)" v-for="(num, index) in item.result" :key="index">{{num | filterDx(4)}}</span></p>
                <p class="ball-wrap" v-if="lotteryBallJudge === 3"><span class="num-dxds" :class="num | filterDxColor(5)" v-for="(num, index) in item.result" :key="index">{{num | filterDx(5)}}</span></p>
                <p class="ball-wrap" v-if="lotteryBallJudge === 2"><span class="num-dxds" :class="num | filterDxColor(10)" v-for="(num, index) in item.result" :key="index">{{num | filterDx(10)}}</span></p>
                <p class="ball-wrap" v-if="lotteryBallJudge === 4"><span class="num-dxds" :class="num | filterDxColor(10)" v-for="(num, index) in item.result" :key="index">{{num | filterGxsfcDxHz(10)}}</span></p>
                <p class="ball-wrap" v-if="lotteryBallJudge === 5"><span class="num-dxds" :class="num | filterDxColor(5)" v-for="(num, index) in item.result" :key="index">{{num | filterGdDxHz(5)}}</span></p>
                <p class="ball-wrap"><span class="num-dxds" :class="num | filterDsColor" v-for="(num, index) in item.result" :key="index">{{num | filterDs(4)}}</span></p>
                <p class="ball-wrap">
                  <span class="num-sum">{{item.result | filterSum}}</span>
                  <span class="num-sum">{{item.result | filterLHH(lotteryLHH)}}</span>
                  <span class="num-sum" v-if="showniuniu">{{item.result | fiterniuniu}}</span>
                </p>
              </div>
              <div class="prize clearfix" v-else>
                <p class="bjkl-ball-wrap">
                  <span v-for="(num, index) in item.result" :key="index" class="bjkl-ball">
                    {{num}}
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Scroll from '@/base/scroll/scroll'
  import BScroll from 'better-scroll'
  import Loading from '@/base/loading/loading' // 引入等待加载的组件
  import slideNav from '@/components/slide-nav/slide-nav'
  import { mapGetters } from 'vuex'
  import { myfilter } from '@/base/js/mixin' // 引入mixin的组件
  let getRecordsTimer
  export default {
    mixins: [myfilter],
    data () {
      return {
        isRotate: false,
        title: '',
        endText: '',
        slideshow: false,
        popboolean: false
      }
    },
    props: {
      lotteryBallJudge: {
        default: 1
      },
      // 不同彩种的龙虎和判断
      lotteryLHH: {
        default: 0 // 默认无
      },
      // 是否显示牛牛结果，默认不显示
      showniuniu: {
        type: Boolean,
        default: false
      },
      lotterytype: {
        type: String,
        default: ''
      },
      records: {
        type: Array,
        default: null
      },
      currentPeriods: {
        default: null
      },
      recordHm: {
        type: Array,
        default: []
      },
      endTime: {
        type: Number
      },
      opentime: {
        type: Number
      },
      getballs: {
        type: Function,
        default: ''
      },
      getRecords: {
        type: Function,
        default: ''
      },
      getHistoryRecords: {
        type: Function,
        default: ''
      },
      isopen: {
        type: Boolean,
        default: true
      },
      minMoney: { // 最低下注金额
        default: ''
      },
      maxMoney: { // 最高下注金额
        default: ''
      }
    },
    mounted () {
      this.$nextTick(() => {
        // 针对北京快乐8.重新赋值结构高度
        if (this.lotterytype === '北京快乐8') {
          this.$refs.recent.style.height = `2.18rem`
          this.$refs.timestop.style.height = `2.18rem`
          this.$refs.topinfowrap.style.height = `2.38rem`
        }
      })
    },
    watch: {
      opentime (val) {
        let iMinute = parseInt(val / 60) // 计算分钟
        let iSecond = parseInt(val % 60)
        iMinute = iMinute < 10 ? '0' + iMinute : iMinute // 实际显示的分钟效果
        iSecond = iSecond < 10 ? '0' + iSecond : iSecond // 实际显示的秒数效果
        this.endText = `${iMinute}:${iSecond}` // 实际显示的总时间效果
        if(val===0){
          // 开下一期
          this.getballs()
          document.getElementById('fastInput').setAttribute('placeholder', `最低单注${this.minMoney}元`)
          document.getElementById('fastInput').disabled = false
          for (let i = 0; i < document.getElementsByClassName('curcie').length; i++) {
            document.getElementsByClassName('curcie')[i].disabled = false
          }
          this.getRecordsTimerDown()
        }
      },
      endTime (val) {
        if(val === 0){
          clearInterval(getRecordsTimer)
          // 封盘时间到，则禁止输入框写入，快捷下注选择
          document.getElementById('fastInput').setAttribute('placeholder', '已封盘')
          document.getElementById('fastInput').disabled = true
          document.getElementById('fastInput').value = ''
          for (let i = 0; i < document.getElementsByClassName('curcie').length; i++) {
            document.getElementsByClassName('curcie')[i].disabled = true
          }
        }
      }
    },
    computed: {
      ...mapGetters([
        'username',
        'usermoney'
      ])
    },
    methods: {
      showpop () {
        this.popboolean = !this.popboolean
      },
      showslide () {
        this.slideshow = !this.slideshow
        this.isRotate = false
        this.popboolean = false
        this.$emit('showslide', this.slideshow)
      },
      resultShow () {
        this.isRotate = !this.isRotate
        setTimeout(() => {
          this._initScroll()
        }, 20)
      },
      _initScroll () {
        this.menuScroll = new BScroll(this.$refs.list, {
          click: true
        })
      },
      // 开奖结果跟开奖历史结果倒计时
      getRecordsTimerDown () {
        getRecordsTimer = setInterval(() => {
          this.getRecords()
          this.getHistoryRecords()
        }, 20000)
      }
    },
    created () {
      // dom结构加载结束
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    destroyed () {
      clearInterval(getRecordsTimer)
    },
    components: {
      Scroll,
      Loading,
      slideNav
    }
  }
</script>

<style scoped>
 .scroll-wrap {
    height:100%;
    overflow:hidden;
  }
.header-wrapper {
  position: absolute;
  top:0;
  left:0;
  right:0;
  z-index:100;
}
.header {
  height: 0.96rem;
  background-color: #3071b8;
}
.buttons-left {
  position: relative;
  float: left;
  min-width: 35%;
  height: 0.96rem;
  color: #fff;
  font-size: 0.28rem;
  border: none;
  outline: none;
  background: none;
}
.game-name {
  display: inline-block;
  width: 80%;
  height: 0.7rem;
  padding-right: 10%;
  color: #fff;
  line-height: 0.7rem;
  font-weight: 700;
  border-radius: 0.8rem;
}
.game-back-icon {
  position: absolute;
  top: 0.3rem;
  right: 0;
  width: 0.3rem;
}
.game-name:active {
  background-color: #ccc;
}
.money {
  float: right;
  height: 0.96rem;
  color: #fff;
  line-height: 0.96rem;
  font-size: 0.28rem;
}
.buttons-right {
  float: right;
  width: 20%;
  height: 0.96rem;
  background: url("../../assets/down-list.png") no-repeat center center;
  background-size: 0.64rem;
  border: none;
  outline: none;
}
.buttons-right:active {
  background-color: #ccc;
}
.btn-right-pop {
  position: absolute;
  width: 2.4rem;
  top: 1.2rem;
  right: 0.2rem;
}
.btn-right-pop .pop-content {
  border-radius: 0.1rem;
}
.btn-right-pop .pop-content li {
  min-height: 0.72rem;
  background: #fff;
  line-height: 0.72rem;
  text-align: center;
  color: black;
  font-size: 0.32rem;
  font-weight: 700;
  border-bottom: 0.02rem solid #ccc;
}
.btn-right-pop .pop-arrow {
  position: absolute;
  top: -0.38rem;
  right: 0.14rem;
  width: 0.6rem;
  height: 0.38rem;
  overflow: hidden;
}
.btn-right-pop .pop-arrow:after {
  position: absolute;
  top: 0.2rem;
  left: 0.1rem;
  width: 0.4rem;
  height: 0.4rem;
  background-color: #fff;
  border-radius: 3px;
  content: '';
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.top-info-wrapper {
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 1.38rem;
  box-shadow: 0 0 0 0.02rem #e6eaee;
}
.recent, .timestop {
  flex: 0 0 50%;
  width: 50%;
  height: 1.28rem;
  padding-top: 0.1rem;
  text-align: center;
}
.timestop {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}
.recent {
  box-shadow: 0.02rem 0 0 0 #e6eaee;
}
.recent .title {
  height: 0.24rem;
  color:#fff;
  font-size: 0.24rem;
}
.title span {
  font-weight: bold;
}
.arrow {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  font-size: 0;
  background: url('../../assets/arrow-down.png') no-repeat center center;
  transition: all .5s;
}
.rotate {
  transform: rotate(-180deg);
  -webkit-transform: rotate(-180deg);
}
.less-balls {
  display: flex;
  flex-direction: column;
  height: 0.94rem;
  align-items: center;
  justify-content: space-around;
}
.less-wrap {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
.less-ball {
  display: flex;
  flex: 0 0 0.4rem;
  height: 0.4rem;
  background-color: #ef4f4f;
  border-radius: 50%;
  font-size: 0.24rem;
  color: #fff;
  justify-content: center;
  align-items: center;
}
/* 十个球 */
.ten-balls {
  width: 2.6rem;
  height: 0.94rem;
  margin: 0 auto;
}
.eight-balls {
  width: 2.2rem;
  height: 0.94rem;
  margin: 0 auto;
}
.ten-ball, .eight-ball {
  display: flex;
  float: left;
  height: .38rem;
  width: .38rem;
  margin: 0.08rem 0.06rem 0;
  background-color: #ef4f4f;
  border-radius: 50%;
  font-size: 0.24rem;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.periods {
  line-height: 0.24rem;
  color: #fff;
  font-size: 0.24rem;
  font-weight: bold;
}
.countdown {
  height: 0.94rem;
  line-height: 0.94rem;
  font-size: 0.36rem;
  color: #fff;
}
.time-loading-container {
  position: relative;
  height: 0.94rem;
}
/* 开奖记录 */
.mini-enter-active, .mini-leave-active {
  transition: all 0.5s;
}
.mini-enter, .mini-leave-to {
  opacity: 0;
}
.header-wrapper .record {
  width: 100%;
  background-color: #f2f5f8;
  color: #707d9d;
  font-size: 0.24rem;
}
.header-wrapper .record .record-title {
  height: 0.42rem;
  line-height: 0.42rem;
  border-bottom: 0.02rem solid #e6eaee;
  font-size: 0.24rem;
}
.record .issue {
  display: inline-block;
  width: 30%;
  height: 0.42rem;
  line-height: 0.42rem;
  text-align: center;
}
.record .record-title .prize {
  display: inline-block;
  height: 0.42rem;
  line-height: 0.42rem;
  text-align: center;
}
.record .list {
  max-height: 7.06rem;
  width: 100%;
  overflow: hidden;
  border-bottom: 0.02rem solid #e6eaee;
}
.record .list li {
  display:flex;
  min-height: .6rem;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-bottom: 0.02rem solid #ccd4e5;
}
.record .list li .issue {
  position: relative;
  flex: 0 0 30%;
  width: 30%;
  height: 100%;
}
.record .list li .issue:after {
  content: "";
  position: absolute;
  height: 0.2rem;
  width: 0.2rem;
  border-radius: 50%;
  background-color: #ccd4e5;
  top: 0;
  bottom: 0;
  margin: auto;
  right: -.11rem;
}
.record .list li .prize {
  display: flex;
  flex: 0 0 70%;
  flex-direction: column;
  width: 70%;
  line-height: 0.6rem;
  padding-left: 0.1rem;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  box-shadow: -0.02rem 0 0 0 #ccd4e5;
}
.prize .ball-wrap {
  display: flex;
  width: 100%;
  height: 0.56rem;
  justify-content: space-around;
  align-content: center;
  align-items: center;
}
.record .list li .prize .ball {
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  background-color: #ef4f4f;
  border-radius: 50%;
  font-size: 0.24rem;
  color: #fff;
  line-height: 0.36rem;
  text-align: center;
}
.bjkl-ball-wrap {
  width: 100%;
}
.bjkl-ball {
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  margin-left: 0.06rem;
  background-color: #ef4f4f;
  border-radius: 50%;
  font-size: 0.24rem;
  color: #fff;
  line-height: 0.36rem;
  text-align: center;
}
.num-dxds {
  width: 0.36rem;
  font-weight: 700;
  font-size: 0.24rem;
  text-align: center;
}
.num-sum {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  font-weight: 700;
  font-size: 0.24rem;
}
.num-sum .flex-hook {
  color: #fff;
  font-weight: normal;
}
.num-dxds.big-color {
  color: #de4669;
}
.num-dxds.small-color {
  color: #7363f6;
}
.num-dxds.double-color {
  color: green;
}
.num-dxds.single-color {
  color: blue;
}
</style>
