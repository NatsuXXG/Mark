<template>
  <div>
    <sport-home-head :typetitle="typetitle" :linkArr="linkArr"></sport-home-head>
    <tennis-ball :getSportUrl="getSportUrl" :ballsort="ballsort" :typetitle="typetitle"></tennis-ball>
    <home-footer></home-footer>
  </div>
</template>

<script>
import sportHomeHead from '@/components/sport/sport-home-head/sport-home-head'
import homeFooter from '@/components/home-footer/home-footer'
import tennisBall from '@/components/sport/sport-common-modules/tennis-danshi'
export default {
  data () {
    return {
      getSportUrl: '/api/json/api_two.php?r=CrownWqDs&c=t',
      typetitle: '早盘-网球-单式',
      ballsort: '网球早餐',
      linkArr: ['/sport/zqgq', '/sport/jrwqds', '/sport/zpwqds']
    }
  },
  components: {
    sportHomeHead,
    tennisBall,
    homeFooter
  }
}
</script>
