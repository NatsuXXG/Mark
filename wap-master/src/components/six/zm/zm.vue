<template>
  <six-x-scroll :tabItems="tabItems">
    <scroll class="scroll-wrap" v-show="conIndex === 0" ref="scroll" :data="zmNumBalls">
      <div class="tm-a-wrap clearfix">
        <div class="tm-a-top clearfix">
          <div class="numball-wrap" v-for="(ball, index) in zmNumBalls" :class="{'ballChoosing':ball.bool}" :key="index" @click="selectBallnums(ball, index, $event, tabItems[conIndex], submitType, zmgID, zmNumBalls)" ref="zm">
            <span v-if="index < 49" class="tm-num" ref="calaStyle" :class="index+1 | filterSixBsBgColor">{{index+1}}</span>
            <span v-else-if="index >= 49" class="tm-other">{{ball.ballNames}}</span>
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
      tabItems: ['正码'],
      conIndex: 0,
      submitType: 0,
      zmNumBalls: [],
      zmgID: null, // 六合彩提交下注必须参数
      zmOtherBallNames: ['总单', '总双', '总大', '总小']
    }
  },
  components: {
    sixXScroll,
    Scroll
  },
  computed: {
  },
  created () {
    this._getZmDatas()
  },
  mounted () {
    this.$nextTick(() => {
    })
  },
  // 当有keepalive的时候，会触发这个钩子函数，进行数据的初始化
  deactivated () {
    this.zmNumBalls.forEach((item) => {
      item.bool = false
    })
  },
  methods: {
    // 内容tab切换，由子组件触发
    changeConIndex (val) {
      this.conIndex = val
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    },
    // 获取正码的数据
    _getZmDatas () {
      this.$http.get('/api/json/member/ajax_action.php?rtype=NA').then((res) => {
        if (res.status === 200) {
          for (let key in res.data) {
            if (key.indexOf('NA') === 0) {
              this.zmNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0})
            }
          }
          this.zmNumBalls.forEach((item, index) => {
            if (index < 49) {
              this.zmNumBalls[index]['ballNames'] = index + 1
            }
            if (index >= 49) {
              this.zmNumBalls[index]['ballNames'] = this.zmOtherBallNames[index - 49]
            }
          })
          if (res.data.gID) {
            this.zmgID = res.data.gID.trim()
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
