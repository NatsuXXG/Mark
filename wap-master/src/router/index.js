import Vue from 'vue'
import Router from 'vue-router'
import { MessageBox } from 'mint-ui'


const Home = (resolve) => {
  import('@/components/home/home').then((module) => {
    resolve(module)
  })
}

const Login = (resolve) => {
  import('@/components/user-login/user-login').then((module) => {
    resolve(module)
  })
}

const Register = (resolve) => {
  import('@/components/user-register/user-register').then((module) => {
    resolve(module)
  })
}
// 首页
const indexHome = (resolve) => {
  import('@/components/home-index/home-index').then((module) => {
    resolve(module)
  })
}
// 购彩-彩票大厅
const lotteryhall = (resolve) => {
  import('@/components/lottery/lottery-hall/lottery-hall').then((module) => {
    resolve(module)
  })
}
// 个人中心
const personCenter = (resolve) => {
  import('@/components/personCenter/personCenter').then((module) => {
    resolve(module)
  })
}
// 个人中心-个人账户
const myaccount = (resolve) => {
  import('@/components/personCenter/myaccount').then((module) => {
    resolve(module)
  })
}
// 个人中心-信息中心
const mymessage = (resolve) => {
  import('@/components/personCenter/mymessage').then((module) => {
    resolve(module)
  })
}
// 个人中心-额度转换
const quotaconversion = (resolve) => {
  import('@/components/personCenter/quota-conversion').then((module) => {
    resolve(module)
  })
}
// 个人中心-存款
const recharge = (resolve) => {
  import('@/components/personCenter/recharge').then((module) => {
    resolve(module)
  })
}
// 个人中心-提款
const withdraw = (resolve) => {
  import('@/components/personCenter/withdraw').then((module) => {
    resolve(module)
  })
}
// 个人中心-修改密码
const modify = (resolve) => {
  import('@/components/personCenter/modify-password').then((module) => {
    resolve(module)
  })
}
// 个人中心-投注报表
const statement = (resolve) => {
  import('@/components/personCenter/note-statement').then((module) => {
    resolve(module)
  })
}
// 彩票模块
const Cqssc = (resolve) => {
  import('@/components/lottery/cqssc/cqssc').then((module) => {
    resolve(module)
  })
}
const Bjpk = (resolve) => {
  import('@/components/lottery/bjpk/bjpk').then((module) => {
    resolve(module)
  })
}
const Cqklsf = (resolve) => {
  import('@/components/lottery/cqklsf/cqklsf').then((module) => {
    resolve(module)
  })
}
const Gdklsf = (resolve) => {
  import('@/components/lottery/gdklsf/gdklsf').then((module) => {
    resolve(module)
  })
}
const Tjklsf = (resolve) => {
  import('@/components/lottery/tjklsf/tjklsf').then((module) => {
    resolve(module)
  })
}
const Fc3d = (resolve) => {
  import('@/components/lottery/fc3d/fc3d').then((module) => {
    resolve(module)
  })
}
const Pl3 = (resolve) => {
  import('@/components/lottery/pl3/pl3').then((module) => {
    resolve(module)
  })
}
const Shssl = (resolve) => {
  import('@/components/lottery/shssl/shssl').then((module) => {
    resolve(module)
  })
}
const Bjkl8 = (resolve) => {
  import('@/components/lottery/bjkl8/bjkl8').then((module) => {
    resolve(module)
  })
}
const Tjssc = (resolve) => {
  import('@/components/lottery/tjssc/tjssc').then((module) => {
    resolve(module)
  })
}
const Gxsfc = (resolve) => {
  import('@/components/lottery/gxsfc/gxsfc').then((module) => {
    resolve(module)
  })
}
const Gd11x5 = (resolve) => {
  import('@/components/lottery/gd11x5/gd11x5').then((module) => {
    resolve(module)
  })
}
// 真人大厅
const livehome = (resolve) => {
  import('@/components/live-home/live-home').then((module) => {
    resolve(module)
  })
}
// 六合彩
const sixhome = (resolve) => {
  import('@/components/six/six-home/six-home').then((module) => {
    resolve(module)
  })
}
const sixtm = (resolve) => {
  import('@/components/six/tm/tm').then((module) => {
    resolve(module)
  })
}
const sixliangmian = (resolve) => {
  import('@/components/six/liangm/liangmian').then((module) => {
    resolve(module)
  })
}

const zm = (resolve) => {
  import('@/components/six/zm/zm').then((module) => {
    resolve(module)
  })
}
const zmt = (resolve) => {
  import('@/components/six/zmt/zmt').then((module) => {
    resolve(module)
  })
}
const zmOneToSix = (resolve) => {
  import('@/components/six/zm1-6/zm1-6').then((module) => {
    resolve(module)
  })
}
const zmgg = (resolve) => {
  import('@/components/six/zmgg/zmgg').then((module) => {
    resolve(module)
  })
}
const lianma = (resolve) => {
  import('@/components/six/lianma/lianma').then((module) => {
    resolve(module)
  })
}
const lianxiao = (resolve) => {
  import('@/components/six/lianxiao/lianxiao').then((module) => {
    resolve(module)
  })
}
const lianwei = (resolve) => {
  import('@/components/six/lianwei/lianwei').then((module) => {
    resolve(module)
  })
}
const tmsx = (resolve) => {
  import('@/components/six/tmsx/tmsx').then((module) => {
    resolve(module)
  })
}
const zxbz = (resolve) => {
  import('@/components/six/zxbz/zxbz').then((module) => {
    resolve(module)
  })
}
const zhengx = (resolve) => {
  import('@/components/six/zhengx/zhengx').then((module) => {
    resolve(module)
  })
}
const yx = (resolve) => {
  import('@/components/six/yx/yx').then((module) => {
    resolve(module)
  })
}
const hexiao = (resolve) => {
  import('@/components/six/hexiao/hexiao').then((module) => {
    resolve(module)
  })
}
const zongx = (resolve) => {
  import('@/components/six/zongx/zongx').then((module) => {
    resolve(module)
  })
}
const sebo = (resolve) => {
  import('@/components/six/sebo/sebo').then((module) => {
    resolve(module)
  })
}
const banbo = (resolve) => {
  import('@/components/six/banbo/banbo').then((module) => {
    resolve(module)
  })
}
const banbanbo = (resolve) => {
  import('@/components/six/banbanbo/banbanbo').then((module) => {
    resolve(module)
  })
}
const qisebo = (resolve) => {
  import('@/components/six/qisebo/qisebo').then((module) => {
    resolve(module)
  })
}
const touweishu = (resolve) => {
  import('@/components/six/touweishu/touweishu').then((module) => {
    resolve(module)
  })
}
const pingteweishu = (resolve) => {
  import('@/components/six/pingteweishu/pingteweishu').then((module) => {
    resolve(module)
  })
}
// 体育模块
// 今日足球单式
const jrzqds = (resolve) => {
  import('@/components/sport/today-sport/football/playtype/football-danshi').then((module) => {
    resolve(module)
  })
}
// 今日足球波胆
const jrzqbd = (resolve) => {
  import('@/components/sport/today-sport/football/playtype/football-bodan').then((module) => {
    resolve(module)
  })
}
// 今日足球上半场波胆
const jrzqhalfbd = (resolve) => {
  import('@/components/sport/today-sport/football/playtype/football-half-bodan').then((module) => {
    resolve(module)
  })
}
// 今日足球入球数
const jrzqrqs = (resolve) => {
  import('@/components/sport/today-sport/football/playtype/football-ballsNum').then((module) => {
    resolve(module)
  })
}
// 今日足球半全场
const jrzqbqc = (resolve) => {
  import('@/components/sport/today-sport/football/playtype/football-half-all').then((module) => {
    resolve(module)
  })
}
// 今日足球串关
const jrzqcg = (resolve) => {
  import('@/components/sport/today-sport/football/playtype/football-chuanguan').then((module) => {
    resolve(module)
  })
}
// 今日篮球单式
const jrlqds = (resolve) => {
  import('@/components/sport/today-sport/basketball/playtype/basketball-danshi').then((module) => {
    resolve(module)
  })
}
// 今日篮球单节
const jrlqdj = (resolve) => {
  import('@/components/sport/today-sport/basketball/playtype/basketball-danjie').then((module) => {
    resolve(module)
  })
}
// 今日篮球混合过关
const jrlqgg = (resolve) => {
  import('@/components/sport/today-sport/basketball/playtype/basketball-guoguan').then((module) => {
    resolve(module)
  })
}
// 今日网球单式
const jrwqds = (resolve) => {
  import('@/components/sport/today-sport/tennis/playtype/tennis-danshi').then((module) => {
    resolve(module)
  })
}
// 今日排球单式
const jrpqds = (resolve) => {
  import('@/components/sport/today-sport/volleyball/playtype/volleyball-danshi').then((module) => {
    resolve(module)
  })
}
// 今日棒球单式
const jrbqds = (resolve) => {
  import('@/components/sport/today-sport/baseball/playtype/baseball-danshi').then((module) => {
    resolve(module)
  })
}
// 今日其他单式
const jrqtds = (resolve) => {
  import('@/components/sport/today-sport/other/playtype/other-danshi').then((module) => {
    resolve(module)
  })
}
// 早盘足球单式
const zpzqds = (resolve) => {
  import('@/components/sport/morining-sport/football/playtype/football-danshi').then((module) => {
    resolve(module)
  })
}
// 早盘足球串关
const zpzqcg = (resolve) => {
  import('@/components/sport/morining-sport/football/playtype/football-chuanguan').then((module) => {
    resolve(module)
  })
}
// 早盘足球波胆
const zpzqbd = (resolve) => {
  import('@/components/sport/morining-sport/football/playtype/football-bodan').then((module) => {
    resolve(module)
  })
}
// 早盘足球上半场波胆
const zpzqhalfbd = (resolve) => {
  import('@/components/sport/morining-sport/football/playtype/football-half-bodan').then((module) => {
    resolve(module)
  })
}
// 早盘足球入球数
const zpzqrqs = (resolve) => {
  import('@/components/sport/morining-sport/football/playtype/football-ballsNum').then((module) => {
    resolve(module)
  })
}
// 早盘足球半全场
const zpzqbqc = (resolve) => {
  import('@/components/sport/morining-sport/football/playtype/football-half-all').then((module) => {
    resolve(module)
  })
}
// 早盘篮球单式
const zplqds = (resolve) => {
  import('@/components/sport/morining-sport/basketball/playtype/basketball-danshi').then((module) => {
    resolve(module)
  })
}
// 早盘篮球单节
const zplqdj = (resolve) => {
  import('@/components/sport/morining-sport/basketball/playtype/basketball-danjie').then((module) => {
    resolve(module)
  })
}
// 早盘篮球混合过关
const zplqgg = (resolve) => {
  import('@/components/sport/morining-sport/basketball/playtype/basketball-guoguan').then((module) => {
    resolve(module)
  })
}
// 早盘网球单式
const zpwqds = (resolve) => {
  import('@/components/sport/morining-sport/tennis/playtype/tennis-danshi').then((module) => {
    resolve(module)
  })
}
// 早盘排球单式
const zppqds = (resolve) => {
  import('@/components/sport/morining-sport/volleyball/playtype/volleyball-danshi').then((module) => {
    resolve(module)
  })
}
// 早盘棒球单式
const zpbqds = (resolve) => {
  import('@/components/sport/morining-sport/baseball/playtype/baseball-danshi').then((module) => {
    resolve(module)
  })
}
// 早盘其他单式
const zpqtds = (resolve) => {
  import('@/components/sport/morining-sport/other/playtype/other-danshi').then((module) => {
    resolve(module)
  })
}
// 足球滚球
const zqgq = (resolve) => {
  import('@/components/sport/roll-sport/playtype/zqgq').then((module) => {
    resolve(module)
  })
}
// 篮球滚球
const lqgq = (resolve) => {
  import('@/components/sport/roll-sport/playtype/lqgq').then((module) => {
    resolve(module)
  })
}
// 体育赛果
const sportResult = (resolve) => {
  import('@/components/sport/result/result').then((module) => {
    resolve(module)
  })
}
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      children: [
        {
          path: '/',
          component: indexHome
        },
        // 真人
        {
          path: '/livehome',
          component: livehome
        },
        // 购彩-彩票大厅
        {
          path: '/lotteryhall',
          name: 'lotteryhall',
          component: lotteryhall
        }
      ],
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    // 个人中心
    {
      path: '/personCenter',
      name: 'personCenter',
      meta: {
        requiresAuth: true  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: personCenter
    },
    // 个人中心-个人账户
    {
      path: '/myaccount',
      name: 'myaccount',
      component: myaccount
    },
    // 个人中心-信息中心
    {
      path: '/mymessage',
      name: 'mymessage',
      component: mymessage
    },
    // 个人中心-额度转换
    {
      path: '/quotaconversion',
      name: 'quotaconversion',
      component: quotaconversion
    },
    // 个人中心-存款
    {
      path: '/recharge',
      name: 'recharge',
      meta: {
        keepAlive: false
      },
      component: recharge
    },
    // 个人中心-提款
    {
      path: '/withdraw',
      name: 'withdraw',
      meta: {
        keepAlive: true
      },
      component: withdraw
    },
    // 个人中心-修改密码
    {
      path: '/modify',
      name: 'modify',
      component: modify
    },
    // 个人中心-投注报表
    {
      path: '/statement',
      name: 'statement',
      meta: {
        requiresAuth: true  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: statement
    },
    // 彩票开始
    {
      path: '/cqssc',
      name: 'Cqssc',
      component: Cqssc
    },
    {
      path: '/bjpk',
      name: 'Bjpk',
      component: Bjpk
    },
    {
      path: '/cqklsf',
      name: 'Cqklsf',
      component: Cqklsf
    },
    {
      path: '/gdklsf',
      name: 'Gdklsf',
      component: Gdklsf
    },
    {
      path: '/tjklsf',
      name: 'Tjklsf',
      component: Tjklsf
    },
    {
      path: '/fc3d',
      name: 'Fc3d',
      component: Fc3d
    },
    {
      path: '/pl3',
      name: 'Pl3',
      component: Pl3
    },
    {
      path: '/shssl',
      name: 'Shssl',
      component: Shssl
    },
    {
      path: '/bjkl8',
      name: 'Bjkl8',
      component: Bjkl8
    },
    {
      path: '/tjssc',
      name: 'Tjssc',
      component: Tjssc
    },
    {
      path: '/gxsfc',
      name: 'Gxsfc',
      component: Gxsfc
    },
    {
      path: '/gd11x5',
      name: 'Gd11x5',
      component: Gd11x5
    },
    // 六合彩
    {
      path: '/six',
      children: [
        {
          path: '/six',
          component: sixtm
        },
        {
          path: '/liangm',
          component: sixliangmian
        },
        {
          path: '/zm',
          component: zm
        },
        {
          path: '/zmt',
          component: zmt
        },
        {
          path: '/zm1-6',
          component: zmOneToSix
        },
        {
          path: '/zmgg',
          component: zmgg
        },
        {
          path: '/lianma',
          component: lianma
        },
        {
          path: '/lianxiao',
          component: lianxiao
        },
        {
          path: '/lianwei',
          component: lianwei
        },
        {
          path: '/zxbz',
          component: zxbz
        },
        {
          path: '/tmsx',
          component: tmsx
        },
        {
          path: '/zhengx',
          component: zhengx
        },
        {
          path: '/yx',
          component: yx
        },
        {
          path: '/hexiao',
          component: hexiao
        },
        {
          path: '/zongx',
          component: zongx
        },
        {
          path: '/sebo',
          component: sebo
        },
        {
          path: '/banbo',
          component: banbo
        },
        {
          path: '/banbanbo',
          component: banbanbo
        },
        {
          path: '/qisebo',
          component: qisebo
        },
        {
          path: '/touweishu',
          component: touweishu
        },
        {
          path: '/pingteweishu',
          component: pingteweishu
        }
      ],
      component: sixhome
    },
    // 体育
    // 今日足球单式
    {
      path: '/sport/jrzqds',
      name: 'jrzqds',
      component: jrzqds
    },
    // 今日足球波胆
    {
      path: '/sport/jrzqbd',
      name: 'jrzqbd',
      component: jrzqbd
    },
    // 今日足球上半场波胆
    {
      path: '/sport/jrzqhalfbd',
      name: 'jrzqhalfbd',
      component: jrzqhalfbd
    },
    // 今日足球入球数
    {
      path: '/sport/jrzqrqs',
      name: 'jrzqrqs',
      component: jrzqrqs
    },
    // 今日足球半全场
    {
      path: '/sport/jrzqbqc',
      name: 'jrzqbqc',
      component: jrzqbqc
    },
    // 今日足球串关
    {
      path: '/sport/jrzqcg',
      name: 'jrzqcg',
      component: jrzqcg
    },
    // 今日篮球单式
    {
      path: '/sport/jrlqds',
      name: 'jrlqds',
      component: jrlqds
    },
    // 今日篮球单节
    {
      path: '/sport/jrlqdj',
      name: 'jrlqdj',
      component: jrlqdj
    },
    // 今日篮球过关
    {
      path: '/sport/jrlqgg',
      name: 'jrlqgg',
      component: jrlqgg
    },
    // 今日网球单式
    {
      path: '/sport/jrwqds',
      name: 'jrwqds',
      component: jrwqds
    },
    // 今日排球单式
    {
      path: '/sport/jrpqds',
      name: 'jrpqds',
      component: jrpqds
    },
    // 今日棒球单式
    {
      path: '/sport/jrbqds',
      name: 'jrbqds',
      component: jrbqds
    },
    // 今日其他单式
    {
      path: '/sport/jrqtds',
      name: 'jrqtds',
      component: jrqtds
    },
    // 早盘足球单式
    {
      path: '/sport/zpzqds',
      name: 'zpzqds',
      component: zpzqds
    },
      // 早盘足球串关
      {
          path: '/sport/zpzqcg',
          name: 'zpzqcg',
          component: zpzqcg
      },
    // 早盘足球波胆
    {
      path: '/sport/zpzqbd',
      name: 'zpzqbd',
      component: zpzqbd
    },
    // 早盘足球上半场波胆
    {
      path: '/sport/zpzqhalfbd',
      name: 'zpzqhalfbd',
      component: zpzqhalfbd
    },
    // 早盘足球入球数
    {
      path: '/sport/zpzqrqs',
      name: 'zpzqrqs',
      component: zpzqrqs
    },
    // 早盘足球半全场
    {
      path: '/sport/zpzqbqc',
      name: 'zpzqbqc',
      component: zpzqbqc
    },
    // 早盘篮球单式
    {
      path: '/sport/zplqds',
      name: 'zplqds',
      component: zplqds
    },
    // 早盘篮球单节
    {
      path: '/sport/zplqdj',
      name: 'zplqdj',
      component: zplqdj
    },
    // 早盘篮球过关
    {
      path: '/sport/zplqgg',
      name: 'zplqgg',
      component: zplqgg
    },
    // 早盘网球单式
    {
      path: '/sport/zpwqds',
      name: 'zpwqds',
      component: zpwqds
    },
    // 早盘排球单式
    {
      path: '/sport/zppqds',
      name: 'zppqds',
      component: zppqds
    },
    // 早盘棒球单式
    {
      path: '/sport/zpbqds',
      name: 'zpbqds',
      component: zpbqds
    },
    // 早盘其他单式
    {
      path: '/sport/zpqtds',
      name: 'zpqtds',
      component: zpqtds
    },
    // 足球滚球
    {
      path: '/sport/zqgq',
      name: 'zqgq',
      component: zqgq
    },
    // 篮球滚球
    {
      path: '/sport/lqgq',
      name: 'lqgq',
      component: lqgq
    },
    // 体育赛果
    {
      path: '/sport/result',
      name: 'sportResult',
      component: sportResult
    }
  ]
})

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  // 获取store里面的token
  let session = JSON.parse(sessionStorage.getItem('username'))
  // 判断要去的路由有没有requiresAuth
  if (to.meta.requiresAuth) {
    if (session) {
      next()
    } else {
      MessageBox.confirm(`<div align="center" width="100%">请先登录</div>`).then(action => {
        next({
          path: '/login',
          query: { redirect: to.fullPath } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
        })
      }, () => {
        router.push({
          path: '/'
        })
      })
    }
  } else {
    next()// 如果无需token,那么随它去吧
  }
})
export default router
