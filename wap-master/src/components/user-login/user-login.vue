<template>
  <div class="login-wrapper">
    <div class="login-top">
      <span class="back-btn" @click="loginback"></span>
      <h1>欢迎登录使用</h1>
    </div>
    <div class="login-main-wrap">
      <div class="login-main">
        <div class="item-input-wrap">
          <div class="label-img"><img src="../../assets/icon-user.png" alt=""></div>
          <span class="item-label">帐号</span>
          <div class="item-input"><input type="text" v-model="username"></div>
        </div>
        <div class="item-input-wrap">
          <div class="label-img"><img src="../../assets/icon-pwd.png" alt=""></div>
          <span class="item-label">密码</span>
          <div class="item-input"><input type="password" v-model="userpw"></div>
        </div>
      </div>
      <button class="login-btn" @click="loginSubmit">登录</button>
      <div class="login-bottom">
        <router-link to="/register">马上注册</router-link>
        <router-link to="" @click.native="swgame">免费试玩</router-link>
      </div>
      <div class="login-qw">
        <p class="qw-title">社交帐号登录：</p>
        <router-link tag="div" to="/" class="qqlogin"></router-link>
        <router-link tag="div" to="/" class="weixinlogin"></router-link>
      </div>
      <div class="foot-bottom">
        <div class="foot-bottom-item">
          <div class="foot-logoA foot-logo">GICC牌照</div>
          <div class="foot-logoB foot-logo">赫塔菲</div>
          <div class="foot-logoC foot-logo">西甲</div>
          <div class="foot-logoD foot-logo">满18周岁</div>
        </div>
      </div>
      <div class="foot-copyright">
        <p>Copyright©2018</p>
        <router-link to="/">手机版</router-link>
      </div>
    </div>
    <mask-layer :ifopen="ifopen"></mask-layer>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import maskLayer from '@/base/mask-layer/mask-layer'
export default {
  data () {
    return {
      username: '',
      mymoney: 0,
      userpw: '',
      login: 'login',
      ifopen: false
    }
  },
  methods: {
    loginback () {
      this.$router.go(-1)
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
    swgame () {
      this.mytoast('暂未开放')
    },
    // 登录提交
    loginSubmit () {
      if (!this.username) {
        this.mytoast('请输入帐号')
      } else if (!this.userpw) {
        this.mytoast('请输入密码')
      } else {
        this.$http.post('/api/json/api.php?r=login', {
          action: this.login,
          username: this.username,
          password: this.userpw
        }).then((res) => {
          this.mytoast(res.data.msg)
          if (res.status === 200 && res.data.code === 0) {
            this.mymoney = res.data.data.user_money
            this.$store.dispatch('UserLogin', this.username)
            this.$store.dispatch('SET_userMoney', this.mymoney)
            this.$router.push(this.$route.query.redirect || '/')
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  },
  components: {
    maskLayer
  }
}
</script>

<style scoped>
.login-top {
  position: relative;
  display: flex;
  height: 0.9rem;
  justify-content: center;
  align-content: center;
  border-bottom: 0.02rem solid #ccc;
  background-color: #3071b8;
}
.login-top .back-btn {
  position: absolute;
  left: 0;
  width: 1.4rem;
  height: 0.9rem;
  background: url('../../assets/backlleft.png') no-repeat center center;
  background-size: 0.64rem 0.64rem;
}
.login-top h1 {
  width: 100%;
  color: #fff;
  line-height: 0.9rem;
  font-size: 0.4rem;
  font-weight: 700;
  text-align: center;
}
.login-main-wrap {
  padding: 0.6rem 0.2rem 0.2rem 0.2rem;
}
.login-main-wrap .login-main {
  border-radius: 0.04rem;
}
.login-main .item-input-wrap {
  display: flex;
  height: 1.2rem;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
}
.item-input-wrap .label-img {
  display: flex;
  flex: 0 0 10%;
  align-items: center;
  justify-content: center;
}
.item-input-wrap img {
  width: 0.36rem;
  height: 0.36rem;;
}
.item-input-wrap .item-label {
  flex: 0 0 15%;
  text-align: center;
  font-size: 0.28rem;
}
.item-input {
  display: flex;
  flex: 0 0 75%;
  align-items: center;
}
.item-input input{
  width: 95%;
  height: 0.68rem;
  padding-left: 5%;
  outline: none;
  border: none;
  background: none;
  border: 0.02rem solid #ccc;
  font-size: 0.36rem;
}
.login-main-wrap .login-btn {
  width: 100%;
  height: 0.94rem;
  background: -webkit-linear-gradient(top,#3071b8,#3071b8);
  line-height: 0.94rem;
  color: #fff;
  font-size: 0.32rem;
  outline: none;
  border: none;
  border-radius:0.3rem;
}
.login-wrapper .login-bottom {
  display: flex;
  margin-top: 0.4rem;
  justify-content: space-between;
}
.login-wrapper .login-qw {
  display: flex;
  margin-top: 0.3rem;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
}
.login-bottom a {
  flex: 0 0 30%;
  height: 0.64rem;
  text-align: center;
  font-size: 0.32rem;
  line-height: 0.64rem;
}
.qw-title {
  padding-left: 0.22rem;
  font-size: 0.32rem;
}
.qqlogin {
  width: 0.64rem;
  height: 0.64rem;
  margin-right: 0.3rem;
  background: url('../../assets/qq-oc.png') no-repeat;
  background-size: 0.64rem 0.64rem;
}
.weixinlogin {
  width: 0.64rem;
  height: 0.64rem;
  background: url('../../assets/weixin.png') no-repeat;
  background-size: 0.64rem 0.64rem;
}
.foot-bottom {
  padding-top: 1rem;
}
.foot-bottom-item {
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
  font-size: 0.24rem;
}
.foot-bottom-item .foot-logo {
  flex: 1;
  padding-top: 1.2rem;
  text-align: center;
}
.foot-bottom-item .foot-logoA {
  background: url('../../assets/btm_logoA.png') no-repeat center top;
  background-size: 0.84rem 1.2rem;
}
.foot-bottom-item .foot-logoB {
  background: url('../../assets/btm_logoB.png') no-repeat center top;
  background-size: 1.2rem 1.2rem;
}
.foot-bottom-item .foot-logoC {
  background: url('../../assets/btm_logoC.png') no-repeat center top;
  background-size: 1.2rem 1.2rem;
}
.foot-bottom-item .foot-logoD {
  background: url('../../assets/btm_logoD.png') no-repeat center top;
  background-size: 1.2rem 1.2rem;
}

.foot-copyright {
  padding: 0.6rem 0 0 0.22rem;
  display: flex;
  font-size: 0.28rem;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.foot-copyright p {
  margin-right: 0.2rem;
}
.foot-copyright a {
  padding: 0 0.2rem;
}
.foot-copyright p, .foot-copyright a {
  height: 0.8rem;
  line-height: 0.8rem;
}
</style>
