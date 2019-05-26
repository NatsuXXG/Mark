<template>
  <six-x-scroll :tabItems="tabItems" @changeConIndex="changeConIndex">
    <scroll class="scroll-wrap" v-show="conIndex === 0" ref="scrollA" :data="zmtOneNumBalls">
      <div class="tm-a-wrap clearfix">
        <div class="tm-a-top clearfix">
          <div class="numball-wrap" v-for="(ball, index) in zmtOneNumBalls" :class="{'ballChoosing':ball.bool}" :key="index" @click="selectBallnums(ball, index, $event, tabItems[conIndex], submitType, zmtOnegID, zmtOneNumBalls)" ref="zmt1">
            <span class="tm-num" ref="calaStyle" :class="index+1 | filterSixBsBgColor">{{index+1}}</span>
            <span :name="'odds' + '[' + ball.name + ']'">{{ball.odds}}</span>
            <input type="hidden" :name="'gold' + '[' + ball.name + ']'">
          </div>
        </div>
      </div>
    </scroll>
    <scroll class="scroll-wrap" v-show="conIndex === 1" ref="scrollB" :data="zmtOneNumBalls">
      <div class="tm-a-wrap clearfix">
        <div class="tm-a-top clearfix">
          <div class="numball-wrap" v-for="(ball, index) in zmtTwoNumBalls" :class="{'ballChoosing':ball.bool}" :key="index" @click="selectBallnums(ball, index, $event, tabItems[conIndex], submitType, zmtTwogID, zmtTwoNumBalls)" ref="zmt2">
            <span class="tm-num" ref="calbStyle" :class="index+1 | filterSixBsBgColor">{{index+1}}</span>
            <span :name="'odds' + '[' + ball.name + ']'">{{ball.odds}}</span>
            <input type="hidden" :name="'gold' + '[' + ball.name + ']'">
          </div>
        </div>
      </div>
    </scroll>
    <scroll class="scroll-wrap" v-show="conIndex === 2" ref="scrollC" :data="zmtOneNumBalls">
      <div class="tm-a-wrap clearfix">
        <div class="tm-a-top clearfix">
          <div class="numball-wrap" v-for="(ball, index) in zmtTreNumBalls" :class="{'ballChoosing':ball.bool}" :key="index" @click="selectBallnums(ball, index, $event, tabItems[conIndex], submitType, zmtTregID, zmtTreNumBalls)" ref="zmt3">
            <span class="tm-num" ref="calcStyle" :class="index+1 | filterSixBsBgColor">{{index+1}}</span>
            <span :name="'odds' + '[' + ball.name + ']'">{{ball.odds}}</span>
            <input type="hidden" :name="'gold' + '[' + ball.name + ']'">
          </div>
        </div>
      </div>
    </scroll>
    <scroll class="scroll-wrap" v-show="conIndex === 3" ref="scrollD" :data="zmtFourNumBalls">
      <div class="tm-a-wrap clearfix">
        <div class="tm-a-top clearfix">
          <div class="numball-wrap" v-for="(ball, index) in zmtFourNumBalls" :class="{'ballChoosing':ball.bool}" :key="index" @click="selectBallnums(ball, index, $event, tabItems[conIndex], submitType, zmtFourgID, zmtFourNumBalls)" ref="zmt4">
            <span class="tm-num" ref="caldStyle" :class="index+1 | filterSixBsBgColor">{{index+1}}</span>
            <span :name="'odds' + '[' + ball.name + ']'">{{ball.odds}}</span>
            <input type="hidden" :name="'gold' + '[' + ball.name + ']'">
          </div>
        </div>
      </div>
    </scroll>
    <scroll class="scroll-wrap" v-show="conIndex === 4" ref="scrollE" :data="zmtFiveNumBalls">
      <div class="tm-a-wrap clearfix">
        <div class="tm-a-top clearfix">
          <div class="numball-wrap" v-for="(ball, index) in zmtFiveNumBalls" :class="{'ballChoosing':ball.bool}" :key="index" @click="selectBallnums(ball, index, $event, tabItems[conIndex], submitType, zmtFivegID, zmtFiveNumBalls)" ref="zmt5">
            <span class="tm-num" ref="caleStyle" :class="index+1 | filterSixBsBgColor">{{index+1}}</span>
            <span :name="'odds' + '[' + ball.name + ']'">{{ball.odds}}</span>
            <input type="hidden" :name="'gold' + '[' + ball.name + ']'">
          </div>
        </div>
      </div>
    </scroll>
    <scroll class="scroll-wrap" v-show="conIndex === 5" ref="scrollF" :data="zmtSixNumBalls">
      <div class="tm-a-wrap clearfix">
        <div class="tm-a-top clearfix">
          <div class="numball-wrap" v-for="(ball, index) in zmtSixNumBalls" :class="{'ballChoosing':ball.bool}" :key="index" @click="selectBallnums(ball, index, $event, tabItems[conIndex], submitType, zmtSixgID, zmtSixNumBalls)" ref="zmt6">
            <span class="tm-num" ref="calfStyle" :class="index+1 | filterSixBsBgColor">{{index+1}}</span>
            <span :name="'odds' + '[' + ball.name + ']'">{{ball.odds}}</span>
            <input type="hidden" :name="'gold' + '[' + ball.name + ']'">
          </div>
        </div>
      </div>
    </scroll>
  </six-x-scroll>
</template>

<script>
import Scroll from '@/base/scroll/scroll'
import sixXScroll from '@/base/six-x-scroll/six-x-scroll'
import { myfilter } from '@/base/js/mixin' // 引入mixin的组件
export default {
  mixins: [myfilter],
  data () {
    return {
      tabItems: ['正码特 1', '正码特 2', '正码特 3', '正码特 4', '正码特 5', '正码特 6'],
      conIndex: 0,
      submitType: 0,
      zmtOneNumBalls: [],
      zmtTwoNumBalls: [],
      zmtTreNumBalls: [],
      zmtFourNumBalls: [],
      zmtFiveNumBalls: [],
      zmtSixNumBalls: [],
      zmtOnegID: null, // 六合彩提交下注必须参数
      zmtTwogID: null, // 六合彩提交下注必须参数
      zmtTregID: null, // 六合彩提交下注必须参数
      zmtFourgID: null, // 六合彩提交下注必须参数
      zmtFivegID: null, // 六合彩提交下注必须参数
      zmtSixgID: null // 六合彩提交下注必须参数
    }
  },
  components: {
    sixXScroll,
    Scroll
  },
  computed: {
  },
  created () {
    this._getZmtOneDatas()
    this._getZmtTwoDatas()
    this._getZmtTreDatas()
    this._getZmtFourDatas()
    this._getZmtFiveDatas()
    this._getZmtSixDatas()
  },
  // 当有keepalive的时候，会触发这个钩子函数，进行数据的初始化
  deactivated () {
    this.zmtOneNumBalls.forEach((item) => {
      item.bool = false
    })
    this.zmtTwoNumBalls.forEach((item) => {
      item.bool = false
    })
    this.zmtTreNumBalls.forEach((item) => {
      item.bool = false
    })
    this.zmtFourNumBalls.forEach((item) => {
      item.bool = false
    })
    this.zmtFiveNumBalls.forEach((item) => {
      item.bool = false
    })
    this.zmtSixNumBalls.forEach((item) => {
      item.bool = false
    })
  },
  methods: {
    // 内容tab切换，由子组件触发,清除其他面的选中高亮
    changeConIndex (val) {
      this.conIndex = val
      this.$nextTick(() => {
        this.$refs.scrollA.refresh()
        this.$refs.scrollB.refresh()
        this.$refs.scrollC.refresh()
        this.$refs.scrollD.refresh()
        this.$refs.scrollE.refresh()
        this.$refs.scrollF.refresh()
      })
      this.zmtOneNumBalls.forEach((item, index) => {
        item.bool = false
        item.orderMoney = 0
      })
      this.zmtTwoNumBalls.forEach((item, index) => {
        item.bool = false
        item.orderMoney = 0
      })
      this.zmtTreNumBalls.forEach((item, index) => {
        item.bool = false
        item.orderMoney = 0
      })
      this.zmtFourNumBalls.forEach((item, index) => {
        item.bool = false
        item.orderMoney = 0
      })
      this.zmtFiveNumBalls.forEach((item, index) => {
        item.bool = false
        item.orderMoney = 0
      })
      this.zmtSixNumBalls.forEach((item, index) => {
        item.bool = false
        item.orderMoney = 0
      })
    },
    // 获取正码特1的数据
    _getZmtOneDatas () {
      this.$http.get('/api/json/member/ajax_action.php?rtype=NAS&rtypeN=N1').then((res) => {
        if (res.status === 200) {
          for (let key in res.data) {
            if (key.indexOf('N1') === 0) {
              this.zmtOneNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0})
            }
          }
          this.zmtOneNumBalls.forEach((item, index) => {
            this.zmtOneNumBalls[index]['ballNames'] = index + 1
          })
          this.zmtOnegID = res.data.gID.trim()
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 获取正码特2的数据
    _getZmtTwoDatas () {
      this.$http.get('/api/json/member/ajax_action.php?rtype=NAS&rtypeN=N2').then((res) => {
        if (res.status === 200) {
          for (let key in res.data) {
            if (key.indexOf('N2') === 0) {
              this.zmtTwoNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0})
            }
          }
          this.zmtTwoNumBalls.forEach((item, index) => {
            this.zmtTwoNumBalls[index]['ballNames'] = index + 1
          })
          this.zmtTwogID = res.data.gID
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 获取正码特3的数据
    _getZmtTreDatas () {
      this.$http.get('/api/json/member/ajax_action.php?rtype=NAS&rtypeN=N3').then((res) => {
        if (res.status === 200) {
          for (let key in res.data) {
            if (key.indexOf('N3') === 0) {
              this.zmtTreNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0})
            }
          }
          this.zmtTreNumBalls.forEach((item, index) => {
            this.zmtTreNumBalls[index]['ballNames'] = index + 1
          })
          this.zmtTregID = res.data.gID
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 获取正码特4的数据
    _getZmtFourDatas () {
      this.$http.get('/api/json/member/ajax_action.php?rtype=NAS&rtypeN=N4').then((res) => {
        if (res.status === 200) {
          for (let key in res.data) {
            if (key.indexOf('N4') === 0) {
              this.zmtFourNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0})
            }
          }
          this.zmtFourNumBalls.forEach((item, index) => {
            this.zmtFourNumBalls[index]['ballNames'] = index + 1
          })
          this.zmtFourgID = res.data.gID
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 获取正码特5的数据
    _getZmtFiveDatas () {
      this.$http.get('/api/json/member/ajax_action.php?rtype=NAS&rtypeN=N5').then((res) => {
        if (res.status === 200) {
          for (let key in res.data) {
            if (key.indexOf('N5') === 0) {
              this.zmtFiveNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0})
            }
          }
          this.zmtFiveNumBalls.forEach((item, index) => {
            this.zmtFiveNumBalls[index]['ballNames'] = index + 1
          })
          this.zmtFivegID = res.data.gID
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 获取正码特6的数据
    _getZmtSixDatas () {
      this.$http.get('/api/json/member/ajax_action.php?rtype=NAS&rtypeN=N6').then((res) => {
        if (res.status === 200) {
          for (let key in res.data) {
            if (key.indexOf('N6') === 0) {
              this.zmtSixNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0})
            }
          }
          this.zmtSixNumBalls.forEach((item, index) => {
            this.zmtSixNumBalls[index]['ballNames'] = index + 1
          })
          this.zmtSixgID = res.data.gID
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 点击选中号码，高亮效果
    selectBallnums (item, index, event, name, submitType, gid, data) {
      this.$emit('selectBallnums', item, index, event, name, submitType, gid, data)
    }
  }
}
</script>

<style scoped>
.scroll-wrap {
  height:100%;
  overflow:hidden;
}
.tm-header-wrapper {
  width: 100%;
  overflow: hidden;
}
.tm-header-wrapper .title-no {
  float: left;
  width: 50px;
}
.tm-a-wrap {
  position: relative;
  width: 100%;
  min-height: 100%;
}
.numball-wrap {
  float: left;
  display: flex;
  width: 1.2rem;
  height: 0.6rem;
  padding: 0.2rem;
  font-size: 0.28rem;
  line-height: 0.6rem;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  box-shadow: inset 0 0 0 1px #ccc;
}
.numball-wrap .tm-num {
  width: 0.5rem;
  height: 0.5rem;
  background-size: 0.5rem 0.5rem;
  text-align: center;
  line-height: 0.5rem;
}
.tm-other {
  font-weight: 700;
}
/* 号码波色的背景图 */
.rbgColor {
  background: url("../../../assets/redBall.png") 0.02rem 0.02rem no-repeat;
  background-size: 0.5rem 0.5rem;
}
.gbgColor {
  background: url("../../../assets/greenBall.png") 0.02rem 0.02rem no-repeat;
  background-size: 0.5rem 0.5rem;
}
.bbgColor {
  background: url("../../../assets/blueBall.png") 0.02rem 0.02rem no-repeat;
  background-size: 0.5rem 0.5rem;
}
</style>
