<template>
  <div>
    <sport-home-head :typetitle="typetitle" :linkArr="linkArr"></sport-home-head>
    <football-chuan-guan :getSportUrl="getSportUrl" :ballsort="ballsort" :typetitle="typetitle"></football-chuan-guan>
    <home-footer></home-footer>
  </div>
</template>

<script>
import sportHomeHead from '@/components/sport/sport-home-head/sport-home-head'
import homeFooter from '@/components/home-footer/home-footer'
import footballChuanGuan from '@/components/sport/sport-common-modules/football-chuanguan'
export default {
  data () {
    return {
      getSportUrl: '/api/json/api_two.php?r=CrownZqCg&c=d',
      typetitle: '今日-足球-串关',
      ballsort: '足球单式',
      linkArr: ['/sport/zqgq', '/sport/jrzqcg', '/sport/zpzqcg']
    }
  },
  components: {
    sportHomeHead,
    footballChuanGuan,
    homeFooter
  }
}
</script>
