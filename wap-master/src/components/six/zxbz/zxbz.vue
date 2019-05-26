<template>
  <six-x-scroll :tabItems="tabItems" @changeConIndex="changeConIndex">
    <scroll class="scroll-wrap" ref="scroll" :data="zxbzDefinedNumBalls">
      <div class="tm-a-wrap clearfix">
        <div class="tm-a-top clearfix" v-for="(item, index) in zxbzNumBalls" :key="index">
          <h2 class="zxbz-title">{{tabItems[conIndex]}}赔率：{{item[conIndex].odds}}</h2>
          <div class="numball-wrap" v-for="(ball, index) in zxbzDefinedNumBalls" :key="index" :class="{'ballChoosing':ball.bool}" @click="selectBallnums(ball, index, $event, tabItems[conIndex], submitType, zxbzgID, zxbzDefinedNumBalls)" ref="zxbz">
            <span class="zxbz-num" ref="calaStyle" :class="index+1 | filterSixBsBgColor">{{index+1}}</span>
          </div>
        </div>
      </div>
    </scroll>
  </six-x-scroll>
</template>

<script>
import Scroll from '@/base/scroll/scroll'
import sixXScroll from '@/base/six-x-scroll/six-x-scroll'
import Loading from '@/base/loading/loading' // 引入等待加载的组件
import { myfilter } from '@/base/js/mixin' // 引入mixin的组件
export default {
  mixins: [myfilter],
  data () {
    return {
      tabItems: ['五不中', '六不中', '七不中', '八不中', '九不中', '十不中', '十一不中', '十二不中'],
      conIndex: 0,
      submitType: 5,
      zxbzgID: null, // 六合彩提交下注必须参数
      zxbzNumBalls: [],
      zxbzDefinedNumBalls: []
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
    this._getzxbzDatas()
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scroll.refresh()
    })
  },
  // 当有keepalive的时候，会触发这个钩子函数，进行数据的初始化
  deactivated () {
    this.zxbzDefinedNumBalls.forEach((item) => {
      item.bool = false
    })
  },
  methods: {
    // 内容tab切换，由子组件触发
    changeConIndex (val) {
      this.zxbzDefinedNumBalls.forEach((item, index) => {
        item.bool = false
        item.orderMoney = 0
      })
      this.conIndex = val
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    },
    // 获取自选不中的数据
    _getzxbzDatas () {
      this.$http.get('/api/json/member/ajax_action.php?rtype=NIN').then((res) => {
        if (res.data.data) {
          this.zxbzNumBalls = res.data.data
        }
        this.zxbzgID = res.data.gid.trim()
        for (let i = 0; i < 49; i++) {
          this.zxbzDefinedNumBalls.push({num: (i < 9 ? '0' + (i + 1) : (i + 1)), bool: false, orderMoney: 0})
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
.tm-a-top {
  box-shadow: inset 0 0 0 1px #ccc;
}
.numball-wrap {
  float: left;
  display: flex;
  width: 1.2rem;
  height: 0.6rem;
  padding: 0.2rem;
  font-size: 0.28rem;
  line-height: 0.6rem;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-shadow: inset 0 0 0 1px #ccc;
}
.zxbz-title {
  padding: 0.1rem 0;
  font-weight: 700;
  text-align: center;
  font-size: 0.32rem;
}
.zxbz-num {
  width: 0.5rem;
  height: 0.5rem;
  background-size: 0.5rem 0.5rem;
  background-position: center center;
  text-align: center;
  line-height: 0.5rem;
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
