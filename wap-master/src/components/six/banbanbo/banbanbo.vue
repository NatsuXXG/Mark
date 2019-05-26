<template>
  <six-x-scroll :tabItems="tabItems">
    <scroll class="scroll-wrap" v-show="conIndex === 0" ref="scroll" :data="banbanboNumBalls">
      <div class="tm-a-wrap clearfix">
        <div class="tm-a-top clearfix" v-show="banbanboNumBalls.length">
          <div class="numball-wrap" v-for="(ball, index) in banbanboNumBalls" :class="{'ballChoosing':ball.bool}" :key="index" @click="selectBallnums(ball, index, $event, tabItems[conIndex], submitType, banbanbogID, banbanboNumBalls)" ref="banbanbo">
            <p class="span-wrap">
              <span class="tm-num" ref="calaStyle">{{ball.ballNames}}</span>
              <span class="odds" :name="'odds' + '[' + ball.name + ']'">赔率：{{ball.odds}}</span>
            </p>
            <p span="tmsxnum-wrap">号码：<span class="tmsxnum-span">{{banbanboNums[index].num}}</span></p>
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
      tabItems: ['半半波'],
      conIndex: 0,
      submitType: 0,
      banbanboNumBalls: [],
      banbanbogID: null, // 六合彩提交下注必须参数
      banbanboBallNames: ['红大单', '红大双', '红小单', '红小双', '绿大单', '绿大双', '绿小单', '绿小双', '蓝大单', '蓝大双', '蓝小单', '蓝小双'],
      banbanboNums: [
        {num: '29 35 45'},
        {num: '30 34 40 46'},
        {num: '01 07 13 19 23'},
        {num: '02 08 12 18 24'},
        {num: '27 33 39 43'},
        {num: '28 32 38 44'},
        {num: '05 11 17 21'},
        {num: '06 16 22'},
        {num: '25 31 37 41 47'},
        {num: '26 36 42 48'},
        {num: '03 39 15'},
        {num: '04 10 14 20'}
      ]
    }
  },
  components: {
    sixXScroll,
    Scroll
  },
  // 当有keepalive的时候，会触发这个钩子函数，进行数据的初始化
  deactivated () {
    this.banbanboNumBalls.forEach((item) => {
      item.bool = false
    })
  },
  computed: {
  },
  created () {
    this._getbanbanboDatas()
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
    _getbanbanboDatas () {
      this.$http.get('/api/json/member/ajax_action.php?rtype=HB').then((res) => {
        if (res.status === 200) {
          for (let key in res.data) {
            if (key.indexOf('HH_') === 0) {
              this.banbanboNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0})
            }
          }
          this.banbanboNumBalls.forEach((item, index) => {
            this.banbanboNumBalls[index]['ballNames'] = this.banbanboBallNames[index]
          })
          this.banbanbogID = res.data.gID.trim()
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
