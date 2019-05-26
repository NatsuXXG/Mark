import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import actions from './actions.js'
// import createLogger from 'vuex/dist/logger' // 每次通过mutations修改state，在控制台打印一个logger，可以看到修改前后的state日志
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production' // 开发环境下使用
export default new Vuex.Store({
  getters,
  state,
  mutations,
  actions,
  strict: debug
  // plugins: debug ? [createLogger()] : []
})
