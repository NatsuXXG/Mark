<template>
  <six-x-scroll :tabItems="tabItems" @changeConIndex="changeConIndex">
    <scroll class="scroll-wrap" ref="scroll" :data="lianweiNumBalls">
      <table class="numball-wrap">
        <th class="lianwei-table-head">
          <td>尾数</td>
          <td>赔率</td>
          <td>号码</td>
        </th>
        <tr v-for="(item, index) in lianweiNumBalls[conIndex]" :key="index" class="lianxiao-table-tr needsclick" :class="{'ballChoosing':item.bool}" @click="selectBallnums(item, index, $event, tabItems[conIndex], submitType, lianweigID, lianweiNumBalls[conIndex])">
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
      tabItems: ['二尾碰', '三尾碰', '四尾碰', '五尾碰'],
      conIndex: 0,
      submitType: 4,
      lianweiNumBalls: [],
      lianweigID: '' // 六合彩提交下注必须参数
    }
  },
  components: {
    sixXScroll,
    Scroll
  },
  computed: {
  },
  created () {
    this._getlianweiDatas()
  },
  mounted () {
    this.$nextTick(() => {
    })
  },
  // 当有keepalive的时候，会触发这个钩子函数，进行数据的初始化
  deactivated () {
    this.lianweiNumBalls[this.conIndex].forEach((item) => {
      item.bool = false
    })
  },
  methods: {
    // 内容tab切换，由子组件触发
    changeConIndex (val) {
      this.conIndex = val
      this.lianweiNumBalls.forEach((item, index) => {
        item.forEach((itemA, indexA) => {
          itemA.bool = false
          itemA.orderMoney = 0
        })
      })
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    },
    // 获取特码生肖的数据
    _getlianweiDatas () {
      this.$http.get('/api/json/member/ajax_action.php?rtype=LFN').then((res) => {
        if (res.data.data) {
          this.lianweiNumBalls = res.data.data
        }
        this.lianweigID = res.data.gid
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
  width: 100%;
  font-size: 0.32rem;
  box-shadow: inset 0 0 0 1px #ccc;
  text-align: center;
}
.lianwei-table-head {
  display: table-row;
  width: 100%;
  height: 0.6rem;
  background-color: rgb(2,141,184);
  line-height: 0.6rem;
}
.lianwei-table-head td {
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
.lianweinum-wrap .span-wrap {
  float: left;
  text-align: center;
}
</style>
