<template>
  <div>
    <sport-home-head :typetitle="typetitle" :linkArr="linkArr"></sport-home-head>
    <basket-ball :getSportUrl="getSportUrl" :ballsort="ballsort" :typetitle="typetitle"></basket-ball>
    <home-footer></home-footer>
  </div>
</template>

<script>
import sportHomeHead from '@/components/sport/sport-home-head/sport-home-head'
import homeFooter from '@/components/home-footer/home-footer'
import basketBall from '@/components/sport/sport-common-modules/baseball-danshi'
export default {
  data () {
    return {
      getSportUrl: '/api/json/api_two.php?r=CrownBqDs&c=d',
      typetitle: '今日-棒球-单式',
      ballsort: '棒球单式',
      linkArr: ['/sport/zqgq', '/sport/jrbqds', '/sport/zpbqds']
    }
  },
  components: {
    sportHomeHead,
    basketBall,
    homeFooter
  }
}
</script>
