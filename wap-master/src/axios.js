import axios from 'axios'
import { Toast, MessageBox } from 'mint-ui'
import router from './router'
import store from './store/index'
// 设置全局axios默认值
axios.defaults.timeout = 300000 // 5分钟的超时验证
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// http response 拦截器
axios.interceptors.response.use((res) => {
  if (res.data.code === 2) {
    MessageBox.confirm('请先登录', '温馨提示').then(() => {
      router.replace({
        path: '/login',
        query: { redirect: router.currentRoute.fullPath } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
      })
      store.dispatch('UserLogout')
    }, () => {
      store.dispatch('UserLogout')
      return false
    })
    return Promise.reject(res)
  }
  return res
}, (error) => {
  Toast('网络超时，请刷新页面重试')
  return Promise.reject(error)
})

export default axios
