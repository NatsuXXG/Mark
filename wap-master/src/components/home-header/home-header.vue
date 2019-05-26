<template>
  <div class="header">
    <div class="login">
      <router-link to="/login" v-if="!username">登录</router-link>
      <p v-else class="login-state">{{username}}</p>
    </div>
    <div class="logo">
      <!-- <img src="../../assets/logo.png" alt=""> -->
    </div>
    <div class="reg-wrap">
      <router-link to="/register" v-if="!username" class="reg">注册</router-link>
      <div v-else class="login-state-person">{{usermoney}}元</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  let moneyTimer
  export default {
    computed: {
      ...mapGetters([
        'username',
        'usermoney'
      ])
    },
    created () {
      this._getMoneyData()
    },
    methods: {
      _getMoneyData () {
        if (this.$router.history.current.query.intr) {
          this.$store.dispatch('SET_agentId', this.$router.history.current.query.intr)
        } else if(window.location.href.split('/?')[1].split('intr=')[1].split('#/')[0]) {
          this.$store.dispatch('SET_agentId', window.location.href.split('/?')[1].split('intr=')[1].split('#/')[0])
        } else {
          this.$store.dispatch('SET_agentId', 0)
        }
        if (this.username) {
          moneyTimer = setInterval(() => {
            this.$http.get('/api/json/center/?r=Money').then((res) => {
              this.$store.dispatch('SET_userMoney', res.data.data.user_money)
            }).catch((error) => {
              console.log(error)
              clearInterval(moneyTimer)
            })
          }, 10000)
          this.$http.get('/api/json/center/?r=Money').then((res) => {
            this.$store.dispatch('SET_userMoney', res.data.data.user_money)
          }).catch((error) => {
            console.log(error)
          })
        } else {
          clearInterval(moneyTimer)
        }
      }
    },
    destroyed () {
      clearInterval(moneyTimer)
    },
  }
</script>

<style scoped>
.header {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0.7rem;
  background-color: #3071b8;
}
.logo {
  display: flex;
  flex:1;
  height: 0.7rem;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.logo img {
  width: 2.24rem;
  height: 0.6rem;
}
.login {
  flex:0 0 30%;
}
.reg-wrap {
  flex:0 0 30%;
}
.login,
.reg-wrap {
  height: 0.7rem;
  line-height: 0.7rem;
  color: #007eff;
  font-size: 0.32rem;
  text-align: center;
}
.login a {
  width: 55%;
}
.reg-wrap .reg {
  width: 50%;
}
.login a,
.reg-wrap .reg {
  display: inline-block;
  height: 0.48rem;
  line-height: 0.48rem;
  background-color: #fff;
  color: #007eff;
  border-radius: 0.8rem;
}
/* 登录后 */
.login-state {
  color: #fff;
  text-align: left;
  padding-left: 5%;
}
.login-state-person {
  color: #fff;
}
</style>
