<template>
  <div>
    <div class="hot-area">
      <div class="hot-title"><img src="../../assets/z2.png" alt="noticeMore">
        <span>热门精选</span>
      </div>
      <div class="hot-list">
        <div class="hot-row">
          <router-link to="/bjpk" tag="div" class="hot-col">
            <img alt="hotImg" src="../../assets/p3.png">
            <div>
              <p class="label">北京PK拾</p>
              <p class="desc">每5分钟开奖</p>
            </div>
          </router-link>
          <router-link to="/cqssc" tag="div" class="hot-col">
            <img alt="hotImg" src="../../assets/p7.png">
            <div>
              <p class="label">重庆时时彩</p>
              <p class="desc">每10分钟开奖</p>
            </div>
          </router-link>
        </div>
        <div class="hot-row">
          <router-link to="/six" tag="div" class="hot-col">
            <img alt="hotImg" src="../../assets/p5.png">
            <div>
              <p class="label">香港⑥合彩</p>
              <p class="desc">每周开奖三期</p>
            </div>
          </router-link>
          <router-link to="/fc3d" tag="div" class="hot-col">
            <img alt="hotImg" src="../../assets/p6.png">
            <div>
              <p class="label">福彩3D</p>
              <p class="desc">每天21.15开奖</p>
            </div>
          </router-link>
        </div>
        <div class="hot-row">
          <router-link to="/cqklsf" tag="div" class="hot-col">
            <img alt="hotImg" src="../../assets/p4.png">
            <div>
              <p class="label">重庆快乐十分</p>
              <p class="desc">每10分钟开奖</p>
            </div>
          </router-link>
          <router-link to="/bjkl8" tag="div" class="hot-col">
            <img alt="hotImg" src="../../assets/p8.png">
            <div>
              <p class="label">北京快乐8</p>
              <p class="desc">每10分钟开奖</p>
            </div>
          </router-link>
        </div>
        <div class="hot-row">
          <router-link to="/pl3" tag="div" class="hot-col">
            <img alt="hotImg" src="../../assets/p9.png">
            <div>
              <p class="label">排列三</p>
              <p class="desc">每天20.30开奖</p>
            </div>
          </router-link>
          <router-link to="/gdklsf" tag="div" class="hot-col">
            <img alt="hotImg" src="../../assets/p10.png">
            <div>
              <p class="label">广东快乐十分</p>
              <p class="desc">每10分钟开奖</p>
            </div>
          </router-link>
        </div>
        <div class="hot-row">
          <router-link to="/shssl" tag="div" class="hot-col">
            <img alt="hotImg" src="../../assets/p11.png">
            <div>
              <p class="label">上海时时乐</p>
              <p class="desc">每10分钟开奖</p>
            </div>
          </router-link>
          <router-link to="/gd11x5" tag="div" class="hot-col">
            <img alt="hotImg" src="../../assets/p12.png">
            <div>
              <p class="label">广东11选5</p>
              <p class="desc">每10分钟开奖</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="win-record-wrapper">
      <!--跳转pc端/ 代理后台-->
      <div class="link-pc-agent">
        <span>
          <a v-bind:href="'http://'+this.pcUrl" target="_blank">电脑版</a>
        </span>
        <span>|</span>
        <span>
          <a v-bind:href="'http://'+this.agentUrl" target="_blank">代理入口</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from '@/base/scroll/scroll'
import { MessageBox } from 'mint-ui'
import { userAgent } from '@/base/js/dom'
export default {
  data () {
    return {
    }
  },
  props: {
    pcUrl: {
      type: String
    },
    agentUrl: {
      type: String
    }
  },
  created () {
    this.ifUserAgent()
  },
  mounted () {
    // 调用弹窗函数
    // this.messageTwo()
  },
  methods: {
    // 是否打开页面要显示系统版本号判断
    ifUserAgent () {
      if (!sessionStorage.getItem('__hasAgent__')) {
        userAgent()
      }
    },
    // 第一层弹窗公告
    // message () {
    //   MessageBox.alert(`<img src="/static/images/tc.png" class="popclass">`, '喜迎手机版升级，反馈新老客户').then(() => {
    //     this.messageTwo()
    //   })
    // },
    // 第二层弹窗公告
    messageTwo () {
      MessageBox.alert(`<div style="text-align:left;">尊敬767628.com的会员，您好！系统正在维护升级，预计时间2018年8月29日【北京时间：凌晨04点-13点】完成，如有变更另行通知，给您带来不便敬请谅解，谢谢您的支持与厚爱！</div>`, '重要通知')
    }
  },
  components: {
    Scroll
  }
}
</script>

<style scoped>
.hot-area {
  margin-top: 0.3rem;
}
.hot-title {
  position: relative;
  height: 0.4rem;
  padding-left: 6%;
}
.hot-title img {
  position: absolute;
  width: 0.26rem;
  height: 0.26rem;
  top: 50%;
  left: 0;
  margin-top: -0.13rem;
}
.hot-title span {
  float: left;
  height: 0.4rem;
  font-size: 0.28rem;
  line-height: 0.4rem;
}
.hot-list .hot-row {
  height: 1.5rem;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}

.hot-list .hot-col,
.hot-list .hot-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
}

.hot-list .hot-col {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.hot-list .hot-col img {
  width: 1rem;
  height: 1rem;
}
.hot-list .hot-col div {
  padding-left: 0.2rem;
}
.hot-list .hot-col div .label {
  font-size: 0.28rem;
  color: #000;
  margin-bottom: 0.16rem;
}
.hot-list .hot-col div .desc {
  font-size: 0.24rem;
  color: #666;
}
/* 中奖记录 */
.win-record-wrapper .win-title {
  display: flex;
  height: 0.6rem;
  justify-content: flex-start;
  align-content: center;
  flex-direction: row;
  border-radius: 0.2rem;
  border: 0.02rem solid #eb5f1a;
}
.win-record-wrapper .win-title img {
  width: 0.32rem;
  height: 0.32rem;
  margin: 0.1rem 0.2rem 0 0.2rem;
}
.win-record-wrapper .win-title span {
  flex: 1;
  line-height: 0.6rem;
  color: #666;
  font-size: 0.28rem;
}
.win-record-wrapper .win-list-wrap {
  height: 3.6rem;
  overflow: hidden;
}
.win-list-wrap li {
  display: flex;
  height: 0.9rem;
  line-height: 0.9rem;
  justify-content: flex-start;
  align-content: center;
  border-bottom: 0.02rem solid #e5e5e5;
}
.win-list-wrap li span {
  font-size: 0.28rem;
  text-align: center;
}
.win-list-wrap li .list-name {
  flex: 0 0 20%;
}
.win-list-wrap li .list-type {
  flex: 0 0 40%;
}
.win-list-wrap li .list-money {
  flex: 0 0 40%;
  color: red;
}
.anim {
  transition: all 1s;
  margin-top: -0.9rem;
}
/* 首页底部电脑板，代理入口 */
.link-pc-agent {
  padding: 0.2rem 0.3rem;
  font-size: 0.28rem;
}
.link-pc-agent > span > a,
.link-pc-agent > span {
  color: #666;
}
</style>

<style>
/* 弹窗 */
.mint-msgbox {
  width: 97%;
}
.mint-msgbox-message .popclass {
  width: 100%;
  height: 6rem;
  margin: 0 auto;
}
</style>
