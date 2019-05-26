<template>
  <div>
    <sport-home-head :typetitle="typetitle" :linkArr="linkArr"></sport-home-head>
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
      getSportUrl: '/api/json/api_two.php?r=CrownZqBd&c=d',
      typetitle: '今日-足球-波胆',
      ballsort: '足球单式',
      linkArr: ['/sport/zqgq', '/sport/jrzqbd', '/sport/zpzqbd']
    }
  },
  components: {
    sportHomeHead,
    sportBodan,
    homeFooter
  }
}
</script>
