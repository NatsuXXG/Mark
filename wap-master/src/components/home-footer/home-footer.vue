<template>
  <div class="footer-wrapper">
    <router-link tag="div" to="/" class="footer-home">首页</router-link>
    <router-link tag="div" to="/lotteryhall" class="footer-buy">购彩</router-link>
    <a :href="serviceUrl" target="_blank" class="footer-open">在线客服</a>
    <router-link tag="div" to="/statement" class="footer-orders">注单</router-link>
    <router-link tag="div" to="/personCenter" class="footer-person">会员中心</router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      serviceUrl: ''
    }
  },
  created () {
    this._getUrl()
  },
  methods: {
    // 获取在线客服链接
    _getUrl () {
      this.$http.get('/api/json/api.php?r=data').then((res) => {
        this.serviceUrl = res.data.data.serverurl
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.footer-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 0.8rem;
  justify-content: flex-start;
  align-content: center;
  flex-direction: row;
  background-color: #3071b8;
}
.footer-wrapper div {
  flex: 1;
  flex-direction: column;
  padding-top: 0.46rem;
  text-align: center;
  color: #fff;
  font-size: 0.24rem;
}
.footer-wrapper div.router-link-exact-active{
  color: #f4d621;
}
.footer-wrapper .footer-open {
  flex: 1;
  flex-direction: column;
  padding-top: 0.46rem;
  text-align: center;
  color: #fff;
  font-size: 0.24rem;
}
.footer-wrapper .footer-home {
  background: url('../../assets/f1.png') no-repeat center 0.06rem;
  background-size: 0.36rem 0.36rem;
}
.footer-wrapper .footer-buy {
  background: url('../../assets/f2.png') no-repeat center 0.06rem;
  background-size: 0.36rem 0.36rem;
}
.footer-wrapper .footer-open {
  background: url('../../assets/serveronline.png') no-repeat center 0.06rem;
  background-size: 0.36rem 0.36rem;
}
.footer-wrapper .footer-orders {
  background: url('../../assets/f4.png') no-repeat center 0.06rem;
  background-size: 0.36rem 0.36rem;
}
.footer-wrapper .footer-person {
  background: url('../../assets/f5.png') no-repeat center 0.06rem;
  background-size: 0.36rem 0.36rem;
}
/* 底部tab切换选中状态样式 */
.footer-wrapper .footer-home.router-link-exact-active  {
  background: url('../../assets/f11.png') no-repeat center 0.06rem;
  background-size: 0.36rem 0.36rem;
}
 .footer-wrapper .footer-buy.router-link-exact-active  {
  background: url('../../assets/f21.png') no-repeat center 0.06rem;
  background-size: 0.36rem 0.36rem;
}
</style>
