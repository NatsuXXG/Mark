<template>
  <six-x-scroll :tabItems="tabItems" @changeConIndex="changeConIndex" @tmChange="tmChange">
    <scroll class="scroll-wrap" v-show="conIndex === 0" ref="scroll" :data="tmaNumBalls" :text="endText">
      <div class="tm-a-wrap clearfix">
        <div class="tm-a-top clearfix" v-show="tmaNumBalls.length">
          <div class="numball-wrap" v-for="(ball, index) in tmaNumBalls" :class="{'ballChoosing':ball.bool}" :key="index" @click="selectBallnums(ball, index, $event, tabItems[conIndex], submitType, tmagID, tmaNumBalls)" ref="tmA">
            <span v-if="index < 49" class="tm-num" ref="calaStyle" :class="index+1 | filterSixBsBgColor">{{index+1}}</span>
            <span v-else-if="index >= 49" class="tm-other">{{ball.ballNames}}</span>
            <span :name="'odds' + '[' + ball.name + ']'">{{ball.odds}}</span>
            <input type="hidden" :name="'gold' + '[' + ball.name + ']'" class="six-input">
          </div>
        </div>
      </div>
    </scroll>
    <scroll class="scroll-wrap" v-show="conIndex === 1" ref="scroll" :data="tmbNumBalls" :text="endText">
      <div class="tm-a-wrap clearfix">
        <div class="tm-a-top clearfix" v-show="tmaNumBalls.length">
          <div class="numball-wrap" v-for="(ball, index) in tmbNumBalls" :class="{'ballChoosing':ball.bool}" :key="index" @click="selectBallnums(ball, index, $event, tabItems[conIndex], submitType, tmbgID, tmbNumBalls)" ref="tmB">
            <span v-if="index < 49" class="tm-num" ref="calbStyle" :class="index+1 | filterSixBsBgColor">{{index+1}}</span>
            <span v-else-if="index >= 49" class="tm-other">{{ball.ballNames}}</span>
            <span :name="'odds' + '[' + ball.name + ']'">{{ball.odds}}</span>
            <input type="hidden" :name="'gold' + '[' + ball.name + ']'" class="six-input">
          </div>
        </div>
      </div>
      <!-- 当加载数据比较缓慢的时候，为了优化用户的感官体验效果，需要实现等到load的一个过程-->
      <div class="loading-container" v-show="!tmbNumBalls.length">
        <loading></loading>
      </div>
    </scroll>
  </six-x-scroll>
</template>

<script>
import Loading from '@/base/loading/loading' // 引入等待加载的组件
import Scroll from '@/base/scroll/scroll'
import sixXScroll from '@/base/six-x-scroll/six-x-scroll'
import { myfilter } from '@/base/js/mixin' // 引入等待加载的组件
export default {
  mixins: [myfilter],
  data () {
    return {
      tabItems: ['特码A', '特码B'],
      conIndex: 0,
      submitType: 0,
      tmaNumBalls: [],
      tmbNumBalls: [],
      tmagID: null, // 六合彩提交下注必须参数
      tmbgID: null, // 六合彩提交下注必须参数
      tmOtherBallNames: ['特单', '特双', '特大', '特小', '和单', '和双', '和大', '和小', '大单', '小单', '大双', '小双', '尾大', '尾小']
    }
  },
  props: {
    endText: {
      default: null
    }
  },
  components: {
    Loading,
    sixXScroll,
    Scroll
  },
  computed: {
  },
  created () {
    this._getTmaDatas()
    this._getTmbDatas()
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scroll.refresh()
    })
  },
  // 当有keepalive的时候，会触发这个钩子函数，进行数据的初始化
  deactivated () {
    this.tmaNumBalls.forEach((item) => {
      item.bool = false
    })
    this.tmbNumBalls.forEach((item) => {
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
    // 切换AB面，清除另一面的选中高亮
    tmChange (index) {
      if (index === 0) {
        this.tmbNumBalls.forEach((item, index) => {
          item.bool = false
          item.orderMoney = 0
        })
      }
      if (index === 1) {
        this.tmaNumBalls.forEach((item, index) => {
          item.bool = false
          item.orderMoney = 0
        })
      }
    },
    // 获取特码A的数据
    _getTmaDatas () {
      this.$http.get('/api/json/member/ajax_action.php?rtype=SP&Line=').then((res) => {
        if (res.status === 200) {
          for (let key in res.data) {
            if ((key.charAt(2) !== '_' && key.indexOf('SP') === 0) || (key.charAt(2) === '_' && key.indexOf('S') === 0) || (key.charAt(2) === '_' && key.indexOf('HS') === 0)) {
              this.tmaNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0})
            }
          }
          this.tmaNumBalls.length = this.tmaNumBalls.length - 3
          this.tmaNumBalls.forEach((item, index) => {
            if (index < 49) {
              this.tmaNumBalls[index]['ballNames'] = index + 1
            }
            if (index >= 49) {
              this.tmaNumBalls[index]['ballNames'] = this.tmOtherBallNames[index - 49]
            }
          })
          this.tmagID = res.data.gID.trim()
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 获取特码B的数据
    _getTmbDatas () {
      this.$http.get('/api/json/member/ajax_action.php?rtype=SPbside&Line=').then((res) => {
        if (res.status === 200) {
          for (let key in res.data) {
            if ((key.charAt(2) !== '_' && key.indexOf('SP') === 0) || (key.charAt(2) === '_' && key.indexOf('S') === 0) || (key.charAt(2) === '_' && key.indexOf('HS') === 0)) {
              this.tmbNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0})
            }
          }
          this.tmbNumBalls.length = this.tmbNumBalls.length - 3
          this.tmbNumBalls.forEach((item, index) => {
            if (index < 49) {
              this.tmbNumBalls[index]['ballNames'] = index + 1
            }
            if (index >= 49) {
              this.tmbNumBalls[index]['ballNames'] = this.tmOtherBallNames[index - 49]
            }
          })
          this.tmbgID = res.data.gID
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 计算小球样式
    // _calNumStyle () {
    //   this.tmaNumBalls.forEach((item, index) => {
    //     if (index < 49) {
    //       this.$refs.calaStyle[index].style.backgroundImage = `url('/static/six-ball/ball_s${index + 1}.png')`
    //       this.$refs.tmA[48].style.marginRight = `3.2rem`
    //     }
    //   })
    //   this.tmbNumBalls.forEach((item, index) => {
    //     if (index < 49) {
    //       this.$refs.calbStyle[index].style.backgroundImage = `url('/static/six-ball/ball_s${index + 1}.png')`
    //       this.$refs.tmB[48].style.marginRight = `3.2rem`
    //     }
    //   })
    // },
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
