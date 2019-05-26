<template>
  <div class="myaccount-wrapper">
    <div class="myaccount-header-wrap">
      <div class="back-btn" @click="loginback"></div>
      <div class="person-title">我的账户</div>
      <div class="no-hook" @click="returnHome">
        <img src="../../assets/f11.png" alt="">
      </div>
    </div>
    <div class="account-detail-wrap">
      <div class="detail-title">
        <p>账户资料</p>
      </div>
      <div class="detail-content">
        <p>
          <span>帐号:</span>
          <span>{{username}}</span>
        </p>
        <p>
          <span>用户余额:</span>
          <span>{{usermoney}}</span>
        </p>
        <p>
          <span>真实姓名:</span>
          <span>{{realname}}</span>
        </p>
        <p class="livemoney-wrap">
          <span>AG真人余额:</span>
          <span>{{agmoney}}</span>
          <span class="shuaxin" @click="getlivemoney('AG')">
            <img src="../../assets/shuaxin.png" alt="">
          </span>
        </p>
        <p class="livemoney-wrap">
          <span>DS真人余额:</span>
          <span>{{dsmoney}}</span>
          <span class="shuaxin" @click="getlivemoney('DS')">
            <img src="../../assets/shuaxin.png" alt="">
          </span>
        </p>
        <p class="livemoney-wrap" v-if="bankCardNum">
          <span>银行卡号:</span>
          <span>{{bankCardNum}}</span>
        </p>
        <p class="livemoney-wrap" v-if="bankCardNum">
          <span>开户银行:</span>
          <span>{{bankName}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      realname: '',
      agmoney: 0.00,
      bbinmoney: 0.00,
      mgmoney: 0.00,
      dsmoney: 0.00,
      bankCardNum: '',
      bankName: ''
    }
  },
  created () {
    this._getuserinfo()
  },
  methods: {
    // 后退
    loginback () {
      this.$router.push('/personCenter')
    },
    // 返回首页
    returnHome () {
      this.$router.push('/')
    },
    _getuserinfo () {
      this.$http.get('/api/json/center/?r=UsrInfo').then((res) => {
        this.realname = res.data.data.pay_name
        this.bankCardNum = res.data.data.pay_num
        this.bankName = res.data.data.pay_bank
      }).catch((error) => {
        console.log(error)
      })
      this.$http.get('/api/json/center/?r=AginMoney').then((res) => {
        this.agmoney = res.data.data.money
      }).catch((error) => {
        console.log(error)
      })
      this.$http.get('/api/json/center/?r=DsMoney').then((res) => {
        this.dsmoney = res.data.data.money
      }).catch((error) => {
        console.log(error)
      })
    },
    // 真人余额刷新
    getlivemoney (val) {
      if (val === 'AG') {
        this.$http.get('/api/json/center/?r=AginMoney').then((res) => {
          this.agmoney = res.data.data.money
        }).catch((error) => {
          console.log(error)
        })
      }
      if (val === 'BBIN') {
        this.$http.get('/api/json/center/?r=BbinMoney').then((res) => {
          this.bbinmoney = res.data.data.money
        }).catch((error) => {
          console.log(error)
        })
      }
      if (val === 'MG') {
        this.$http.get('/api/json/center/?r=MgMoney').then((res) => {
          this.mgmoney = res.data.data.money
        }).catch((error) => {
          console.log(error)
        })
      }
      if (val === 'DS') {
        this.$http.get('/api/json/center/?r=DsMoney').then((res) => {
          this.dsmoney = res.data.data.money
        }).catch((error) => {
          console.log(error)
        })
      }
      Toast('刷新成功')
    }
  },
  computed: {
    ...mapGetters([
      'username',
      'usermoney'
    ])
  },
  components: {
    Toast
  }
}
</script>


<style scoped>
.myaccount-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('../../assets/bg2.png') no-repeat center center;
  background-size: 100% 100%;
}
.myaccount-header-wrap {
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
.account-detail-wrap {
  font-size: 0.32rem;
}
.detail-title {
  width: 100%;
  height: 0.8rem;
  text-align: center;
  line-height: 0.8rem;
  border-bottom: 0.02rem solid #fff;
}
.detail-title p {
  width: 30%;
  height: 0.8rem;
  margin: 0 auto;
  text-align: center;
  line-height: 0.8rem;
  color: #e00013;
  border-bottom: 0.04rem solid #e00013;
}
.detail-content {
  padding: 0.4rem 0.2rem 0;
}
.detail-content p {
  display: flex;
  height: 0.9rem;
  line-height: 0.9rem;
  border-bottom: 0.02rem solid #fff;
  justify-content: space-between;
}
.livemoney-wrap span {
  flex: 1;
}
.livemoney-wrap .shuaxin {
  display: flex;
  flex: 0 010%;
  align-content: center;
  align-items: center;
  justify-content: center;
}
</style>
