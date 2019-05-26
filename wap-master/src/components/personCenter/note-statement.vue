<template>
  <div class="statement-wrapper">
    <div class="statement-header-wrap">
      <div class="back-btn" @click="loginback"></div>
      <div class="person-title">投注报表</div>
      <div class="no-hook" @click="returnHome">
        <img src="../../assets/f11.png" alt="">
      </div>
    </div>
    <div class="statement-content-wrap">
      <div class="tab-head">
        <span class="sport" :class="{'tabActive': tabIndex === 1}" @click="tab(1)">体育</span>
        <span class="live" :class="{'tabActive': tabIndex === 2}" @click="tab(2)">视讯</span>
        <span class="lottery" :class="{'tabActive': tabIndex === 3}" @click="tab(3)">彩票</span>
        <span class="recharge" :class="{'tabActive': tabIndex === 4}" @click="tab(4)">存取款</span>
        <span class="quota" :class="{'tabActive': tabIndex === 5}" @click="tab(5)">额度转换</span>
      </div>
      <div class="tab-content-wrap">
        <scroll class="scroll-wrap" :data="liveWeekDatas" ref="scroll">
          <div>
            <div class="note-wrapper" v-show="tabIndex === 1">
              <div class="statement-item-row" v-show="!dayifopen && !typeifopen && !cgDetail">
                <table v-show="SportWeekDatas.length > 0">
                  <tr>
                    <th class="date">日期</th>
                    <th class="money">下注金额</th>
                    <th class="notmoney">未结算</th>
                    <th class="result">结果</th>
                  </tr>
                  <tr v-for="(week, index) in SportWeekDatas" :key="index">
                    <td @click="selectOneDaySport(week.DateTime)" class="datetime">{{week.DateTime}}</td>
                    <td>{{week.BetMoney}}</td>
                    <td>{{week.NotBetMoney}}</td>
                    <td>{{week.ResultMoney}}</td>
                  </tr>
                  <tr>
                    <td>总计</td>
                    <td>{{totalmoney}}</td>
                    <td>{{totalnotmoney}}</td>
                    <td>{{totalresultmoney}}</td>
                  </tr>
                </table>
                <!-- 当加载数据比较缓慢的时候，为了优化用户的感官体验效果，需要实现等到load的一个过程-->
                <div class="loading-container" v-show="!SportWeekDatas.length">
                  <loading></loading>
                </div>
              </div>
              <div class="day-sport-wrapper" v-show="dayifopen">
                <div class="statement-item-row">
                  <div class="day-head-wrap">
                    <span class="time">{{dayTime}}</span>
                    <span class="backbtn" @click="dayBack">返回</span>
                  </div>
                  <table>
                    <tr>
                      <th class="date">游戏名称</th>
                      <th class="money">下注金额</th>
                      <th class="notmoney">未结算</th>
                      <th class="result">结果</th>
                    </tr>
                    <tr v-for="(week, index) in sportDayDatas" :key="index">
                      <td class="datetime" @click="selectTypeSport(week.name, dayTime)">{{week.name}}</td>
                      <td>{{week.BetMoney}}</td>
                      <td>{{week.NotBetMoney}}</td>
                      <td>{{week.ResultMoney}}</td>
                    </tr>
                    <tr>
                      <td>总计</td>
                      <td>{{daytotalmoney}}</td>
                      <td>{{daytotalnotmoney}}</td>
                      <td>{{daytotalresultmoney}}</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="day-sport-wrapper" v-show="typeifopen">
                <div class="statement-item-row">
                  <div class="day-head-wrap">
                    <span class="time">{{dayTime}}</span>
                    <span class="typename">{{typeName}}</span>
                    <span class="backbtn" @click="typeBack">返回</span>
                  </div>
                  <div v-for="(type, index) in sportTypeDatas" :key="index" class="quota-wrapper" v-if="sportTypeDatas.length>0 && typeName !== '串关'">
                    <p class="type-order-info">
                      <span class="type-order-info-title">订单号：</span>
                      <span>{{type.order_num}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">联赛名：</span>
                      <span>{{type.match_name}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">主客队：</span>
                      <span>{{type.master_guest}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">投注信息：</span>
                      <span>{{type.bet_info}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">投注金额：</span>
                      <span>{{type.bet_money}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">结果：</span>
                      <span>{{type.result}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">投注时间：</span>
                      <span>{{type.bet_time}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">状态：</span>
                      <span>{{type.status}}</span>
                    </p>
                  </div>
                  <div v-for="(type, index) in sportTypeDatas" :key="index" class="quota-wrapper" v-if="sportTypeDatas.length>0 && typeName === '串关'">
                    <p class="type-order-info">
                      <span class="type-order-info-title">订单号：</span>
                      <span>{{type.order_num}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">模式：</span>
                      <span>{{type.cg_count}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">结算信息：</span>
                      <span>已结算：{{type.jsnumber}} [<span class="chuanguanDetail" @click="selectCgDetail(type.date, '串关', type.order_num, type.gid)">详细</span>]</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">投注金额：</span>
                      <span>{{type.bet_money}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">结果：</span>
                      <span>{{type.result}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">投注时间：</span>
                      <span>{{type.bet_time}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">状态：</span>
                      <span>{{type.status}}</span>
                    </p>
                  </div>
                  <div v-show="!sportTypeDatas.length" class="nosportmsg">
                    暂时没有下注信息。
                  </div>
                </div>
              </div>
              <div class="day-sport-wrapper" v-show="cgDetail">
                <div class="statement-item-row">
                  <div class="day-head-wrap">
                    <span class="time">{{dayTime}}</span>
                    <span class="typename">{{typeName}}</span>
                    <span class="backbtn" @click="cdDatailBack">返回</span>
                  </div>
                  <div v-for="(type, index) in cgDetailDatas" :key="index" class="quota-wrapper" v-if="cgDetailDatas.length>0">
                    <p class="type-order-info">
                      <span class="type-order-info-title">联赛名：</span>
                      <span>{{type.match_name}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">主客队：</span>
                      <span>{{type.master_guest}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">投注详情	：</span>
                      <span>{{type.bet_info}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">投注时间：</span>
                      <span>{{type.bet_time}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">开赛时间：</span>
                      <span>{{type.match_endtime}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">状态：</span>
                      <span>{{type.status}}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="note-wrapper" v-show="tabIndex === 2">
              <div class="statement-item-row" v-show="!dayifopen">
                <table>
                  <tr>
                    <th class="date">日期</th>
                    <th class="money">下注金额</th>
                    <th class="notmoney">有效投注</th>
                    <th class="result">结果</th>
                  </tr>
                  <tr v-for="(week, index) in liveWeekDatas" :key="index">
                    <td @click="selectOneDayLive(week.date)" class="datetime">{{week.date}}</td>
                    <td>{{week.bet_money_total}}</td>
                    <td>{{week.val_money_total}}</td>
                    <td>{{week.win_total}}</td>
                  </tr>
                  <tr>
                    <td>总计</td>
                    <td>{{totalLivemoney}}</td>
                    <td>{{totalLivevalmoney}}</td>
                    <td>{{totalLiveresultmoney}}</td>
                  </tr>
                </table>
              </div>
              <div class="day-sport-wrapper" v-show="dayifopen">
                <div class="statement-item-row">
                  <div class="day-head-wrap">
                    <span class="time">{{dayTime}}</span>
                    <span class="backbtn" @click="typeBack">返回</span>
                  </div>
                  <div v-for="(type, index) in liveDayDatas" :key="index" class="quota-wrapper" v-show="liveDayDatas.length > 0">
                    <p class="type-order-info">
                      <span class="type-order-info-title">编号</span>
                      <span>{{type.i}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">订单号：</span>
                      <span>{{type.order_num}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">下注时间：</span>
                      <span>{{type.order_time}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">游戏类型：</span>
                      <span>{{type.live_type}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">投注内容：</span>
                      <span>{{type.bet_info}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">投注金额：</span>
                      <span>{{type.bet_money}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">有效投注：</span>
                      <span>{{type.VALIDBETAMOUNT}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">输赢结果：</span>
                      <span>{{type.live_win}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">游戏平台：</span>
                      <span>{{type.game_type}}</span>
                    </p>
                  </div>
                  <div v-show="!liveDayDatas.length" class="nosportmsg">
                    暂时没有下注信息。
                  </div>
                </div>
              </div>
            </div>
            <div class="note-wrapper" v-show="tabIndex === 3">
              <div class="statement-item-row" v-show="!dayifopen && !typeifopen">
                <table>
                  <tr>
                    <th class="lottery-date">日期</th>
                    <th class="lottery-money">下注金额</th>
                    <th class="lottery-result">结果</th>
                  </tr>
                  <tr v-for="(week, index) in lotteryWeekDatas" :key="index">
                    <td @click="selectOneDayLottery(week.Date)" class="datetime">{{week.Date}}</td>
                    <td>{{week.BetMoney}}</td>
                    <td>{{week.Win}}</td>
                  </tr>
                  <tr>
                    <td>总计</td>
                    <td>{{totalLotterymoney}}</td>
                    <td>{{totalLotteryresultmoney}}</td>
                  </tr>
                </table>
              </div>
              <div class="day-sport-wrapper" v-show="dayifopen">
                <div class="statement-item-row">
                  <div class="day-head-wrap">
                    <span class="time">{{dayTime}}</span>
                    <span class="backbtn" @click="dayBack">返回</span>
                  </div>
                  <table>
                    <tr>
                      <th class="date">游戏名称</th>
                      <th class="money">下注金额</th>
                      <th class="notmoney">未结算</th>
                      <th class="result">结果</th>
                    </tr>
                    <tr v-for="(week, index) in lotteryDayDatas" :key="index">
                      <td class="datetime" @click="selectTypeLottery(week.name, week.gtype, week.date)">{{week.name}}</td>
                      <td>{{week.BetMoney}}</td>
                      <td>{{week.NotBetMoney}}</td>
                      <td>{{week.Win}}</td>
                    </tr>
                    <tr>
                      <td>总计</td>
                      <td>{{daytotalLotterymoney}}</td>
                      <td>{{daytotalLotterynotmoney}}</td>
                      <td>{{daytotalLotteryresultmoney}}</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="day-sport-wrapper" v-show="typeifopen">
                <div class="statement-item-row">
                  <div class="day-head-wrap">
                    <span class="time">{{dayTime}}</span>
                    <span class="typename">{{typeName}}</span>
                    <span class="backbtn" @click="typeBack">返回</span>
                  </div>
                  <div v-for="(type, index) in lotteryTypeDatas" :key="index" class="quota-wrapper" v-show="lotteryTypeDatas.length>0">
                    <p class="type-order-info">
                      <span class="type-order-info-title">订单号：</span>
                      <span>{{type.order_sub_num}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">彩票期号：</span>
                      <span>{{type.qishu}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">投注玩法：</span>
                      <span>{{type.rtype_str}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">投注内容：</span>
                      <span>{{type.contentName}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">投注金额：</span>
                      <span>{{type.bet_money_one}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">返水：</span>
                      <span>{{type.fs}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">赔率：</span>
                      <span>{{type.bet_rate}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">输赢结果：</span>
                      <span>{{type.money_result}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">投注时间：</span>
                      <span>{{type.bet_time}}</span>
                    </p>
                    <p class="type-order-info">
                      <span class="type-order-info-title">状态：</span>
                      <span>{{type.status}}</span>
                    </p>
                  </div>
                  <div v-show="!lotteryTypeDatas.length" class="nosportmsg">
                    暂时没有下注信息。
                  </div>
                </div>
              </div>
            </div>
            <div class="note-wrapper" v-show="tabIndex === 4">
              <div class="deposit-wrapper">
                <div class="statement-item-row">
                  <div class="deposit-head-wrap">
                    <span class="time" :class="{'depositActive': depositIndex === 1}" @click="depositTab(1)">在线存款记录</span>
                    <span class="typename" :class="{'depositActive': depositIndex === 2}" @click="depositTab(2)">汇款记录</span>
                    <span class="typename" :class="{'depositActive': depositIndex === 3}" @click="depositTab(3)">取款记录</span>
                  </div>
                  <div v-show="depositIndex === 1">
                    <div v-for="(type, index) in onlineDepositDatas" :key="index" class="quota-wrapper" v-show="onlineDepositDatas.length>0">
                      <p class="type-order-info">
                        <span class="type-order-info-title">存款流水号：</span>
                        <span>{{type.order_num}}</span>
                      </p>
                      <p class="type-order-info">
                        <span class="type-order-info-title">存款时间：</span>
                        <span>{{type.update_time}}</span>
                      </p>
                      <p class="type-order-info">
                        <span class="type-order-info-title">存款金额：</span>
                        <span>{{type.order_value}}</span>
                      </p>
                      <p class="type-order-info">
                        <span class="type-order-info-title">存款状态：</span>
                        <span>{{type.statusString}}</span>
                      </p>
                      <p class="type-order-info">
                        <span class="type-order-info-title">备注：</span>
                        <span>{{type.about}}</span>
                      </p>
                    </div>
                    <div v-show="!onlineDepositDatas.length" class="nosportmsg">
                      暂时没有存款信息。
                    </div>
                  </div>
                  <div v-show="depositIndex === 2">
                    <div v-for="(type, index) in bankDepositDatas" :key="index" class="quota-wrapper" v-show="bankDepositDatas.length>0">
                      <p class="type-order-info">
                        <span class="type-order-info-title">汇款流水号：</span>
                        <span>{{type.order_num}}</span>
                      </p>
                      <p class="type-order-info">
                        <span class="type-order-info-title">汇款时间：</span>
                        <span>{{type.update_time}}</span>
                      </p>
                      <p class="type-order-info">
                        <span class="type-order-info-title">汇款金额：</span>
                        <span>{{type.order_value}}</span>
                      </p>
                      <p class="type-order-info">
                        <span class="type-order-info-title">汇款银行：</span>
                        <span>{{type.pay_card}}</span>
                      </p>
                      <p class="type-order-info">
                        <span class="type-order-info-title">汇款方式：</span>
                        <span>{{type.manner}}</span>
                      </p>
                      <p class="type-order-info">
                        <span class="type-order-info-title">汇款状态：</span>
                        <span>{{type.statusString}}</span>
                      </p>
                    </div>
                    <div v-show="!bankDepositDatas.length" class="nosportmsg">
                      暂时没有汇款信息。
                    </div>
                  </div>
                  <div v-show="depositIndex === 3">
                    <div v-for="(type, index) in drawDatas" :key="index" class="quota-wrapper" v-show="drawDatas.length>0">
                      <p class="type-order-info">
                        <span class="type-order-info-title">取款流水号：</span>
                        <span>{{type.order_num}}</span>
                      </p>
                      <p class="type-order-info">
                        <span class="type-order-info-title">取款时间：</span>
                        <span>{{type.update_time}}</span>
                      </p>
                      <p class="type-order-info">
                        <span class="type-order-info-title">取款金额：</span>
                        <span>{{type.order_value}}</span>
                      </p>
                      <p class="type-order-info">
                        <span class="type-order-info-title">取款状态：</span>
                        <span>{{type.statusString}}</span>
                      </p>
                      <p class="type-order-info">
                        <span class="type-order-info-title">备注：</span>
                        <span>{{type.about}}</span>
                      </p>
                    </div>
                    <div v-show="!drawDatas.length" class="nosportmsg">
                      暂时没有取款信息。
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="note-wrapper" v-show="tabIndex === 5">
              <div class="statement-item-row">
                <div v-for="(quota, index) in quotaWeekDatas" :key="index" class="quota-wrapper" v-show="quotaWeekDatas.length > 0">
                  <h2 class="trans-live-money">成功转入真人：{{inliveMoney}}。 成功转出真人：{{outliveMoney}}。</h2>
                  <h3 class="type-order-info">
                    <span class="type-order-info-title">转账时间：</span>
                    <span>{{quota.do_time}}</span>
                  </h3>
                  <p class="type-order-info">
                    <span class="type-order-info-title">订单号：</span>
                    <span>{{quota.order_num}}</span>
                  </p>
                  <p class="type-order-info">
                    <span class="type-order-info-title">游戏类型：</span>
                    <span>{{quota.live_type}}</span>
                  </p>
                  <p class="type-order-info">
                    <span class="type-order-info-title">转账类型：</span>
                    <span>{{quota.zz_type}}</span>
                  </p>
                  <p class="type-order-info">
                    <span class="type-order-info-title">转账金额：</span>
                    <span>{{quota.zz_money}}</span>
                  </p>
                  <p class="type-order-info">
                    <span class="type-order-info-title">结果反馈：</span>
                    <span>{{quota.result}}</span>
                  </p>
                </div>
                <div v-show="!quotaWeekDatas" class="nosportmsg">
                  暂时没有相关信息。
                </div>
              </div>
            </div>
          </div>
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import Scroll from '@/base/scroll/scroll'
import Loading from '@/base/loading/loading' // 引入等待加载的组件
export default {
  data () {
    return {
      tabIndex: 1,
      dayifopen: false,
      typeifopen: false,
      cgDetail: false, // 串关详情
      cgOrderNum: '', // 串关详情主订单号
      depositIndex: 1, // 存取款tab切换
      // 体育日
      sportDayDatas: [],
      daytotalmoney: 0,
      daytotalnotmoney: 0,
      daytotalresultmoney: 0,
      dayTime: '',
      // 体育周
      SportWeekDatas: [],
      totalmoney: 0,
      totalnotmoney: 0,
      totalresultmoney: 0,
      // 体育种类详情
      sportTypeDatas: [],
      typeName: '',
      // 体育串关详情
      cgDetailDatas: [],
      // 真人周
      liveWeekDatas: [],
      totalLivemoney: 0,
      totalLivevalmoney: 0,
      totalLiveresultmoney: 0,
      // 真人日
      liveDayDatas: [],
      // 彩票周
      lotteryWeekDatas: [],
      totalLotterymoney: 0,
      totalLotteryresultmoney: 0,
      // 彩票日
      lotteryDayDatas: [],
      daytotalLotterymoney: 0,
      daytotalLotterynotmoney: 0,
      daytotalLotteryresultmoney: 0,
      // 彩票种类详情
      lotteryTypeDatas: [],
      // 在线存款
      onlineDepositDatas: [],
      // 银行汇款
      bankDepositDatas: [],
      // 取款
      drawDatas: [],
      // 额度转换
      quotaWeekDatas: [],
      inliveMoney: 0,
      outliveMoney: 0
    }
  },
  created () {
    this._getData()
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scroll.refresh()
    })
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
      this.dayifopen = false
      this.typeifopen = false
      this.cgDetail = false
      this.depositIndex = 1
      this.$refs.scroll.refresh()
    },
    // 存取款切换
    depositTab (val) {
      this.depositIndex = val
    },
    // 接口数据
    _getData () {
      // 体育
      this.$http.get('/api/json/center/?r=SportRecord').then((res) => {
        if (res.data.code === 2) {
          MessageBox.alert('请先登录').then(action => {
            this.$router.push({
              path: '/login',
              query: { redirect: this.$route.path }  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            })
          })
        }
        if (res.data.code === 0) {
          this.totalmoney = res.data.data.TotalBetMoney
          this.totalnotmoney = res.data.data.TotalNotbetMoney
          this.totalresultmoney = res.data.data.TotalResultMoney
          this.SportWeekDatas = res.data.data.recordList
        }
      }).catch((error) => {
        console.log(error)
      })
      // 真人视讯
      this.$http.get('/api/json/center/?r=LiveRecord').then((res) => {
        if (res.data.code === 0) {
          this.totalLivemoney = res.data.data.bet_money_total
          this.totalLivevalmoney = res.data.data.val_money_total
          this.totalLiveresultmoney = res.data.data.bet_win_total
          this.liveWeekDatas = res.data.data.recordList
        }
      }).catch((error) => {
        console.log(error)
      })
      // 彩票
      this.$http.get('/api/json/center/?r=LotteryRecord').then((res) => {
        if (res.data.code === 0) {
          this.totalLotterymoney = res.data.data.TotalBetMoney
          this.totalLotteryresultmoney = res.data.data.TotalResultMoney
          this.lotteryWeekDatas = res.data.data.recordList
        }
      }).catch((error) => {
        console.log(error)
      })
      // 在线存款记录
      this.$http.get('/api/json/center/?r=ChaCkOnline').then((res) => {
        if (res.data.code === 0) {
          this.onlineDepositDatas = res.data.data
        }
      }).catch((error) => {
        console.log(error)
      })
      // 银行汇款记录
      this.$http.get('/api/json/center/?r=ChaHuiKuan').then((res) => {
        if (res.data.code === 0) {
          this.bankDepositDatas = res.data.data
        }
      }).catch((error) => {
        console.log(error)
      })
      // 取款记录
      this.$http.get('/api/json/center/?r=ChaQuKuan').then((res) => {
        if (res.data.code === 0) {
          this.drawDatas = res.data.data
        }
      }).catch((error) => {
        console.log(error)
      })
      // 额度转换
      this.$http.get('/api/json/center/?r=ChangeHistory').then((res) => {
        if (res.data.code === 0) {
          this.quotaWeekDatas = res.data.data.InfoList
          this.inliveMoney = res.data.data.in_normal_total
          this.outliveMoney = res.data.data.out_normal_total
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 打开体育日报表
    selectOneDaySport (date) {
      this.$http.get('/api/json/center/?r=SportRecordOneday&date=' + date).then((res) => {
        if (res.data.code === 0) {
          this.dayifopen = !this.dayifopen
          this.dayTime = date
          this.daytotalmoney = res.data.data.TotalBetMoney
          this.daytotalnotmoney = res.data.data.TotalNotbetMoney
          this.daytotalresultmoney = res.data.data.TotalResultMoney
          this.sportDayDatas = res.data.data.recordList
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 打开体育种类报表
    selectTypeSport (type, date) {
      if (type === '串关') {
        this.$http.get('/api/json/center/?r=SportRecordCgDetails&date=' + date + '&gtype=' + type).then((res) => {
          if (res.data.code === 0) {
            this.typeName = type
            this.sportTypeDatas = res.data.data
            this.dayifopen = !this.dayifopen
            this.typeifopen = !this.typeifopen
            this.dayTime = date
          }
        }).catch((error) => {
          console.log(error)
        })
      } else {
        this.$http.get('/api/json/center/?r=SportRecordDetails' + '&date=' + date + '&gtype=' + type).then((res) => {
          if (res.data.code === 0) {
            this.sportTypeDatas = res.data.data
            this.dayifopen = !this.dayifopen
            this.typeifopen = !this.typeifopen
            this.dayTime = date
            this.typeName = type
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    // 打开串关详细报表
    selectCgDetail (date, type, ordernum, gid) {
      this.$http.get('/api/json/center/?r=SportRecordCgDetailsDetails&date=' + date + '&gtype=串关' + '&order_num=' + ordernum + '&gid=' + gid).then((res) => {
        if (res.data.code === 0) {
          this.typeName = type
          this.cgDetailDatas = res.data.data
          this.typeifopen = !this.typeifopen
          this.cgDetail = !this.cgDetail
          this.dayTime = date
          this.cgOrderNum = ordernum
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 返回体育周报表
    dayBack () {
      this.dayifopen = !this.dayifopen
    },
    // 返回体育日报表
    typeBack () {
      this.dayifopen = !this.dayifopen
      this.typeifopen = false
    },
    // 串关详情返回
    cdDatailBack () {
      this.typeifopen = !this.typeifopen
      this.cgDetail = !this.cgDetail
    },
    // 真人日报表
    selectOneDayLive (date) {
      this.$http.get('/api/json/center/?r=LiveRecordDetails&date=' + date).then((res) => {
        if (res.data.code === 0) {
          this.dayifopen = !this.dayifopen
          this.dayTime = date
          this.liveDayDatas = res.data.data.InfoList
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 彩票日报表
    selectOneDayLottery (date) {
      this.$http.get('/api/json/center/?r=LotteryRecordOneday&gamedate=' + date).then((res) => {
        if (res.data.code === 0) {
          this.dayifopen = !this.dayifopen
          this.dayTime = date
          this.lotteryDayDatas = res.data.data.recordList
          this.daytotalLotterymoney = res.data.data.total_bet_money
          this.daytotalLotterynotmoney = res.data.data.total_not_bet_money
          this.daytotalLotteryresultmoney = res.data.data.total_win_money
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 打开彩票种类报表
    selectTypeLottery (type, gtype, date) {
      if (type === '六合彩') {
        this.$http.get('/api/json/center/?r=LotteryRecordLhcDetails&gtype=' + gtype + '&gamedate=' + date).then((res) => {
          if (res.data.code === 0) {
            this.lotteryTypeDatas = res.data.data.recordList
            this.dayifopen = !this.dayifopen
            this.typeifopen = !this.typeifopen
            this.dayTime = date
            this.typeName = type
          }
        }).catch((error) => {
          console.log(error)
        })
      } else {
        this.$http.get('/api/json/center/?r=LotteryRecordDetails&gtype=' + gtype + '&gamedate=' + date).then((res) => {
          if (res.data.code === 0) {
            this.lotteryTypeDatas = res.data.data.recordList
            this.dayifopen = !this.dayifopen
            this.typeifopen = !this.typeifopen
            this.dayTime = date
            this.typeName = type
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  },
  components: {
    Scroll,
    Loading
  }
}
</script>


<style scoped>
.statement-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('../../assets/bg2.png') no-repeat center center;
  background-size: 100% 100%;
  font-size: 0.32rem;
}
.statement-header-wrap {
  display: flex;
  width: 100%;
  height: 0.96rem;
  background-color: #3071b8;
  color: #fff;
  font-size: 0.32rem;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
.back-btn {
  padding-left: 30%;
  height: 0.96rem;
  background: url('../../assets/backlleft.png') no-repeat 20% center;
  background-size: 0.64rem 0.64rem;
}
.person-title {
  flex: 1;
  height: 0.96rem;
  line-height: 0.96rem;
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
  width: 100%;
  height: 0.8rem;
  border-top: 0.02rem solid #fff;
  border-bottom: 0.02rem solid #fff;
  font-size: 0.32rem;
  font-weight: 700;
  color: white;
}
.tab-head span {
  display: flex;
  height: 0.82rem;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.tab-head .sport, .tab-head .live, .tab-head .lottery {
  flex: 0 0 16%;
}
.tab-head .recharge {
  flex: 0 0 22%;
}
.tab-head .quota {
  flex: 0 0 30%;
}
.tabActive {
  border-bottom: 0.04rem solid #e00013;
}
.tab-content-wrap {
  position: absolute;
  top: 1.78rem;
  bottom: 0;
  left: 0;
  right: 0;
}
.statement-item-row {
  padding-top: 0.2rem;
}
.statement-item-row table {
  border-collapse: collapse; /*相邻边被合并;separate: 边框独立*/  
  border: none;  
  width: 100%;  
}
.statement-item-row table th {
  background-color: rgba(255,255,255,0.5)
}
.statement-item-row table td, .statement-item-row table th{
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  border: 0.02rem solid #fff;
}
.statement-item-row .date {
  width: 28%;
}
.statement-item-row .money {
  width: 24%;
}
.statement-item-row .notmoney {
  width: 24%;
}
.statement-item-row .result {
  width: 24%;
}
.statement-item-row .lottery-date {
  width: 32%;
}
.statement-item-row .lottery-money, .statement-item-row .lottery-result {
  width: 34%;
}
.day-sport-wrapper .day-head-wrap, .deposit-head-wrap {
  height: 0.8rem;
  line-height: 0.8rem;
  margin-bottom: 0.2rem;
}
.deposit-head-wrap {
  text-align: center;
}
.day-sport-wrapper .time, .deposit-wrapper .time {
  margin-right: 0.2rem;
  padding: 0.06rem;
  border: 0.02rem solid #fff;
}
.day-sport-wrapper .typename, .deposit-wrapper .typename {
  margin-right: 0.2rem;
  padding: 0.06rem;
  border: 0.02rem solid #fff;
}
.day-sport-wrapper .backbtn {
  padding: 0.06rem 0.1rem;
  border: 0.02rem solid #fff;
  background-color: rgba(255,255,255,0.5);
}
.depositActive {
  border: 0.02rem solid #fff;
  background-color: rgba(255,255,255,0.5);
}
.quota-wrapper {
  padding: 0.2rem 0;
  border-bottom: 0.02rem solid #fff;
}
.quota-wrapper h3, .quota-wrapper p {
  min-height: 0.6rem;
  line-height: 0.6rem;
}
.type-order-info {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.type-order-info span {
  flex: 1;
  min-height: 0.6rem;
  line-height: 0.6rem;
}
.type-order-info .type-order-info-title {
  flex: 0 0 31%;
}
.chuanguanDetail {
  color: red;
  text-decoration: underline;
}
.trans-live-money {
  font-size: 0.28rem;
}
.nosportmsg {
  text-align: center;
}
/* loading样式 */
.loading-container {
  position: absolute;
  top: 2rem;
  left: 0;
  right: 0;
}
</style>
