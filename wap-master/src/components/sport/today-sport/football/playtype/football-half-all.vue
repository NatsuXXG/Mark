<template>
  <div>
    <sport-home-head :typetitle="typetitle" :linkArr="linkArr"></sport-home-head>
    <sport-half-all :getSportUrl="getSportUrl" :ballsort="ballsort" :typetitle="typetitle"></sport-half-all>
    <home-footer></home-footer>
  </div>
</template>

<script>
import sportHomeHead from '@/components/sport/sport-home-head/sport-home-head'
import homeFooter from '@/components/home-footer/home-footer'
import sportHalfAll from '@/components/sport/sport-common-modules/football-half-all'
export default {
  data () {
    return {
      getSportUrl: '/api/json/api_two.php?r=CrownZqBqC&c=d',
      typetitle: '今日-足球-半/全场',
      ballsort: '足球单式',
      linkArr: ['/sport/zqgq', '/sport/jrzqbqc', '/sport/zpzqbqc']
    }
  },
  components: {
    sportHomeHead,
    sportHalfAll,
    homeFooter
  }
}
</script>
