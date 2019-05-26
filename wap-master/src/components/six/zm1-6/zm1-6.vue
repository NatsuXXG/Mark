<template>
  <six-x-scroll :tabItems="tabItems" @changeConIndex="changeConIndex">
    <scroll class="scroll-wrap" ref="scroll" :data="zmOneToSixNumBalls">
      <div class="tm-a-wrap clearfix">
        <div class="tm-a-top clearfix" v-for="(item, index) in zmOneToSixNumBalls" :key="index" v-show="conIndex === index">
          <div class="otherball-wrap" v-for="(ball, indexA) in item" :key="indexA" :class="{'ballChoosing':ball.bool}" @click="selectBallnums(ball, index, $event, tabItems[conIndex], submitType, zmOneToSixgID, zmOneToSixNumBalls[conIndex])">
            <span class="tm-other" ref="calaStyle" :name="'gold' + '[' + ball.name + ']'">{{ball.ballNames}}</span>
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
export default {
  data () {
    return {
      tabItems: ['正码一', '正码二', '正码三', '正码四', '正码五', '正码六'],
      conIndex: 0,
      submitType: 0,
      zmOneToSixgID: null, // 六合彩提交下注必须参数
      zmOneToSixNumBalls: [],
      zmOneToSixOneNumBalls: [],
      zmOneToSixTwoNumBalls: [],
      zmOneToSixTreNumBalls: [],
      zmOneToSixFourNumBalls: [],
      zmOneToSixFiveNumBalls: [],
      zmOneToSixSixNumBalls: [],
      zmOneToSixNumBallNames: ['单', '双', '大', '小', '和单', '和双', '和大', '和小', '尾大', '尾小', '红波', '蓝波', '绿波']
    }
  },
  components: {
    sixXScroll,
    Scroll
  },
  computed: {
  },
  created () {
    this._getzmOneToSixDatas()
  },
  // 当有keepalive的时候，会触发这个钩子函数，进行数据的初始化
  deactivated () {
    this.zmOneToSixNumBalls[this.conIndex].forEach((item) => {
      item.bool = false
    })
  },
  methods: {
    // 内容tab切换，由子组件触发
    changeConIndex (val) {
      this.conIndex = val
      this.zmOneToSixOneNumBalls.forEach((item, index) => {
        item.bool = false
        item.orderMoney = 0
      })
      this.zmOneToSixTwoNumBalls.forEach((item, index) => {
        item.bool = false
        item.orderMoney = 0
      })
      this.zmOneToSixTreNumBalls.forEach((item, index) => {
        item.bool = false
        item.orderMoney = 0
      })
      this.zmOneToSixFourNumBalls.forEach((item, index) => {
        item.bool = false
        item.orderMoney = 0
      })
      this.zmOneToSixFiveNumBalls.forEach((item, index) => {
        item.bool = false
        item.orderMoney = 0
      })
      this.zmOneToSixSixNumBalls.forEach((item, index) => {
        item.bool = false
        item.orderMoney = 0
      })
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    },
    // 获取正码1-6的数据
    _getzmOneToSixDatas () {
      this.$http.get('/api/json/member/ajax_action.php?rtype=NO').then((res) => {
        if (res.status === 200) {
          for (let key in res.data) {
            if (key.indexOf('NO1_') === 0) {
              this.zmOneToSixOneNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0, typeNames: '正码一'})
            }
            if (key.indexOf('NO2_') === 0) {
              this.zmOneToSixTwoNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0, typeNames: '正码二'})
            }
            if (key.indexOf('NO3_') === 0) {
              this.zmOneToSixTreNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0, typeNames: '正码三'})
            }
            if (key.indexOf('NO4_') === 0) {
              this.zmOneToSixFourNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0, typeNames: '正码四'})
            }
            if (key.indexOf('NO5_') === 0) {
              this.zmOneToSixFiveNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0, typeNames: '正码五'})
            }
            if (key.indexOf('NO6_') === 0) {
              this.zmOneToSixSixNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0, typeNames: '正码六'})
            }
          }
          this.zmOneToSixNumBalls.push(this.zmOneToSixOneNumBalls, this.zmOneToSixTwoNumBalls, this.zmOneToSixTreNumBalls, this.zmOneToSixFourNumBalls, this.zmOneToSixFiveNumBalls, this.zmOneToSixSixNumBalls)
          this.zmOneToSixNumBalls.forEach((item, index) => {
            this.zmOneToSixNumBalls[index].forEach((itemB, indexB) => {
              this.zmOneToSixNumBalls[index][indexB]['ballNames'] = this.zmOneToSixNumBallNames[indexB]
            })
          })
          if (res.data.gID) {
            this.zmOneToSixgID = res.data.gID.trim()
          }
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
.otherball-wrap {
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
.otherball-wrap .tm-other {
  font-weight: 700;
}
</style>
