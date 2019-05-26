<template>
  <div class="withdraw-wrapper">
    <div class="withdraw-header-wrap">
      <div class="back-btn" @click="loginback"></div>
      <div class="person-title">提款</div>
      <div class="no-hook" @click="returnHome">
        <img src="../../assets/f11.png" alt="">
      </div>
    </div>
    <div class="withdraw-content-wrap">
      <scroll class="scroll-wrap" ref="scroll">
        <div>
          <div class="withdraw-head-wrap">
            <p class="person-username">欢迎您！{{username}}</p>
            <div class="purse-row">
              <p>我的钱包</p>
              <p>￥{{usermoney}}</p>
            </div>
          </div>
          <div class="widthdraw-content-wrap" v-if="showBank">
            <template v-if="!cardbool">
              <div class="nobankinfo" v-if="!addshow">
                <p>还没有银行账号请添加</p>
                <div class="addnow" @click="addBankInfo">马上添加</div>
              </div>
              <div class="bankinfo" v-else>
                <div class="select-bank">
                  <select class="select" v-model="bankSelected">
                    <option value="" selected="selected">请选择银行</option>
                    <option v-for="(bank, index) in withdrawBanks" :value="bank" :key="index">{{bank}}</option>
                  </select>
                </div>
                <div class="select-bank">
                  <input class="bankcard" type="number" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))' placeholder="输入开户银行卡号" v-model="bankcardnum">
                </div>
                <div class="select-bank">
                  <div class="address-box">
                    <input class="input" :value="address" disabled type="text" placeholder="请选择所在地区">
                    <span class="btn" @click="addressFlag = !addressFlag">点击选择</span>
                  </div>
                </div>
                <div class="select-bank">
                  <input class="bankcard" type="password" placeholder="输入取款密码" maxlength='6' v-model="pincode">
                </div>
                <div class="select-bank">
                  <input class="bankcard" type="text" disabled :placeholder="'开户姓名：' + realname">
                </div>
                <div class="recharge-button">
                  <span class="submit-btn" @click="setWithDrawSubmit">确定</span>
                </div>
              </div>
            </template>
            <div class="bankinfo" v-else>
              <p class="bankinfo-info">会员卡号：{{recPayNum}}</p>
              <p class="bankinfo-info">所属银行：{{recPayBank}}</p>
              <p class="bankinfo-info">开户地址：{{recPayAddress}}</p>
              <div class="select-bank">
                <input class="bankcard" type="tel" :placeholder="'输入取款金额,最低' + recMinQukuanMoney + '元'" v-model="qukuanMoney">
              </div>
              <div class="select-bank">
                <input class="bankcard" type="password" placeholder="输入取款密码" maxlength='6' v-model="qukuanCode">
              </div>
              <div class="recharge-button">
                <span class="submit-btn" @click="WithDrawSubmit">确定提交</span>
              </div>
              <div class="notice-wrapper">
                <h3>提款须知:</h3>
                <p>1 、银行账户持有人姓名必须与在{{webTitle}}输入的姓名一致，否则无法申请提款。</p>
                <p>2 、大陆各银行帐户均可申请提款。</p>
                <p>3 、每个会员账户（北京时间）24小时内只免费提供三次提款。</p>
                <p>4 、买彩后未经全额投注（存款金额一倍流水）提款申请不予受理。</p>
                <p>5 、每位客户只可以使用一张银行卡进行提款,如需要更换银行卡请与客服人员联系.否则提款将被拒绝。</p>
                <p>6 、为保障客户资金安全，{{webTitle}}有可能需要用户提供电话单，银行对账单或其它资料验证，以确保客户资金不会被冒领。 </p>
                <h3>到账时间:</h3>
                <p>5-15分钟到账急速到账时间</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </scroll>
      <div class="pick-mark" v-show="addressFlag">
        <div class="btn-box">
          <a class="btn-cancel" @click="addressFlag = !addressFlag">取消</a>
          <a class="btn-sure" @click="onFillAddress">确定</a>
        </div>
        <mt-picker class="selectCi" :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
      </div>
      <Loading v-if="!showBank"></Loading>
    </div>
  </div>
</template>

<script>
import { Picker, Toast, MessageBox } from 'mint-ui'
import Scroll from '@/base/scroll/scroll'
import myaddress from '@/assets/pca.json'
import { mapGetters } from 'vuex'
import Loading from '@/base/loading/loading' // 引入等待加载的组件
export default {
  data () {
    return {
      showBank:false, // 是否显示绑定银行卡的父级，默认不显示
      withdrawDatas: [],
      addshow: false, // 用来判断显示哪个结构
      qukuanMoney: null, // 取款金额
      qukuanCode: null, // 取款密码
      cardbool: false, // 判断是否已经设置卡号
      realname: '', // 真实姓名
      bankcardnum: null,  // 设置银行卡号
      pincode: null, // 设置银行密码
      addressFlag: false,
      address: '', // 设置开户地区
      bankSelected: '', // 设置开户银行
      recPayBank: '', // 设置提款信息成功后，接收提款银行名字
      recPayAddress: '', // 设置提款信息成功后，接收提款银行地址
      recPayNum: 0, // 设置提款信息成功后，接收提款卡号
      recMinQukuanMoney: 0, // 设置提款信息成功后，接收最低取款值
      webTitle: '', // 设置提款信息成功后，接收网站title
      myAddressSlots: [
        {
          flex: 1,
          defaultIndex: 1,
          values: Object.keys(myaddress),  // 省份数组
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'center'
        },
        {
          divider: true,
          content: '-',
          className: 'slot4'
        },
        {
          flex: 1,
          values: [],
          className: 'slot5',
          textAlign: 'center'
        }
      ],
      myAddressProvince: '省',
      myAddressCity: '市',
      myAddresscounty: '区/县',
      withdrawBanks: ['中国工商银行', '中国农业银行', '中国建设银行', '中国银行', '中国招商银行', '中国民生银行', '中国交通银行', '中国邮政储蓄银行', '兴业银行', '中信银行', '广大银行', '华夏银行', '其它银行']
    }
  },
  computed: {
    ...mapGetters([
      'username',
      'usermoney'
    ])
  },
  created () {
    this._withdrawDatas()
  },
  mounted () {
    this.$nextTick(() => { // vue里面全部加载好了再执行的函数  （类似于setTimeout）
      this.myAddressSlots[0].defaultIndex = 0
      // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
      // 因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
    })
  },
  methods: {
    loginback () {
      this.$router.push('/personCenter')
    },
    // 返回首页
    returnHome () {
      this.$router.push('/')
    },
    // 获取提款前是否已经设置卡号数据
    _withdrawDatas () {
      this.$http.get('/api/json/center/?r=QuKuan').then((res) => {
        if (res.data.code === 2) {
          MessageBox.confirm('请先登录', '温馨提示').then(() => {
            this.$router.push({
              path: '/login',
              query: { redirect: this.$route.path }  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            })
            this.$store.dispatch('UserLogout')
          }, () => {
            this.$store.dispatch('UserLogout')
            return false
          })
        } else {
          this.cardbool = res.data.data.card
          this.realname = res.data.data.pay_name
          if (res.data.data.card) {
            this.recPayBank = res.data.data.pay_bank
            this.recPayAddress = res.data.data.pay_address
            this.recPayNum = res.data.data.pay_num
            this.recMinQukuanMoney = res.data.data.min_qukuan_money
            this.webTitle = res.data.data.web_name
          }
          this.showBank = true
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 省市区三级联动函数start
    onMyAddressChange (picker, values) {
      if (myaddress[values[0]]) {  // 这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
        picker.setSlotValues(1, Object.keys(myaddress[values[0]])) // Object.keys()会返回一个数组，当前省的数组
        picker.setSlotValues(2, myaddress[values[0]][values[1]]) // 区/县数据就是一个数组
        this.myAddressProvince = values[0]
      }
      if (myaddress[values[0]][values[1]] !== '') {
        picker.setSlotValues(2, myaddress[values[0]][values[1]]) // 区/县数据就是一个数组
      }
      if (values[1]) {
        this.myAddressCity = values[1]
      } else {
        this.myAddressCity = ''
      }
      if (values[2]) {
        this.myAddresscounty = values[2]
      } else {
        this.myAddresscounty = ''
      }
    },
    onFillAddress () {
      this.address = this.myAddressProvince + this.myAddressCity + this.myAddresscounty
      this.addressFlag = !this.addressFlag
    },
    // 省市区三级联动函数end
    // 显示设置窗口
    addBankInfo () {
      this.addshow = true
    },
    // 设置提款信息提交
    setWithDrawSubmit () {
      if (!this.bankSelected) {
        let instance = Toast('请选择银行')
        setTimeout(() => {
          instance.close()
          clearTimeout()
        }, 1000)
      } else if (!this.bankcardnum) {
        let instance = Toast('请输入卡号')
        setTimeout(() => {
          instance.close()
          clearTimeout()
        }, 1000)
      } else if (!this.address) {
        let instance = Toast('请选择开户地区')
        setTimeout(() => {
          instance.close()
          clearTimeout()
        }, 1000)
      } else if (!this.pincode) {
        let instance = Toast('请输入取款密码')
        setTimeout(() => {
          instance.close()
          clearTimeout()
        }, 1000)
      } else {
        let data = {}
        data['qk_pwd'] = this.pincode
        data['pay_card'] = this.bankSelected
        data['pay_num'] = this.bankcardnum
        data['add1'] = this.address
        this.$http.post('/api/json/center/?r=SaveCard&action=save', data).then((res) => {
          let instance = Toast(res.data.msg)
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 1000)
          if (res.data.code === 0) {
            this._withdrawDatas()
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    // 提款申请提交
    WithDrawSubmit () {
      if (this.qukuanMoney < this.recMinQukuanMoney) {
        let instance = Toast('最低取款金额为：' + this.recMinQukuanMoney + '元')
        setTimeout(() => {
          instance.close()
          clearTimeout()
        }, 1000)
      } else if (!this.qukuanCode) {
        let instance = Toast('请输入取款密码')
        setTimeout(() => {
          instance.close()
          clearTimeout()
        }, 1000)
      } else {
        let data = {}
        data['qk_pwd'] = this.qukuanCode
        data['pay_value'] = this.qukuanMoney
        this.$http.post('/api/json/center/?r=TiKuanSave&action=tikuan', data).then((res) => {
          let instance = Toast(res.data.msg)
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 1000)
          if (res.data.code === 0) {
            this.$store.dispatch('SET_userMoney', res.data.data.money)
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  },
  components: {
    Scroll,
    Picker,
    Loading,
  }
}
</script>


<style scoped>
.withdraw-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('../../assets/bg2.png') no-repeat center center;
  background-size: 100% 100%;
  font-size: 0.32rem;
}
.withdraw-header-wrap {
  display: flex;
  width: 100%;
  height: 0.7rem;
  background-color: #3071b8;
  color: #fff;
  font-size: 0.32rem;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
.back-btn {
  padding-left: 30%;
  height: 0.7rem;
  background: url('../../assets/backlleft.png') no-repeat 20% center;
  background-size: 0.64rem 0.64rem;
}
.person-title {
  flex: 1;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
}
.no-hook {
  display: flex;
  flex: 0 0 30%;
  height: 100%;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
}
.no-hook img {
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.3rem;
}
.withdraw-content-wrap {
  position: absolute;
  top: 0.7rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.withdraw-head-wrap {
  font-size: 0.32rem;
}
.person-username {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
}
.purse-row {
  display: flex;
  flex: 1;
  height: 1.2rem;
  padding-top: 0.2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  border-right: 0.02rem solid #fff;
  border-bottom: 0.02rem solid #fff;
  background-color: rgba(255,255,255,.5);
}
.widthdraw-content-wrap {
  padding: 0.2rem;
}
.nobankinfo {
  font-size: 0.32rem;
}
.nobankinfo p {
  text-align: center;
  line-height: 0.6rem;
}
.addnow {
  width: 70%;
  height: 0.8rem;
  margin: 0 auto;
  line-height: 0.8rem;
  text-align: center;
  border-width: 0;
  background: -webkit-linear-gradient(top,#298dff,#1081ff);
  border-color: #387ef5;
  background-color: #387ef5;
  color: #fff;
  border-radius: 0.1rem;
}
.bankinfo {
  width: 100%;
}
.select-bank {
  margin-top: 0.2rem;
  border-radius: 0.04rem;
  border-color: rgba(0,0,0,.35);
  background: rgba(255,255,255,.5);
}
.select {
  width: 100%;
  height: 0.8rem;
  padding-left: 5%;
  border: none;
  outline: none;
  background: none;
}
.select option {
  width: 100%;
  border: none;
  outline: none;
}
.address-box {
  display: flex;
}
.address-box .input {
  flex: 0 0 70%;
  height: 0.8rem;
  padding-left: 5%;
  border: none;
  outline: none;
  background: none;
  color: black;
}
.address-box .btn {
  flex: 1;
  height: 0.8rem;
  text-align: center;
  line-height: 0.8rem;
  background-color: #ccc;
  box-sizing: border-box;
}
.bankcard {
  width: 95%;
  height: 0.8rem;
  padding-left: 5%;
  line-height: 0.8rem;
  border: none;
  outline: none;
  background: none;
}
.recharge-button {
  display: flex;
  padding-top: 0.8rem;
  font-size: 0.32rem;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.recharge-button span {
  flex: 0 0 50%;
  height: 0.8rem;
  color: #fff;
  border-radius: 0.1rem;
  text-align: center;
  line-height: 0.8rem;
}
.submit-btn {
  background-color: #ef4f4f;
}
.bankinfo-info {
  height: 0.6rem;
  line-height: 0.6rem;
}
/* 提款须知 */
.notice-wrapper {
  margin-top: 0.4rem;
  padding: 0.2rem;
}
</style>
<style>
.pick-mark {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(152, 152, 158, 0.4);
}
.pick-mark .btn-box {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 3.6rem;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 0.8rem;
  padding: 0 0.4rem;
  font-size: 0.28rem;
  background: #ccc;
}
.pick-mark .selectCi {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.picker {
  overflow: hidden;
}
.picker-items {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0;
  text-align: right;
  font-size: 0.48rem;
  position: relative;
}
.pick-mark .picker-items {
  background: #eee;
}
</style>
