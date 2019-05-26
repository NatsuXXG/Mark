<template>
  <div class="live-wrapper">
    <div class="live-wrap">
      <div class="live-main-wrap">
        <div class="live-item">
          <div class="ag-live live-row" @click="livegame(1)">
            <img src="../../assets/ag.png" alt="">
            <p class="item-title">AG视讯</p>
          </div>
          <div class="ds-live live-row" @click="livegame(5)">
            <img src="../../assets/ds_icon.png" alt="">
            <p class="item-title">DS视讯</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      liveurl: ''
    }
  },
  computed: {
    ...mapGetters([
      'username'
    ])
  },
  methods: {
    livegame (type) {
      if (!this.username) {
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
        let data = {}
        data['type'] = type
        data['game'] = ''
        this.$http.post('/api/live/Default.php', data).then((res) => {
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
            this.liveurl = res.data.data.url
            window.location.href = res.data.data.url
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
}
</script>


<style scoped>
.live-wrapper {
  margin-top: 0.2rem;
  padding-bottom: 0.2rem;
  border-top: 0.02rem solid #000;
}
.live-item {
  display: flex;
  margin-top: 0.2rem;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.live-item .live-row {
  flex: 0 0 40%;
  background: rgba(48,113,184, 0.3);
  padding: 0 2.5% 0;
  height: 1.72rem;
  text-align: center;
  border-radius: 0.2rem;
}
.live-item img {
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 auto;
  vertical-align: middle;
}
.live-item .item-title {
  font-size: 0.32rem;
}
</style>
