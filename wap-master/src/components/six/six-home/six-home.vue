<template>
  <div>
    <div class="six-wrapper" id="panel">
      <div class="header-wrapper">
        <div class="header">
          <button class="buttons-left" @click="showslide">
            <span class="game-name">六合彩</span>
            <img src="../../../assets/back.png" alt="" class="game-back-icon">
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
          <router-link to="/login" tag="div" class="money" v-else>
            请登录！
          </router-link>
        </div>
        <div class="top-info-wrapper">
          <div class="recent" @click="resultShow">
            <p class="title">
              <span>近期开奖</span>
              <i class="arrow" :class="{'rotate':isRotate === true}"></i>
            </p>
            <div class="balls">
              <span class="ball" v-for="(num, index) in currentNum" :key="index" v-if="index < 6" :class="num | filterSixBsColor">{{num}}</span>
              <span class="add">+</span>
              <span class="ball" v-for="(num, index) in currentNum" :key="index" v-if="index === 6" :class="num | filterSixBsColor">{{num}}</span>
            </div>
          </div>
          <div class="timestop">
            <p class="periods">
              距{{currentPeriods}}期截止
            </p>
            <p class="countdown" v-show="endText !== ''">{{endText}}</p>
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
                  <span class="issue">{{item.period}}</span>
                  <div class="six-ball-wrap">
                    <div class="prize clearfix">
                      <span class="ball" v-for="(numA, indexA) in item.result" v-if="indexA < 6" :class="numA | filterSixBsColor">{{numA}}</span>
                      <span class="add">+</span>
                      <span class="ball" v-for="(numA, indexA) in item.result" v-if="indexA === 6" :class="numA | filterSixBsColor">{{numA}}</span>
                    </div>
                    <div class="prize clearfix">
                      <span class="num-dxds" :class="numA | filterDxColor(25)" v-for="(numA, indexA) in item.result" v-if="indexA < 6">{{numA | filterDx(25)}}</span>
                      <span class="add">+</span>
                      <span class="num-dxds" :class="numA | filterDxColor(25)" v-for="(numA, indexA) in item.result" v-if="indexA === 6">{{numA | filterDx(25)}}</span>
                    </div>
                    <div class="prize clearfix">
                      <span class="num-ds" v-for="(numA, indexA) in item.result" v-if="indexA < 6">{{numA | filterSixDsBs}}</span>
                      <span class="add">+</span>
                      <span class="num-ds" v-for="(numA, indexA) in item.result" v-if="indexA === 6">{{numA | filterSixDsBs}}</span>
                    </div>
                    <div class="prize clearfix">
                      <span class="num-dxds" v-for="(numA, indexA) in item.result" v-if="indexA < 6">{{numA | fllterSixSx}}</span>
                      <span class="add">+</span>
                      <span class="num-dxds" v-for="(numA, indexA) in item.result" v-if="indexA === 6">{{numA | fllterSixSx}}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
      <div class="main-wrapper">
        <div class="left-bar-wrapper">
          <scroll class="scroll-wrap" :data="sixkinds" :text="endText" ref="scroll">
            <div>
              <ul class="nav">
                <router-link tag="li" :to="`${sixkindsUrl[index]}`" v-for="(item, index) in sixkinds" :key="index" class="nav-li-hook" ref="sixNavlihook">
                  <span class="type-hook">{{item}}</span>
                </router-link>
              </ul>
            </div>
          </scroll>
        </div>
        <div class="right-bar-wrapper">
          <keep-alive>
            <router-view ref="sixrightbar" @selectBallnums="selectBallnums" :endText="endText" :hexiaoOddsIndex="hexiaoOddsIndex" @hexiaofastSel="hexiaofastSel" :hexiaoMoney="myMoney" v-if="!isCloseNoGame"></router-view>
          </keep-alive>
          <div class="six-right-mask" v-if="isCloseNoGame">
            六合彩已关闭，请勿下注。关闭原因：{{closeReason}}
          </div>
          <div class="six-right-mask" v-show="isFP">
            已封盘
          </div>
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
            <input type="number" placeholder="最低下注金额5元" pattern="[0-9]\*" maxlength="5" class="fast-input" ref="setMoney" v-model="myMoney" id="fastInput">
          </div>
        </div>
        <div class="right-wrapper">
          <mt-button type="danger" size="normal" class="right-button" @click="lottorySubmit">下注</mt-button>
          <mt-button type="primary" size="normal" class="right-button" @click="lotteryReset">重置</mt-button>
        </div>
        <div class="foot-mask" v-show="isCloseNoGame"></div>
      </div>
    </div>
    <slide-nav id="menu" class="slideout-menu" ref="slideI" :ballTotals="currentNum"></slide-nav>
    <mask-layer :ifopen="ifopen"></mask-layer>
  </div>
</template>

<script>
  import Slideout from '../../../../node_modules/slideout/dist/slideout.min'
  import Scroll from '@/base/scroll/scroll'
  import BScroll from 'better-scroll'
  import Loading from '@/base/loading1/loading' // 引入等待加载的组件
  import Loadings from '@/base/loading/loading' // 引入等待加载的组件
  import slideNav from '@/components/slide-nav/slide-nav'
  import { mapGetters } from 'vuex'
  import { MButton, Toast, MessageBox } from 'mint-ui'
  import { choose } from '@/base/js/combination' // 引入封装的组合函数
  import maskLayer from '@/base/mask-layer/mask-layer' // 引入遮罩层
  import { myfilter } from '@/base/js/mixin' // 引入等待加载的组件
  let moneyTimer
  let timerFP
  let timerOP
  export default {
    mixins: [myfilter],
    data () {
      return {
        slideout: {}, // 侧边栏滑动实例化对象
        orderType: null, // 当前投注类型
        submitType: null, // 提交类型
        currentIndex: 0,
        isRotate: false, // icon图标是否箭头向上
        endText: '', // 倒计时
        title: '',
        slideshow: false, // 侧边栏是否滑出
        popboolean: false,
        records: [], // 历史开奖记录
        currentPeriods: '', // 当前开盘期数
        currentNum: [], // 上期开奖号码
        opentime: 0, // 开奖时间变量
        endtime: 0, // 封盘时间变量
        isFP: false, // 是否显示封盘效果
        isCloseNoGame: false, // 是否停盘,默认开盘
        closeReason: '', // 关盘原因
        iHour: 0, // 小时变量
        iMinute: 0, // 分钟变量
        iSecond: 0, // 秒数变量,
        sixkinds: ['特码', '两面', '正码', '正码特', '正码1-6', '正码过关', '连码', '连肖', '连尾', '自选不中', '特码生肖', '正肖', '一肖', '合肖', '总肖', '色波', '半波', '半半波', '七色波', '头尾数', '平特尾数'],
        sixkindsUrl: ['/six', '/liangm', '/zm', '/zmt', '/zm1-6', '/zmgg', '/lianma', '/lianxiao', '/lianwei', '/zxbz', '/tmsx', '/zhengx', '/yx', '/hexiao', '/zongx', '/sebo', '/banbo', '/banbanbo', '/qisebo', '/touweishu', '/pingteweishu'],
        fastMoney: [50, 100, 500, 1000], // 自定义快速筹码金额
        fastTotalMoney: '', // 快捷下注总金额
        myMoney: '', // input输入的金额值
        ifopen: false, // 遮罩层
        posturl: '/api/member/Grp/grpOrder.php', // 六合彩所有彩种提交统一个接口，根据传值的gID不同来区分
        gid: null, // 存提交的彩种gid身份值,
        currentDataArray: [], // 存储当前下注的彩种数据,
        lianId: 0, // 连码专属的存储4，3，2变量
        hexiaoOddsIndex: 0 // 合肖专属的存储选择赔率的索引值
      }
    },
    watch: {
      opentime () {
        this.countdowmOpen(this.opentime)
        this.countdownFP(this.endtime)
      },
      myMoney () {
        if (this.submitType === 0 || this.submitType === 3 || this.submitType === 4 || this.submitType === 5) {
          this.currentDataArray.forEach((item, index) => {
            if (item.bool) {
              item.orderMoney = this.myMoney
            }
          })
        }
        if (this.submitType === 1 || this.submitType === 2) {
          this.currentDataArray.forEach((item, index) => {
            this.currentDataArray[index].forEach((itemA, indexA) => {
              if (itemA.bool) {
                itemA.orderMoney = this.myMoney
              }
            })
          })
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        // 实例化侧边栏滑动函数
        this.slideout = new Slideout({
          'panel': document.getElementById('panel'),
          'menu': document.getElementById('menu'),
          'padding': this.$refs.slideI.$el.offsetWidth,
          'tolerance': 70
        })
        // 初始化滚动函数
        this.$refs.scroll.refresh()
      })
    },
    computed: {
      ...mapGetters([
        'username',
        'usermoney'
      ])
    },
    methods: {
      // 获取历史开奖结果
      _getHistoryRecords () {
        this.$http.get('/api/member/lottery/lotResult.php?type=13').then((res) => {
          this.records = res.data
          this.records.forEach((item, index) => {
            if (index === 0) {
              this.currentNum = item.result
            }
          })
        }).catch((error) => {
          console.log(error)
        })
      },
      // 获取当天期数
      _getCurrentPeriods () {
        this.$http.get('/api/json/member/ajax_action.php?rtype=SP&Line=').then((res) => {
          this.isCloseNoGame = res.data.isCloseNoGame
          if (res.data.isCloseNoGame) {
            this.endText = '已关盘'
            this.closeReason = res.data.reason
          } else {
            this.currentPeriods = res.data.gNum
            this.endtime = res.data.sTime - res.data.iTime // 封盘剩余时间
            this.opentime = res.data.openTime - res.data.iTime // 开奖剩余时间
          }
        }).catch((error) => {
          console.log(error)
        })
        if (this.username) {
          // 如果登录，则10s刷新金额一次
          moneyTimer = setInterval(() => {
            this.$http.get('/api/json/center/?r=Money').then((res) => {
              this.$store.dispatch('SET_userMoney', res.data.data.user_money)
            }).catch((error) => {
              console.log(error)
              clearInterval(moneyTimer)
            })
          }, 10000)
        } else {
          clearInterval(moneyTimer)
        }
      },
      showpop () {
        this.popboolean = !this.popboolean
      },
      // 侧边栏滑动显示
      showslide (bool) {
        this.slideout.toggle()
        if (this.isRotate) {
          this.isRotate = false
        }
      },
      resultShow () {
        this.isRotate = !this.isRotate
        setTimeout(() => {
          this._initScroll()
        }, 20)
      },
      _initScroll () {
        // 历史开奖滚动
        this.list = new BScroll(this.$refs.list, {
          click: true
        })
        this.$refs.scroll.refresh()
      },
      // 开奖倒计时
      countdowmOpen (iTime) {
        clearInterval(timerOP)
        if (iTime > 0) {
          let fastInput = document.getElementById('fastInput')
          timerOP = setInterval(() => {
            iTime = iTime - 1
            this.iHour = parseInt(Math.floor(iTime / 3600))
            this.iMinute = parseInt(iTime % 86400 % 3600 / 60) // 计算分钟
            this.iSecond = parseInt(iTime % 60)
            this.iHour = this.iHour < 1 ? '' : this.iHour
            this.iMinute = this.iMinute < 10 ? '0' + this.iMinute : this.iMinute // 实际显示的分钟效果
            this.iSecond = this.iSecond < 10 ? '0' + this.iSecond : this.iSecond // 实际显示的秒数效果
            if (this.iHour < 1) {
              this.endText = `${this.iMinute}:${this.iSecond}` // 实际显示的总时间效果
            } else {
              this.endText = `${this.iHour}:${this.iMinute}:${this.iSecond}` // 实际显示的总时间效果
            }
            if (iTime === 0) {
              clearInterval(timerOP)
              this.isFP = false
              this._getCurrentPeriods()
              fastInput.setAttribute('placeholder', '快捷金额')
              fastInput.disabled = false
              document.getElementsByClassName('mint-button')[0].disabled = false
              document.getElementsByClassName('mint-button')[1].disabled = false
            }
          }, 1000)
        }
      },
      // 封盘倒计时
      countdownFP (iEndTime) {
        clearInterval(timerFP)
        let input = document.getElementsByClassName('six-input')
        let fastInput = document.getElementById('fastInput')
        let curcieSpan = document.getElementsByClassName('curcie')
        if (iEndTime > 0) {
          timerFP = setInterval(() => {
            iEndTime = iEndTime - 1
            if (iEndTime === 0) {
              clearInterval(timerFP)
              this.isFP = true
              // 封盘时间到，则禁止输入框写入，快捷下注选择
              fastInput.setAttribute('placeholder', '已封盘')
              fastInput.disabled = true
              for (let i = 0; i < input.length; i++) {
                input[i].value = ''
                document.getElementsByClassName('numball-wrap')[i].classList.remove('ballChoosing')
              }
              for (let i = 0; i < curcieSpan.length; i++) {
                curcieSpan[i].disabled = true
              }
              document.getElementsByClassName('mint-button')[0].disabled = true
              document.getElementsByClassName('mint-button')[1].disabled = true
              return false
            }
          }, 1000)
        } else {
          clearInterval(timerFP)
          // 封盘时间到，则禁止输入框写入，快捷下注选择
          fastInput.setAttribute('placeholder', '已封盘')
          fastInput.disabled = true
          for (let i = 0; i < input.length; i++) {
            input[i].value = ''
            document.getElementsByClassName('numball-wrap')[i].classList.remove('ballChoosing')
          }
          for (let i = 0; i < curcieSpan.length; i++) {
            curcieSpan[i].disabled = true
          }
          document.getElementsByClassName('mint-button')[0].disabled = true
          document.getElementsByClassName('mint-button')[1].disabled = true
          return false
        }
      },
      // 合肖专属触发
      hexiaofastSel (hexiaoval, ifopen, submit, name, gid, data) {
        this.hexiaoOddsIndex = hexiaoval
        this.ifopen = ifopen
        this.submitType = submit
        this.orderType = name
        this.gid = gid
        this.currentDataArray = data
      },
      // 六合彩：点击选择下注号码,由每个彩种的子组件触发
      selectBallnums (item, index, event, name, submitType, gid, data) {
        if (this.isRotate) {
          this.isRotate = false
        }
        // 在点击时,传 $event变量,Better-scroll插件中的 event事件和原生 js的 event有属性上得区别,Better-scroll插件派发的事件时event_constructed为true,原生点击事件是没有这个属性的
        if (!event._constructed) {
          return false
        }
        if (this.username === '') {
          MessageBox.confirm('请先登录', '温馨提示').then(() => {
            this.$router.push({
              path: '/login',
              query: { redirect: this.$route.path }  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            })
            this.$store.dispatch('UserLogout')
          }, () => {
            this.$store.dispatch('UserLogout')
            return false
          })
        }
        this.currentDataArray = data
        this.orderType = name
        this.submitType = submitType
        this.gid = gid
        if (!this.myMoney) {
          this.ifopen = !this.ifopen
          let instance = Toast('请先输入金额')
          setTimeout(() => {
            instance.close()
            this.ifopen = !this.ifopen
            clearTimeout()
          }, 500)
          return
        }
        if (this.submitType <= 1) {
          if (this.myMoney) {
            item.bool = !item.bool
            if (item.bool) {
              item.orderMoney = this.myMoney
            } else {
              item.orderMoney = 0
            }
          }
        }
        // 正码过关专属
        if (this.submitType === 2) {
          if (this.myMoney) {
            if (item.typeNames === '正码一') {
              this.currentDataArray[0].forEach((itemA, indexA) => {
                itemA.bool = false
              })
              item.bool = !item.bool
              if (item.bool) {
                item.orderMoney = this.myMoney
              } else {
                item.orderMoney = 0
              }
            }
            if (item.typeNames === '正码二') {
              this.currentDataArray[1].forEach((itemA, indexA) => {
                itemA.bool = false
              })
              item.bool = !item.bool
              if (item.bool) {
                item.orderMoney = this.myMoney
              } else {
                item.orderMoney = 0
              }
            }
            if (item.typeNames === '正码三') {
              this.currentDataArray[2].forEach((itemA, indexA) => {
                itemA.bool = false
              })
              item.bool = !item.bool
              if (item.bool) {
                item.orderMoney = this.myMoney
              } else {
                item.orderMoney = 0
              }
            }
            if (item.typeNames === '正码四') {
              this.currentDataArray[3].forEach((itemA, indexA) => {
                itemA.bool = false
              })
              item.bool = !item.bool
              if (item.bool) {
                item.orderMoney = this.myMoney
              } else {
                item.orderMoney = 0
              }
            }
            if (item.typeNames === '正码五') {
              this.currentDataArray[4].forEach((itemA, indexA) => {
                itemA.bool = false
              })
              item.bool = !item.bool
              if (item.bool) {
                item.orderMoney = this.myMoney
              } else {
                item.orderMoney = 0
              }
            }
            if (item.typeNames === '正码六') {
              this.currentDataArray[5].forEach((itemA, indexA) => {
                itemA.bool = false
              })
              item.bool = !item.bool
              if (item.bool) {
                item.orderMoney = this.myMoney
              } else {
                item.orderMoney = 0
              }
            }
          }
        }
        // 连码、自选不中专属
        if (this.submitType === 3 || this.submitType === 5) {
          if (this.orderType === '四全中') {
            this.lianId = 4
          }
          if (this.orderType === '三全中') {
            this.lianId = 3
          }
          if (this.orderType === '三中二') {
            this.lianId = 3
          }
          if (this.orderType === '二全中') {
            this.lianId = 2
          }
          if (this.orderType === '二中特') {
            this.lianId = 2
          }
          if (this.orderType === '特串') {
            this.lianId = 2
          }
          if (this.orderType === '五不中') {
            this.lianId = 5
          }
          if (this.orderType === '六不中') {
            this.lianId = 6
          }
          if (this.orderType === '七不中') {
            this.lianId = 7
          }
          if (this.orderType === '八不中') {
            this.lianId = 8
          }
          if (this.orderType === '九不中') {
            this.lianId = 9
          }
          if (this.orderType === '十不中') {
            this.lianId = 10
          }
          if (this.orderType === '十一不中') {
            this.lianId = 11
          }
          if (this.orderType === '十二不中') {
            this.lianId = 12
          }
          if (this.myMoney) {
            if (!item.bool) {
              if (document.getElementsByClassName('ballChoosing').length < (this.lianId + 3)) {
                item.bool = !item.bool
                item.orderMoney = this.myMoney
              } else {
                this.ifopen = !this.ifopen
                let instance = Toast(`请选择${this.lianId}-${this.lianId + 3}个号码投注!`)
                setTimeout(() => {
                  instance.close()
                  this.ifopen = !this.ifopen
                  clearTimeout()
                }, 1000)
                return false
              }
            } else {
              item.bool = !item.bool
            }
          }
        }
        // 连肖/连尾专属
        if (this.submitType === 4) {
          if (this.orderType === '二肖连' || this.orderType === '二尾碰') {
            this.lianId = 2
          }
          if (this.orderType === '三肖连' || this.orderType === '三尾碰') {
            this.lianId = 3
          }
          if (this.orderType === '四肖连' || this.orderType === '四尾碰') {
            this.lianId = 4
          }
          if (this.orderType === '五肖连' || this.orderType === '五尾碰') {
            this.lianId = 5
          }
          if (this.myMoney) {
            if (!item.bool) {
              if (document.getElementsByClassName('ballChoosing').length < (this.lianId + 3)) {
                item.bool = !item.bool
                item.orderMoney = this.myMoney
              } else {
                this.ifopen = !this.ifopen
                let instance = Toast(`请选择${this.lianId}-${this.lianId + 3}个号码投注!`)
                setTimeout(() => {
                  instance.close()
                  this.ifopen = !this.ifopen
                  clearTimeout()
                }, 1000)
                return false
              }
            } else {
              item.bool = !item.bool
            }
          }
        }
        // 合肖专属
        if (this.submitType === 6) {
          if (this.myMoney) {
            if (this.orderType === '中') {
              if (item.bool === false && this.hexiaoOddsIndex < 11) {
                if (this.hexiaoOddsIndex <= 11) {
                  this.hexiaoOddsIndex += 1
                  item.bool = true
                }
              } else if (item.bool === true && this.hexiaoOddsIndex <= 11) {
                item.bool = false
                this.hexiaoOddsIndex -= 1
              }
              if (item.bool === false && this.hexiaoOddsIndex >= 11) {
                this.ifopen = !this.ifopen
                let instance = Toast('最多选择 11 个生肖')
                setTimeout(() => {
                  instance.close()
                  this.ifopen = !this.ifopen
                  clearTimeout()
                }, 1000)
                return false
              }
            }
            if (this.orderType === '不中') {
              if (item.bool === false && this.hexiaoOddsIndex < 10) {
                if (this.hexiaoOddsIndex <= 10) {
                  this.hexiaoOddsIndex += 1
                  item.bool = true
                }
              } else if (item.bool === true && this.hexiaoOddsIndex <= 10) {
                item.bool = false
                this.hexiaoOddsIndex -= 1
              }
              if (item.bool === false && this.hexiaoOddsIndex >= 10) {
                this.ifopen = !this.ifopen
                let instance = Toast('最多选择 10 个生肖')
                setTimeout(() => {
                  instance.close()
                  this.ifopen = !this.ifopen
                  clearTimeout()
                }, 1000)
                return false
              }
            }
          }
        }
      },
      // 点击快速金额
      selectFast (item, index) {
        if (this.isRotate) {
          this.isRotate = false
        }
        if (this.username === '') {
          MessageBox.confirm('请先登录', '温馨提示').then(() => {
            this.$router.push({
              path: '/login',
              query: { redirect: this.$route.path }  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            })
            this.$store.dispatch('UserLogout')
          }, () => {
            this.$store.dispatch('UserLogout')
            return false
          })
        } else {
          this.myMoney = parseInt(item)
        }
      },
      // 提交下注
      lottorySubmit () {
        if (this.isRotate) {
          this.isRotate = false
        }
        if (this.username === '') {
          MessageBox.confirm('请先登录', '温馨提示').then(() => {
            this.$router.push({
              path: '/login',
              query: { redirect: this.$route.path }  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            })
            this.$store.dispatch('UserLogout')
          }, () => {
            this.$store.dispatch('UserLogout')
            return false
          })
        }
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
        let ballChoosing = document.getElementsByClassName('ballChoosing')
        if (this.myMoney && ballChoosing.length === 0) {
          this.ifopen = !this.ifopen
          let instance = Toast('请先选择下注号码')
          setTimeout(() => {
            instance.close()
            this.ifopen = !this.ifopen
            clearTimeout()
          }, 1000)
          return
        }
        if (this.myMoney < 5 && ballChoosing.length > 0) {
          this.ifopen = !this.ifopen
          let instance = Toast('最低下注金额为5元')
          setTimeout(() => {
            instance.close()
            this.ifopen = !this.ifopen
            clearTimeout()
          }, 1000)
          return
        }
        let msg = ''
        let data = {}
        let gold = {}
        let odds = {}
        if (this.submitType === 0) {
          this.currentDataArray.forEach((item, index) => {
            gold[item.name] = item.orderMoney
            odds[item.name] = item.odds
            data['gold'] = gold
            data['odds'] = odds
            data['gid'] = this.gid
            if (item.bool) {
              msg += `${this.orderType}[${item.ballNames}] @ ${item.odds} <font color="red">${item.orderMoney}</font>元<br />`
            }
          })
        }
        if (this.submitType === 1) {
          this.currentDataArray.forEach((item, index) => {
            this.currentDataArray[index].forEach((itemA, indexA) => {
              gold[itemA.name] = itemA.orderMoney
              odds[itemA.name] = itemA.odds
              data['gold'] = gold
              data['odds'] = odds
              data['gid'] = this.gid
              if (itemA.bool) {
                msg += `${itemA.typeNames}[${itemA.ballNames}] @ ${itemA.odds} <font color="red">${itemA.orderMoney}</font>元<br />`
              }
            })
          })
        }
        // 正码过关专属
        if (this.submitType === 2) {
          if (ballChoosing.length < 2) {
            this.ifopen = !this.ifopen
            let instance = Toast('请选择二组以上玩法，若只要单一下注请前往正码1-6投注!')
            setTimeout(() => {
              instance.close()
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1500)
            return
          } else {
            this.currentDataArray.forEach((item, index) => {
              this.currentDataArray[index].forEach((itemA, indexA) => {
                if (itemA.bool) {
                  data['gold'] = this.myMoney
                  data['teamcount'] = ballChoosing.length
                  data['ratio_now'] = 1
                  data['type'] = 4
                  data['gid'] = this.gid
                  data['gnum'] = itemA.gNum
                  data[`game1${index + 1}`] = `${itemA.typeNames} ${itemA.ballNames}`
                  data[`radio${index + 1}`] = itemA.odds
                  data[`oddindex${index + 1}`] = itemA.oddindex
                  if (itemA.bool) {
                    msg += `${itemA.typeNames}[${itemA.ballNames}] @ ${itemA.odds}<br />`
                  }
                }
              })
            })
            msg = msg + `下注金额：<font color="red">${this.myMoney}元</font>`
          }
        }
        // 连码专属
        if (this.submitType === 3) {
          if (ballChoosing.length < this.lianId) {
            this.ifopen = !this.ifopen
            let instance = Toast(`请选择${this.lianId}-${this.lianId + 3}个号码投注!`)
            setTimeout(() => {
              instance.close()
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1000)
            return
          }
          let newLianma = []
          let totalMoney = 0
          this.currentDataArray.forEach((item, index) => {
            if (item.bool) {
              newLianma.push(item.num)
              data['gold'] = this.myMoney
              data['ch_name'] = this.orderType
              data['gid'] = this.gid
              msg += `${this.orderType}[${newLianma}] @ ${item.odds}<br />`
            }
          })
          data['total_count'] = choose(newLianma, this.lianId).length
          data['totalArray'] = choose(newLianma, this.lianId)
          totalMoney = this.myMoney * choose(newLianma, this.lianId).length
          msg = `${this.orderType}[${newLianma}]<br />` + `组合数：${choose(newLianma, this.lianId).length}<br />` + `单注金额：${this.myMoney}<br />` + `总金额：<font color="red">${totalMoney}元</font>`
        }
        // 连肖、连尾专属
        if (this.submitType === 4) {
          if (ballChoosing.length < this.lianId) {
            this.ifopen = !this.ifopen
            let instance = Toast(`请选择${this.lianId}-${this.lianId + 3}个号码投注!`)
            setTimeout(() => {
              instance.close()
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1000)
            return
          }
          let newLianxiao = []
          let totalMoney = 0
          this.currentDataArray.forEach((item, index) => {
            if (item.bool) {
              newLianxiao.push(item.ballNames)
              data['gold'] = this.myMoney
              data['lx_name'] = this.orderType
              data['gid'] = this.gid
              msg += `${this.orderType}[${newLianxiao}] @ ${item.odds}<br />`
            }
          })
          data['num'] = choose(newLianxiao, this.lianId).length
          data['totalArray'] = choose(newLianxiao, this.lianId)
          totalMoney = this.myMoney * choose(newLianxiao, this.lianId).length
          msg = `${this.orderType}[${newLianxiao}]<br />` + `组合数：${choose(newLianxiao, this.lianId).length}<br />` + `单注金额：${this.myMoney}<br />` + `总金额：<font color="red">${totalMoney}元</font>`
        }
        // 自选不中专属
        if (this.submitType === 5) {
          if (ballChoosing.length < this.lianId) {
            this.ifopen = !this.ifopen
            let instance = Toast(`请选择${this.lianId}-${this.lianId + 3}个号码投注!`)
            setTimeout(() => {
              instance.close()
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1000)
            return
          }
          let newLianma = []
          let totalMoney = 0
          this.currentDataArray.forEach((item, index) => {
            if (item.bool) {
              newLianma.push(item.num)
              data['gold'] = this.myMoney
              data['ni_name'] = this.orderType
              data['gid'] = this.gid
              msg += `${this.orderType}[${newLianma}] @ ${item.odds}<br />`
            }
          })
          data['total_count'] = choose(newLianma, this.lianId).length
          data['totalArray'] = choose(newLianma, this.lianId)
          totalMoney = this.myMoney * choose(newLianma, this.lianId).length
          msg = `${this.orderType}[${newLianma}]<br />` + `组合数：${choose(newLianma, this.lianId).length}<br />` + `单注金额：${this.myMoney}<br />` + `总金额：<font color="red">${totalMoney}元</font>`
        }
        // 合肖专属
        if (this.submitType === 6) {
          let newzhexiao = []
          let newbzhexiao = []
          if (this.orderType === '中') {
            this.currentDataArray.forEach((item, index) => {
              if (item.bool) {
                newzhexiao.push(item.ballNames)
                data['gold'] = this.myMoney
                data['gid'] = this.gid
                data['concede_r'] = 'NX_IN'
                data['select_count'] = this.hexiaoOddsIndex
                data['num'] = newzhexiao
              }
            })
            msg = `下注类型：${this.orderType}<br />下注生肖：${newzhexiao}<br />下注金额：${this.myMoney}`
          }
          if (this.orderType === '不中') {
            this.currentDataArray.forEach((item, index) => {
              if (!item.bool) {
                newzhexiao.push(item.ballNames)
                data['gold'] = this.myMoney
                data['gid'] = this.gid
                data['concede_r'] = 'NX_IN'
                data['select_count'] = 12 - parseInt(this.hexiaoOddsIndex)
                data['num'] = newzhexiao
              } else {
                newbzhexiao.push(item.ballNames)
              }
            })
            msg = `下注类型：${this.orderType}<br />下注生肖：${newbzhexiao}<br />下注金额：${this.myMoney}`
          }
        }
        MessageBox.confirm(msg, '下注明细').then(action => {
          this.$http.post(this.posturl, data).then((res) => {
            this.ifopen = !this.ifopen
            let instance = Toast(res.data.msg)
            setTimeout(() => {
              instance.close()
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1000)
            if (res.data.code === 0) {
              this.gid = null
              this.orderType = ''
              if (this.submitType === 0 || this.submitType === 3 || this.submitType === 4 || this.submitType === 5 || this.submitType === 6) {
                this.currentDataArray.forEach((item, index) => {
                  item.orderMoney = 0
                  item.bool = false
                  this.myMoney = ''
                  if (this.submitType === 6) {
                    this.hexiaoOddsIndex = 0
                  }
                })
              } else {
                this.currentDataArray.forEach((item, index) => {
                  this.currentDataArray[index].forEach((itemA, indexA) => {
                    itemA.orderMoney = 0
                    itemA.bool = false
                    this.myMoney = ''
                  })
                })
              }
              this.$store.dispatch('SET_userMoney', res.data.data.money)
            }
          }).catch((error) => {
            console.log(error)
          })
        }, () => {
          return false
        })
      },
      // 重置按钮
      lotteryReset () {
        if (this.isRotate) {
          this.isRotate = false
        }
        this.myMoney = ''
        if (this.submitType === 0 || this.submitType === 3 || this.submitType === 4 || this.submitType === 5 || this.submitType === 6) {
          this.currentDataArray.forEach((item, index) => {
            item.orderMoney = 0
            item.bool = false
          })
        } else {
          this.currentDataArray.forEach((item, index) => {
            this.currentDataArray[index].forEach((itemA, indexA) => {
              itemA.orderMoney = 0
              itemA.bool = false
            })
          })
        }
      }
    },
    created () {
      this._getHistoryRecords()
      this._getCurrentPeriods()
    },
    destroyed () {
      clearInterval(timerOP)
      clearInterval(timerFP)
      clearInterval(moneyTimer)
    },
    components: {
      MButton,
      Scroll,
      Loading,
      Loadings,
      Toast,
      MessageBox,
      slideNav,
      maskLayer
    }
  }
</script>

<style scoped>
.six-wrapper {
  position: absolute;
  left:0;
  bottom: 0;
  top:0;
  right: 0;
  background: url('../../../assets/bg2.png') no-repeat fixed bottom;
  background-size: cover;
}
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
  background: url("../../../assets/down-list.png") no-repeat center center;
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
  height: 1.18rem;
  padding-top: 0.2rem;  
  text-align: center;
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
  background: url('../../../assets/arrow-down.png') no-repeat center center;
  transition: all .5s;
}
.rotate {
  transform: rotate(-180deg);
  -webkit-transform: rotate(-180deg);
}
.balls {
  display: flex;
  height: 0.94rem;
  justify-content: center;
  align-items: center;
}
.six-ball-wrap {
  flex: 0 0 70%;
  box-shadow: -0.02rem 0 0 0 #ccd4e5;
}
.ball {
  display: inline-block;
  height: 0.4rem;
  width: 0.4rem;
  margin-left: 0.03rem;
  border-radius: 50%;
  font-size: 0.24rem;
  text-align: center;
  line-height: .4rem;
  color: #000;
  font-weight: 700;
}
.add {
  font-size: 0.32rem;

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
  align-items: center;
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
  width: 100%;
  height: .6rem;
  align-items: center;
  justify-content: space-around;
}
.num-dxds {
  width: 0.4rem;
  height: 0.4rem;
  font-weight: 700;
  font-size: 0.24rem;
  text-align: center;
  margin-left: 0.03rem;
}
.num-ds {
  font-weight: 700;
  font-size: 0.24rem;
}
/* 大小单双的颜色 */
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
/* 开奖结果波色的背景图 */
.rColor {
  background: url("../../../assets/redBall.png") 0.02rem 0.02rem no-repeat;
  background-size: 0.4rem 0.4rem;
}
.gColor {
  background: url("../../../assets/greenBall.png") 0.02rem 0.02rem no-repeat;
  background-size: 0.4rem 0.4rem;
}
.bColor {
  background: url("../../../assets/blueBall.png") 0.02rem 0.02rem no-repeat;
  background-size: 0.4rem 0.4rem;
}

/* 六合彩主体 */
.main-wrapper {
  position: absolute;
  width: 100%;
  top: 2.34rem;
  bottom: 1.48rem;
}
/* 左侧样式 */
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
.nav .nav-li-hook.router-link-active {
  background-color: rgba(0,0,0,.23);
  box-shadow: inset -1px 3px 7px rgba(0,0,0,.34);
}
/* 右侧样式 */
.right-bar-wrapper {
  float: left;
  width: 75%;
  height: 100%;
}
/* 六合彩底部 */
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
/* 右侧蒙层 */
.six-right-mask {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 25%;
  right: 0;
  background-color: rgba(0,0,0,0.3);
  align-content: center;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.28rem;
}
/* 底部蒙层 */
.foot-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.3);
}
</style>

<style>
.numball-wrap.ballChoosing {
  background: rgba(0,0,0,.4);
  text-shadow: 0 0 0 rgba(255,255,255,.23);
  box-shadow: inset 0 0.0rem 0.1rem rgba(0,0,0,.3);
}
.otherball-wrap.ballChoosing {
  background: rgba(0,0,0,.4);
  text-shadow: 0 0 0 rgba(255,255,255,.23);
  color: #fff;
  box-shadow: inset 0 0.0rem 0.1rem rgba(0,0,0,.3);
}
.lianxiao-table-tr.ballChoosing {
  background: rgba(0,0,0,.4);
  text-shadow: 0 0 0 rgba(255,255,255,.23);
  color: #fff;
  box-shadow: inset 0 0.0rem 0.1rem rgba(0,0,0,.3);
}
.hxhead-row .ballChoosing {
  background: rgba(0,0,0,.4);
  text-shadow: 0 0 0 rgba(255,255,255,.23);
  color: #fff;
  box-shadow: inset 0 0.0rem 0.1rem rgba(0,0,0,.3);
}
</style>
