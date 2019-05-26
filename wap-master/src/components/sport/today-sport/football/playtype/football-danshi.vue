<template>
  <div>
    <sport-home-head :typetitle="typetitle" :linkArr="linkArr"></sport-home-head>
    <foot-ball :getSportUrl="getSportUrl" :ballsort="ballsort" :typetitle="typetitle"></foot-ball>
    <home-footer></home-footer>
  </div>
</template>

<script>
import sportHomeHead from '@/components/sport/sport-home-head/sport-home-head'
import homeFooter from '@/components/home-footer/home-footer'
import footBall from '@/components/sport/sport-common-modules/football'
export default {
  data () {
    return {
      getSportUrl: '/api/json/api_two.php?r=CrownZqDs&c=d',
      typetitle: '今日-足球-单式',
      ballsort: '足球单式',
      linkArr: ['/sport/zqgq', '/sport/jrzqds', '/sport/zpzqds']
    }
  },
  components: {
    sportHomeHead,
    footBall,
    homeFooter
  }
}
</script>
