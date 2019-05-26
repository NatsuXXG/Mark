<template>
  <div>
    <sport-home-head :typetitle="typetitle" :linkArr="linkArr" :typeArr="typeArr"></sport-home-head>
    <sport-bodan :getSportUrl="getSportUrl" :ballsort="ballsort" :typetitle="typetitle"></sport-bodan>
    <home-footer></home-footer>
  </div>
</template>

<script>
import sportHomeHead from '@/components/sport/sport-home-head/sport-home-head'
import homeFooter from '@/components/home-footer/home-footer'
import sportBodan from '@/components/sport/sport-common-modules/football-bodan'
export default {
  data () {
    return {
      getSportUrl: '/api/json/api_two.php?r=CrownZqBd&c=t',
      typetitle: '早盘-足球-波胆',
      ballsort: '足球早餐',
      linkArr: ['/sport/zqgq', '/sport/jrzqbd', '/sport/zpzqbd'],
      typeArr: ['/sport/zpzqds', '/sport/zpzqbd', '/sport/zpzqhalfbd', '/sport/zpzqrqs', '/sport/zpzqbqc', '/sport/zqgq','/sport/zpzqcg','/sport/result']
    }
  },
  components: {
    sportHomeHead,
    sportBodan,
    homeFooter
  }
}
</script>
