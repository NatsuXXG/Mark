<template>
  <div class="personcenter-wrapper">
    <div class="personcenter-header-wrap">
      <div class="back-btn" @click="loginback"></div>
      <div class="person-title">个人中心</div>
      <div class="login-out" @click="loginout">退出登录</div>
    </div>
    <div class="person-detail">
      <p class="person-username">欢迎您！{{username}}</p>
      <div class="detail-bottom">
        <div class="person-money-wrap">
          <p class="person-money">￥{{usermoney}}</p>
          <span class="balance">余额</span>
        </div>
        <p class="person-app">手机购彩APP</p>
        <a :href="serviceUrl" target="_blank" class="person-server">在线客服</a>
      </div>
    </div>
    <div class="recharge-cash-wrap">
      <router-link class="recharge" to="/recharge" tag="div">充值</router-link>
      <router-link class="withdraw-cash" to="/withdraw" tag="div">提现</router-link>
      <router-link class="sign-in" to="" tag="div">签到</router-link>
    </div>
    <div class="person-con">
      <div class="con-row">
        <router-link to="/myaccount" tag="div" class="my-account">
          <img src="../../assets/menu-profile.png" alt="">
          <p>我的账户</p>
        </router-link>
        <router-link to="/modify" tag="div" class="my-passpord">
          <img src="../../assets/menu-modifypwd.png" alt="">
          <p>修改密码</p>
        </router-link>
        <router-link to="/mymessage" tag="div" class="my-msg">
          <img src="../../assets/menu-message.png" alt="">
          <p>信息中心</p>
        </router-link>
      </div>
      <div class="con-row">
        <router-link to="/quotaconversion" tag="div" class="my-conversion">
          <img src="../../assets/menu-transfer.png" alt="">
          <p>额度转换</p>
        </router-link>
        <router-link to="/statement" tag="div" class="my-statement">
          <img src="../../assets/menu-record.png" alt="">
          <p>投注报表</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      serviceUrl: ''
    }
  },
  computed: {
    ...mapGetters([
      'username',
      'usermoney'
    ])
  },
  created () {
    this._getDatas()
  },
  methods: {
    loginback () {
      this.$router.push('/')
    },
    loginout () {
      this.$http.get('/api/json/api.php?r=logout').then((res) => {
        if (res.data.code === 0) {
          this.$store.dispatch('UserLogout')
          let instance = Toast(res.data.msg)
          setTimeout(() => {
            instance.close()
            this.ifopen = !this.ifopen
            clearTimeout()
            this.$router.replace('/')
          }, 1000)
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 获取数据
    _getDatas () {
      this.$http.get('/api/json/api.php?r=data').then((res) => {
        if (res.data.code === 2) {
          MessageBox.confirm('请先登录', '温馨提示').then(() => {
            this.$router.push({
              path: '/login',
              query: { redirect: this.$route.path }  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            })
          }, () => {
            return false
          })
        } else {
          this.serviceUrl = res.data.data.serverurl
        }
      }).catch((error) => {
        console.log(error)
      })
	  this.$http.get('/api/json/center/?r=Money').then((res) => {
        this.$store.dispatch('SET_userMoney', res.data.data.user_money)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>


<style scoped>
.personcenter-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('../../assets/bg2.png') no-repeat center center;
  background-size: 100% 100%;
}
.personcenter-header-wrap {
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
  flex: 0 0 30%;
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
.login-out {
  flex: 0 0 25%;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: right;
  padding-right: 5%;
}
.person-detail {
  font-size: 0.32rem;
  box-shadow: 0.02rem 0 0 0.02rem white;
}
.person-detail .person-username {
  height: 1.2rem;
  padding-left: 20%;
  background: url('../../assets/username.png') no-repeat 5% center;
  line-height: 1.2rem;
  color: white;
  box-shadow: 0 0 0.02rem white;
}
.detail-bottom {
  display: flex;
  height: 1.2rem;;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.person-money-wrap {
  display: flex;
  height: 100%;
  flex: 0 0 30%;
  padding-left: 1%;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  box-shadow: 0.02rem 0 0 rgb(233, 230, 230);
}
.person-money {
  display: block;
  width: 100%;
  color: rgb(255, 115, 0);
  text-align: center;
}
.balance {
  display: block;
  width: 100%;
  font-size: 0.28rem;
  text-align: center;
}
.person-app {
  flex: 0 0 29%;
  height: 100%;
  padding-left: 10%;
  background: url('../../assets/app.png') no-repeat 3% center;
  line-height: 1.2rem;
  font-size: 0.28rem;
  background-size: 0.64rem 0.64rem;
  box-shadow: 0.02rem 0 0 rgb(233, 230, 230);
}
.person-server {
  flex: 0 0 20%;
  height: 100%;
  padding-left: 10%;
  background: url('../../assets/server.png') no-repeat 8% center;
  line-height: 1.2rem;
  font-size: 0.28rem;
  background-size: 0.4rem 0.4rem;
}
.recharge-cash-wrap {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.recharge-cash-wrap div {
  flex: 0 0 18.33%;
  font-size: 0.36rem;
  height: 0.8rem;
  text-align: left;
  line-height: 0.8rem;
  background-color: rgba(255,255,255,0.7);
  font-weight: 700;
}
.recharge {
  padding-left: 15%;
  background: url('../../assets/recharge.png') no-repeat 15% center;
  background-size: 0.5rem 0.5rem;
  color: #ea9518;
  box-shadow: 0.02rem 0 0 rgb(56, 27, 27);
}
.withdraw-cash {
  padding-left: 15%;
  background: url('../../assets/withdrawcash.png') no-repeat 15% center;
  background-size: 0.5rem 0.5rem;
  color: #1296db;
  box-shadow: 0.02rem 0 0 rgb(56, 27, 27);
}
.sign-in {
  padding-left: 15%;
  background: url('../../assets/sign.png') no-repeat 15% center;
  background-size: 0.5rem 0.5rem;
  color: #d4237a;
}
.person-con {
  margin-top: .6rem;
  background: rgba(255,255,255,.5);
  font-size: 0.32rem;
}
.con-row {
  display: flex;
  align-items: bottom;
  align-content: bottom;
  justify-content: center;
}
.con-row div {
  display: flex;
  flex: 1;
  height: 2.4rem;
  text-align: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  box-shadow: 1px 1px 1px #ccc;
}
.con-row div img {
  width: 1.2rem;
  height: 1rem;
}
</style>
