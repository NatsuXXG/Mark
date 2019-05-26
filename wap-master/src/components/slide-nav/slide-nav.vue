<template>
  <div class="slide-wrapper">
    <router-link tag="h1" to="" class="slide-head">系统菜单</router-link>
    <div class="slide-item-wrap">
      <scroll class="scroll-wrap" :data="ballTotals" ref="scroll">
        <ul>
          <router-link tag="li" to="/">返回首页</router-link>
          <router-link tag="li" to="/lotteryhall" class="slide-item-li">彩票大厅</router-link>
          <router-link tag="li" to="/six">六合彩</router-link>
          <router-link tag="li" to="/cqssc">重庆时时彩</router-link>
          <router-link tag="li" to="/cqklsf">重庆快乐十分</router-link>
          <router-link tag="li" to="/gdklsf">广东快乐十分</router-link>
          <router-link tag="li" to="/tjklsf">天津快乐十分</router-link>
          <router-link tag="li" to="/bjpk">北京PK拾</router-link>
          <router-link tag="li" to="/fc3d">福彩3D</router-link>
          <router-link tag="li" to="/pl3">排列3</router-link>
          <router-link tag="li" to="/gxsfc">广西十分彩</router-link>
          <router-link tag="li" to="/shssl">上海时时乐</router-link>
          <router-link tag="li" to="/bjkl8">北京快乐8</router-link>
          <router-link tag="li" to="/tjssc">天津时时彩</router-link>
          <router-link tag="li" to="/gd11x5">广东11选5</router-link>
        </ul>
      </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from '@/base/scroll/scroll'
export default {
  props: {
    ballTotals: {
      type: Array,
      default: []
    }
  },
  components: {
    Scroll
  },
  methods: {
    showslide () {
      this.$emit('showslide')
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
.slide-wrapper {
  width:50%;
  height: 100%;
}
.slide-head {
  height: 0.96rem;
  line-height: 0.9rem;
  text-align: center;
  font-size: 0.4rem;
  font-weight: 700;
  box-shadow: inset -0.02rem -0.02rem 0.02rem rgba(0,0,0, 0.5)
}
.slide-item-wrap {
  position: absolute;
  top: 0.9rem;
  bottom: 0;
  left: 0;
  width: 100%;
}
.slide-item-wrap ul li {
  height: 1.08rem;
  padding-left: 10%;
  line-height: 1.08rem;
  font-size: 0.32rem;
  font-weight: 700;
  box-shadow: inset -0.02rem -0.02rem 0.02rem rgba(0,0,0, 0.5)
}
.slide-item-wrap ul li:active {
  color:red;
}
.scroll-wrap {
  height:100%;
  overflow:hidden;
}
</style>
<style>
/* 侧边栏滑出效果 */
  .slideout-menu {
    position: absolute;
    top: 0;
    bottom: 0;
    background: url('../../assets/bg2.png') no-repeat;
    color: #fff;
  }


  .slideout-menu-left {
    left: 0;
  }

  .slideout-menu-right {
    right: 0;
  }

  .slideout-panel {
    position:relative;
    z-index: 1;
    touch-action: none;
  }

  .slideout-open,
  .slideout-open body,
  .slideout-open .slideout-panel {
    overflow: hidden;
  }

  .slideout-open .slideout-menu {
    display: block;
  }
</style>
