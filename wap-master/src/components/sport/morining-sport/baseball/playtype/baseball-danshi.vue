<template>
  <div>
    <sport-home-head :typetitle="typetitle" :linkArr="linkArr"></sport-home-head>
    <base-ball :getSportUrl="getSportUrl" :ballsort="ballsort" :typetitle="typetitle"></base-ball>
    <home-footer></home-footer>
  </div>
</template>

<script>
import sportHomeHead from '@/components/sport/sport-home-head/sport-home-head'
import homeFooter from '@/components/home-footer/home-footer'
import baseBall from '@/components/sport/sport-common-modules/baseball-danshi'
export default {
  data () {
    return {
      getSportUrl: '/api/json/api_two.php?r=CrownBqDs&c=t',
      typetitle: '早盘-棒球-单式',
      ballsort: '棒球早餐',
      linkArr: ['/sport/zqgq', '/sport/jrbqds', '/sport/zpbqds']
    }
  },
  components: {
    sportHomeHead,
    baseBall,
    homeFooter
  }
}
</script>
