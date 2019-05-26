<template>
  <div class="mymessage-wrapper">
    <div class="mymessage-header-wrap">
      <div class="back-btn" @click="loginback"></div>
      <div class="person-title">信息中心</div>
      <div class="no-hook" @click="returnHome">
        <img src="../../assets/f11.png" alt="">
      </div>
    </div>
    <div class="mymessage-content-wrap">
      <div class="tab-head">
        <span :class="{'tabActive': tabIndex === 1}" @click="tab(1)">公告</span>
        <span :class="{'tabActive': tabIndex === 2}" @click="tab(2)">站内信({{mailLength}})</span>
      </div>
      <div class="tab-content-wrap">
        <scroll class="scroll-wrap" :data="noticeArr" ref="scroll">
          <div>
            <div class="announcement" v-show="tabIndex === 1">
              <div class="notice-item-wrap" v-for="(item, index) in noticeArr" :key="index">
                <p v-if="noticeArr.length>0">{{item.content}}</p>
                <p v-if="!noticeArr.length">暂无公告</p>
              </div>
            </div>
            <div class="mail" v-show="tabIndex === 2">
              <div class="mail-item-wrap" v-for="(item, index) in msgArr" :key="index" v-if="msgArr.length">
                <div class="mail-item">
                  <p class="msg-wrap" @click="read(item, index)">
                    <span class="msg-title">{{item.msg_title}}</span>
                    <span class="msg-time">{{item.msg_time}}</span>
                  </p>
                  <p class="msg-show-wrap">
                    <span class="islook-msg">{{item.islook === '0' ? '未读' : '已读'}}</span>
                    <span class="delete-msg" @click="deleteMsg(item,index)">删除</span>
                  </p>
                </div>
                <div v-show='looking && msgContentIndex === index' class="msg-content-wrap">
                  {{msgContent}}
                </div>
              </div>
              <div class="mail-item-wrap" v-if="!msgArr.length">暂无信息</div>
            </div>
          </div>
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from '@/base/scroll/scroll'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      tabIndex: 1,
      mailLength: 0,
      msgArr: [],
      noticeArr: [],
      looking: false,
      msgContent: '',
      lookState: '未读',
      msgContentIndex: -1
    }
  },
  created () {
    this._getannouncement()
    this._getMsgs()
  },
  methods: {
    _getannouncement () {
      this.$http.get('/api/json/center/?r=HotNews').then((res) => {
        this.noticeArr = res.data.data
      }).catch((error) => {
        console.log(error)
      })
    },
    _getMsgs () {
      this.$http.get('/api/json/center/?r=Msg').then((res) => {
        this.msgArr = res.data.data
        this.msgArr.forEach((item, index) => {
          if (item.islook === '0') {
            this.mailLength = this.mailLength + 1
          }
        })
      }).catch((error) => {
        console.log(error)
      })
    },
    loginback () {
      this.$router.push('/personCenter')
    },
    // 返回首页
    returnHome () {
      this.$router.push('/')
    },
    tab (val) {
      this.tabIndex = val
      this.$refs.scroll.refresh()
    },
    // 阅读站内邮件
    read (item, index) {
      this.$http.get('/api/json/center/?r=MsgOne&msgid=' + item.msg_id).then((res) => {
        this.msgContent = res.data.data.content
        item.islook = 1
        this.looking = !this.looking
        this.msgContentIndex = index
        this.mailLength = 0
        this._getMsgs()
      }).catch((error) => {
        console.log(error)
      })
    },
    // 删除站内邮件
    deleteMsg (item, index) {
      this.$http.get('/api/json/center/?r=MsgDel&msgid=' + item.msg_id).then((res) => {
        if (res.data.code === 0) {
          this.mailLength = 0
          let instance = Toast(res.data.msg)
          setTimeout(() => {
            instance.close()
            clearTimeout()
          }, 1500)
          this._getMsgs()
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  components: {
    Scroll
  }
}
</script>

<style scoped>
.mymessage-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('../../assets/bg2.png') no-repeat center center;
  background-size: 100% 100%;
}
.mymessage-header-wrap {
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
.tab-content-wrap {
  position: absolute;
  top: 1.79rem;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 0.32rem;
}
.notice-item-wrap {
  padding: 0.2rem;
  border-bottom: 0.02rem solid rgba(0,0,0,.2);
}
.mail {
  padding-top: 0.4rem;
  border-top: 0.02rem solid rgba(0,0,0,.2);
}
.mail-item {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-bottom: 0.02rem solid rgba(0,0,0,.2);
}
.msg-wrap {
  display: flex;
  flex: 0 0 80%;
  width: 80%;
  flex-direction: column;
}
.msg-wrap span {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
}
.msg-title {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.msg-show-wrap {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.msg-show-wrap span {
  flex: 1;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
}
.msg-content-wrap {
  padding: 0.2rem;
  border-bottom: 0.02rem solid rgba(0,0,0,.2);
}
</style>
