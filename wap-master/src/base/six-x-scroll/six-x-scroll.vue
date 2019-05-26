<template>
  <div class="tm-wrapper">
    <div class="tm-header-wrapper" ref="tmHeader">
      <div class="tm-header-wrap" ref="tmHeaderWrapper">
        <ul class="tm-header">
          <li class="title-no" @click="togglec(index, $event)"
                              v-for="(tab, index) in tabItems" 
                              :class="{selected: activeindex == index}" 
                              :key="index" ref="sixlihook"
                              @touchstart="touchstart"
                              >
            {{tab}}
          </li>
        </ul>
      </div>
    </div>
    <div class="tm-main-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Scroll from '@/base/scroll/scroll'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      activeindex: 0,
      conIndex: 0
    }
  },
  props: {
    tabItems: {
      type: Array,
      default: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._calWidth()
      this._initScroll()
    })
  },
  methods: {
    touchstart () {
      this.tmHeaderScroll.refresh()
    },
    // 设置宽度
    _calWidth () {
      if (this.$refs.sixlihook.length === 1) {
        this.$refs.sixlihook[0].style.width = `100%`
      }
      if (this.$refs.sixlihook.length === 2) {
        this.$refs.sixlihook.forEach((item, index) => {
          this.$refs.sixlihook[index].style.width = `50%`
        })
      }
      if (this.$refs.sixlihook.length === 3) {
        this.$refs.sixlihook.forEach((item, index) => {
          this.$refs.sixlihook[index].style.width = `1.6rem`
        })
      }
      if (this.$refs.sixlihook.length > 3) {
        this.$refs.sixlihook.forEach((item, index) => {
          this.$refs.sixlihook[index].style.width = `1.6rem`
        })
        this.$refs.tmHeaderWrapper.style.width = `${this.$refs.sixlihook.length * 1.6}rem`
      }
    },
    // 点击tab切换选项卡
    togglec (index, event) {
      if (!event._constructed) {
        return
      }
      if (this.activeindex !== index) {
        this.activeindex = index
        this.$emit('changeConIndex', index) // 触发父组件的内容tab切换
        this.$emit('tmChange', index)
      }
      this.tmHeaderScroll.refresh()
    },
    _initScroll () {
      this.tmHeaderScroll = new BScroll(this.$refs.tmHeader, {
        // better-scroll 会将点击事件去掉，要在这里开启，同时点击在PC 会被执行两次，要在这里控制
        click: true,
        scrollX: true,
        scrollY: false,
        preventDefault: true
      })
    }
  },
  components: {
    Scroll
  }
}
</script>


<style scoped>
.scroll-wrap {
  height:100%;
  overflow:hidden;
}
.tm-wrapper {
  position: relative;
  height: 100%;
}
.tm-header-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0.72rem;
  overflow: hidden;
}
.tm-header-wrapper .tm-header-wrap {
  min-width: 100%;
}
.tm-header {
  height: 0.72rem;
  background-color: rgba(255,255,255,0.4)
}
.tm-header-wrapper .title-no {
  float: left;
  height: 0.72rem;
  line-height: 0.72rem;
  text-align: center;
  font-size: 0.28rem;
  font-weight: 700;
}
.tm-main-wrapper {
  position: absolute;
  top: 0.72rem;
  bottom: 0;
  left: 0;
  right: 0;
}
.selected {
  color:red;
  font-weight: 700;
  background-color: #ccc;
}
</style>
