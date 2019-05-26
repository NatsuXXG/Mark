<template>
  <div class="modify-wrapper">
    <div class="modify-header-wrap">
      <div class="back-btn" @click="loginback"></div>
      <div class="person-title">修改密码</div>
      <div class="no-hook" @click="returnHome">
        <img src="../../assets/f11.png" alt="">
      </div>
    </div>
    <div class="modify-content-wrap">
      <div class="tab-head">
        <span :class="{'tabActive': tabIndex === 1}" @click="tab(1)">登录密码</span>
        <span :class="{'tabActive': tabIndex === 2}" @click="tab(2)">取款密码</span>
      </div>
      <div class="tab-content-wrap">
        <div class="password-wrapper" v-show="tabIndex === 1">
          <div class="modify-item-row">
            <div class="select-modify">
              <input type="password" onKeyUp="value=value.replace(/[\W]/g,'')" placeholder="输入旧密码" v-model="oldPassWord">
            </div>
            <div class="select-modify">
              <input type="password" onKeyUp="value=value.replace(/[\W]/g,'')" placeholder="输入新密码" v-model="newPassWord">
            </div>
            <div class="select-modify">
              <input type="password" onKeyUp="value=value.replace(/[\W]/g,'')" placeholder="再次输入新密码" v-model="againPassWord">
            </div>
            <div class="modify-button">
              <span class="submit-btn" @click="modifySubmit">提交</span>
            </div>
          </div>
        </div>
        <div class="password-wrapper" v-show="tabIndex === 2">
          <div class="modify-item-row">
            <div class="select-modify">
              <input type="password" maxlength="6" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="输入旧密码4-6位" v-model="oldPassWord">
            </div>
            <div class="select-modify">
              <input type="password" maxlength="6" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="输入新密码4-6位" v-model="newPassWord">
            </div>
            <div class="select-modify">
              <input type="password" maxlength="6" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="再次输入新密码4-6位" v-model="againPassWord">
            </div>
            <div class="modify-button">
              <span class="submit-btn" @click="modifySubmit">提交</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      tabIndex: 1,
      oldPassWord: null,
      newPassWord: null,
      againPassWord: null
    }
  },
  methods: {
    loginback () {
      this.$router.push('/personCenter')
    },
    // 返回首页
    returnHome () {
      this.$router.push('/')
    },
    tab (val) {
      this.tabIndex = val
    },
    modifySubmit () {
      if (this.tabIndex === 1) {
        if (!this.oldPassWord) {
          let instance = Toast('请输入旧密码')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 1500)
        } else if (!this.newPassWord) {
          let instance = Toast('请输入新密码')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 1500)
        } else if (!this.againPassWord) {
          let instance = Toast('请再次输入新密码')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 1500)
        } else {
          let data = {}
          data['password_old'] = this.oldPassWord
          data['password'] = this.newPassWord
          data['REpassword'] = this.againPassWord
          this.$http.post('/api/json/center/?r=ChkPasswd', data).then((res) => {
            let instance = Toast(res.data.msg)
            setTimeout(() => {
              instance.close()
              clearTimeout()
            }, 1500)
            if (res.data.code === 0) {
              this.oldPassWord = ''
              this.newPassWord = ''
              this.againPassWord = ''
            }
          }).catch((error) => {
            console.log(error)
          })
        }
      }
      if (this.tabIndex === 2) {
        if (!this.oldPassWord) {
          let instance = Toast('请输入旧密码')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 1500)
        } else if (!this.newPassWord) {
          let instance = Toast('请输入新密码')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 1500)
        } else if (this.newPassWord.length < 4) {
          let instance = Toast('新密码长度最少为4位')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 1500)
        } else if (!this.againPassWord) {
          let instance = Toast('请再次输入新密码')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 1500)
        } else if (this.againPassWord.length < 4) {
          let instance = Toast('确认密码长度最少为4位')
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 1500)
        } else {
          let data = {}
          data['password_old'] = this.oldPassWord
          data['password'] = this.newPassWord
          data['REpassword'] = this.againPassWord
          this.$http.post('/api/json/center/?r=ChkQkPasswd', data).then((res) => {
            let instance = Toast(res.data.msg)
            setTimeout(() => {
              instance.close()
              clearTimeout()
            }, 1500)
            if (res.data.code === 0) {
              this.oldPassWord = ''
              this.newPassWord = ''
              this.againPassWord = ''
            }
          }).catch((error) => {
            console.log(error)
          })
        }
      }
    }
  }
}
</script>


<style scoped>
.modify-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('../../assets/bg2.png') no-repeat center center;
  background-size: 100% 100%;
  font-size: 0.32rem;
}
.modify-header-wrap {
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
.tab-head {
  display: flex;
  height: 0.8rem;
  border-top: 0.02rem solid #fff;
  border-bottom: 0.02rem solid #fff;
  font-size: 0.36rem;
  font-weight: 700;
}
.tab-head span {
  display: flex;
  flex: 1;
  height: 0.82rem;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.tabActive {
  color: #7e0f19;
  border-bottom: 0.04rem solid #e00013;
}
.modify-item-row {
  padding: 0 0.4rem;
}
.select-modify {
  margin-top: 0.2rem;
  border-radius: 0.04rem;
  border-color: rgba(0,0,0,.35);
  background: rgba(255,255,255,.5);
}
.select-modify input {
  width: 95%;
  height: 0.8rem;
  padding-left: 5%;
  border: none;
  outline: none;
  background: none;
  color: black;
}
.modify-button {
  display: flex;
  padding-top: 0.8rem;
  font-size: 0.32rem;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.modify-button span {
  flex: 1;
  height: 0.8rem;
  color: #fff;
  border-radius: 0.1rem;
  text-align: center;
  line-height: 0.8rem;
}
.submit-btn {
  background-color: #ef4f4f;
}
</style>
