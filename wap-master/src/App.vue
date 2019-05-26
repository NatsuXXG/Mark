<template>
  <div id="app">
    <keep-alive :include="/^keep-alive/">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import homeHeader from "@/components/home-header/home-header";
import homeFooter from "@/components/home-footer/home-footer";

export default {
  name: "app",
  components: {
    homeHeader,
    homeFooter
  }
};
</script>
<style>
#app {
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 800px;
  height: 100%;
}
body, html {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
.mint-msgbox {
  max-width: 700px;
  margin: 0 auto;
}
@media screen and (min-width: 800px) {
  .right-bar-wrapper .numball-wrap, .right-bar-wrapper .otherball-wrap {
    width: 26.66% !important;
  }
}
/* 下注详情框样式 */
  .mint-msgbox {
    border-radius: 0.28rem;
  }
  .mint-msgbox-content {
    position: relative !important;
    max-height: 7rem !important;
    min-height: 1rem !important;
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch !important;
    border-top: 1px solid #ddd !important;
    margin: 10px 0 5px !important;
    padding: 10px !important;
  }
  .mint-msgbox-cancel {
    height: 0.8rem;
    margin-right: 0.2rem !important;
    border: 0.02rem solid #ddd !important;
    background-color: #26a2ff !important;
    color: white !important;
    font-weight: 700 !important;
  }
  .mint-msgbox-confirm {
    height: 0.8rem;
    color: white !important;
    background-color: #ef4f4f !important;
    font-weight: 700 !important;
  }
  .mint-msgbox-btns {
    height: auto !important;
    padding: 0.1rem !important;
    border-radius: 0.3rem !important;
  }
  .mint-msgbox-btn {
    height: auto !important;
    padding: 0.02rem !important;
    border-radius: 0.3rem !important;
  }
</style>
