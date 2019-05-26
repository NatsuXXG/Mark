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
            <span class="item-league">{{item.Match_Name}}</span>
            <span class="match-count">
              <span class="count-style">{{item.count}}</span>
            </span>
          </div>
          <div class="item-content-wrap" v-show="item.bool">
            <div class="item-content" v-for="(sport, sindex) in sportdetails" :key="sindex" :class="{'itemBg': index % 2 === 0}">
              <div class="sport-time">
                <p class="no-hook"></p>
                <p class="stime">
                  <span>{{timeFilter(sport.Match_Date)[0]}}</span>
                  <span>{{timeFilter(sport.Match_Date)[1]}}</span>
                </p>
                <p class="stype">
                  <span>{{timeFilter(sport.Match_Date)[2]}}</span>
                  <img src="../../../assets/ballroll.png" alt="" class="ballroll" v-if="timeFilter(sport.Match_Date)[2]">
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
                <div class="one-common-wrap">
                  <div class="title">
                    <span>主/主</span>
                    <span>主/和</span>
                    <span>主/客</span>
                  </div>
                  <div class="team-odd-wrap">
                    <div class="team-odd-row">
                      <span class="click-hook" @click="submitOrder(sport,sport.Match_BqMM,'','主/主', 'Match_BqMM')">{{sport.Match_BqMM}}</span>
                      <span class="click-hook" @click="submitOrder(sport,sport.Match_BqMH,'','主/和', 'Match_BqMH')">{{sport.Match_BqMH}}</span>
                      <span class="click-hook" @click="submitOrder(sport,sport.Match_BqMG,'','主/客', 'Match_BqMG')">{{sport.Match_BqMG}}</span>
                    </div>
                  </div>
                </div>
                <div class="one-common-wrap">
                  <div class="title">
                    <span>和/主</span>
                    <span>和/和</span>
                    <span>和/客</span>
                  </div>
                  <div class="team-odd-wrap">
                    <div class="team-odd-row">
                      <span class="click-hook" @click="submitOrder(sport,sport.Match_BqHM,'','和/主', 'Match_BqHM')">{{sport.Match_BqHM}}</span>
                      <span class="click-hook" @click="submitOrder(sport,sport.Match_BqHH,'','和/和', 'Match_BqHH')">{{sport.Match_BqHH}}</span>
                      <span class="click-hook" @click="submitOrder(sport,sport.Match_BqHG,'','和/客', 'Match_BqHG')">{{sport.Match_BqHG}}</span>
                    </div>
                  </div>
                </div>
                <div class="one-common-wrap">
                  <div class="title">
                    <span>客/主</span>
                    <span>客/和</span>
                    <span>客/客</span>
                  </div>
                  <div class="team-odd-wrap">
                    <div class="team-odd-row">
                      <span class="click-hook" @click="submitOrder(sport,sport.Match_BqGM,'','客/主', 'Match_BqGM')">{{sport.Match_BqGM}}</span>
                      <span class="click-hook" @click="submitOrder(sport,sport.Match_BqGH,'','客/和', 'Match_BqGH')">{{sport.Match_BqGH}}</span>
                      <span class="click-hook" @click="submitOrder(sport,sport.Match_BqGG,'','客/客', 'Match_BqGG')">{{sport.Match_BqGG}}</span>
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
  </div>
  <sport-submit :ifsubmitShow="ifsubmitShow" :sports="sports"
                :sportOdd="sportOdd" :typename="typename"
                :currentTeam="currentTeam" :ballsort="ballsort"
                :oddName="oddName" :typetitle="typetitle"
                :getsportDatas="_getsportDatas"
                :matchtype="matchtype" @toggleIfSubmit="toggleIfSubmit"></sport-submit>
  <!-- 当加载数据比较缓慢的时候，为了优化用户的感官体验效果，需要实现等到load的一个过程-->
  <div class="loading-container" v-show="!sportDatas.length && !nosport">
    <loading></loading>
  </div>
  <!-- 当加载赛事详细数据比较缓慢的时候，为了优化用户的感官体验效果，需要实现等到load的一个过程-->
  <div class="loading-container" v-show="detailsWait">
    <loading :title="loadingTitle"></loading>
  </div>
  <mask-layer :ifopen="ifopen"></mask-layer>
</div>
</template>

<script>
import { mysport } from '@/base/js/mixin'
export default {
  mixins:[mysport]
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
  .football-wrapper {
    position: fixed;
    top: 1.64rem;
    left: 0;
    right: 0;
    bottom: 1.1rem;
  }
  /* .item-wrap {
    min-height: 110vh;
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
  .team-odd-row {
    display: flex;
    min-height: 0.6rem;
    align-content: center;
    align-items: center;
    justify-content: center;
    border-bottom: 0.02rem solid #ccc;
  }
  .team-odd-row span {
    display: flex;
    flex: 1;
    min-height: 0.6rem;
    font-size: 0.28rem;
    align-content: center;
    align-items: center;
    justify-content: center;
    box-shadow: 0.02rem 0 0 #ccc;
  }
 /* 判断是否可以点击下注的样式 */
 .click-hook {
   color: #d58512;
 }
</style>