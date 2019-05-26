// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
// import fastclick from 'fastclick' // 解决移动端点击时300ms的延迟
import axios from './axios'
import store from './store'


// fastclick.attach(document.body) // 全局调用
Vue.use(Mint)
axios.defaults.withCredentials = true
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
