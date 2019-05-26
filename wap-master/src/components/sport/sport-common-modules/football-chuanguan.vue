<template>
<div>
  <div class="sport-main-wrap">
    <scroll class="scroll-wrap" :data="sportDatas" :pulldown="true" @pulldown="loadTop" ref="scroll">
      <div class="item-wrap" v-show="sportDatas.length > 0">
        <div class="top-tip">
          <span class="refresh-hook" v-show="sportDatas.length">下拉刷新</span>
        </div>
        <div class="sport-main-item" v-for="(item, index) in sportDatas" :key="index">
          <div class="item-list" @click="sportClick(item, $event)" :class="{'itemBg': index % 2 !== 0}">
            <span class="item-league">{{item.matchname}}</span>
            <span class="match-count">
              <span class="count-style">{{item.sports.length}}</span>
            </span>
          </div>
          <div class="item-content-wrap" v-show="item.bool">
            <div class="item-content" v-for="(sport, sindex) in item.sports" :key="sindex" :class="{'itemBg': index % 2 === 0}">
              <div class="sport-time">
                <p class="no-hook"></p>
                <p class="stime">
                  <span>{{timeFilter(sport.Match_Date)[0]}}</span>
                  <span>{{timeFilter(sport.Match_Date)[1]}}</span>
                </p>
                <p class="stype">
                  <span>{{timeFilter(sport.Match_Date)[2]}}</span>
                  <img src="/static/images/ballroll.png" alt="" class="ballroll" v-if="timeFilter(sport.Match_Date)[2]">
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
              <div class="sport-odds-info-wrap" >
                <div class="title">
                  <span class="type-class">类型</span>
                  <span class="onlywinwrap">独赢</span>
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
                        <span class="onlywin click-hook" :class="{'select-cg': selectCgIndex === 0}" :data-id="sport.Match_ID" @click="submitOrder(sport,sport.Match_BzM,sport.Match_Master,'全场-独赢', 'Match_BzM',$event)">{{sport.Match_BzM > 0 ? sport.Match_BzM : ''}}</span>
                        <span class="pankou-wrap">
                          <span class="pankou" v-if="sport.Match_ShowType === 'H'">{{pankouFilter(sport.Match_RGG)}}</span>
                          <span class="h-ho click-hook" :class="{'select-cg': selectCgIndex === 1}" :data-id="sport.Match_ID" @click="submitOrder(sport,sport.Match_Ho,sport.Match_Master,'全场-让球', 'Match_Ho',$event)">{{sport.Match_Ho>0 ? sport.Match_Ho : ''}}</span>
                        </span>
                        <span class="dx-wrap">
                          <span>{{pankouFilter(sport.Match_DxGG1)}}</span>
                          <span class="click-hook" :class="{'select-cg': selectCgIndex === 2}" :data-id="sport.Match_ID" @click="submitOrder(sport,sport.Match_DxDpl,'大','全场-大小', 'Match_DxDpl',$event)">{{sport.Match_DxDpl > 0 ? sport.Match_DxDpl: ''}}</span>
                        </span>
                        <span class="ds-d-wrap click-hook" :class="{'select-cg': selectCgIndex === 3}" :data-id="sport.Match_ID" @click="submitOrder(sport,sport.Match_DsDpl,'单','全场-单双', 'Match_DsDpl',$event)">{{sport.Match_DsDpl > 0 ? '单' + sport.Match_DsDpl : ''}}</span>
                      </p>
                      <p class="type-h-odd">
                        <strong class="type-name">客</strong>
                        <span class="onlywin click-hook" :class="{'select-cg': selectCgIndex === 4}" :data-id="sport.Match_ID" @click="submitOrder(sport,sport.Match_BzG,sport.Match_Guest,'全场-独赢', 'Match_BzG',$event)">{{sport.Match_BzG>0?sport.Match_BzG:''}}</span>
                        <span class="pankou-wrap">
                          <span class="pankou" v-if="sport.Match_ShowType === 'C'">{{pankouFilter(sport.Match_RGG)}}</span>
                          <span class="h-ho click-hook" :class="{'select-cg': selectCgIndex === 5}" :data-id="sport.Match_ID" @click="submitOrder(sport,sport.Match_Ao,sport.Match_Guest,'全场-让球', 'Match_Ao',$event)">{{sport.Match_Ao>0?sport.Match_Ao:''}}</span>
                        </span>
                        <span class="dx-wrap">
                          <span class="pankou">{{pankouFilter(sport.Match_DxGG2)}}</span>
                          <span class="click-hook" :class="{'select-cg': selectCgIndex === 6}" :data-id="sport.Match_ID" @click="submitOrder(sport,sport.Match_DxXpl,'小','全场-大小', 'Match_DxXpl',$event)">{{sport.Match_DxXpl>0?sport.Match_DxXpl:''}}</span>
                        </span>
                        <span class="ds-s-wrap click-hook" :class="{'select-cg': selectCgIndex === 7}" :data-id="sport.Match_ID" @click="submitOrder(sport,sport.Match_DsSpl,'双','全场-单双', 'Match_DsSpl',$event)">{{sport.Match_DsSpl>0?'双'+sport.Match_DsSpl:''}}</span>
                      </p>
                      <div class="type-h-odd">
                        <strong class="type-he">和局</strong>
                        <p class="he-odd click-hook" :class="{'select-cg': selectCgIndex === 8}" :data-id="sport.Match_ID" @click="submitOrder(sport,sport.Match_BzH,'和局','全场-独赢', 'Match_BzH',$event)">{{sport.Match_BzH>0?sport.Match_BzH:''}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="type-h-wrap" v-if="!sport.sbbool_1">
                    <div class="type-h-left">半场</div>
                    <div class="type-h-right">
                      <p class="type-h-odd">
                        <strong class="type-name">主</strong>
                        <span class="onlywin click-hook" :class="{'select-cg': selectCgIndex === 9}" :data-id="sport.Match_ID" @click="submitOrder(sport,sport.Match_Bmdy,sport.Match_Master,'上半场-独赢','Match_Bmdy',$event)">{{sport.Match_Bmdy>0?sport.Match_Bmdy:''}}</span>
                        <span class="pankou-wrap">
                          <span class="pankou" v-if="sport.Match_Hr_ShowType === 'H'">{{pankouFilter(sport.Match_BRpk)}}</span>
                          <span class="h-ho click-hook" :class="{'select-cg': selectCgIndex === 10}" :data-id="sport.Match_ID" @click="submitOrder(sport,sport.Match_BHo,sport.Match_Master,'上半场-让球','Match_BHo',$event)">{{sport.Match_BHo>0?sport.Match_BHo:''}}</span>
                        </span>
                        <span class="dx-wrap">
                          <span>{{pankouFilter(sport.Match_Bdxpk1)}}</span>
                          <span class="click-hook" :class="{'select-cg': selectCgIndex === 11}" :data-id="sport.Match_ID" @click="submitOrder(sport,sport.Match_Bdpl,'大','上半场-大小','Match_Bdpl',$event)">{{sport.Match_Bdpl>0?sport.Match_Bdpl:''}}</span>
                        </span>
                        <span class="ds-d-wrap"></span>
                      </p>
                      <p class="type-h-odd">
                        <strong class="type-name">客</strong>
                        <span class="onlywin click-hook" :class="{'select-cg': selectCgIndex === 12}" :data-id="sport.Match_ID" @click="submitOrder(sport,sport.Match_Bgdy1,sport.Match_Guest,'上半场-独赢','Match_Bgdy',$event)">{{sport.Match_Bgdy1>0?sport.Match_Bgdy1:''}}</span>
                        <span class="pankou-wrap">
                          <span class="pankou" v-if="sport.Match_Hr_ShowType === 'C'">{{pankouFilter(sport.Match_BRpk)}}</span>
                          <span class="h-ho click-hook" :class="{'select-cg': selectCgIndex === 13}" :data-id="sport.Match_ID" @click="submitOrder(sport,sport.Match_BAo,sport.Match_Guest,'上半场-让球','Match_BAo',$event)">{{sport.Match_BAo>0?sport.Match_BAo:''}}</span>
                        </span>
                        <span class="dx-wrap">
                          <span class="pankou">{{pankouFilter(sport.Match_Bdxpk2)}}</span>
                          <span class="click-hook" :class="{'select-cg': selectCgIndex === 14}" :data-id="sport.Match_ID" @click="submitOrder(sport,sport.Match_Bxpl,'小','上半场-大小', 'Match_Bxpl',$event)">{{sport.Match_Bxpl>0?sport.Match_Bxpl:''}}</span>
                        </span>
                        <span class="ds-s-wrap"></span>
                      </p>
                      <div class="type-h-odd">
                        <strong class="type-he">和局</strong>
                        <p class="he-odd click-hook" :class="{'select-cg': selectCgIndex === 15}" :data-id="sport.Match_ID" @click="submitOrder(sport,sport.Match_Bhdy1,'和局','上半场-独赢','Match_Bhdy',$event)">{{sport.Match_Bhdy1>0?sport.Match_Bhdy1:''}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="nosport" class="no-sport">
        暂无任何赛事
      </div>
    </scroll>
    <div class="chuanguanInfo-wrap">
      <p class="cgnum-wrap">
        <span class="cgnum">{{cgnum}} </span>
        <span> 串 1</span>
      </p>
      <p class="cgodd-wrap">
        <span>@ </span>
        <span class="cgodd"> {{cgodd}} </span>
      </p>
      <span class="cgsub" @click="attentionClick">确定</span>
    </div>
  </div>
  <sport-submit :ifsubmitShow="ifsubmitShow" :sportsArr="sportsArr"
                 :ballsort="ballsort" :typetitle="typetitle"
                :ifchuanguan = "false" :cgodd="cgodd" :cgnum ="cgnum"
                :getsportDatas="_getsportDatas"
                @toggleIfSubmit="toggleIfSubmit" @on-cgnum="cgnumVariety" @resetData="resetData" ></sport-submit>
  <!-- 当加载数据比较缓慢的时候，为了优化用户的感官体验效果，需要实现等到load的一个过程-->
  <div class="loading-container" v-show="!sportDatas.length && !nosport">
    <loading></loading>
  </div>
</div>
</template>

<script>
import {Toast, MessageBox } from 'mint-ui'
import { mapGetters } from 'vuex'
import Loading from '@/base/loading/loading' // 引入等待加载的组件
import Scroll from '@/base/scroll/scroll'
import SportSubmit from '@/components/sport/sport-submit-frame/sport-submit-frame'
export default {
  data () {
    return {
      sportDatas: [],
      ifsubmitShow: false, // 投注框是否显示
      sportsArr: [], // 用户传值给投注框，下注的数据对象
      touzhuxiang: '',
      nosport: false,
      cgnum: 0, // 串关数
      cgodd: 0, // 串关合计赔率,
      master:'', // 相同赛事不可重复下注
      masterId:'',
      selectCgIndex: -1, // 赔率选中索引值
      mast:''
    }
  },
  computed: {
    ...mapGetters([
      'username'
    ])
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
    Loading
  },
  watch:{
      sportsArr(v){
          let sums;
          v.forEach(function (i,d) {
              sums = (i[0].odd-0);

          })
          let n = sums-0;
            this.cgodd = this.cgodd-0;
            let sum = 0;
            let active =  document.getElementsByClassName('click-hook active');
          for(let i =0;i<active.length;i++){
              if(i == 0){
                  sum += active[i].innerText.replace(/[^0-9/.]/ig,"")-0;
              }else {
                  sum *= active[i].innerText.replace(/[^0-9/.]/ig,"")-0;
              }
          }
            let cg  = sum.toFixed(2);
            this.cgodd = (cg-0);
      }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scroll.refresh()
    })
  },
  created () {
    this._getsportDatas()
  },
  methods: {
    // 点击内容展开跟收缩
    sportClick (item, event) {
      if (!event._constructed) {
        return false
      }
      if (!item.bool) {
        item.bool = !item.bool
      } else {
        this.sportDatas.forEach((itemA, indexA) => {
          itemA.bool = false
        })
      }
    },
    // 封装调取数据函数
    _getsportDatas () {
      this.$http(this.getSportUrl).then((res) => {
        if (res.status === 200 && res.data.dh !== 0) {
          let sportData = []
          let newSportDatasOne = []
          let newSportDatasTwo = []
          newSportDatasOne = res.data
          newSportDatasOne.forEach((item, index) => {
            ['Match_Name'].forEach(type => {
              if (item[type] in newSportDatasTwo) {
                newSportDatasTwo[item[type]].push(item)
              } else {
                newSportDatasTwo[item[type]] = [item]
              }
            })
          })
          for (let key in newSportDatasTwo) {
            sportData.push({'matchname': key, 'sports': newSportDatasTwo[key], 'bool': false})
          }
          this.sportDatas = sportData
          this.$nextTick(() => {
            this.$refs.scroll.refresh()
          })
        }
        if (this.sportDatas.length < 1) {
          this.nosport = true
        } else {
          this.nosport = false
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 组件提供的下拉触发方法
    loadTop () {
      // 下拉刷新
      this._getsportDatas()
    },
    // 封装赛事时间过滤器
    timeFilter (value) {
      if (value) {
        let timeArrs = []
        let md = ''
        let ms = ''
        let type = ''
        if (value.indexOf('<br/>') !== -1) {
          md = value.split('<br/>')[0]
          ms = value.split('<br/>')[1].split('<br>')[0]
          if (value.split('<br/>')[1].split('<br>')[1]) {
            type = value.split('<br/>')[1].split('<br>')[1].replace('<font color=\'#FF0000\'>', '').replace('</font>', '')
          }
        } else {
          md = value.split('<br>')[0]
          ms = value.split('<br>')[1]
          if (value.split('<br>')[2]) {
            type = value.split('<br>')[2].replace('<font color=\'#FF0000\'>', '').replace('</font>', '')
          }
        }
        if (!type) {
          timeArrs = [md, ms]
          return timeArrs
        } else {
          timeArrs = [md, ms, type]
          return timeArrs
        }
      }
    },
    // 封装盘口赔率去空格化过滤器
    pankouFilter (value) {
      if (value !== 0) {
        return value.replace(/\s/g, '')
      } else {
        return value
      }
    },
    // 点击确定判断串关数量
    attentionClick(){
        if(this.cgnum<3) Toast('串关数目不能少于3个')
        else this.ifsubmitShow = !this.ifsubmitShow

      },
      // 删除赛事后串关数随之改变
     cgnumVariety(id){
         this.cgnum = this.cgnum-1;
          let  che = this.sportsArr;
         che.forEach((v,i) => {
             let index = i;
             v.forEach((o,d) =>{
                 if(o.id==id){
                     this.master = this.master.replace(o.item.Match_Master,'')
                     this.master = this.master.replace(o.item.Match_ID,'')
                     che.splice(index,1)
                 }
             })
         })
         let act =  document.querySelectorAll('.click-hook.active');
         let enev;
         act.forEach(function (v,i) {
                 enev = v.parentNode.parentNode.parentNode.parentNode;
                 if(enev.className.indexOf('info-content-wrap') == -1){
                     enev = v.parentNode.parentNode.parentNode.parentNode.parentNode;
                 }
             let did = v.getAttribute('data-id');
             if(did==id){
                 enev.classList.remove('add-num');
                 v.classList.remove('active');
             }
         })
      },
    // 点击赔率进行下注
    submitOrder (item, odd, team, name, oddn,e) {
        if (odd != 0 && odd != undefined) {
            if (this.username === '') {
                MessageBox.confirm('请先登录', '温馨提示').then(() => {
                    this.$router.push({
                        path: '/login',
                        query: {redirect: this.$route.path}  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
                    })
                }, () => {
                    return false
                })
            } else {
                if (this.master.indexOf(item.Match_Master )!== -1 && this.master.indexOf(item.Match_ID ) == -1) {
                    MessageBox.confirm('同场赛事不能重复下注').then(() => {
                    }, () => {
                        return false
                    })
                    //判断是否是角球
              } else if (item.Match_Master.indexOf('角球数') !== -1) {
                    MessageBox.confirm('角球功能暂不开发').then(() => {
                    }, () => {
                        return false
                    })
                } else {
                // 把需要提交的数据存到数组中
                    let enev = e.currentTarget.parentNode.parentNode.parentNode.parentNode;
                    let child;
                    if(enev.className.indexOf('info-content-wrap') == -1){
                         enev = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode;
                    }
                    if(e.currentTarget.className.indexOf('active')> -1){
                        e.currentTarget.classList.remove('active')
                        enev.classList.remove('add-num');
                    }else{
                        child =  enev.querySelectorAll(".click-hook.active");
                        if(child[0]) {child[0].classList.remove('active')}
                        e.currentTarget.classList.add('active')
                        child = e.currentTarget;
                        if (child.className.indexOf('active')> -1) {
                            enev.classList.add('add-num')
                        } else {
                            enev.classList.remove('add-num');
                        }
                    }
                    this.cgnum = document.getElementsByClassName('add-num').length;
                    let arr = [];
                    let obj = {item: item, odd: odd, team: team, name: name, oddn: oddn, id: item.Match_ID}
                    let cc = "";
                    if (arr.length != undefined) arr[0] = obj
                    else arr.push(obj)
                    for(let i =0;i<arr.length;i++){
                        cc = arr[i].item.Match_ID
                    }
                    if(e.currentTarget.className.indexOf('active') == -1 ){
                        this.sportsArr.forEach((i, v) =>  {
                            i.forEach((o, d) => {
                                if (o.id == cc) {
                                    this.sportsArr.splice(v, 1)
                                    this.master = this.master.replace(item.Match_Master,'')
                                    this.master = this.master.replace(item.Match_ID,'')
                                }
                            })
                        })
                    } else{
                        this.sportsArr.forEach((i, v) =>  {
                            i.forEach((o, d) => {
                                if (o.id == cc) {this.sportsArr.splice(v, 1)}
                            })
                        })
                        if(this.master.indexOf(item.Match_Master)==-1 && this.master.indexOf(item.Match_ID)==-1 ) this.master += (item.Match_Master+ item.Match_ID)
                        this.sportsArr.push(arr);
                    }
                }
            }
        }
      else {
        Toast('当前玩法不可下注')
        return false
      }
    },
    // 由下注框取消功能触发的
    toggleIfSubmit (val) {
      this.ifsubmitShow = val
    },
//    下注成功，清空选择
      resetData(){
          let active  =  document.querySelectorAll('.click-hook.active');
          active.forEach(function (v,i) {
              v.classList.remove('active');
          })
          let addNum  =  document.querySelectorAll('.add-num')
          addNum.forEach(function (v,i) {
              v.classList.remove('add-num');
          })
          this.cgnum = document.querySelectorAll('.add-num').length;
          this.sportsArr = []
      }
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
    padding-bottom: 0.9rem;
  }
  .no-sport {
    display: flex;
    height: 100%;
    font-size: 0.36rem;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
  .football-wrapper {
    position: fixed;
    top: 1.64rem;
    left: 0;
    right: 0;
    bottom: 1.1rem;
  }
  /* .item-wrap {
    min-height: 101vh;
  } */
  .sport-main-item {
    position: relative;
  }
  .item-list.itemBg, .item-content.itemBg {
    background-color: rgb(242,244,246);
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
  .item-list .item-league, .item-list .match-count {
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
  .top-tip{
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
    flex: 0 0 20%;
    height: 100%;
    line-height: 0.8rem;
  }
  .sport-time .stime {
    flex: 0 0 60%;
    height: 100%;
    line-height: 0.8rem;
  }
  .sport-time .stime span {
    margin-right: 0.2rem;
  }
  .sport-time .stype {
    display: flex;
    flex: 0 0 20%;
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
  @-webkit-keyframes fa-spin{
    0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}
    100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}
  }
  @keyframes fa-spin{
    0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}
    100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}
  }
  /* 赛事信息 */
  .sport-info {
    display: flex;
    min-height: 0.6rem;
    padding: 0.2rem;
    background-color: rgb(78,106,140);
    font-size: 0.28rem;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  .team-h-area, .team-c-area {
    display: flex;
    flex: 1;
    min-height: 0.64rem;
    padding: 0 0.06rem;
    background-color: #fff;
    color: #233C5A;
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
  .team-h-txt, .team-c-txt {
    padding: 0.04rem 0.12rem;
    background-color: rgb(129,149,173);
    color: #fff;
    border-radius: 0.08rem;
  }
  .vs-txt {
    color: #FDE41A;
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
    box-shadow:  0.02rem 0 0 #ccc;
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
    box-shadow:  0.02rem 0 0 #ccc;
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
  .type-h-odd span, .type-h-odd strong {
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
  .type-h-odd .pankou-wrap, .type-h-odd .dx-wrap {
    display: flex;
    flex: 0 0 32%;
    font-size: 0.24rem;
    box-shadow: 0.02rem 0 0 #ccc;
    border-bottom: 0.02rem solid #ccc;
  }
  .pankou-wrap span, .dx-wrap span {
    display: flex;
    flex: 1;
    font-size: 0.24rem;
    box-shadow: none;
    line-height: 0.5rem;
  }
  .pankou-wrap .h-ho {
    justify-content: flex-end;
    padding-right: 5%;
  }
 .type-h-odd .ds-d-wrap, .type-h-odd .ds-s-wrap {
   flex: 0 0 16%;
   font-size: 0.24rem;
   line-height: 0.5rem;
 }
 .type-h-odd .ds-s-wrap {
   box-shadow: 0 0.02rem 0 #ccc;
 }
 .type-h-odd .he-odd, .type-h-odd .type-he {
   flex:1;
   height: 0.5rem;
   border-bottom: 0.02rem solid #ccc;
   line-height: 0.5rem;
 }
 /* 判断是否可以点击下注的样式 */
 .click-hook {
   color: #d58512;
 }
 .click-hook.active{
   background: #dbc6c6;
 }
 /* 串关专有 */
 .chuanguanInfo-wrap {
   display: flex;
   position: absolute;
   left: 0;
   right: 0;
   height: 0.9rem;
   bottom: 0;
   background-color: #eee;
   font-size: 0.32rem;
   align-content: center;
   align-items: center;
   justify-content: center;
 }
  .chuanguanInfo-wrap .cgnum-wrap {
   flex: 0 0 30%;
   text-align: center;
 }
 .cgnum-wrap .cgnum {
   color: #ec971f;
 }
 .chuanguanInfo-wrap .cgodd-wrap {
   flex: 0 0 30%;
   text-align: left;
 }
 .cgodd-wrap .cgodd {
   color: #d43f3a;
 }
 .chuanguanInfo-wrap .cgsub {
   flex: 0 0 30%;
   height: 0.7rem;
   background-color: #3071b8;
   color: #fff;
   text-align: center;
   line-height: 0.7rem;
   border-radius: 0.1rem;
 }
 .select-cg {
   background-color: #337ab7;
 }
</style>