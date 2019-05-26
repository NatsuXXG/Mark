<template>
  <div class="register-wrapper">
    <div class="register-top">
      <div class="back-btn" @click="loginback"></div>
      <h1 class="person-title">欢迎注册使用</h1>
      <div class="no-hook" @click="returnHome">
        <img src="../../assets/f11.png" alt="">
      </div>
    </div>
    <div class="register-main-wrap">
      <div class="register-main">
        <div class="register-item">
          <p class="register-label">用户名</p>
          <input type="text" class="register-input" placeholder="请输入用户名" maxlength="12" oninput="value=value.replace(/[\W]/g,'')" v-model="username">
        </div>
        <p class="register-tit">*请输入4-12位数字、字母或数字/字母组合</p>
        <div class="register-item">
          <p class="register-label">密码</p>
          <input type="password" class="register-input" placeholder="请输入密码" maxlength="11" v-model="password">
        </div>
        <p class="register-tit">*请使用6-11字母、数字及组合</p>
        <div class="register-item">
          <p class="register-label">确认密码</p>
          <input type="password" class="register-input" placeholder="请输入确认密码" v-model="confirmPassword">
        </div>
        <p class="register-tit">*确认密码不能为空</p>
        <div class="register-item">
          <p class="register-label">真实姓名</p>
          <input type="text" class="register-input" placeholder="请输入真实姓名" @input="realTis" v-model="realname" ref="realname">
        </div>
        <p class="register-tit">*必须与银行帐号姓名相同，否则不能出款</p>
        <div class="register-item">
          <p class="register-label">手机号码</p>
          <input type="tel" class="register-input" placeholder="请输入手机号码" v-model="phonenum" ref="phonenum" maxlength="11">
        </div>
        <p class="register-tit">*请输入有效的手机号码</p>
        <div class="register-item">
          <p class="register-label">取款密码</p>
          <input type="tel" class="register-input" oninput='return( /[\d]/.test(String.fromCharCode(event.keyCode)))' placeholder="请输入4~6位取款密码" maxlength="6" v-model="bankCode">
        </div>
        <p class="register-tit">*提款认证必须，请务必记住！</p>
        <div class="agreement-wrap">
          <div class="agreement-check">
            <input type="checkbox" name="agreement" ref="agreementCheck" id="agreement" checked="checked" @click="checkSelect">
          </div>
          <label for="agreement" class="agreement-labbel" @click="sureAgreement">本人同意</label>
          <span class="agreement-tit" @click="openAgreement">《开户协议》</span>
          <span class="agreement-please" v-show="!ifcheck">*请阅读协议</span>
        </div>
        <div class="nextStep" @click="registerSubmit">
          下一步
        </div>
      </div>
    </div>
    <mask-layer :ifopen="ifopen"></mask-layer>
  </div>
</template>

<script>
import maskLayer from '@/base/mask-layer/mask-layer'
import { Toast, MessageBox } from 'mint-ui'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      ifopen: false,
      username: '',
      password: '',
      confirmPassword: '',
      realname: '',
      email: '',
      phonenum: null,
      bankCode: '',
      captcha: '',
      value: [],
      ifcheck: true,
      agreementContent: `<div>
                          <p class="agreement-content">1、只接受合法博彩年龄的客户申请。同时我们保留要求客户提供其年龄证明的权利。</p>
                          <p class="agreement-content">2、在进行注册时所提供的全部信息必须在各个方面都是准确和完整的。</p>
                          <p class="agreement-content">3、在开户后进行一次有效存款，恭喜您成为有效会员！</p>
                          <p class="agreement-content">4、存款免手续费，开户最低入款金额10人民币，最高单次入款金额500000人民币。</p>
                          <p class="agreement-content">5、成为有效会员后，客户有责任以在线客服、电子邮件、在网站上联系我们，随时向本公司提供最新的个人资料。</p>
                          <p class="agreement-content">6、是提供互联网投注服务的机构。请会员在注册前参考当地政府的法律，在博彩不被允许的地区，如有会员在注册、下注，为会员个人行为，不负责、承担任何相关责任。</p>
                          <p class="agreement-content">7、无论是个人或是团体，如有任何威胁、滥用优惠的行为，保留杈利取消、收回由优惠产生的红利，并保留权利追讨最高50%手续费。</p>
                          <p class="agreement-content">8、所有的优惠是特别为玩家而设，在玩家注册信息有争议时，为确保双方利益、杜绝身份盗用行为，保留权利要求客户向我们提供充足有效的文件， 并以各种方式辨别客户是否符合资格享有我们的任何优惠。</p>
                          <p class="agreement-content">9、客户一经注册开户，将被视为接受所有颁布在网站上的规则与条例。</p>
                        </div>`
    }
  },
  methods: {
    // 限制真实姓名输入框只能输入中文
    realTis () {
      this.realname = this.realname.replace(/[^\u4e00-\u9fa5]+$/, '')
      return this.realname
    },
    // 封装提示信息函数
    mytoast (msg) {
      this.ifopen = !this.ifopen
      let instance = Toast(msg)
      setTimeout(() => {
        instance.close()
        this.ifopen = !this.ifopen
        clearTimeout()
      }, 1000)
    },
    loginback () {
      this.$router.go(-1)
    },
    // 返回首页
    returnHome () {
      this.$router.push('/')
    },
    // 提交注册
    registerSubmit () {
      if (!this.username) {
        this.mytoast('请输入用户名！')
      } else if (this.username.length < 4) {
        this.mytoast('用户名长度最少4位！')
      } else if (!this.password) {
        this.mytoast('请输入密码！')
      } else if (this.password.length < 6) {
        this.mytoast('密码长度最少6位！')
      } else if (!this.confirmPassword) {
        this.mytoast('请输入确认密码！')
      } else if (this.confirmPassword.length < 6) {
        this.mytoast('确认密码长度最少6位！')
      } else if (this.password !== this.confirmPassword) {
        this.mytoast('密码与确认密码不一致！')
      } else if (!this.realname) {
        this.mytoast('请输入真实姓名！')
      } else if (/[^\u4e00-\u9fa5]+$/.test(this.realname)) {
        this.mytoast('真实姓名只能为中文！')
      } else if (!this.phonenum) {
        this.mytoast('请输入手机号码！')
      } else if (this.phonenum.length < 11) {
        this.mytoast('请输入11位数手机号码！')
      } else if (!this.bankCode) {
        this.mytoast('请输入取款密码！')
      } else if (this.bankCode.length < 4) {
        this.mytoast('取款密码最少4位数！')
      } else if (!this.ifcheck) {
        this.mytoast('请勾选开户协议！')
      } else {
        let data = {
          key: 'add',
          username: this.username,
          password: this.password,
          passwd: this.confirmPassword,
          real_name: this.realname,
          tel: this.phonenum,
          pwd1: this.bankCode,
          agent_id: this.agentId
        }
        this.$http.post('/api/json/api.php?r=regster', data).then((res) => {
          this.mytoast(res.data.msg)
          if (res.status === 200 && res.data.code === 0) {
            this.$store.dispatch('UserLogin', this.username)
            this.$store.dispatch('SET_userMoney', '0.00')
            this.$router.push('/')
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    // 点击开户协议
    openAgreement () {
      MessageBox({
        title: '开户协议',
        message: this.agreementContent
      })
    },
    // 点击本人同意
    sureAgreement () {
      this.ifcheck = !this.ifcheck
    },
    // 点击勾选框
    checkSelect () {
      if (this.$refs.agreementCheck.checked) {
        this.ifcheck = true
      } else {
        this.ifcheck = false
      }
    }
  },
  components: {
    MessageBox,
    maskLayer
  },
  computed: {
    ...mapGetters([
      'agentId'
    ])
  }
}
</script>

<style scoped>
.register-top {
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
/* 注册 */
.register-main-wrap {
  padding: 0.2rem 0.2rem 0.2rem 0.2rem;
}
.register-main .register-item {
  display: flex;
  width: 100%;
  height: 0.8rem;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
}
.register-item .register-label {
  flex: 0 0 25%;
  font-size: 0.32rem;
}
.register-item .register-input {
  width: 73%;
  height: 0.6rem;
  padding-left: 2%;
  border: none;
  outline: none;
  border: 0.02rem solid #ccc;
  font-size: 0.32rem;
  border-radius: 0.1rem;
}
.register-main .register-tit {
  padding: 0.1rem 0;
  margin-left: 25%;
  font-size: 0.24rem;
}
/* 用户协议 */
.register-main .agreement-wrap {
  display: flex;
  height: 0.6rem;
  margin-top: 0.4rem;
  font-size: 0.28rem;
  font-weight: 700;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
}
.agreement-wrap .agreement-check {
  display: flex;
  height: 0.6rem;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  line-height: 0.6rem;
}
.agreement-wrap .agreement-check input {
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.04rem;
  color: #000;
  opacity: .8;
  border: none;
  outline: none;
  background: 0 0;
}
.agreement-wrap .agreement-labbel {
  padding-left: 2%;
}
.agreement-wrap .agreement-tit {
  text-decoration: underline;
  color: #0077FD;
}
.agreement-wrap .agreement-please {
  color: #e00013;
  opacity: .5;
}
.nextStep {
  width: 100%;
  height: 0.94rem;
  margin-top: 0.4rem;
  background-color: #3071b8;
  line-height: 0.94rem;
  color: #fff;
  text-align: center;
  font-size: 0.36rem;
  border-radius: 0.3rem;
}

</style>
<style>
.agreement-content {
  text-align: left;
}
</style>
