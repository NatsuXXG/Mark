<template>
  <div>
    <sport-home-head :typetitle="typetitle" :linkArr="linkArr"></sport-home-head>
    <basket-ball-roll :getSportUrl="getSportUrl" :ballsort="ballsort" :typetitle="typetitle"></basket-ball-roll>
    <home-footer></home-footer>
  </div>
</template>

<script>
import sportHomeHead from '@/components/sport/sport-home-head/sport-home-head'
import homeFooter from '@/components/home-footer/home-footer'
import basketBallRoll from '@/components/sport/sport-common-modules/basketball-roll'
export default {
  data () {
    return {
      getSportUrl: '/api/app/member/show/json/bk_1_0.php?leaguename=&CurrPage=',
      typetitle: '篮球-滚球',
      ballsort: '篮球滚球',
      linkArr: ['/sport/lqgq', '/sport/jrlqds', '/sport/zplqds']
    }
  },
  components: {
    sportHomeHead,
    basketBallRoll,
    homeFooter
  }
}
</script>
