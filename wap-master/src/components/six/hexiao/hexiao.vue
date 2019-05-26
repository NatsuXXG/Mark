<template>
  <six-x-scroll :tabItems="tabItems" @changeConIndex="changeConIndex">
    <div class="hxhead">
      <div class="hxhead-row clearfix">
        <span :class="{'ballChoosing':selIndex === 1}" @click="fastSel(1)">野兽</span>
        <span :class="{'ballChoosing':selIndex === 2}" @click="fastSel(2)">家禽</span>
        <span :class="{'ballChoosing':selIndex === 3}" @click="fastSel(3)">单</span>
        <span :class="{'ballChoosing':selIndex === 4}" @click="fastSel(4)">双</span>
        <span :class="{'ballChoosing':selIndex === 5}" @click="fastSel(5)">前肖</span>
        <span :class="{'ballChoosing':selIndex === 6}" @click="fastSel(6)">后肖</span>
        <span :class="{'ballChoosing':selIndex === 7}" @click="fastSel(7)">天肖</span>
        <span :class="{'ballChoosing':selIndex === 8}" @click="fastSel(8)">地肖</span>
      </div>
      <div class="hxhead-odds" v-show="hexiaoconIndex-1 >= 0 && tabItems[conIndex] === '中'">{{tabItems[conIndex]}}赔率：{{hexiaoOdds[this.hexiaoconIndex-1]}}</div>
      <div class="hxhead-odds" v-show="hexiaoconIndex-1 >= 0 && tabItems[conIndex] === '不中'">{{tabItems[conIndex]}}赔率：{{hexiaoOdds[11-this.hexiaoconIndex]}}</div>
    </div>
    <scroll class="hexiaoscroll-wrap" ref="scroll" :data="hexiaoNumBalls">
      <table class="numball-wrap">
        <th class="lianxiao-table-head">
          <td>生肖</td>
          <td>号码</td>
        </th>
        <tr v-for="(item, index) in hexiaoNumBalls" :key="index" class="lianxiao-table-tr needsclick" :class="{'ballChoosing':item.bool}" @click="selectBallnums(item, index, $event, tabItems[conIndex], submitType, hexiaogID, hexiaoNumBalls)" @touchstart="touchstart">
          <td>{{item.ballNames}}</td>
          <td>{{item.balldata}}</td>
        </tr>
      </table>
    </scroll>
  </six-x-scroll>
</template>

<script>
import Scroll from '@/base/scroll/scroll'
import sixXScroll from '@/base/six-x-scroll/six-x-scroll'
import { Toast } from 'mint-ui'
import maskLayer from '@/base/mask-layer/mask-layer' // 引入遮罩层
export default {
  data () {
    return {
      tabItems: ['中', '不中'],
      conIndex: 0,
      selIndex: 0, // 快速选择种类
      hexiaoconIndex: 0,
      submitType: 6,
      hexiaoNumBalls: [],
      hexiaogID: '', // 六合彩提交下注必须参数
      hexiaoOdds: [], // 合肖专属赔率
      ifopen: false
    }
  },
  watch: {
    hexiaoOddsIndex () {
      this.hexiaoconIndex = this.hexiaoOddsIndex
      if (this.hexiaoconIndex === 0) {
        this.selIndex = 0
      }
    },
    hexiaoMoney () {
      if (this.hexiaoMoney === '') {
        this.selIndex = 0
        this.hexiaoconIndex = 0
      }
    }
  },
  // 当有keepalive的时候，会触发这个钩子函数，进行数据的初始化
  deactivated () {
    this.hexiaoNumBalls.forEach((item) => {
      item.bool = false
    })
    this.selIndex = 0
  },
  props: {
    hexiaoOddsIndex: {
      type: Number,
      default: 0
    },
    hexiaoMoney: {
      default: ''
    }
  },
  components: {
    sixXScroll,
    Scroll,
    maskLayer
  },
  created () {
    this._gethexiaoDatas()
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scroll.refresh()
    })
  },
  methods: {
    touchstart () {
      this.$refs.scroll.refresh()
    },
    fastSel (index) {
      if (!this.hexiaoMoney) {
        this.ifopen = !this.ifopen
        this.$emit('hexiaofastSel', this.hexiaoconIndex, this.ifopen, this.submitType, this.tabItems[this.conIndex], this.hexiaogID, this.hexiaoNumBalls)
        let instance = Toast('请先输入金额')
        setTimeout(() => {
          instance.close()
          this.ifopen = !this.ifopen
          this.$emit('hexiaofastSel', this.hexiaoconIndex, this.ifopen, this.submitType, this.tabItems[this.conIndex], this.hexiaogID, this.hexiaoNumBalls)
          clearTimeout()
        }, 500)
        return false
      }
      if (this.selIndex !== index) {
        this.selIndex = index
        this.hexiaoNumBalls.forEach((item, indexA) => {
          item.bool = false
          if (index === 1 && item.yj === 'y') {
            item.bool = true
          }
          if (index === 2 && item.yj === 'j') {
            item.bool = true
          }
          if (index === 3 && item.ds === 'd') {
            item.bool = true
          }
          if (index === 4 && item.ds === 's') {
            item.bool = true
          }
          if (index === 5 && item.qh === 'q') {
            item.bool = true
          }
          if (index === 6 && item.qh === 'h') {
            item.bool = true
          }
          if (index === 7 && item.td === 't') {
            item.bool = true
          }
          if (index === 8 && item.td === 'd') {
            item.bool = true
          }
        })
        this.hexiaoconIndex = 6
      } else {
        this.selIndex = 0
        this.hexiaoNumBalls.forEach((item, index) => {
          item.bool = false
        })
        this.hexiaoconIndex = 0
      }
      this.$emit('hexiaofastSel', this.hexiaoconIndex, this.ifopen, this.submitType, this.tabItems[this.conIndex], this.hexiaogID, this.hexiaoNumBalls)
    },
    // 内容tab切换，由子组件触发
    changeConIndex (val) {
      this.conIndex = val
      this.hexiaoNumBalls.forEach((item, index) => {
        item.bool = false
        item.orderMoney = 0
      })
      this.hexiaoconIndex = 0
      this.$emit('hexiaofastSel', this.hexiaoconIndex, this.ifopen, this.submitType, this.tabItems[this.conIndex], this.hexiaogID, this.hexiaoNumBalls)
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    },
    // 获取合肖的数据
    _gethexiaoDatas () {
      this.$http.get('/api/json/member/ajax_action.php?rtype=NXN').then((res) => {
        if (!this.isCloseNoGame) {
          this.hexiaoNumBalls = res.data.chzod
          this.hexiaoNumBalls.forEach((item, index) => {
            item['bool'] = false
            item['orderMoney'] = 0
          })
          if (res.data.odds) {
            this.hexiaoOdds = res.data.odds
          }
          this.hexiaogID = res.data.gid
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 点击选中号码，高亮效果
    selectBallnums (item, index, event, name, submitType, gid, data) {
      this.selIndex = 0 // 去除快速选择类型
      this.$emit('selectBallnums', item, index, event, name, submitType, gid, data)
    }
  }
}
</script>

<style scoped>
.hexiaoscroll-wrap {
  height:75%;
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
.hxhead {
  height: 25%;
}
.hxhead-row {
  width: 100%;
}
.hxhead-row span{
  float: left;
  width: 25%;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.32rem;
  box-shadow: 0px -0.02rem 0px 0px #444343,
              -0.02rem 0px 0px 0px #444343,
              0.02rem 0px 0px 0px #444343,
              0px 0.02rem 0px 0px #444343;
}
.hxhead-odds {
  font-size: 0.36rem;
  font-weight: 700;
  text-align: center;
}
.numball-wrap {
  width: 100%;
  font-size: 0.32rem;
  box-shadow: inset 0 0 0 1px #ccc;
  text-align: center;
}
.lianxiao-table-head {
  display: table-row;
  width: 100%;
  height: 0.6rem;
  background-color: rgb(2,141,184);
  line-height: 0.6rem;
}
.lianxiao-table-head td {
  flex: 1;
  text-align: center;
  color: white;
  font-weight: 700;
}
.numball-wrap .lianxiao-table-tr td {
  height: 0.8rem;
  line-height: 0.8rem;
  box-shadow: 0 1px 0 #ccc;
}
.numball-wrap .tm-num {
  width: 0.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  background-size: 0.5rem 0.5rem;
  font-weight: 700;
}
.odds {
  font-size: 0.24rem;
  margin-right: 0.2rem;
}
.tm-other {
  font-weight: 700;
}
.span-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  font-size: 0.28rem;
}
.lianxiaonum-wrap .span-wrap {
  float: left;
  text-align: center;
}
</style>
