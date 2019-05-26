import { MessageBox, Toast } from 'mint-ui'
export function userAgent () {
  sessionStorage.setItem('__hasAgent__', true)
  let ua = navigator.userAgent.toLowerCase()
  //系统判断
  if(ua.match(/iPhone/i)=="iphone") {//iphone
    let ver = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/)
    ver = parseInt(ver[1], 11)
    if(ver<7) {
      MessageBox.confirm('',{
        title: '温馨提示',
        message: '系统版本过低，不利于体验，建议更换手机或者下载最新版UC浏览器',
        confirmButtonText: '前往下载',
        cancelButtonText: '继续浏览'
      }).then(action => {
        window.location.href = 'http://www.uc.cn/ucbrowser/download/'
      }, () => {
        return
      })
    }
  }
  if(ua.match(/Android/i)=="android"){//android
    let userAgent = navigator.userAgent
    let index = userAgent.indexOf("Android")
    let androidVersion = parseFloat(userAgent.slice(index+8))
    if(androidVersion<5){
      // 版本小于5的事情
      MessageBox.confirm('',{
        title: '温馨提示',
        message: '系统版本过低，不利于体验，建议更换手机或者下载最新版UC浏览器',
        confirmButtonText: '前往下载',
        cancelButtonText: '继续浏览'
      }).then(action => {
        window.location.href = 'http://www.uc.cn/ucbrowser/download/'
      }, () => {
        return
      })
    }
  }
}