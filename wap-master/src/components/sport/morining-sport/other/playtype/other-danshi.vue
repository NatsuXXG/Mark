<template>
  <div>
    <sport-home-head :typetitle="typetitle" :linkArr="linkArr"></sport-home-head>
    <other-ball :getSportUrl="getSportUrl" :ballsort="ballsort" :typetitle="typetitle"></other-ball>
    <home-footer></home-footer>
  </div>
</template>

<script>
import sportHomeHead from '@/components/sport/sport-home-head/sport-home-head'
import homeFooter from '@/components/home-footer/home-footer'
import otherBall from '@/components/sport/sport-common-modules/other-danshi'
export default {
  data () {
    return {
      getSportUrl: '/api/json/api_two.php?r=CrownQtDs&c=t',
      typetitle: '早盘-其他-单式',
      ballsort: '其他早餐',
      linkArr: ['/sport/zqgq', '/sport/jrqtds', '/sport/zpqtds']
    }
  },
  components: {
    sportHomeHead,
    otherBall,
    homeFooter
  }
}
</script>
