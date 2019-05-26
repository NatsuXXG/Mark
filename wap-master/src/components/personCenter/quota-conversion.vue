<template>
  <div class="quota-conversion-wrapper">
    <div class="quotaconversion-header-wrap">
      <div class="back-btn" @click="loginback"></div>
      <div class="person-title">额度转换</div>
      <div class="no-hook" @click="returnHome">
        <img src="../../assets/f11.png" alt="">
      </div>
    </div>
    <div class="quotaconversion-content-wrap">
      <scroll class="scroll-wrap" ref="scroll">
        <div>
          <div class="quota-out-wrap">
            <div class="purse-row">
              <p>我的钱包</p>
              <p>￥{{usermoney}}</p>
            </div>
          </div>
          <div class="quota-out-wrap">
            <p class="quota-title">转入</p>
            <div class="quota-out">
              <div class="purse-row" :class="{'selectpurse': purseIndex === 5}" @click="selectPurse(5, '转入AG')">
                <p>AG平台</p>
                <p>￥{{agmoney}}</p>
              </div>
              <div class="purse-row" :class="{'selectpurse': purseIndex === 6}" @click="selectPurse(6, '转入DS')">
                <p>DS平台</p>
                <p>￥{{dsmoney}}</p>
              </div>
            </div>
          </div>
          <div class="quota-out-wrap">
            <p class="quota-title">转出</p>
            <div class="quota-out">
              <div class="purse-row" :class="{'selectpurse': purseIndex === 2}" @click="selectPurse(2, '转出AG')">
                <p>AG平台</p>
                <p>￥{{agmoney}}</p>
              </div>
              <div class="purse-row" :class="{'selectpurse': purseIndex === 3}" @click="selectPurse(3, '转出DS')">
                <p>DS平台</p>
                <p>￥{{dsmoney}}</p>
              </div>
            </div>
          </div>
          <div class="conversion-submit">
            <h5 class="select-title">选择转账金额</h5>
            <div class="item-input">
              <input type="number" placeholder="输入金额,最低10元" class="input" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))' v-model="inputMoney">
            </div>
            <div class="span-wrap">
              <div class="span-row">
                <span @click="selectFastMoney(0, 1)" :class="{'faseSelect': fastIndex === 1}">全部</span>
                <span @click="selectFastMoney(100, 2)" :class="{'faseSelect': fastIndex === 2}">100</span>
                <span @click="selectFastMoney(500, 3)" :class="{'faseSelect': fastIndex === 3}">500</span>
              </div>
              <div class="span-row">
                <span @click="selectFastMoney(1000, 4)" :class="{'faseSelect': fastIndex === 4}">1000</span>
                <span @click="selectFastMoney(5000, 5)" :class="{'faseSelect': fastIndex === 5}">5000</span>
                <span @click="selectFastMoney(10000, 6)" :class="{'faseSelect': fastIndex === 6}">10000</span>
              </div>
            </div>
            <div class="transfer-button">
              <span class="reset-btn" @click="reset">重置</span>
              <span class="submit-btn" @click="submitQuota">提交</span>
            </div>
          </div>
        </div>
      </scroll>
    </div>
    <mask-layer :ifopen="ifopen"></mask-layer>
    <!-- 当加载数据比较缓慢的时候，为了优化用户的感官体验效果，需要实现等到load的一个过程-->
    <div class="loading-container" v-show="ifopen">
      <loading title="正在操作中"></loading>
    </div>
  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui'
import Scroll from '@/base/scroll/scroll'
import { mapGetters } from 'vuex'
import maskLayer from '@/base/mask-layer/mask-layer'
import Loading from '@/base/loading/loading' // 引入等待加载的组件
export default {
  data () {
    return {
      purseIndex: 0,
      inputMoney: null,
      fastIndex: 0,
      changeType: '',
      agmoney: 0,
      dsmoney: 0,
      ifopen: false
    }
  },
  created () {
    this._getuserinfo()
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scroll.refresh()
    })
  },
  computed: {
    ...mapGetters([
      'usermoney'
    ])
  },
  methods: {
    loginback () {
      this.$router.push('/personCenter')
    },
    // 返回首页
    returnHome () {
      this.$router.push('/')
    },
    selectPurse (val, type) {
      this.purseIndex = val
      this.changeType = type
    },
    selectFastMoney (val, index) {
      let length = document.getElementsByClassName('selectpurse').length
      if (!length) {
        let instance = Toast('请先选择转入转出选项')
        this.ifopen = !this.ifopen
        setTimeout(() => {
          instance.close()
          this.ifopen = !this.ifopen
          clearTimeout()
        }, 1000)
        return
      }
      if (this.changeType === '转入AG' && index === 1 || this.changeType === '转入DS' && index === 1) {
        this.inputMoney = this.usermoney
        this.fastIndex = index
      } else if (this.changeType === '转出AG' && index === 1) {
        this.inputMoney = this.agmoney
        this.fastIndex = index
      } else if (this.changeType === '转出DS' && index === 1) {
        this.inputMoney = this.dsmoney
        this.fastIndex = index
      } else {
        this.inputMoney = val
        this.fastIndex = index
      }
    },
    _getuserinfo () {
      this.$http.get('/api/json/center/?r=AginMoney').then((res) => {
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
          this.agmoney = res.data.data.money
        }
      }).catch((error) => {
        console.log(error)
      })
      this.$http.get('/api/json/center/?r=DsMoney').then((res) => {
        this.dsmoney = res.data.data.money
      }).catch((error) => {
        console.log(error)
      })
    },
    // 重置
    reset () {
      this.fastIndex = 0
      this.purseIndex = 0
      this.inputMoney = null
    },
    // 提交
    submitQuota () {
      if (!this.inputMoney) {
        let instance = Toast('请先输入转账金额')
        this.ifopen = !this.ifopen
        setTimeout(() => {
          instance.close()
          this.ifopen = !this.ifopen
          clearTimeout()
        }, 1000)
        return
      }
      if (this.changeType === '转出AG') {
        this.ifopen = !this.ifopen
        let data = {}
        data['change_money'] = this.inputMoney
        data['change_type'] = 'w'
        data['change_live'] = 1
        this.$http.post('/api/json/center/?r=AginTransfer', data).then((res) => {
          if (res.data.code === 0) {
            let instance = Toast(res.data.msg)
            setTimeout(() => {
              instance.close()
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1000)
            this._getuserinfo()
            this.$store.dispatch('SET_userMoney', res.data.data.money)
            this.inputMoney = ''
            this.fastIndex = 0
          } else if (res.data.code === 2) {
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
            let instance = Toast(res.data.msg)
            setTimeout(() => {
              instance.close()
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1000)
          }
        }).catch((error) => {
          console.log(error)
        })
      }
      if (this.changeType === '转出DS') {
        this.ifopen = !this.ifopen
        let data = {}
        data['change_money'] = this.inputMoney
        data['change_type'] = 'w'
        data['change_live'] = 4
        this.$http.post('/api/json/center/?r=DsTransfer', data).then((res) => {
          if (res.data.code === 0) {
            let instance = Toast(res.data.msg)
            setTimeout(() => {
              instance.close()
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1000)
            this._getuserinfo()
            this.$store.dispatch('SET_userMoney', res.data.data.money)
            this.inputMoney = ''
            this.fastIndex = 0
          } else if (res.data.code === 2) {
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
            let instance = Toast(res.data.msg)
            setTimeout(() => {
              instance.close()
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1000)
          }
        }).catch((error) => {
          console.log(error)
        })
      }
      if (this.changeType === '转入AG') {
        this.ifopen = !this.ifopen
        let data = {}
        data['change_money'] = this.inputMoney
        data['change_type'] = 'd'
        data['change_live'] = 1
        this.$http.post('/api/json/center/?r=AginTransfer', data).then((res) => {
          if (res.data.code === 0) {
            let instance = Toast(res.data.msg)
            setTimeout(() => {
              instance.close()
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1000)
            this._getuserinfo()
            this.$store.dispatch('SET_userMoney', res.data.data.money)
            this.inputMoney = ''
            this.fastIndex = 0
          } else if (res.data.code === 2) {
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
            let instance = Toast(res.data.msg)
            setTimeout(() => {
              instance.close()
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1000)
          }
        }).catch((error) => {
          console.log(error)
        })
      }
      if (this.changeType === '转入DS') {
        this.ifopen = !this.ifopen
        let data = {}
        data['change_money'] = this.inputMoney
        data['change_type'] = 'd'
        data['change_live'] = 4
        this.$http.post('/api/json/center/?r=DsTransfer', data).then((res) => {
          if (res.data.code === 0) {
            let instance = Toast(res.data.msg)
            setTimeout(() => {
              instance.close()
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1000)
            this._getuserinfo()
            this.$store.dispatch('SET_userMoney', res.data.data.money)
            this.inputMoney = ''
            this.fastIndex = 0
          } else if (res.data.code === 2) {
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
            let instance = Toast(res.data.msg)
            setTimeout(() => {
              instance.close()
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1000)
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  },
  components: {
    Scroll,
    maskLayer,
    Loading
  }
}
</script>


<style scoped>
.quota-conversion-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('../../assets/bg2.png') no-repeat center center;
  background-size: 100% 100%;
}
.quotaconversion-header-wrap {
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
.quotaconversion-content-wrap {
  position: absolute;
  top: 0.7rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.quota-out-wrap {
  font-size: 0.32rem;
}
.quota-out-wrap .quota-title {
  height: 0.8rem;
  border-bottom: 0.02rem solid #fff;
  line-height: 0.8rem;
  text-align: center;
}
.quota-out {
  display: flex;
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
.purse-row p {
  line-height: 0.6rem;
}
.conversion-submit {
  padding: 0.2rem;
}
.select-title {
  padding: 0.2rem 0;
  font-size: 0.36rem;
}
.item-input {
  display: flex;
  height: 0.8rem;
  border-color: rgba(255,255,255,.6);
  background: rgba(255,255,255,.3);
}
.conversion-submit .input {
  height: 0.8rem;
  padding-left: 0.2rem;
  background: none;
  outline: none;
  border: none;
  font-size: 0.36rem;
}
.span-row {
  display: flex;
  padding-top: 0.2rem;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.span-row span {
  flex: 0 0 30%;
  height: 0.8rem;
  background: rgba(255,255,255,.3);
  font-size: 0.32rem;
  line-height: 0.8rem;
  border: 0.02rem solid rgba(255,255,255,.6);
  text-align: center;
  border-radius: 0.1rem;
}
.span-row .faseSelect {
  background: #32a1ff;
  border-color: #32a1ff;
  color: #fff;
}
.transfer-button {
  display: flex;
  padding-top: 0.4rem;
  font-size: 0.32rem;
  align-content: center;
  align-items: center;
  justify-content: space-between;
}
.transfer-button span {
  flex: 0 0 30%;
  height: 0.8rem;
  color: #fff;
  border-radius: 0.1rem;
  text-align: center;
  line-height: 0.8rem;
}
.reset-btn {
  background-color: #26a2ff;
}
.submit-btn {
  background-color: #ef4f4f;
}
.selectpurse {
  background: rgba(255,255,255,.8) url('../../assets/icon-selected.png') top left no-repeat;
  background-size: 0.8rem;
}
.loading {
  z-index: 99999
}
</style>
