<template>
  <div>
    <sport-home-head :typetitle="typetitle" :linkArr="linkArr"></sport-home-head>
    <foot-ball-roll :getSportUrl="getSportUrl" :ballsort="ballsort" :typetitle="typetitle"></foot-ball-roll>
    <home-footer></home-footer>
  </div>
</template>

<script>
import sportHomeHead from '@/components/sport/sport-home-head/sport-home-head'
import homeFooter from '@/components/home-footer/home-footer'
import footBallRoll from '@/components/sport/sport-common-modules/football-roll'
export default {
  data () {
    return {
      getSportUrl: '/api/app/member/show/json/ft_1_0.php?leaguename=&CurrPage=',
      typetitle: '足球-滚球',
      ballsort: '足球滚球',
      linkArr: ['/sport/zqgq', '/sport/jrzqds', '/sport/zpzqds']
    }
  },
  components: {
    sportHomeHead,
    footBallRoll,
    homeFooter
  }
}
</script>
