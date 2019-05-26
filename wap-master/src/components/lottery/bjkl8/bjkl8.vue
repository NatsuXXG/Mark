<template>
  <div class="ssc-wrapper" ref="sccwrapper">
    <lottery-wrapper  :lotterytype="lotterytype" :records="records"
                      :currentPeriods="currentPeriods" :recordHm="recordHm" 
                      :opentime="opentime" :endTime="endTime" :isopen="isopen" 
                      :getballs="_getballs" :propsIndex='propsIndex' 
                      :ballkinds="ballkinds" :ballTotals="ballTotals"
                      :minMoney='minMoney' :maxMoney='maxMoney'
                      :ballnums="ballnums" :posturl="posturl" :inputname="inputname"
                      :bjklOdds="bjklOdds" :getRecords="_getRecords" :getHistoryRecords="_getHistoryRecords"
    ></lottery-wrapper>
  </div>
</template>

<script>
  import MHeader from '@/components/m-header/m-header'
  import lotteryWrapper from '@/components/lottery-wrapper/lottery-wrapper'
  import { downTimer } from '@/base/js/mixin'
  
  export default {
    mixins: [downTimer],
    data () {
      return {
        lotterytype: '北京快乐8',
        inputname: 101,
        ballTotals: [], // 最终获取到的数据
        ballkinds: ['选一', '选二', '选三', '选四', '选五', '和值', '上中下', '奇和偶'],
        bjklOdds: [],
        ballnums: [],
        ballOneNums: [],
        ballTwoNums: [],
        ballTreNums: [],
        ballFourNums: [],
        ballFiveNums: [],
        ballSumNums: ['和大', '和小', '和单', '和双', '总和'],
        ballUpNums: ['上盘', '中盘', '下盘'],
        ballEvenNums: ['奇盘', '和盘', '偶盘'],
        records: [],
        currentPeriods: 0, // 当前期数
        recordHm: [], // 上期开奖号码
        isopen: true, // 是否开盘，默认为是
        propsIndex: 0, // 0默认高亮显示第一球
        posturl: '/api/member/lottery/order_lottery.php?gType=3',
        minMoney: 0, // 最低下注金额
        maxMoney: 99999 // 最高下注金额
      }
    },
    components: {
      MHeader,
      lotteryWrapper
    },
    created () {
      this._setBallNums()
      this._getballs()
      this._getRecords()
      this._getHistoryRecords()
    },
    methods: {
      // 自定义ballnums
      _setBallNums () {
        for (let i = 1; i < 81; i++) {
          this.ballOneNums.push(i)
          this.ballTwoNums.push(i)
          this.ballTreNums.push(i)
          this.ballFourNums.push(i)
          this.ballFiveNums.push(i)
        }
        this.ballnums.push(this.ballOneNums, this.ballTwoNums, this.ballTreNums, this.ballFourNums, this.ballFiveNums, this.ballSumNums, this.ballUpNums, this.ballEvenNums)
      },
      // 获取球名跟号码
      _getballs () {
        this.$http.get('/api/member/lottery/odds.php?gType=3').then((res) => {
          if (res.status === 200) {
            this.endTime = res.data.endtime
            this.opentime = res.data.opentime
            this.isopen = res.data.isopen
            this.currentPeriods = res.data.number
            this.getBalls = res.data.oddslist.ball
            if (res.data.min_money === null) {
              this.minMoney = 5
            } else {
              this.minMoney = res.data.min_money
            }
            if (res.data.max_money === null) {
              this.maxMoney = 99999
            } else {
              this.maxMoney = res.data.max_money
            }
            this.countdowmOpen()
            this.countdownFP()
            let newArr = []
            let newArrA = []
            for (let i in this.getBalls) {
              let newItemList = []
              let newItemListA = []
              if (i < 6) {
                for (let k = 0; k < 80; k++) {
                  let obj = {}
                  obj[k] = this.getBalls[i][1]
                  obj['select'] = false
                  newItemList.push(obj)
                }
              } else {
                for (let j in this.getBalls[i]) {
                  let title = parseInt(j) - 1
                  let obj = {}
                  if (this.getBalls[i][j] != null) {
                    obj[title] = this.getBalls[i][j]
                    obj['select'] = false
                    newItemList.push(obj)
                  }
                }
              }
              for (let m in this.getBalls[i]) {
                let obj = {}
                if (this.getBalls[i][m] != null) {
                  obj['odds'] = this.getBalls[i][m]
                  newItemListA.push(obj)
                }
              }
              newArr.push(newItemList)
              newArrA.push(newItemListA)
            }
            this.ballTotals = newArr
            this.bjklOdds = newArrA
          }
        }).catch((error) => {
          console.log(error)
        })
      },
      _getRecords () {
        this.$http.get('/api/member/lottery/lottery_auto.php?gType=3').then((res) => {
          if (res.status === 200) {
            this.recordHm = res.data.hm
          }
        }).catch((error) => {
          console.log(error)
        })
      },
      // 获取历史开奖结果
      _getHistoryRecords () {
        this.$http.get('/api/member/lottery/lotResult.php?type=3').then((res) => {
          if (res.status === 200) {
            this.records = res.data
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>


