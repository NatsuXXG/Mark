<template>
  <div>
    <sport-home-head :typetitle="typetitle" :linkArr="linkArr" :typeArr="typeArr"></sport-home-head>
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
      getSportUrl: '/api/json/api_two.php?r=CrownZqBqC&c=t',
      typetitle: '早盘-足球-半/全场',
      ballsort: '足球早餐',
      linkArr: ['/sport/zqgq', '/sport/jrzqbqc', '/sport/zpzqbqc'],
      typeArr: ['/sport/zpzqds', '/sport/zpzqbd', '/sport/zpzqhalfbd', '/sport/zpzqrqs', '/sport/zpzqbqc', '/sport/zqgq','/sport/zpzqcg','/sport/result']
    }
  },
  components: {
    sportHomeHead,
    sportHalfAll,
    homeFooter
  }
}
</script>
