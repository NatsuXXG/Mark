<template>
  <div>
    <div class="sport-main-wrap">
      <scroll
        class="scroll-wrap"
        :data="sportDatas"
        :pulldown="true"
        @pulldown="loadTop"
        :pullup="true" @pullup="loadBottom"
        ref="scroll"
      >
        <div class="item-wrap" style="min-height:80vh" v-if="sportDatas.length > 0 && !nosport">
          <div class="top-tip">
            <span class="refresh-hook" v-show="sportDatas.length">下拉刷新</span>
          </div>
          <div class="sport-main-item" v-for="(item, index) in sportDatas" :key="index">
            <div
              class="item-list"
              @click="sportClick(item, $event)"
              :class="{'itemBg': index % 2 !== 0}"
            >
              <span class="item-league">{{item.matchname}}</span>
              <span class="match-count">
                <span class="count-style">{{item.sports.length}}</span>
              </span>
            </div>
            <div class="item-content-wrap" v-show="item.bool">
              <div
                class="item-content"
                v-for="(sport, sindex) in item.sports"
                :key="sindex"
                :class="{'itemBg': index % 2 === 0}"
              >
                <div class="sport-time">
                  <p class="no-hook">比分：{{sport.Match_NowScore}}</p>
                  <p class="stime">时间：{{sport.Match_Time}}</p>
                  <p class="stype">
                    滚球
                    <img src="../../../assets/ballroll.png" alt="" class="ballroll">
                  </p>
                </div>
                <div class="sport-info">
                  <p class="team-h-area">{{sport.Match_Master}}</p>
                  <p class="info-area">
                    <span class="team-h-txt">主</span>
                    <span class="vs-txt">VS</span>
                    <span class="team-c-txt">客</span>
                  </p>
                  <p class="team-c-area">{{sport.Match_Guest}}</p>
                </div>
                <div class="sport-odds-info-wrap">
                  <div class="title">
                    <span class="type-class">类型</span>
                    <span class="onlywinwrap">1X2</span>
                    <span class="title-rq">让球</span>
                    <span class="title-dx">大小</span>
                    <span class="title-ds">单双</span>
                  </div>
                  <div class="info-content-wrap">
                    <div class="type-h-wrap">
                      <div class="type-h-left">全场</div>
                      <div class="type-h-right">
                        <p class="type-h-odd">
                          <strong class="type-name">主</strong>
                          <span
                            class="onlywin"
                            :class="{'click-hook': sport.Match_BzM > 0}"
                            @click="submitOrder(sport,sport.Match_BzM,sport.Match_Master,'全场-独赢', 'Match_BzM')"
                          >{{sport.Match_BzM > 0 ? sport.Match_BzM : ''}}</span>
                          <span class="pankou-wrap">
                            <span
                              class="pankou"
                              v-if="sport.Match_ShowType === 'H'"
                            >{{pankouFilter(sport.Match_RGG)}}</span>
                            <span
                              class="h-ho"
                              :class="{'click-hook': sport.Match_Ho > 0}"
                              @click="submitOrder(sport,sport.Match_Ho,sport.Match_Master,'全场-让球', 'Match_Ho')"
                            >{{sport.Match_Ho>0 ? sport.Match_Ho : ''}}</span>
                          </span>
                          <span class="dx-wrap">
                            <span>{{pankouFilter(sport.Match_DxGG)}}</span>
                            <span
                              :class="{'click-hook': sport.Match_DxDpl > 0}"
                              @click="submitOrder(sport,sport.Match_DxDpl,'大','全场-大小', 'Match_DxDpl')"
                            >{{sport.Match_DxDpl > 0 ? sport.Match_DxDpl: ''}}</span>
                          </span>
                          <span
                            class="ds-d-wrap"
                            :class="{'click-hook': sport.Match_DsDpl > 0}"
                            @click="submitOrder(sport,sport.Match_DsDpl,'单','全场-单双', 'Match_DsDpl')"
                          >{{sport.Match_DsDpl > 0 ? '单' + sport.Match_DsDpl : ''}}</span>
                        </p>
                        <p class="type-h-odd">
                          <strong class="type-name">客</strong>
                          <span
                            class="onlywin"
                            :class="{'click-hook': sport.Match_BzG > 0}"
                            @click="submitOrder(sport,sport.Match_BzG,sport.Match_Guest,'全场-独赢', 'Match_BzG')"
                          >{{sport.Match_BzG>0?sport.Match_BzG:''}}</span>
                          <span class="pankou-wrap">
                            <span
                              class="pankou"
                              v-if="sport.Match_ShowType === 'C'"
                            >{{pankouFilter(sport.Match_RGG)}}</span>
                            <span
                              class="h-ho"
                              :class="{'click-hook': sport.Match_Ao > 0}"
                              @click="submitOrder(sport,sport.Match_Ao,sport.Match_Guest,'全场-让球', 'Match_Ao')"
                            >{{sport.Match_Ao>0?sport.Match_Ao:''}}</span>
                          </span>
                          <span class="dx-wrap">
                            <span class="pankou">{{pankouFilter(sport.Match_DxGG1)}}</span>
                            <span
                              :class="{'click-hook': sport.Match_DxXpl > 0}"
                              @click="submitOrder(sport,sport.Match_DxXpl,'小','全场-大小', 'Match_DxXpl')"
                            >{{sport.Match_DxXpl>0?sport.Match_DxXpl:''}}</span>
                          </span>
                          <span
                            class="ds-s-wrap"
                            :class="{'click-hook': sport.Match_DsSpl > 0}"
                            @click="submitOrder(sport,sport.Match_DsSpl,'双','全场-单双', 'Match_DsSpl')"
                          >{{sport.Match_DsSpl>0?'双'+sport.Match_DsSpl:''}}</span>
                        </p>
                        <div class="type-h-odd">
                          <strong class="type-he">和局</strong>
                          <p
                            class="he-odd"
                            :class="{'click-hook': sport.Match_BzH > 0}"
                            @click="submitOrder(sport,sport.Match_BzH,'和局','全场-独赢', 'Match_BzH')"
                          >{{sport.Match_BzH>0?sport.Match_BzH:''}}</p>
                        </div>
                      </div>
                    </div>
                    <div class="type-h-wrap" v-show="sport.Match_Time < 45">
                      <div class="type-h-left">半场</div>
                      <div class="type-h-right">
                        <p class="type-h-odd">
                          <strong class="type-name">主</strong>
                          <span
                            class="onlywin"
                            :class="{'click-hook': sport.Match_Bmdy > 0}"
                            @click="submitOrder(sport,sport.Match_Bmdy,sport.Match_Master,'上半场-独赢','Match_Bmdy')"
                          >{{sport.Match_Bmdy>0?sport.Match_Bmdy:''}}</span>
                          <span class="pankou-wrap">
                            <span
                              class="pankou"
                              v-if="sport.Match_Hr_ShowType === 'H'"
                            >{{pankouFilter(sport.Match_BRpk)}}</span>
                            <span
                              class="h-ho"
                              :class="{'click-hook': sport.Match_BHo > 0}"
                              @click="submitOrder(sport,sport.Match_BHo,sport.Match_Master,'上半场-让球','Match_BHo')"
                            >{{sport.Match_BHo>0?sport.Match_BHo:''}}</span>
                          </span>
                          <span class="dx-wrap">
                            <span>{{pankouFilter(sport.Match_Bdxpk)}}</span>
                            <span
                              :class="{'click-hook': sport.Match_Bdpl > 0}"
                              @click="submitOrder(sport,sport.Match_Bdpl,'大','上半场-大小','Match_Bdpl')"
                            >{{sport.Match_Bdpl>0?sport.Match_Bdpl:''}}</span>
                          </span>
                          <span class="ds-d-wrap"></span>
                        </p>
                        <p class="type-h-odd">
                          <strong class="type-name">客</strong>
                          <span
                            class="onlywin"
                            :class="{'click-hook': sport.Match_Bgdy1 > 0}"
                            @click="submitOrder(sport,sport.Match_Bgdy1,sport.Match_Guest,'上半场-独赢','Match_Bgdy')"
                          >{{sport.Match_Bgdy1>0?sport.Match_Bgdy1:''}}</span>
                          <span class="pankou-wrap">
                            <span
                              class="pankou"
                              v-if="sport.Match_Hr_ShowType === 'C'"
                            >{{pankouFilter(sport.Match_BRpk)}}</span>
                            <span
                              class="h-ho"
                              :class="{'click-hook': sport.Match_BAo > 0}"
                              @click="submitOrder(sport,sport.Match_BAo,sport.Match_Guest,'上半场-让球','Match_BAo')"
                            >{{sport.Match_BAo>0?sport.Match_BAo:''}}</span>
                          </span>
                          <span class="dx-wrap">
                            <span class="pankou">{{pankouFilter(sport.Match_Bdxpk2)}}</span>
                            <span
                              :class="{'click-hook': sport.Match_Bxpl > 0}"
                              @click="submitOrder(sport,sport.Match_Bxpl,'小','上半场-大小', 'Match_Bxpl')"
                            >{{sport.Match_Bxpl>0?sport.Match_Bxpl:''}}</span>
                          </span>
                          <span class="ds-s-wrap"></span>
                        </p>
                        <div class="type-h-odd">
                          <strong class="type-he">和局</strong>
                          <p
                            class="he-odd"
                            :class="{'click-hook': sport.Match_Bhdy1 > 0}"
                            @click="submitOrder(sport,sport.Match_Bhdy1,'和局','上半场-独赢','Match_Bhdy')"
                          >{{sport.Match_Bhdy1>0?sport.Match_Bhdy1:''}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-tip">
            <span class="refresh-hook" v-show="sportDatas.length">{{pullupText}}</span>
          </div>
        </div>
        <div v-show="nosport" class="no-sport">暂无任何赛事</div>
      </scroll>
    </div>
    <sport-submit
      :ifsubmitShow="ifsubmitShow"
      :sports="sports"
      :sportOdd="sportOdd"
      :typename="typename"
      :currentTeam="currentTeam"
      :ballsort="ballsort"
      :oddName="oddName"
      :typetitle="typetitle"
      :getsportDatas="_getsportDatas"
      @toggleIfSubmit="toggleIfSubmit"
    ></sport-submit>
    <!-- 当加载数据比较缓慢的时候，为了优化用户的感官体验效果，需要实现等到load的一个过程-->
    <div class="loading-container" v-if="!sportDatas.length && !nosport">
      <loading></loading>
    </div>
    <!-- 当加载数据比较缓慢的时候，为了优化用户的感官体验效果，需要实现等到load的一个过程，针对上拉加载-->
    <div class="loading-container" v-show="isPull">
      <loading></loading>
    </div>
    <mask-layer :ifopen="ifopen"></mask-layer>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { mapGetters } from 'vuex'
import Loading from '@/base/loading/loading' // 引入等待加载的组件
import Scroll from '@/base/scroll/scroll'
import SportSubmit from '@/components/sport/sport-submit-frame/sport-submit-frame'
import maskLayer from '@/base/mask-layer/mask-layer'
let rollTimer = null
export default {
  data () {
    return {
      sportDatas: [],
      ifsubmitShow: false, // 投注框是否显示
      sports: null, // 用户传值给投注框，下注的数据对象
      sportOdd: null, // 用户传值给投注框，赔率
      typename: '', // 用户传值给投注框，独赢让球等
      currentTeam: '', // 用户传值给投注框，主客队伍名字
      oddName: '', // 赔率名字
      touzhuxiang: '',
      nosport: false,
      currentpage: 0, // 默认请求第一页
      totalPage: 1, // 默认总页数为1
      pullupText:'上拉加载更多赛事',
      isPull:false, // 上拉加载loading
      ifopen:false // 蒙版
    }
  },
  props: {
    getSportUrl: {
      type: String
    },
    ballsort: {
      type: String
    },
    typetitle: {
      type: String
    },
    matchtype: {
      type: Number
    }
  },
  components: {
    Scroll,
    SportSubmit,
    Loading,
    maskLayer
  },
  mounted () {
    rollTimer = setInterval(()=> {
      this._getsportDatas(this.currentpage)
    },10000);
    this.$nextTick(() => {
      this.$refs.scroll.refresh()
    })
  },
  created () {
    this._getsportDatas(this.currentpage)
  },
  computed: {
    ...mapGetters([
      'username'
    ])
  },
  methods: {
    // 点击内容展开跟收缩
    sportClick (item, event) {
      if (!event._constructed) {
        return false
      }
      if (!item.bool) {//未展开
        item.bool = !item.bool
      } else {//展开
        this.sportDatas.forEach((itemA, indexA) => {
          itemA.bool = false
        })
      }
    },
    // 封装调取数据函数
    _getsportDatas (currentpage) {
      this.$http(this.getSportUrl+currentpage).then((res) => {
        if (res.status === 200 && res.data.dh !== 0) {
          let sportData = []
          let newSportDatasOne = []
          let newSportDatasTwo = []
          this.totalPage = res.data.fy.p_page
          if (this.totalPage<=1) {
            this.pullupText = '已经到底了，没有更多赛事了'
          }
          newSportDatasOne = res.data.db
          newSportDatasOne.forEach((item, index) => {
            ['Match_Name'].forEach(type => {
              if (item[type] in newSportDatasTwo) {
                newSportDatasTwo[item[type]].push(item)
              } else {
                newSportDatasTwo[item[type]] = [item]
              }
            })
          })
          let i = 0;
          for (let key in newSportDatasTwo) {
            //更新数据并合起手风琴
            if (this.sportDatas.length != 0) {
              if (this.sportDatas[i].bool) {
                sportData.push({ 'matchname': key, 'sports': newSportDatasTwo[key], 'bool': true});
              } else {
                sportData.push({ 'matchname': key, 'sports': newSportDatasTwo[key], 'bool': false});
              }
            } else {
              sportData.push({ 'matchname': key, 'sports': newSportDatasTwo[key], 'bool': false});
            }
            i++;
          }
          if (currentpage === 0) {
            this.sportDatas = sportData;
          } else {
            this.sportDatas = this.sportDatas.concat(sportData)
          }

          this.$nextTick(() => {
            this.$refs.scroll.refresh()
          })
          this.nosport = false
          this.isPull = false
          this.ifopen = false
        } else {
          this.nosport = true
          clearInterval(rollTimer)
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 组件提供的下拉触发方法
    loadTop () {
      // 下拉刷新
      this.isPull = true
      this.ifopen = true
      this.currentpage = 0
      this._getsportDatas(0)
      this.$nextTick(()=> {
        this.$refs.scroll.refresh()
      })
    },
    // 组件提供的上拉加载方法
    loadBottom () {
      if (this.totalPage >1) {
        if(this.currentpage<this.totalPage-1) {
          this.currentpage++
          this.isPull = true
          this.ifopen = true
          this._getsportDatas(this.currentpage)
          this.$nextTick(()=>{
            this.$refs.scroll.refresh()
          })
        }
        if (this.currentpage>=this.totalPage-1) {
          this.pullupText = '已经到底了，没有更多赛事了'
          return
        }
      }
    },
    // 封装盘口赔率去空格化过滤器
    pankouFilter (value) {
      if (value !== 0 && value !== '') {
        return value.replace(/\s/g, '')
      } else {
        return value
      }
    },
    // 点击赔率进行下注
    submitOrder (item, odd, team, name, oddn) {
      if (odd !== 0 && odd !== undefined) {
        if (this.username === '') {
          MessageBox.confirm('请先登录', '温馨提示').then(() => {
            this.$router.push({
              path: '/login',
              query: { redirect: this.$route.path }  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            })
          }, () => {
            return false
          })
        } else {
          this.sports = item // 当前点击的对象
          this.sportOdd = odd // 当前点击赔率
          this.currentTeam = team // 主客队伍名字
          this.typename = name // 独赢、让球等
          this.oddName = oddn // 所点赔率的键
          this.ifsubmitShow = !this.ifsubmitShow
        }
      } else {
        return false
      }
    },
    // 由下注框取消功能触发的
    toggleIfSubmit (val) {
      this.ifsubmitShow = val
    }
  },
  destroyed() {
    clearInterval(rollTimer)
  }
}
</script>

<style scoped>
.sport-home-wrapper {
  height: 100%;
}
.sport-main-wrap {
  position: absolute;
  top: 1.64rem;
  left: 0;
  right: 0;
  bottom: 0.8rem;
}
.no-sport {
  display: flex;
  height: 100%;
  font-size: 0.36rem;
  align-content: center;
  align-items: center;
  justify-content: center;
}
/* .item-wrap {
    min-height: 110vh;
  } */
.sport-main-item {
  position: relative;
}
.item-list.itemBg,
.item-content.itemBg {
  background-color: rgb(242, 244, 246);
}
.item-list {
  position: relative;
  display: flex;
  height: 0.9rem;
  align-items: center;
  align-content: center;
  font-size: 0.32rem;
  border-top: 0.02rem solid #ddd;
  border-bottom: 0.02rem solid #ddd;
}
.item-list .item-league,
.item-list .match-count {
  display: flex;
  height: 100%;
  align-content: center;
  align-items: center;
}
.item-league {
  flex: 0 0 80%;
  text-align: left;
  padding-left: 5%;
}
.match-count {
  flex: 0 0 15%;
}
.count-style {
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 auto;
  background-color: #ef4f4f;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 0.5rem;
}
/* 下拉提示信息 */
.top-tip {
  position: absolute;
  top: -0.7rem;
  left: 0;
  z-index: 1;
  width: 100%;
  line-height: 0.7rem;
  text-align: center;
  font-size: 0.32rem;
}
/* 赛事详细信息 */
.sport-time {
  display: flex;
  height: 0.8rem;
  font-size: 0.32rem;
  text-align: center;
  color: #555;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.sport-time .no-hook {
  flex: 0 0 35%;
  height: 100%;
  line-height: 0.8rem;
}
.sport-time .stime {
  flex: 0 0 35%;
  height: 100%;
  line-height: 0.8rem;
}
.sport-time .stime span {
  margin-right: 0.2rem;
}
.sport-time .stype {
  display: flex;
  flex: 0 0 30%;
  height: 100%;
  line-height: 0.8rem;
  font-size: 0.26rem;
  color: #d43f3a;
  align-items: center;
  align-content: center;
  flex-direction: row;
}
.ballroll {
  animation: fa-spin 2s infinite linear;
}
/* 滚球动画 */
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
/* 赛事信息 */
.sport-info {
  display: flex;
  min-height: 0.6rem;
  padding: 0.2rem;
  background-color: rgb(78, 106, 140);
  font-size: 0.28rem;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.team-h-area,
.team-c-area {
  display: flex;
  flex: 1;
  min-height: 0.64rem;
  padding: 0 0.06rem;
  background-color: #fff;
  color: #233c5a;
  border-radius: 0.08rem;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.info-area {
  display: flex;
  flex: 0 0 15%;
  padding: 0 2.5%;
  align-content: center;
  align-items: center;
  justify-content: space-between;
}
.team-h-txt,
.team-c-txt {
  padding: 0.04rem 0.12rem;
  background-color: rgb(129, 149, 173);
  color: #fff;
  border-radius: 0.08rem;
}
.vs-txt {
  color: #fde41a;
  font-size: 0.32rem;
  font-weight: bold;
}
.sport-odds-info-wrap .title {
  display: flex;
  width: 100%;
  height: 0.64rem;
  background-color: #f5f5f5;
}
.sport-odds-info-wrap .title span {
  flex: 1;
  height: 0.64rem;
  box-shadow: 0.02rem 0 0 #ccc;
  border-bottom: 0.02rem solid #ccc;
  text-align: center;
  font-size: 0.28rem;
  line-height: 0.64rem;
}
.sport-odds-info-wrap .title span.type-class {
  flex: 0 0 16.3%;
}
.sport-odds-info-wrap .title span.onlywinwrap {
  flex: 0 0 11.7%;
}
.sport-odds-info-wrap .title span.title-ds {
  flex: 0 0 14.5%;
}
.info-content-wrap {
  font-size: 0.28rem;
}
.type-h-wrap {
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.type-h-left {
  display: flex;
  flex: 0 0 10%;
  height: 1.5rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0.02rem 0 0 #ccc;
  border-bottom: 0.02rem solid #ccc;
}
.type-h-right {
  flex: 0 0 90%;
}
.type-h-odd {
  display: flex;
  height: 0.5rem;
  align-items: center;
  justify-content: center;
}
.type-h-odd span,
.type-h-odd strong {
  display: flex;
  height: 0.5rem;
  align-items: center;
  justify-content: center;
  align-content: center;
}
.type-h-odd span.pankou {
  display: flex;
  box-shadow: none;
  font-size: 0.24rem;
}
.type-h-odd .type-name {
  flex: 0 0 7%;
  font-size: 0.28rem;
  box-shadow: 0.02rem 0 0 #ccc;
  border-bottom: 0.02rem solid #ccc;
}
.type-h-odd .onlywin {
  flex: 0 0 13%;
  font-size: 0.24rem;
  box-shadow: 0.02rem 0 0 #ccc;
  border-bottom: 0.02rem solid #ccc;
}
.type-h-odd .pankou-wrap,
.type-h-odd .dx-wrap {
  display: flex;
  flex: 0 0 32%;
  font-size: 0.28rem;
  box-shadow: 0.02rem 0 0 #ccc;
  border-bottom: 0.02rem solid #ccc;
}
.pankou-wrap span,
.dx-wrap span {
  display: flex;
  flex: 1;
  font-size: 0.24rem;
  box-shadow: none;
  line-height: 0.5rem;
}
.pankou-wrap .h-ho {
  justify-content: flex-end;
}
.dx-wrap .click-hook {
  flex: 0 0 10%;
}
.type-h-odd .ds-d-wrap,
.type-h-odd .ds-s-wrap {
  flex: 0 0 16%;
  font-size: 0.24rem;
  line-height: 0.5rem;
}
.type-h-odd .ds-s-wrap {
  box-shadow: 0 0.02rem 0 #ccc;
}
.type-h-odd .he-odd,
.type-h-odd .type-he {
  flex: 1;
  height: 0.5rem;
  border-bottom: 0.02rem solid #ccc;
  line-height: 0.5rem;
}
/* 判断是否可以点击下注的样式 */
.click-hook {
  color: #d58512;
}
/* 上拉提示信息 */
.bottom-tip{
  position: fixed;
  bottom: -0.7rem;
  left: 0;
  z-index: 1;
  width: 100%;
  line-height: 0.7rem;
  text-align: center;
  font-size: 0.28rem;
}
</style>