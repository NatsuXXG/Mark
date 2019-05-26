<template>
  <div>
    <sport-home-head :typetitle="typetitle" :linkArr="linkArr"></sport-home-head>
    <volley-ball :getSportUrl="getSportUrl" :ballsort="ballsort" :typetitle="typetitle"></volley-ball>
    <home-footer></home-footer>
  </div>
</template>

<script>
import sportHomeHead from '@/components/sport/sport-home-head/sport-home-head'
import homeFooter from '@/components/home-footer/home-footer'
import volleyBall from '@/components/sport/sport-common-modules/volleyball-danshi'
export default {
  data () {
    return {
      getSportUrl: '/api/json/api_two.php?r=CrownPqDs&c=d',
      typetitle: '今日-排球-单式',
      ballsort: '排球单式',
      linkArr: ['/sport/zqgq', '/sport/jrpqds', '/sport/zppqds']
    }
  },
  components: {
    sportHomeHead,
    volleyBall,
    homeFooter
  }
}
</script>
