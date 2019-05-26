<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    // 数据变化
    data: {
      type: Array,
      default: null
    },
    text: {
      default: null
    },
    // 是否监听滚动事件
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullup: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发顶部下拉的事件，用于下拉刷新
     */
    pulldown: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发列表滚动开始的事件
     */
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 当数据更新后，刷新scroll的延时。
     */
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  mounted () {
    // 保证在dom结构生成完成后调用初始化函数
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  // 监听数据变化时，刷新scroll
  watch: {
    data () {
      setTimeout(() => {
        this.refresh()
      }, 20)
    },
    text () {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  },
  methods: {
    // 初始化函数
    _initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
      // 是否派发滚动事件
      if (this.listenScroll) {
        let me = this // 保留vue实例的this
        this.scroll.on('scroll', (position) => {
          me.$emit('scroll', position)
        })
      }
      // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullup) {
        let me = this // 保留vue实例的this
        this.scroll.on('touchEnd', (pos) => {
          // 滚动到底部
          if (pos.y<(this.scroll.maxScrollY - 50)) {
            me.$emit('pullup')
          }
        })
      }
      // 是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        let me = this // 保留vue实例的this
        me.scroll.on('touchEnd', (pos) => {
          // 下拉动作
          if (pos.y > 50) {
            me.$emit('pulldown')
          }
        })
      }
      // 是否派发列表滚动开始的事件
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    // BScroll的方法代理
    enable () {
      this.scroll && this.scroll.enable()
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    // 刷新，为了重新计算高度
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    scrollTo () {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments) // apply是为了将参数等指向到scrollTo
    },
    scrollToElement () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  }
}
</script>

<style scoped>
  .scroll-wrap {
    height: 100%;
    overflow: hidden;
  }
</style>
