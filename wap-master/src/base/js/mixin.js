let timeOpen
let timeEnd
// 针对体育模块start
import { MessageBox } from 'mint-ui'
import { mapGetters } from 'vuex'
import Loading from '@/base/loading/loading' // 引入等待加载的组件
import Scroll from '@/base/scroll/scroll'
import SportSubmit from '@/components/sport/sport-submit-frame/sport-submit-frame'
import maskLayer from '@/base/mask-layer/mask-layer'
// 针对体育模块end

export const downTimer = {
  data() {
    return {
      endTime: 0, // 封盘时间
      opentime: 0, // 开奖时间
    }
  },
  methods: {
    // 开奖倒计时
    countdowmOpen() {
      clearInterval(timeOpen)
      if (this.opentime > 0) {
        timeOpen = setInterval(() => {
          this.opentime = this.opentime - 1
        }, 1000)
      }
    },
    // 封盘倒计时
    countdownFP() {
      clearInterval(timeEnd)
      if (this.endTime > 0) {
        timeEnd = setInterval(() => {
          this.endTime = this.endTime - 1
        }, 1000)
      } else {
        clearInterval(timeEnd)
        // 封盘时间到，则禁止输入框写入，快捷下注选择
        document.getElementById('fastInput').setAttribute('placeholder', '已封盘')
        document.getElementById('fastInput').disabled = true
        document.getElementById('fastInput').value = ''
      }
    }
  }
}

export const myfilter = {
  filters: {
    // 判断大小
    filterDx(n, s) {
      if (n > s) return '大'
      else return '小'
    },
    // 判断广西十分彩大小跟和值
    filterGxsfcDxHz(n, s) {
      if (n != 21) {
        if (n > s) return '大'
        else return '小'
      } else {
        return '和'
      }
    },
    // 判断广东11选5和值
    filterGdDxHz(n, s) {
      if (n != 11) {
        if (n > s) return '大'
        else return '小'
      } else {
        return '和'
      }
    },
    // 判断单双
    filterDs(n) {
      if (n % 2 == 0) return '双'
      else return '单'
    },
    // 判断彩票大小字体颜色
    filterDxColor(n, s) {
      if (n > s) return 'big-color'
      else return 'small-color'
    },
    // 判断彩票单双字体颜色
    filterDsColor(n) {
      if (n % 2 == 0) return 'double-color' // 双颜色
      else return 'single-color' // 单颜色
    },
    // 判断六合彩号码的波色跟单双
    filterSixDsBs(n) {
      let ballType = ''
      switch (n - 0) {
        case 1:
        case 7:
        case 13:
        case 19:
        case 23:
        case 29:
        case 35:
        case 45:
          ballType = '红单'
          break
        case 2:
        case 8:
        case 12:
        case 18:
        case 24:
        case 30:
        case 34:
        case 40:
        case 46:
          ballType = '红双'
          break;
        case 3:
        case 9:
        case 15:
        case 25:
        case 31:
        case 37:
        case 41:
        case 47:
          ballType = '蓝单'
          break
        case 4:
        case 10:
        case 14:
        case 20:
        case 26:
        case 36:
        case 42:
        case 48:
          ballType = '蓝双'
          break
        case 5:
        case 11:
        case 17:
        case 21:
        case 27:
        case 33:
        case 39:
        case 43:
        case 49:
          ballType = '绿单'
          break
        case 6:
        case 16:
        case 22:
        case 28:
        case 32:
        case 38:
        case 44:
          ballType = '绿双'
          break
        default:
          break;
      }
      return ballType;
    },
    // 六合彩开奖结果波色
    filterSixBsColor(n) {
      let ballColor = ''
      switch (n - 0) {
        case 1:
        case 2:
        case 7:
        case 8:
        case 12:
        case 13:
        case 18:
        case 19:
        case 23:
        case 24:
        case 29:
        case 30:
        case 34:
        case 35:
        case 40:
        case 45:
        case 46:
          ballColor = "rColor"
          break
        case 5:
        case 6:
        case 11:
        case 16:
        case 17:
        case 21:
        case 22:
        case 27:
        case 28:
        case 32:
        case 33:
        case 38:
        case 39:
        case 43:
        case 44:
        case 49:
          ballColor = "gColor"
          break
        case 3:
        case 4:
        case 9:
        case 10:
        case 14:
        case 15:
        case 20:
        case 25:
        case 26:
        case 31:
        case 36:
        case 37:
        case 41:
        case 42:
        case 47:
        case 48:
          ballColor = "bColor"
          break
        default:
          break
      }
      return ballColor
    },
    // 六合彩号码波色
    filterSixBsBgColor(n) {
      let ballColor = ''
      switch (n - 0) {
        case 1:
        case 2:
        case 7:
        case 8:
        case 12:
        case 13:
        case 18:
        case 19:
        case 23:
        case 24:
        case 29:
        case 30:
        case 34:
        case 35:
        case 40:
        case 45:
        case 46:
          ballColor = "rbgColor"
          break
        case 5:
        case 6:
        case 11:
        case 16:
        case 17:
        case 21:
        case 22:
        case 27:
        case 28:
        case 32:
        case 33:
        case 38:
        case 39:
        case 43:
        case 44:
        case 49:
          ballColor = "gbgColor"
          break
        case 3:
        case 4:
        case 9:
        case 10:
        case 14:
        case 15:
        case 20:
        case 25:
        case 26:
        case 31:
        case 36:
        case 37:
        case 41:
        case 42:
        case 47:
        case 48:
          ballColor = "bbgColor"
          break
        default:
          break
      }
      return ballColor
    },
    // 六合彩生肖
    fllterSixSx(n) {
      let a = '';
      switch (n - 0) {
        case 1:
        case 13:
        case 25:
        case 37:
        case 49:
          a = '狗';
          break;
        case 2:
        case 14:
        case 26:
        case 38:
          a = '鸡';
          break;
        case 3:
        case 15:
        case 27:
        case 39:
          a = '猴';
          break;
        case 4:
        case 16:
        case 28:
        case 40:
          a = '羊';
          break;
        case 5:
        case 17:
        case 29:
        case 41:
          a = '马';
          break;
        case 6:
        case 18:
        case 30:
        case 42:
          a = '蛇';
          break;
        case 7:
        case 19:
        case 31:
        case 43:
          a = '龙';
          break;
        case 8:
        case 20:
        case 32:
        case 44:
          a = '兔';
          break;
        case 9:
        case 21:
        case 33:
        case 45:
          a = '虎';
          break;
        case 10:
        case 22:
        case 34:
        case 46:
          a = '牛';
          break;
        case 11:
        case 23:
        case 35:
        case 47:
          a = '鼠';
          break;
        case 12:
        case 24:
        case 36:
        case 48:
          a = '猪';
          break;
        default:
          break;
      }
      return a;
    },
    // 号码总和
    filterSum(arr) {
      let sum = 0
      for (let i = 0, len = arr.length; i < arr.length; i++) {
        sum += parseInt(arr[i])
      }
      return `总和:${sum}`
    },
    // 时时彩牛几
    fiterniuniu(numArr) {
      let is_niu = 'false'
      let niu_ji = ''
      let niu_text = ''
      if (((parseInt(numArr[0]) + parseInt(numArr[1]) + parseInt(numArr[2])) % 10) == 0) {
        is_niu = 'true'
        niu_ji = (parseInt(numArr[3]) + parseInt(numArr[4])) % 10;
      }
      else if (((parseInt(numArr[0]) + parseInt(numArr[1]) + parseInt(numArr[3])) % 10) == 0) {
        is_niu = 'true'
        niu_ji = (parseInt(numArr[2]) + parseInt(numArr[4])) % 10;
      }
      else if (((parseInt(numArr[0]) + parseInt(numArr[1]) + parseInt(numArr[4])) % 10) == 0) {
        is_niu = 'true'
        niu_ji = (parseInt(numArr[2]) + parseInt(numArr[3])) % 10;
      }
      else if (((parseInt(numArr[0]) + parseInt(numArr[2]) + parseInt(numArr[3])) % 10) == 0) {
        is_niu = 'true'
        niu_ji = (parseInt(numArr[1]) + parseInt(numArr[4])) % 10;
      }
      else if (((parseInt(numArr[0]) + parseInt(numArr[2]) + parseInt(numArr[4])) % 10) == 0) {
        is_niu = 'true'
        niu_ji = (parseInt(numArr[1]) + parseInt(numArr[3])) % 10;
      }
      else if (((parseInt(numArr[0]) + parseInt(numArr[3]) + parseInt(numArr[4])) % 10) == 0) {
        is_niu = 'true'
        niu_ji = (parseInt(numArr[1]) + parseInt(numArr[2])) % 10;
      }
      else if (((parseInt(numArr[1]) + parseInt(numArr[2]) + parseInt(numArr[3])) % 10) == 0) {
        is_niu = 'true'
        niu_ji = (parseInt(numArr[0]) + parseInt(numArr[4])) % 10;
      }
      else if (((parseInt(numArr[1]) + parseInt(numArr[2]) + parseInt(numArr[4])) % 10) == 0) {
        is_niu = 'true'
        niu_ji = (parseInt(numArr[0]) + parseInt(numArr[3])) % 10;
      }
      else if (((parseInt(numArr[1]) + parseInt(numArr[3]) + parseInt(numArr[4])) % 10) == 0) {
        is_niu = 'true'
        niu_ji = (parseInt(numArr[0]) + parseInt(numArr[2])) % 10;
      }
      else if (((parseInt(numArr[2]) + parseInt(numArr[3]) + parseInt(numArr[4])) % 10) == 0) {
        is_niu = 'true'
        niu_ji = (parseInt(numArr[0]) + parseInt(numArr[1])) % 10;
      }
      if (is_niu === 'true') {
        if (niu_ji === 0) {
          niu_text = '牛牛';
        } else {
          niu_text = `牛${niu_ji}`
        }
      }
      else {
        niu_text = '无牛'
      }
      return niu_text
    },
    // 判断龙虎和
    filterLHH(numArr, lotterytype) {
      if (lotterytype === 1) { // 时时彩，广西十分彩，广东11选5
        if (parseInt(numArr[4]) < parseInt(numArr[0])) {
          return '龙虎和:龙';
        }
        if (parseInt(numArr[0]) < parseInt(numArr[4])) {
          return '龙虎和:虎';
        }
        if (parseInt(numArr[0]) == parseInt(numArr[4])) {
          return '龙虎和:和';
        }
      }
      if (lotterytype === 2) { // 广东十分彩，天津十分彩，重庆十分彩
        if (parseInt(numArr[7]) < parseInt(numArr[0])) {
          return '龙虎:龙';
        } else {
          return '龙虎:虎';
        }
      }
      if (lotterytype === 3) { // 北京PK拾
        let resultText = ''
        if (parseInt(numArr[9]) < parseInt(numArr[0])) {
          resultText = '龙/';
        }
        else {
          resultText = '虎/';
        }
        if (parseInt(numArr[8]) < parseInt(numArr[1])) {
          resultText += '龙/';
        }
        else {
          resultText += '虎/';
        }
        if (parseInt(numArr[7]) < parseInt(numArr[0])) {
          resultText += '龙/';
        } else {
          resultText += '虎/';
        }
        if (parseInt(numArr[6]) < parseInt(numArr[3])) {
          resultText += '龙/';
        }
        else {
          resultText += '虎/';
        }
        if (parseInt(numArr[5]) < parseInt(numArr[4])) {
          resultText += '龙';
        }
        else {
          resultText += '虎';
        }
        return resultText
      }
      if (lotterytype === 4) { // 福彩3D，排列3，上海时时乐
        if (parseInt(numArr[2]) < parseInt(numArr[0])) {
          return '龙虎和:龙';
        }
        if (parseInt(numArr[0]) < parseInt(numArr[2])) {
          return '龙虎和:虎';
        }
        if (parseInt(numArr[0]) == parseInt(numArr[2])) {
          return '龙虎和:和';
        }
      }
    }
  }
}

export const mysport = {
  data () {
    return {
      sportDatas: [], // 赛事组数据
      sportdetails: [], // 赛事数据
      ifsubmitShow: false, // 投注框是否显示
      sports: null, // 用户传值给投注框，下注的数据对象
      sportOdd: null, // 用户传值给投注框，赔率
      typename: '', // 用户传值给投注框，独赢让球等
      currentTeam: '', // 用户传值给投注框，主客队伍名字
      oddName: '', // 赔率名字
      touzhuxiang: '',
      nosport: false, // 没有赛事的时候
      detailsWait: false, // 请求赛事组详细数据的时候
      loadingTitle: '请求数据中',
      ifopen: false // 蒙层是否打开
    }
  },
  props: {
    getSportUrl: {
      type: String
    },
    ballsort: {
      type: String
    },
    typetitle: {
      type: String
    },
    matchtype: {
      type: Number
    }
  },
  components: {
    Scroll,
    SportSubmit,
    Loading,
    maskLayer
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scroll.refresh()
    })
  },
  computed: {
    ...mapGetters([
      'username'
    ])
  },
  created () {
    this._getsportDatas()
  },
  methods: {
    // 点击内容展开跟收缩
    sportClick (item, event) {
      if (!event._constructed) {
        return false
      }
      if (!item.bool) {
        this.detailsWait = true
        this.ifopen = true
        this.sportDatas.forEach((itemA, indexA) => {
          itemA.bool = false
        })
        this.$http(`${this.getSportUrl}&leaguename=${item.Match_Name}`).then((res) => {
          this.sportdetails = res.data
          if (this.sportdetails) {
            this.detailsWait = false
            this.ifopen = false
            item.bool = true
          }
          this.$nextTick(() => {
            this.$refs.scroll.refresh()
          })
          setTimeout(() => {
            this.$refs.scroll.scrollToElement(event.target,500)
          },300)
        }).catch((error) => {
          console.log(error)
        })
      } else {
        this.detailsWait = false
        this.ifopen = false
        item.bool = false
        this.sportDatas.forEach((itemA, indexA) => {
          itemA.bool = false
        })
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
        setTimeout(() => {
          this.$refs.scroll.scrollToElement(event.target,500)
        },300)
      }
    },
    // 封装调取数据函数
    _getsportDatas () {
      this.$http(this.getSportUrl).then((res) => {
        this.sportDatas = res.data
        if (this.sportDatas.length < 1) {
          this.nosport = true
        } else {
          this.nosport = false
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 组件提供的下拉触发方法
    loadTop () {
      // 下拉刷新
      this._getsportDatas()
    },
    // 封装赛事时间过滤器
    timeFilter (value) {
      if (value) {
        let timeArrs = []
        let md = ''
        let ms = ''
        let type = ''
        if (value.indexOf('<br/>') !== -1) {
          md = value.split('<br/>')[0]
          ms = value.split('<br/>')[1].split('<br>')[0]
          if (value.split('<br/>')[1].split('<br>')[1]) {
            type = value.split('<br/>')[1].split('<br>')[1].replace('<font color=\'#FF0000\'>', '').replace('</font>', '')
          }
        } else {
          md = value.split('<br>')[0]
          ms = value.split('<br>')[1]
          if (value.split('<br>')[2]) {
            type = value.split('<br>')[2].replace('<font color=\'#FF0000\'>', '').replace('</font>', '')
          }
        }
        if (!type) {
          timeArrs = [md, ms]
          return timeArrs
        } else {
          timeArrs = [md, ms, type]
          return timeArrs
        }
      }
    },
    // 封装盘口赔率去空格化过滤器
    pankouFilter (value) {
      if (value !== 0) {
        return value.replace(/\s/g, '')
      } else {
        return value
      }
    },
    // 点击赔率进行下注
    submitOrder (item, odd, team, name, oddn) {
      if (odd !== 0 && odd !== undefined) {
        if (this.username === '') {
          MessageBox.confirm('请先登录', '温馨提示').then(() => {
            this.$router.push({
              path: '/login',
              query: { redirect: this.$route.path }  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            })
          }, () => {
            return false
          })
        } else {
          this.sports = item // 当前点击的对象
          this.sportOdd = odd // 当前点击赔率
          this.currentTeam = team // 主客队伍名字
          this.typename = name // 独赢、让球等
          this.oddName = oddn // 所点赔率的键
          this.ifsubmitShow = !this.ifsubmitShow
        }
      } else {
        return false
      }
    },
    // 由下注框取消功能触发的
    toggleIfSubmit (val) {
      this.ifsubmitShow = val
    }
  }
}