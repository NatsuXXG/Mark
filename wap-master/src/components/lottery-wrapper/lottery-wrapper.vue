<template>
  <div>
    <div class="lottery-main-wrapper" ref="lotterymain" id="panel" v-show="ballTotals.length">
      <m-header :lotterytype="lotterytype" :records="records" 
                :currentPeriods="currentPeriods" :recordHm="recordHm" 
                :opentime="opentime" :endTime="endTime" :isopen="isopen"
                :minMoney='minMoney' :maxMoney="maxMoney"
                :getballs="getballs" @showslide="showslide" :initballs="initballs" :lotteryBallJudge="lotteryBallJudge" :lotteryLHH="lotteryLHH" :showniuniu="showniuniu" :getRecords="getRecords" :getHistoryRecords="getHistoryRecords"
      ></m-header>
      <div class="lottery-wrapper" ref="lotterywraph">
        <div class="left-bar-wrapper">
          <scroll class="scroll-wrap" :data="ballTotals">
            <div>
              <ul class="nav" v-if="ballTotals.length">
                <li v-for="(item, index) in ballkinds" :key="index" class="nav-li-hook" ref="lihook"
                    :class="{selecting: currentIndex === index}" 
                    @click="selectBallKinds(item, index)"
                >
                  <span class="type-hook">{{item}}</span>
                  <i class="smallround" :class="{'menus-choose':choose === currentIndex }" ref="smallround"></i>
                </li>
              </ul>
            </div>
          </scroll>
        </div>
        <div class="right-bar-wrapper" ref="rightBarWrapper" @touchstart="missBlur">
          <scroll class="scroll-wrap" :data="ballTotals" ref="scrollright">
            <div>
              <div v-for="(item, index) in ballTotals" :key="index" class="right-bar-wrap right-bar-hook" v-show="index === currentIndex" ref="rightbar">
                <div class="title-no">{{ballkinds[index]}}</div>
                <div class="ball-row" v-if="lotterytype !== '北京快乐8'">
                  <ul class="clearfix">
                    <li v-for="(ball, key) in item" :key="key" class="bet-li-hook" :class="{'bet-choose' : ball.select}" ref="numli">
                      <div class="bet-left" @click="selectBallnums(item, key, index, $event)">
                        <span class="bet-content" :class="[typeof (ballnums[index][key]) === 'number' ? 'round-1' : '']">{{ballnums[index][key]}}</span>
                        <span class="bet-item">{{parseFloat(ball[key])}}</span>
                      </div>
                      <div class="bet-money">
                        <input v-if="lotterytype !== '北京PK拾' && inputname === 100" type='number' pattern="[0-9]\*" class="bet-input" maxlength="5" @input="moneyWriting(ballTotals, key, currentIndex)" ref="inpMoney" :name="(inputname*(index+1)) + key" autocomplete="off" >
                        <input v-else-if="lotterytype !== '北京PK拾' && inputname === 101 && index === 0" type='number' pattern="[0-9]\*" class="bet-input" maxlength="5" @input="moneyWriting(ballTotals, key, currentIndex)" ref="inpMoney" :name="(inputname*(index+1)) + key" autocomplete="off" >
                        <input v-else-if="lotterytype !== '北京PK拾' && inputname === 101 && index > 0" type='number' pattern="[0-9]\*" class="bet-input" maxlength="5" @input="moneyWriting(ballTotals, key, currentIndex)" ref="inpMoney" :name="((inputname-1)*(index +1))+ 1 + key" autocomplete="off" >
                        <input v-else-if="lotterytype === '北京PK拾' && ballkinds[index] !== '冠亚和'" type='number' pattern="[0-9]\*" class="bet-input" maxlength="5" @input="moneyWriting(ballTotals, key, currentIndex)" ref="inpMoney" :name="(inputname*(index)) + key +1" autocomplete="off" >
                        <input v-else-if="lotterytype === '北京PK拾' && ballkinds[index] === '冠亚和'" type='number' pattern="[0-9]\*" class="bet-input" maxlength="5" @input="moneyWriting(ballTotals, key, currentIndex)" ref="inpMoney" :name="1 + key" autocomplete="off" >
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="ball-row" v-if="lotterytype === '北京快乐8'">
                  <div class="bjkl-title" v-show="ballkinds[currentIndex] === '选二'">2/2：{{bjklOdds[1][0].odds}}</div>
                  <div class="bjkl-title" v-show="ballkinds[currentIndex] === '选三'">3/2：{{bjklOdds[2][1].odds}}--3/3：{{bjklOdds[2][0].odds}}</div>
                  <div class="bjkl-title" v-show="ballkinds[currentIndex] === '选四'">4/2：{{bjklOdds[3][2].odds}}--4/3：{{bjklOdds[3][1].odds}}<br />4/4：{{bjklOdds[3][0].odds}}</div>
                  <div class="bjkl-title" v-show="ballkinds[currentIndex] === '选五'">5/3：{{bjklOdds[4][2].odds}}--5/4：{{bjklOdds[4][1].odds}}<br />5/5：{{bjklOdds[4][0].odds}}</div>
                  <ul class="clearfix">
                    <li v-for="(ball, key) in item" :key="key" class="bet-li-hook" :class="{'bet-choose' : ball.select}" ref="numli">
                      <div class="bet-left bjkl-left-hook" @click="selectBallnums(item, key, index, $event)">
                        <span class="bet-content" :class="[typeof (ballnums[index][key]) === 'number' ? 'round-1' : '']">{{ballnums[index][key]}}</span>
                        <span class="bet-item">{{ball[key]}}</span>
                      </div>
                      <div class="bet-money" v-show="false">
                        <input v-if="inputname === 101 && index === 0" type='hidden' pattern="[0-9]\*" class="bet-input" ref="inpMoney" :name="(inputname*(index+1)) + key" autocomplete="off" >
                        <input v-else-if="inputname === 101 && index > 0" type='hidden' pattern="[0-9]\*" class="bet-input" ref="inpMoney" :name="((inputname-1)*(index +1))+ 1 + key" autocomplete="off" >
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </scroll>
          <div class="right-mask" v-show="maskOpen">已封盘</div>
        </div>
      </div>
      <div class="lottery-footer-wrapper">
        <div class="left-wrapper">
          <p class="count-text" ref='countText'>
            <button class="curcie"
                  v-for="(itemFast, indexFast) in fastMoney" 
                  :key="indexFast"
                  @click="selectFast(itemFast, indexFast)"
            >{{itemFast}}</button>
          </p>
          <div class="money-wrapper">
            <input type="tel" :placeholder="'最低下注'+this.minMoney+'元'" pattern="[0-9]\*" maxlength="5" class="fast-input" ref="setMoney" v-model="myMoney" id="fastInput" @input="fastInputWrite()">
          </div>
        </div>
        <div class="right-wrapper">
          <mt-button type="danger" size="normal" class="right-button" @click="lottorySubmit(currentIndex)">下注</mt-button>
          <mt-button type="primary" size="normal" class="right-button" @click="lotteryReset">重置</mt-button>
        </div>
      </div>
    </div>
    <!-- 当加载数据比较缓慢的时候，为了优化用户的感官体验效果，需要实现等到load的一个过程-->
    <div class="loading-container" v-show="!ballTotals.length">
      <loading></loading>
    </div>
    <slide-nav id="menu" class="slideout-menu" ref="slideI" @showslide="showslide" :ballTotals="ballTotals" v-show="ballTotals.length"></slide-nav>
    <mask-layer :ifopen="ifopen"></mask-layer>
  </div>
</template>

<script>
  import Slideout from '../../../node_modules/slideout/dist/slideout.min'
  import $ from 'jquery' // 引入JQ
  import { MButton, Toast, MessageBox } from 'mint-ui'
  import Scroll from '@/base/scroll/scroll'
  import Loading from '@/base/loading1/loading' // 引入等待加载的组件
  import slideNav from '@/components/slide-nav/slide-nav'
  import MHeader from '@/components/m-header/m-header'
  import maskLayer from '@/base/mask-layer/mask-layer'
  import { mapGetters } from 'vuex'
  let slideout = {}
  export default {
    data () {
      return {
        currentIndex: 0,
        choose: -1,
        betChoose: false,
        fastMoney: [50, 100, 500, 1000], // 自定义快速筹码金额
        fastTotalMoney: '', // 快捷下注总金额
        myMoney: '',
        ifopen: false,
        maskOpen: false
      }
    },
    props: {
      lotteryBallJudge: {
        type: Number,
        default: 1
      },
      lotteryLHH: {
        type: Number,
        default: 0
      },
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
        type: Number,
        default: 0
      },
      getballs: {
        type: Function,
        default: null
      },
      getRecords: {
        type: Function,
        default: null
      },
      getHistoryRecords: {
        type: Function,
        default: null
      },
      isopen: {
        type: Boolean,
        default: true
      },
      propsIndex: {
        type: Number
      },
      ballkinds: {
        type: Array,
        default: null
      },
      ballTotals: {
        type: Array,
        default: null
      },
      ballnums: {
        type: Array,
        default: null
      },
      inputname: { // 判断彩种name值是以100开头或者101，默认100
        type: Number,
        default: 100
      },
      posturl: {
        type: String,
        default: ''
      },
      bjklOdds: { // 北京快乐8专用
        type: Array,
        default: null
      },
      initballs: { // 所有彩种自动请求数据
        type: Function
      },
      minMoney: { // 最低下注金额
        default: ''
      },
      maxMoney: { // 最高下注金额
        default: ''
      }
    },
    created () {
      this.currentIndex = this.propsIndex
    },
    watch: {
      endTime () {
        if (this.endTime > 0) {
          this.maskOpen = false
        } else {
          this.maskOpen = true
        }
      }
    },
    computed: {
      ...mapGetters([
        'username',
        'usermoney'
      ])
    },
    mounted () {
      this.$nextTick(() => {
        this._slideout()
      })
      setTimeout(() => {
        this._slideout()
      }, 1000)
      setTimeout(() => {
        this._slideout()
      }, 2000)
      // 针对北京快乐8.重新赋值结构高度
      if (this.lotterytype === '北京快乐8') {
        this.$refs.lotterywraph.style.top = `3.34rem`
      }
    },
    methods: {
      _slideout () {
        // 实例化侧边栏滑动函数
        slideout = new Slideout({
          'panel': document.getElementById('panel'),
          'menu': document.getElementById('menu'),
          'padding': this.$refs.slideI.$el.offsetWidth,
          'tolerance': 70
        })
      },
      missBlur () {
        $('.bet-input').blur()
      },
      // 隐藏开奖历史记录
      hiddenRecord () {
        this.$children[0].isRotate = false
        this.$children[0].popboolean = false
      },
      // 侧边栏滑动显示
      showslide (bool) {
        slideout.toggle()
      },
      // 选择下注种类
      selectBallKinds (item, index) {
        this.hiddenRecord()
        this.currentIndex = index
        this.$refs.scrollright.scrollToElement(this.$refs.rightbar[index], 0)
        this.$refs.scrollright.refresh()
        if (this.lotterytype === '北京快乐8') {
          $('.bet-li-hook').removeClass('bet-choose')
          $('.smallround').removeClass('menus-choose')
        }
      },
      // 选择下注号码
      selectBallnums (item, index, FIndex, event) {
        // 在点击时,传 $event变量,Better-scroll插件中的 event事件和原生 js的 event有属性上得区别,Better-scroll插件派发的事件时event_constructed为true,原生点击事件是没有这个属性的
        if (!event._constructed) {
          return false
        }
        this.hiddenRecord()
        if (this.username === '') {
          MessageBox.confirm('请先登录', '温馨提示').then(() => {
            this.$router.push({
              path: '/login',
              query: { redirect: this.$route.path }  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            })
          }, () => {
            return false
          })
        } else {
          let currentSelect = $('.right-bar-hook').eq(this.currentIndex).find('.bet-li-hook').eq(index)
          if (!this.myMoney) {
            this.ifopen = !this.ifopen
            let instance = Toast('请先输入金额')
            setTimeout(() => {
              instance.close()
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1000)
            return
          }
          if (this.lotterytype !== '北京快乐8') {
            if (this.myMoney > 0 && !currentSelect.hasClass('bet-choose')) {
              currentSelect.addClass('bet-choose')
              this.$refs.smallround[this.currentIndex].classList.add('menus-choose')
              currentSelect.find('.bet-input').val(parseInt(this.myMoney))
            } else if (currentSelect.hasClass('bet-choose')) {
              currentSelect.find('.bet-input').val(parseInt(currentSelect.find('.bet-input').val()) + parseInt(this.myMoney))
            }
            // 北京快乐8专有
          } else {
            if (this.myMoney > 0 && !currentSelect.hasClass('bet-choose')) {
              this.$refs.smallround[this.currentIndex].classList.add('menus-choose')
              currentSelect.find('.bet-input').val(parseInt(this.myMoney))
              if (this.ballkinds[FIndex] === '选二') {
                if ($('.bet-choose').length < 2) {
                  currentSelect.addClass('bet-choose')
                } else {
                  this.ifopen = !this.ifopen
                  let instance = Toast('[选二]请选择2个号码!')
                  setTimeout(() => {
                    instance.close()
                    this.ifopen = !this.ifopen
                    clearTimeout()
                  }, 1000)
                  return false
                }
              } else if (this.ballkinds[FIndex] === '选三') {
                if ($('.bet-choose').length < 3) {
                  currentSelect.addClass('bet-choose')
                } else {
                  this.ifopen = !this.ifopen
                  let instance = Toast('[选三]请选择3个号码!')
                  setTimeout(() => {
                    instance.close()
                    this.ifopen = !this.ifopen
                    clearTimeout()
                  }, 1000)
                  return false
                }
              } else if (this.ballkinds[FIndex] === '选四') {
                if ($('.bet-choose').length < 4) {
                  currentSelect.addClass('bet-choose')
                } else {
                  this.ifopen = !this.ifopen
                  let instance = Toast('[选四]请选择4个号码!')
                  setTimeout(() => {
                    instance.close()
                    this.ifopen = !this.ifopen
                    clearTimeout()
                  }, 1000)
                  return false
                }
              } else if (this.ballkinds[FIndex] === '选五') {
                if ($('.bet-choose').length < 5) {
                  currentSelect.addClass('bet-choose')
                } else {
                  this.ifopen = !this.ifopen
                  let instance = Toast('[选五]请选择5个号码!')
                  setTimeout(() => {
                    instance.close()
                    this.ifopen = !this.ifopen
                    clearTimeout()
                  }, 1000)
                  return false
                }
              } else {
                currentSelect.addClass('bet-choose')
              }
            } else if (currentSelect.hasClass('bet-choose')) {
              currentSelect.removeClass('bet-choose')
              currentSelect.find('.bet-input').val(0)
              let ballLength = $('.ball-row').eq(FIndex).find('.bet-li-hook').length
              for (let i = 0; i < ballLength; i++) {
                if ($('.bet-choose').length < 1) {
                  this.$refs.smallround[this.currentIndex].classList.remove('menus-choose')
                }
              }
            }
          }
        }
      },
      // 号码金额输入框输入
      moneyWriting (item, index, currentIndex) {
        this.hiddenRecord()
        if (this.username === '') {
          MessageBox.confirm('请先登录', '温馨提示').then(() => {
            this.$router.push({
              path: '/login',
              query: { redirect: this.$route.path }  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            })
          }, () => {
            return false
          })
        } else {
          let currentSelect = $('.right-bar-hook').eq(currentIndex).find('.bet-li-hook').eq(index)
          if (currentSelect.find('.bet-input').val() >= 1) {
            this.$refs.smallround[currentIndex].classList.add('menus-choose')
            item[currentIndex][index].select = true
          } else {
            let length = $('.right-bar-hook').eq(currentIndex).find('.bet-li-hook').length
            let length1 = $('.right-bar-hook').eq(currentIndex).find('.bet-choose').length
            item[currentIndex][index].select = false
            for (let i = 0; i < length; i++) {
              if (length1 <= 1) {
                this.$refs.smallround[currentIndex].classList.remove('menus-choose')
              }
            }
          }
        }
      },
      // 点击快速金额
      selectFast (item, index) {
        this.hiddenRecord()
        if (this.username === '') {
          MessageBox.confirm('请先登录', '温馨提示').then(() => {
            this.$router.push({
              path: '/login',
              query: { redirect: this.$route.path }  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            })
          }, () => {
            return false
          })
        } else {
          this.myMoney = parseInt(item)
        }
        if (this.myMoney && this.lotterytype === '北京快乐8') {
          $('.bet-choose').find('input').val(this.myMoney)
        }
      },
      // 北京快乐8快捷下注专有
      fastInputWrite () {
        $('.bet-choose').find('input').val(this.$refs.setMoney.value)
      },
      // 提交下注
      lottorySubmit (subindex) {
        if (this.username === '') {
          MessageBox.confirm('请先登录', '温馨提示').then(() => {
            this.$router.push({
              path: '/login',
              query: { redirect: this.$route.path }  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            })
          }, () => {
            return false
          })
        } else {
          let money = 0
          let submitTotalMoney = 0
          let ballChoosing = document.getElementsByClassName('bet-choose')
          if ($('.bet-choose').length>0) {
            for (let i = 0; i < $('.bet-choose').length; i++) {
              money = parseInt($('.bet-choose').find('.bet-input').eq(i).val())
              submitTotalMoney += parseInt(money)
              if ((!this.myMoney && !money) || (this.myMoney && !money)) {
                this.ifopen = !this.ifopen
                let instance = Toast('请先输入金额')
                setTimeout(() => {
                  instance.close()
                  this.ifopen = !this.ifopen
                  clearTimeout()
                }, 1000)
                return false
              } else if (money < this.minMoney && ballChoosing.length > 0) {
                this.ifopen = !this.ifopen
                let instance = Toast(`最低单注${this.minMoney}元`)
                setTimeout(() => {
                  instance.close()
                  this.ifopen = !this.ifopen
                  clearTimeout()
                }, 1000)
                return false
              } else if (money > this.maxMoney && ballChoosing.length > 0) {
                this.ifopen = !this.ifopen
                let instance = Toast(`最高单注${this.maxMoney}元`)
                setTimeout(() => {
                  instance.close()
                  this.ifopen = !this.ifopen
                  clearTimeout()
                }, 1000)
                return false
              }
            }
            let msg = ''
            let type = ''
            let ballnum = ''
            let ballpl = ''
            for (let i = 0; i < $('.bet-choose').length; i++) {
              type = $('.bet-choose').eq(i).parents('.ball-row').siblings('.title-no').text()
              ballnum = $('.bet-choose').eq(i).find('.bet-content').text()
              ballpl = $('.bet-choose').find('.bet-item').eq(i).text()
              money = $('.bet-choose').find('.bet-input').eq(i).val()
              msg += `${type}[${ballnum}] @ ${ballpl} <font color="red">${money}</font>元<br />`
            }
            MessageBox.confirm(msg, '下注明细').then(() => {
              if (submitTotalMoney > this.usermoney) {
                this.ifopen = !this.ifopen
                let instance = Toast('余额不足')
                setTimeout(() => {
                  instance.close()
                  this.ifopen = !this.ifopen
                  clearTimeout()
                }, 1000)
                return
              }
              let data = {}
              if (this.lotterytype !== '北京快乐8') {
                let domList = $('.bet-input')
                for (let i = 0; i < domList.length; i++) {
                  data[$('.bet-input').eq(i).attr('name')] = parseInt($('.bet-input').eq(i).val()) || 0
                }
              } else {
                if (this.ballkinds[subindex] === '选二' || this.ballkinds[subindex] === '选三' || this.ballkinds[subindex] === '选四' || this.ballkinds[subindex] === '选五') {
                  data['xx'] = this.myMoney
                  for (let i = 0; i < $('.bet-li-hook').length; i++) {
                    if ($('.bet-li-hook').eq(i).hasClass('bet-choose')) {
                      data[$('.bet-input').eq(i).attr('name')] = 'on'
                    }
                  }
                } else {
                  let domList = $('.right-bar-hook').eq(subindex).find('.bet-input')
                  for (let i = 0; i < domList.length; i++) {
                    data[domList.eq(i).attr('name')] = parseInt(domList.eq(i).val()) || 0
                  }
                }
              }
              this.$http.post(this.posturl, data).then((res) => {
                this.ifopen = !this.ifopen
                let instance = Toast(res.data.msg)
                setTimeout(() => {
                  instance.close()
                  this.ifopen = !this.ifopen
                  clearTimeout()
                }, 1000)
                if (res.data.code === 0) {
                  for (let i = 0; i < $('.ball-row').length; i++) {
                    $('.ball-row').eq(i).find('.bet-li-hook').removeClass('bet-choose')
                    $('.ball-row').eq(i).find('.bet-input').val('')
                    this.myMoney = null
                    $('.nav-li-hook').eq(i).find('.smallround').removeClass('menus-choose')
                  }
                  this.ballTotals.forEach((item, index) => {
                    item.forEach((itemA) => {
                      itemA.select = false
                    })
                  })
                  this.$store.dispatch('SET_userMoney', res.data.data.money)
                }
              }).catch((error) => {
                console.log(error)
              })
            }, () => {
              return false
            })
          } else {
            this.ifopen = !this.ifopen
            let instance = Toast('请先下注')
            setTimeout(() => {
              instance.close()
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1000)
          }
        }
      },
      // 重置按钮
      lotteryReset () {
        this.fastTotalMoney = '' // 清空号码金额
        this.myMoney = ''
        let currentRight = this.$refs.rightbar[this.currentIndex] // 获取当前页面的右侧模块
        let currentInput = currentRight.getElementsByClassName('bet-input')
        $('.right-bar-hook').eq(this.currentIndex).find('.bet-choose').removeClass('bet-choose')
        for (let i = 0; i < currentInput.length; i++) {
          currentInput[i].value = ''
        }
        this.$refs.smallround[this.currentIndex].classList.remove('menus-choose')
        this.ballTotals.forEach((item, index) => {
          item.forEach((itemA) => {
            itemA.select = false
          })
        })
      }
    },
    components: {
      MButton,
      Scroll,
      Loading,
      Toast,
      MessageBox,
      slideNav,
      MHeader,
      maskLayer
    }
  }
</script>

<style scoped>
.lottery-main-wrapper {
  position: absolute;
  left:0;
  bottom: 0;
  top:0;
  right: 0;
  background: url('../../assets/bg2.png') no-repeat fixed bottom;
  background-size: cover;
}
.lottery-wrapper {
  position: absolute;
  width: 100%;
  top: 2.34rem;
  bottom: 1.48rem;
}
.scroll-wrap {
  height:100%;
  overflow:hidden;
}
.left-bar-wrapper {
  float: left;
  width: 25%;
  height: 100%;
  background-color: rgba(0,0,0,.21);
}
.nav li {
  position: relative;
  height: 0.72rem;
  box-shadow: 0.02rem 0.02rem 0 #ccc;
  color: #fff;
  font-size: 0.32rem;
  line-height: 0.72rem;
  text-align: center;
}
.nav li.selecting {
  background-color: rgba(0,0,0,.23);
  box-shadow: inset -1px 3px 7px rgba(0,0,0,.34);
}
.smallround {
  position: absolute;
  top: 0.18rem;
  left: 0.1rem;
  width: 0.1rem;
  height: 0.34rem;
  background-color: rgba(0,0,0,.3);
  border-radius: 0.5rem;
}
i.menus-choose {
  background-color: #fffb22;
}
  /* 右侧样式 */
  .right-mask {
    display: flex;
    position:absolute;
    top:0;
    left:25%;
    right:0;
    bottom:0;
    background-color:rgba(0,0,0,0.5);
    align-content: center;
    align-items: center;
    justify-content: center;
    color: white;
  }
 .right-bar-wrapper {
   float: left;
   width: 75%;
   height: 100%;
 }
 .right-bar-wrap {
   min-height: 70vh;
 }
 .title-no {
   height: 0.72rem;
   color: #fff;
   text-align: center;
   font-size: 0.4rem;
   line-height: 0.72rem;
 }
 .bjkl-title {
   display: flex;
   align-items: center;
   align-content: center;
   justify-content: center;
   text-align: center;
   min-height: 0.72rem;
   font-size: 0.4rem;
   border-top: 0.02rem solid rgba(0,0,0,.2);
   color: #000;
 }
 .ball-row ul li {
   float: left;
   display: flex;
   width: 50%;
   height: 0.88rem;
   justify-content: space-between;
   align-items: center;
   box-shadow: inset 0 0 0 0.02rem rgba(0,0,0,.2);
   line-height: 0.88rem;
 }
 .bet-left {
   flex: 1;
   padding-left: 2.5%;
 }
 .bet-left.bjkl-left-hook {
   flex: 1;
   justify-content: center;
 }
 .bet-left, .bet-money {
   display:flex;
   align-items: center;
   justify-content: flex-start;
 }
 .ball-row ul li.bet-choose {
   background-color: rgba(0,0,0,.4);
   color: #fff;
   text-shadow: 0 0 0 rgba(255,255,255,.23);
   box-shadow: inset 0 1px 5px rgba(0,0,0,.3);
 }
 .bet-content {
   min-width: 0.5rem;
   min-height: 0.5rem;
   text-align: center;
   font-size: 0.28rem;
   font-weight: bold;
 }
 .round-1 {
   width: 0.5rem;
   height: 0.5rem;
   border-radius: 50%;
   box-shadow: inset 0.02rem -0.12rem 0.2rem #fff;
   background: #d5d5d5;
   color: #000!important;
   text-align: center;
   line-height: 0.56rem;
 }
 .bet-item {
  flex: 1;
  font-size: .28rem;
  font-weight: bold;
  color: rgba(0,0,0,.5);
  text-align: center;
 }
 .ball-row ul li.bet-choose .bet-item {
   color: #fff;
 }
 .bet-money {
    display: flex;
    width: 37%;
    margin-right: 0.1rem;
 }
 .bet-money .bet-input{
   flex: 1;
   width: 100%;
   height: 0.44rem;
   font-size: 0.24rem;
   text-align: center;
   outline: none;
   border: none;
   border-radius: 0.1rem;
 }
 /* 动画 */
.mini-enter-active, .mini-leave-active {
  transition: all 0.5s;
}
.mini-enter, .mini-leave-to {
  opacity: 0;
}
/* 彩票底部 */
.lottery-footer-wrapper {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.08rem;
  padding: 0.2rem;
  background-color: rgba(0,0,0,0.39);
  border-top: 0.02rem solid #fff;
}
.lottery-footer-wrapper .left-wrapper, .lottery-footer-wrapper .right-wrapper {
  flex: 1;
  width: 50%;
}
.count-text {
  display: flex;
  width: 87%;
  height: 0.4rem;
  padding-bottom: 0.1rem;
  line-height: 0.4rem;
  color: #fff;
  font-size: 0.32rem;
  justify-content: space-between;
}
.curcie {
  display: flex;
  height: 0.32rem;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 0.06rem;
  color: #fff;
  font-size:0.28rem;
  font-weight: bold;
  padding:0 0.04rem;
  margin-right: 0.06rem;
  background-color: #ef4f4f;
  justify-content: center;
}
.curcie:active {
  background-color: blue;
}
.curcie:last-child {
  margin-right: 0;
}
.money-wrapper {
  height: 0.58rem;
  font-size: 0.28rem;
}
.money-wrapper .fast-input {
  width: 84%;
  height: 0.4rem;
  outline: none;
  border: none;
  padding-left: 3%;
  border-radius: 0.1rem;
}
.lottery-footer-wrapper .right-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.right-wrapper .right-button {
  flex: 0 0 40%;
  width: 40%;
  height: 0.8rem;
  margin-right: 0.4rem;
  font-size:0.32rem;
}
/* loading样式 */
.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<style>
  /* 下注详情框样式 */
  .mint-msgbox {
    border-radius: 0.28rem;
  }
  .mint-msgbox-content {
    position: relative !important;
    max-height: 7rem !important;
    min-height: 1rem !important;
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch !important;
    border-top: 1px solid #ddd !important;
    margin: 10px 0 5px !important;
    padding: 10px !important;
  }
  .mint-msgbox-cancel {
    height: 0.8rem;
    margin-right: 0.2rem !important;
    border: 0.02rem solid #ddd !important;
    background-color: #26a2ff !important;
    color: white !important;
    font-weight: 700 !important;
  }
  .mint-msgbox-confirm {
    height: 0.8rem;
    color: white !important;
    background-color: #ef4f4f !important;
    font-weight: 700 !important;
  }
  .mint-msgbox-btns {
    height: auto !important;
    padding: 0.1rem !important;
    border-radius: 0.3rem !important;
  }
  .mint-msgbox-btn {
    height: auto !important;
    padding: 0.02rem !important;
    border-radius: 0.3rem !important;
  }
</style>