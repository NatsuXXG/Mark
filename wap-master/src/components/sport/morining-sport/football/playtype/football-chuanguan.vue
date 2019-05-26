<template>
    <div>
        <sport-home-head :typetitle="typetitle" :linkArr="linkArr" :typeArr="typeArr"></sport-home-head>
        <football-chuan-guan :getSportUrl="getSportUrl" :ballsort="ballsort" :typetitle="typetitle"></football-chuan-guan>
        <home-footer></home-footer>
    </div>
</template>

<script>
    import sportHomeHead from '@/components/sport/sport-home-head/sport-home-head'
    import homeFooter from '@/components/home-footer/home-footer'
    import footballChuanGuan from '@/components/sport/sport-common-modules/football-chuanguan'
    export default {
        data () {
            return {
                getSportUrl: '/api/json/api_two.php?r=CrownZqCg&c=t',
                typetitle: '早盘-足球-串关',
                ballsort: '足球早餐',
                linkArr: ['/sport/zqgq', '/sport/jrzqcg', '/sport/zpzqcg'],
                typeArr: ['/sport/zpzqds', '/sport/zpzqbd', '/sport/zpzqhalfbd', '/sport/zpzqrqs', '/sport/zpzqbqc', '/sport/zqgq','/sport/zpzqcg','/sport/result']
            }
        },
        components: {
            sportHomeHead,
            footballChuanGuan,
            homeFooter
        }
    }
</script>
