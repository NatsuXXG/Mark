<template>
  <six-x-scroll :tabItems="tabItems">
    <scroll class="scroll-wrap" v-show="conIndex === 0" ref="scroll" :data="yxNumBalls">
      <table class="numball-wrap">
        <th class="lianxiao-table-head">
          <td>生肖</td>
          <td>赔率</td>
          <td>号码</td>
        </th>
        <tr v-for="(item, index) in yxNumBalls" :key="index" class="lianxiao-table-tr needsclick" :class="{'ballChoosing':item.bool}" @click="selectBallnums(item, index, $event, tabItems[conIndex], submitType, yxgID, yxNumBalls)" @touchstart="touchstart">
          <td>{{item.ballNames}}</td>
          <td>{{item.odds}}</td>
          <td>{{item.balldata}}</td>
        </tr>
      </table>
    </scroll>
  </six-x-scroll>
</template>

<script>
import Scroll from '@/base/scroll/scroll'
import sixXScroll from '@/base/six-x-scroll/six-x-scroll'
export default {
  data () {
    return {
      tabItems: ['一肖'],
      conIndex: 0,
      submitType: 0,
      yxNumBalls: [],
      yxgID: null // 六合彩提交下注必须参数
    }
  },
  components: {
    sixXScroll,
    Scroll
  },
  computed: {
  },
  created () {
    this._getyxDatas()
  },
  mounted () {
    this.$nextTick(() => {
    })
  },
  // 当有keepalive的时候，会触发这个钩子函数，进行数据的初始化
  deactivated () {
    this.yxNumBalls.forEach((item) => {
      item.bool = false
    })
  },
  methods: {
    touchstart () {
      this.$refs.scroll.refresh()
    },
    // 获取特码生肖的数据
    _getyxDatas () {
      this.$http.get('/api/json/member/ajax_action.php?rtype=SPB').then((res) => {
        if (res.status === 200) {
          for (let key in res.data) {
            if (key.indexOf('SP_B') === 0) {
              this.yxNumBalls.push({name: key, odds: res.data[key], bool: false, orderMoney: 0})
            }
          }
          this.yxNumBalls.forEach((item, index) => {
            this.yxNumBalls[index]['ballNames'] = res.data.chzod[index].ballNames
            this.yxNumBalls[index]['balldata'] = res.data.chzod[index].balldata
          })
          if (res.data.gID) {
            this.yxgID = res.data.gID.trim()
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
  width: 100%;
}
.numball-wrap {
  position: relative;
  width: 100%;
  min-height: 100%;
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
.yxnum-wrap .span-wrap {
  float: left;
  text-align: center;
}
</style>
