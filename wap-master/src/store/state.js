// 初始化时用sessionStore.getItem(''),这样子刷新页面就无需重新登录
const state = {
  username: JSON.parse(sessionStorage.getItem('username')) ? JSON.parse(sessionStorage.getItem('username')) : '', // 用户名
  usermoney: JSON.parse(sessionStorage.getItem('usermoney')) ? JSON.parse(sessionStorage.getItem('usermoney')) : 0, // 用户余额
  agmoney: JSON.parse(sessionStorage.getItem('agmoney')) ? JSON.parse(sessionStorage.getItem('agmoney')) : 0, // AG余额
  bbinmoney: JSON.parse(sessionStorage.getItem('bbinmoney')) ? JSON.parse(sessionStorage.getItem('bbinmoney')) : 0, // BBIN余额
  mgmoney: JSON.parse(sessionStorage.getItem('mgmoney')) ? JSON.parse(sessionStorage.getItem('mgmoney')) : 0, // MG余额
  dsmoney: JSON.parse(sessionStorage.getItem('dsmoney')) ? JSON.parse(sessionStorage.getItem('dsmoney')) : 0, // DS余额
  agentId: JSON.parse(sessionStorage.getItem('agentId')) ? JSON.parse(sessionStorage.getItem('agentId')) : 0 // 代理ID
}
export default state
