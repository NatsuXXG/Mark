<template>
  <six-x-scroll :tabItems="tabItems">
    <scroll class="scroll-wrap" v-show="conIndex === 0" ref="scroll" :data="banboNumBalls">
      <div class="tm-a-wrap clearfix">
        <div class="tm-a-top clearfix">
          <div class="numball-wrap" v-for="(ball, index) in banboNumBalls" :class="{'ballChoosing':ball.bool}" :key="index" @click="selectBallnums(ball, index, $event, tabItems[conIndex], submitType, banbogID, banboNumBalls)" ref="banbo">
            <p class="span-wrap">
              <span class="tm-num" ref="calaStyle">{{ball.ballNames}}</span>
              <span class="odds" :name="'odds' + '[' + ball.name + ']'">赔率：{{ball.odds}}</span>
            </p>
            <p span="tmsxnum-wrap">号码：<span class="tmsxnum-span">{{banboNums[index].num}}</span></p>
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
      tabItems: ['半波'],
      conIndex: 0,
      submitType: 0,
      banboNumBalls: [],
      banbogID: null, // 六合彩提交下注必须参数
      banboBallNames: ['红单', '红双', '红大', '红小', '绿单', '绿双', '绿大', '绿小', '蓝单', '蓝双', '蓝大', '蓝小'],
      banboNums: [
        {num: '01 07 13 19 23 29 35 45'},
        {num: '02 08 12 18 24 30 34 40 46'},
        {num: '29 30 34 35 40 45 46'},
        {num: '01 02 07 08 12 13 18 19 23 24'},
        {num: '05 11 17 21 27 33 39 43'},
        {num: '06 16 22 28 32 38 44'},
        {num: '27 28 32 33 38 39 43 44'},
        {num: '05 06 11 16 17 21 22'},
        {num: '03 09 15 25 31 37 41 47'},
        {num: '04 10 14 20 26 36 42 48'},
        {num: '25 26 31 36 37 41 42 47 48'},
        {num: '03 04 09 10 14 15 20'}
      ]
    }
  },
  components: {
    sixXScroll,
    Scroll
  },
  computed: {
  },
  // 当有keepalive的时候，会触发这个钩子函数，进行数据的初始化
  deactivated () {
    this.banboNumBalls.forEach((item) => {
      item.bool = false
    })
  },
  created () {
    this._getbanboDatas()
  },
  mounted () {
    this.$nextTick(() => {
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
    // 获取特码生肖的数据
    _getbanboDatas () {
      this.$http.get('/api/json/member/ajax_action.php?rtype=HB').then((res) => {
        if (res.status === 200) {
          for (let key in res.data) {
            if (key.indexOf('HB_') === 0) {
              this.banboNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0})
            }
          }
          this.banboNumBalls.forEach((item, index) => {
            this.banboNumBalls[index]['ballNames'] = this.banboBallNames[index]
          })
          this.banbogID = res.data.gID.trim()
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
  width: 100%;
  font-size: 0.28rem;
  box-shadow: inset 0 0 0 1px #ccc;
  padding-bottom: 0.2rem;
}
.numball-wrap .tm-num {
  width: 0.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  background-size: 0.5rem 0.5rem;
  font-weight: 700;
}
.odds {
  font-size: 0.28rem;
  margin-right: 0.2rem;
  padding-left: 2rem;
}
.tm-other {
  font-weight: 700;
}
.span-wrap {
  padding: 0.1rem 0;
  font-size: 0.28rem;
}
.tmsxnum-wrap {
  padding: .1rem 0;
}
.tmsxnum-wrap .span-wrap {
  float: left;
}
</style>
