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
import basketBall from '@/components/sport/sport-common-modules/basketball-chuanguan'
export default {
  data () {
    return {
      getSportUrl: '/api/json/api_two.php?r=CrownLqCg&c=d',
      typetitle: '今日-篮球-混合过关',
      ballsort: '篮球单式',
      linkArr: ['/sport/lqgq', '/sport/jrlqgg', '/sport/zplqgg']
    }
  },
  components: {
    sportHomeHead,
    basketBall,
    homeFooter
  }
}
</script>
