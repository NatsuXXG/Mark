<template>
  <div class="recharge-wrapper">
    <div class="recharge-header-wrap">
      <div class="back-btn" @click="loginback"></div>
      <div class="person-title">账户存款</div>
      <div class="no-hook" @click="returnHome">
        <img src="../../assets/f11.png" alt="">
      </div>
      </div>
      <div class="recharge-main-wrap">
        <scroll class="scroll-wrap" :data="bankArr" ref="scroll">
          <div>
            <div class="person-detail">
              <p class="person-username">欢迎您！{{username}}</p>
              <p class="person-username">账户余额：￥{{usermoney}}</p>
            </div>
            <div class="recharge-mode-wrap">
              <div ref="scrollA" class="recharge-mode-wrapper">
                <div class="recharge-mode clearfix" ref="rechargemode" :style="{width: rechargemodeWidth}">
                  <span v-for="(mode, index) in rechargeModeArr" :style="{width: modeWidth}" :key="index" :class="{'modeSelecting': modeSelectingIndex === index}" @click="modeSelect(index)" ref="spanhook" @touchstart="touchstart">{{mode}}</span>
                </div>
              </div>
              <div class="recharge-content-wrap">
                <div class="recharge-company" v-show="modeSelectingIndex === 0">
                  <!-- <div class="select-ewm">
                    <img src="../../../static/images/wx.jpg" alt="">
                    <p>微信</p>
                  </div>
                  <div class="select-ewm">
                    <img src="../../../static/images/zfb.jpg" alt="">
                    <p>支付宝</p>
                  </div> -->
                  <div class="select-bankNum">
                    <p class="bankNum-title">入款信息：</p>
                    <div class="bankNum-info-wrap">
                      <div v-for="(item, index) in bankNumArr" :key="index" class="bankNum-info">
                        <p>卡号:{{item.bank_number}}</p>
                        <p>银行名称:{{item.bank_name}}</p>
                        <p>开户名:{{item.bank_xm}}</p>
                        <p>开户城市:{{item.bank_city}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="select-bank">
                    <select v-model="bankSelected" class="select">
                      <option value="" selected="selected">请选择转入银行</option>
                      <option :value="bank.card_bankName" v-for="(bank, index) in bankArr" :key="index">{{bank.card_bankName}}</option>
                    </select>
                  </div>
                  <div class="recharge-time">
                    <span class="time-label">汇款时间：</span>
                    <span>{{currentTime}}</span>
                  </div>
                  <div class="select-bank">
                    <select name="" id="" class="select" v-model="modeSelected">
                      <option value="" selected="selected">选择汇款方式</option>
                      <option :value="bank" v-for="(bank, index) in huikuanMode" :key="index">{{bank}}</option>
                    </select>
                  </div>
                  <div class="select-bank">
                    <input type="text" placeholder="入款金额,单笔下限100" @input="moneyInput" v-model="inputMoney">
                </div>
                    <div class="select-bank">
                      <input type="text" class="beizhu-input" placeholder="请备注帐号/姓名、微信支付请留言备注" v-model="bankName">
                </div>
                      <div class="recharge-button">
                        <span class="submit-btn" @click="submitRecharge">提交</span>
                      </div>
                    </div>
                    <div class="recharge-cyberbank clearfix" v-show="modeSelectingIndex === index + 1" v-for="(item, index) in rechargeCons" :key="index">
                      <form method="post" :action="item.form" ref="onlineform">
                        <div class="clearfix">
                          <div class="banklist" v-for="(value, key) in item.bankList" :key="key">
                            <input type="radio" :id="value.name" name="pay_bank" :value="value.value" v-model="radioValue">
                            <label :for="value.name">{{value.name}}</label>
                          </div>
                        </div>
                        <div class="select-bank">
                          <input type="text" name="PayAmount" autocomplete="off" :placeholder="'输入存款金额,单笔下限' + item.pay_Lowest" @input="onlineMoneyInput" v-model="onlineMoney">
                  </div>
                          <input type="hidden" name="uid" :value="item.uid">
                </form>
                          <div class="recharge-button">
                            <span class="submit-btn" @click="onlineSubmit(index)">提交</span>
                          </div>
                        </div>
                        <!-- <div class="recharge-alipay" v-show="modeSelectingIndex === 2">
                <div class="select-bank">
                  <input type="number" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))' placeholder="入款金额,单笔下限100" v-model="alipayMoney">
                </div>
                <div class="select-bank">
                  <input type="text" placeholder="输入会员支付宝帐号" v-model="alipayAccount">
                </div>
                <div class="alipay-ewm-wrap">
                  <div class="alipay-ewm">
                    <img src="" alt="">
                  </div>
                </div>
                <div class="recharge-button">
                  <span class="submit-btn" @click="submitRecharge">提交</span>
                </div>
              </div>
              <div class="recharge-wechat" v-show="modeSelectingIndex === 3">
                <div class="select-bank">
                  <input type="number" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))' placeholder="入款金额,单笔下限100" v-model="wechatMoney">
                </div>
                <div class="select-bank">
                  <input type="text" placeholder="输入会员微信帐号" v-model="weixinAccount">
                </div>
                <div class="alipay-ewm-wrap">
                  <div class="alipay-ewm">
                    <img src="" alt="">
                  </div>
                </div>
                <div class="recharge-button">
                  <span class="submit-btn" @click="submitRecharge">提交</span>
                </div>
              </div> -->
                    </div>
                  </div>
                </div>
        </scroll>
      </div>
      <mask-layer :ifopen="ifopen"></mask-layer>
    </div>
</template>

<script>
import Scroll from '@/base/scroll/scroll'
import { mapGetters } from 'vuex'
import { Toast } from 'mint-ui'
import BScroll from 'better-scroll'
import maskLayer from '@/base/mask-layer/mask-layer'
export default {
  name:'keep-alive-recharge',
  data () {
    return {
      ifopen: false, // 蒙层是否开启
      purseIndex: 0,
      agmoney: null,
      dsmoney: null,
      rechargeModeArr: ['银行汇款'],
      rechargeCons: [],
      modeSelectingIndex: 0,
      paylowest: null,
      bankArr: [],
      bankNumArr: [],
      wangyinVals: [],
      huikuanMode: ['银行柜台', 'ATM现金', 'ATM卡转', '网银转账', '支付宝', '微信'],
      inputMoney: null,
      alipayMoney: null,
      wechatMoney: null,
      bankName: '',
      bankSelected: '',
      modeSelected: '',
      alipayAccount: '',
      weixinAccount: '',
      onlineMoney: null,
      radioValue: '',
      rechargemodeWidth: '',
      modeWidth: ''
    }
  },
  created () {
    this._getuserinfo()
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    touchstart () {
      this.scrollA.refresh()
    },
    // 金额框限制输入整数跟两位小数
    moneyInput () {
      // 先把非数字的都替换掉，除了数字和.
      this.inputMoney = this.inputMoney.replace(/[^\d.]/, '')
      // 必须保证第一个为数字而不是.
      this.inputMoney = this.inputMoney.replace(/^\./g, '')
      // 保证只有出现一个.而没有多个.
      this.inputMoney = this.inputMoney.replace(/\.{2,}/g, '.')
      // 保证.只出现一次，而不能出现两次以上
      this.inputMoney = this.inputMoney.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
      if (this.inputMoney !== '') {
        let re = /^\d+\.{0,1}\d{0,2}$/
        if (!re.test(this.inputMoney)) {
          this.inputMoney = this.inputMoney.substring(0, this.inputMoney.length - 1)
          return false
        }
      }
      return this.inputMoney
    },
    // 金额框限制输入整数跟两位小数
    onlineMoneyInput () {
      // 先把非数字的都替换掉，除了数字和.
      this.onlineMoney = this.onlineMoney.replace(/[^\d.]/, '')
      // 必须保证第一个为数字而不是.
      this.onlineMoney = this.onlineMoney.replace(/^\./g, '')
      // 保证只有出现一个.而没有多个.
      this.onlineMoney = this.onlineMoney.replace(/\.{2,}/g, '.')
      // 保证.只出现一次，而不能出现两次以上
      this.onlineMoney = this.onlineMoney.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
      if (this.onlineMoney !== '') {
        let re = /^\d+\.{0,1}\d{0,2}$/
        if (!re.test(this.onlineMoney)) {
          this.onlineMoney = this.onlineMoney.substring(0, this.onlineMoney.length - 1)
          return false
        }
      }
      return this.onlineMoney
    },
    // 返回上一级
    loginback () {
      this.$router.push('/personCenter')
    },
    // 返回首页
    returnHome () {
      this.$router.push('/')
    },
    _initScroll () {
      this.scrollA = new BScroll(this.$refs.scrollA, {
        // better-scroll 会将点击事件去掉，要在这里开启，同时点击在PC 会被执行两次，要在这里控制
        click: true,
        scrollX: true,
        scrollY: false,
        preventDefault: true
      })
    },
    // 设置宽度
    _calWidth (length) {
      let width = 0
      if (length === 1) {
        width = '50%'
      } else if (length === 2) {
        width = '33.33333%'
      } else if (length >= 3) {
        width = '1.6rem'
      }
      return width
    },
    // 获取数据
    _getuserinfo () {
      // 获取银行
      this.$http.get('/api/json/center/?r=HuikuanInfo').then((res) => {
        this.bankArr = res.data.data.bank
        this.bankNumArr = res.data.data.InfoList
      }).catch((error) => {
        console.log(error)
      })
      // 在线网银
      this.$http.get('/api/php/api.php?r=wap').then((res) => {
        if (res.data.data.length === 0) {
          this.modeWidth = '100%'
        } else {
          this.modeWidth = this._calWidth(res.data.data.length)
        }
        this.rechargemodeWidth = (res.data.data.length + 1) * 1.6 + 'rem'
        this.rechargeCons = res.data.data
        res.data.data.forEach((item, index) => {
          this.rechargeModeArr.push(item.name)
          this.userUid = item.uid
          this.paylowest = item.pay_Lowest
        })
      }).catch((error) => {
        console.log(error)
      })
    },
    // 选择钱包
    selectPurse (val) {
      this.purseIndex = val
    },
    // 选择入款方式
    modeSelect (index) {
      this.radioValue = ''
      this.onlineMoney = null
      this.inputMoney = null
      this.modeSelectingIndex = index
      this.$refs.scroll.refresh()
    },
    // 提交银行汇款
    submitRecharge () {
      if (this.modeSelectingIndex === 0) {
        if (!this.bankSelected) {
          let instance = Toast('请选择转入银行')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 500)
        } else if (!this.modeSelected) {
          let instance = Toast('请选择汇款方式')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 500)
        } else if (!this.inputMoney) {
          let instance = Toast('请输入汇款金额')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 500)
        } else if (this.inputMoney && this.inputMoney < 100) {
          let instance = Toast('最低存款100元')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 500)
        } else if (!this.bankName) {
          let instance = Toast('请输入备注内容')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 500)
        } else {
          let data = {}
          data['IntoBank'] = this.bankSelected
          data['v_amount'] = this.inputMoney
          data['v_Name'] = this.bankName
          data['InType'] = this.modeSelected
          data['IntoType'] = this.modeSelected
          this.$http.post('/api/json/center/?r=HuikuanDo', data).then((res) => {
            let instance = Toast(res.data.msg)
            this.ifopen = !this.ifopen
            if (res.data.code === 0) {
              setTimeout(() => {
                instance.close()
                this.ifopen = !this.ifopen
                this.$router.push('/')
                clearTimeout()
              }, 1500)
            }
          }).catch((error) => {
            console.log(error)
          })
        }
      }
      if (this.modeSelectingIndex === 2) {
        let data = {}
        data['InType'] = '支付宝'
        data['IntoType'] = '支付宝'
        data['v_amount'] = this.alipayMoney
        data['v_Name'] = this.alipayAccount
        if (!this.alipayMoney) {
          let instance = Toast('请输入汇款金额')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 500)
        } else if (this.alipayMoney && this.alipayMoney < 100) {
          let instance = Toast('最低存款100元')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 500)
        } else if (!this.alipayAccount) {
          let instance = Toast('请输入支付宝帐号')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 500)
        } else {
          this.$http.post('/api/json/center/?r=HuikuanDo', data).then((res) => {
          }).catch((error) => {
            console.log(error)
          })
        }
      }
      if (this.modeSelectingIndex === 3) {
        let data = {}
        data['InType'] = '微信'
        data['IntoType'] = '微信'
        data['v_amount'] = this.wechatMoney
        data['v_Name'] = this.weixinAccount
        if (!this.wechatMoney) {
          let instance = Toast('请输入汇款金额')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 500)
        } else if (this.wechatMoney && this.wechatMoney < 100) {
          let instance = Toast('最低存款100元')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 500)
        } else if (!this.weixinAccount) {
          let instance = Toast('请输入微信帐号')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 500)
        } else {
          this.$http.post('/api/json/center/?r=HuikuanDo', data).then((res) => {
          }).catch((error) => {
            console.log(error)
          })
        }
      }
    },
    // 网银、第三方汇款提交
    onlineSubmit (index) {
      if (!this.radioValue) {
        let instance = Toast('请选择汇款方式')
        setTimeout(() => {
          instance.close()
          clearTimeout()
        }, 1500)
      } else if (this.onlineMoney < parseInt(this.paylowest)) {
        let instance = Toast('最低充值金额为：' + this.paylowest + '元')
        setTimeout(() => {
          instance.close()
          clearTimeout()
        }, 1000)
      } else {
        this.$refs.onlineform[index].submit()
      }
    }
  },
  computed: {
    ...mapGetters([
      'username',
      'usermoney'
    ]),
    currentTime () {
      let Y = new Date().getFullYear()
      let M = new Date().getMonth() + 1
      let D = new Date().getDate()
      let H = new Date().getHours()
      let m = new Date().getMinutes() < 10 ? 0 + new Date().getMinutes() : new Date().getMinutes()
      return `${Y}年${M}月${D}日${H}时${m}分`
    }
  },
  components: {
    Scroll,
    maskLayer
  }
}
</script>


<style scoped>
.recharge-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('../../assets/bg2.png') no-repeat center center;
  background-size: 100% 100%;
  font-size: 0.32rem;
}
.recharge-header-wrap {
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
.recharge-main-wrap {
  position: absolute;
  top: 0.7rem;
  bottom: 0;
  left: 0;
  right: 0;
}
.person-detail {
  padding-top: 0.4rem;
}
.person-username {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
}
.person-money-wrap {
  display: flex;
  padding-top: 0.2rem;
  justify-content: space-between;
}
.purse-row {
  display: flex;
  flex: 0 0 30%;
  height: 1.2rem;
  padding-top: 0.2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  border-right: 0.02rem solid #fff;
  border-bottom: 0.02rem solid #fff;
  background-color: rgba(255, 255, 255, 0.3);
}
.purse-row p {
  line-height: 0.6rem;
}
.selectpurse {
  background: rgba(255, 255, 255, 0.8) url('../../assets/icon-selected.png') top
    left no-repeat;
  background-size: 0.6rem;
}
.recharge-mode-wrap {
  margin-top: 0.4rem;
}
.recharge-mode-wrapper {
  width: 100%;
  border-top: 0.02rem solid #fff;
  border-bottom: 0.02rem solid #fff;
  overflow: hidden;
}
.recharge-mode span {
  float: left;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  box-shadow: 0.02rem 0 0 #fff;
}
.modeSelecting {
  background: rgba(255, 255, 255, 0.8) url('../../assets/icon-selected.png') top
    left no-repeat;
  background-size: 0.4rem;
}
.recharge-company,
.recharge-alipay,
.recharge-wechat {
  padding: 0.2rem 0.2rem 0;
}
.select-bank,
.select-bankNum {
  margin-top: 0.2rem;
  border-radius: 0.04rem;
  border-color: rgba(0, 0, 0, 0.35);
  background: rgba(255, 255, 255, 0.5);
}
.select-bankNum {
  display: flex;
  min-height: 0.8rem;
  align-items: center;
  justify-content: center;
  align-content: center;
}
.select-bankNum .bankNum-title {
  flex: 0 0 30%;
  text-align: center;
}
.bankNum-info-wrap {
  flex: 0 0 70%;
}
.bankNum-info {
  border-bottom: 0.02rem solid #fff;
}
.bankNum-info p {
  padding: 0.06rem 0;
}
.recharge-time {
  display: flex;
  margin-top: 0.2rem;
  border-radius: 0.04rem;
  border-color: rgba(0, 0, 0, 0.35);
  background: rgba(255, 255, 255, 0.5);
  align-content: center;
  align-items: center;
}
.recharge-time span {
  flex: 1;
  height: 0.8rem;
  border: none;
  outline: none;
  background: none;
  line-height: 0.8rem;
}
.recharge-time span.time-label {
  flex: 0 0 30%;
  text-align: center;
}
.select {
  width: 100%;
  height: 0.8rem;
  border: none;
  outline: none;
  background: none;
}
.select option {
  border: none;
  outline: none;
}
.select-bank input {
  width: 99%;
  height: 0.8rem;
  padding-left: 1%;
  border: none;
  outline: none;
  background: none;
  color: black;
}
.select-ewm {
  width: 100%;
  margin-top: 0.2rem;
  border-radius: 0.04rem;
  border-color: rgba(0, 0, 0, 0.35);
  background: rgba(255, 255, 255, 0.5);
  text-align: center;
}
.select-ewm img {
  width: 90%;
  height: 5rem;
}
/* 线上存款 */
.recharge-cyberbank {
  width: 85%;
  padding: 0.2rem 5% 0 10%;
}
.recharge-cyberbank .banklist {
  float: left;
  width: 50%;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: left;
}
/* 支付宝 */
.alipay-ewm-wrap {
  display: flex;
  margin-top: 0.2rem;
  border-radius: 0.04rem;
  border-color: rgba(0, 0, 0, 0.35);
  background: rgba(255, 255, 255, 0.5);
  align-content: center;
  align-items: center;
  justify-content: center;
}
.alipay-ewm-wrap title {
  flex: 0 0 10%;
}
.alipay-ewm {
  display: flex;
  flex: 1;
  height: 4.1rem;
  padding: 0.4rem;
  align-content: center;
  align-items: center;
  justify-content: center;
  border: 0.02rem solid #c3c3c3;
}
.alipay-ewm img {
  width: 100%;
  height: 100%;
}
.recharge-button {
  display: flex;
  padding-top: 0.2rem;
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
.beizhu-input::-webkit-input-placeholder {
  color: red;
  font-size: 0.32rem;
}
</style>
