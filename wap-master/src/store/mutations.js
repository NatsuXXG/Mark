import * as types from './mutations_type'
// 关于session的存放位置
// 1.只用vuex存储：刷新页面vuex重新初始化，session消失导致需要重新登录
// 2.window.sessionStorage: 初始化的时候用sessionStorage来赋值，刷新页面重新初始化，但因为sessionStorage里面存有session有值，
// 那么state.username就有值了,vue-router就不会拦截，则无需重新登录。
const mutations = {
  // 登录保存session
  [types.LOGIN]: (state, user) => {
    sessionStorage.setItem('username', JSON.stringify(user))
    state.username = user
  },
  // 登出清除session
  [types.LOGOUT]: (state) => {
    // 登出的时候要清除session
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('usermoney')
    sessionStorage.removeItem('agmoney')
    sessionStorage.removeItem('bbinmoney')
    sessionStorage.removeItem('mgmoney')
    sessionStorage.removeItem('dsmoney')
    state.username = ''
    state.usermoney = ''
    state.agmoney = ''
    state.bbinmoney = ''
    state.mgmoney = ''
    state.dsmoney = ''
  },
  // 余额
  [types.USERMONEY]: (state, data) => {
    sessionStorage.setItem('usermoney', JSON.stringify(data))
    state.usermoney = data
  },
  // AG余额
  [types.AGMONEY]: (state, data) => {
    sessionStorage.setItem('agmoney', JSON.stringify(data))
    state.agmoney = data
  },
  // BBIN余额
  [types.BBINMONEY]: (state, data) => {
    sessionStorage.setItem('bbinmoney', JSON.stringify(data))
    state.bbinmoney = data
  },
  // MG余额
  [types.MGMONEY]: (state, data) => {
    sessionStorage.setItem('mgmoney', JSON.stringify(data))
    state.mgmoney = data
  },
  // DS余额
  [types.DSMONEY]: (state, data) => {
    sessionStorage.setItem('dsmoney', JSON.stringify(data))
    state.dsmoney = data
  },
  // 代理ID
  [types.AGENTID]: (state, data) => {
    sessionStorage.setItem('agentId', JSON.stringify(data))
    state.agentId = data
  }
}

export default mutations
