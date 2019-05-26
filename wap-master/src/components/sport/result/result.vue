<template>
    <div class="result-wrapper">
        <sport-home-head :typetitle="typetitle" :linkName="''"></sport-home-head>
        <div class="timer-wrapper">
            <div class="select-wrapper">
                <select class="select-wrap" @change="getSelected($event)">
                    <option :value="item.url" v-for="(item,index) in sportTypes" :key="index">{{item.name}}</option>
                </select>
            </div>
            <mt-button @click.native="openPicker" size="small" class="picker-btn">{{pickerValue | formatDate}}</mt-button>
            <mt-button size="small" class="day-btn" @click="reduceCurrentTime">前一天</mt-button>
            <mt-button size="small" class="day-btn" @click="addCurrentTime">后一天</mt-button>
        </div>
        <div class="result-detail-wrapper">
            <scroll class="scroll-wrap" ref="scroll" v-if="resultDatas">
                <div class="result-detail-wrap">
                    <div class="detail-content-wrapper" v-for="(resultData,index) in resultDatas" :key="index">
                        <div class="match-header">
                            <h2 class="match-header-name">{{resultData.match_name}}</h2>
                        </div>
                        <div class="match-content" v-for="(item,index) in resultData.list" :key="index" v-if="sportTypeSelected==='CrownZqResult' || sportTypeSelected==='CrownBqResult' || sportTypeSelected==='CrownQtResult'">
                            <h3 class="match-content-time">{{item.Match_MatchTime}}</h3>
                            <div class="match-team match-hook">
                                <span>比赛队伍</span>
                                <span class="match-span-hook">{{item.match_master}}</span>
                                <span class="match-span-hook">{{item.match_guest}}</span>
                            </div>
                            <div class="match-half match-hook">
                                <span>上半场</span>
                                <span class="match-span-hook">{{item.MB_Inball_HR}}</span>
                                <span class="match-span-hook">{{item.TG_Inball_HR}}</span>
                            </div>
                            <div class="match-all match-hook" v-if="item.MB_Inball&&item.TG_Inball">
                                <span>全场</span>
                                <span class="match-span-hook">{{item.MB_Inball}}</span>
                                <span class="match-span-hook">{{item.TG_Inball}}</span>
                            </div>
                        </div>
                        <div class="match-content" v-for="(item,index) in resultData.list" :key="index" v-if="sportTypeSelected==='CrownWqResult' || sportTypeSelected==='CrownPqResult'">
                            <h3 class="match-content-time">{{item.Match_MatchTime}}</h3>
                            <div class="match-team match-hook">
                                <span>比赛队伍</span>
                                <span class="match-span-hook">{{item.match_master}}</span>
                                <span class="match-span-hook">{{item.match_guest}}</span>
                            </div>
                            <div class="match-half match-hook">
                                <span>完赛（局）</span>
                                <span class="match-span-hook">{{item.MB_Inball}}</span>
                                <span class="match-span-hook">{{item.TG_Inball}}</span>
                            </div>
                            <div class="match-all match-hook">
                                <span>完赛（盘）</span>
                                <span class="match-span-hook">{{item.MB_Inball}}</span>
                                <span class="match-span-hook">{{item.TG_Inball}}</span>
                            </div>
                        </div>
                        <div class="match-content" v-for="(item,index) in resultData.list" :key="index" v-if="sportTypeSelected==='CrownLqResult'">
                            <h3 class="match-content-time">{{item.Match_MatchTime}}</h3>
                            <div class="match-team match-hook">
                                <span>比赛队伍</span>
                                <span class="match-span-hook">{{item.match_master}}</span>
                                <span class="match-span-hook">{{item.match_guest}}</span>
                            </div>
                            <div class="match-half match-hook" v-if="item.MB_Inball_1st&&item.TG_Inball_1st">
                                <span>第一节</span>
                                <span class="match-span-hook">{{item.MB_Inball_1st}}</span>
                                <span class="match-span-hook">{{item.TG_Inball_1st}}</span>
                            </div>
                            <div class="match-all match-hook" v-if="item.MB_Inball_2st&&item.TG_Inball_2st">
                                <span>第二节</span>
                                <span class="match-span-hook">{{item.MB_Inball_2st}}</span>
                                <span class="match-span-hook">{{item.TG_Inball_2st}}</span>
                            </div>
                            <div class="match-half match-hook" v-if="item.MB_Inball_3st&&item.TG_Inball_3st">
                                <span>第三节</span>
                                <span class="match-span-hook">{{item.MB_Inball_3st}}</span>
                                <span class="match-span-hook">{{item.TG_Inball_3st}}</span>
                            </div>
                            <div class="match-all match-hook" v-if="item.MB_Inball_4st&&item.TG_Inball_4st">
                                <span>第四节</span>
                                <span class="match-span-hook">{{item.MB_Inball_4st}}</span>
                                <span class="match-span-hook">{{item.TG_Inball_4st}}</span>
                            </div>
                            <div class="match-half match-hook" v-if="item.MB_Inball_HR&&item.TG_Inball_HR">
                                <span>上半场</span>
                                <span class="match-span-hook">{{item.MB_Inball_HR}}</span>
                                <span class="match-span-hook">{{item.TG_Inball_HR}}</span>
                            </div>
                            <div class="match-all match-hook" v-if="item.MB_Inball_ER&&item.TG_Inball_ER">
                                <span>下半场</span>
                                <span class="match-span-hook">{{item.MB_Inball_ER}}</span>
                                <span class="match-span-hook">{{item.TG_Inball_ER}}</span>
                            </div>
                            <div class="match-half match-hook" v-if="item.MB_Inball_Add&&item.TG_Inball_Add">
                                <span>加时赛</span>
                                <span class="match-span-hook">{{item.MB_Inball_Add}}</span>
                                <span class="match-span-hook">{{item.TG_Inball_Add}}</span>
                            </div>
                            <div class="match-all match-hook">
                                <span>全场</span>
                                <span class="match-span-hook">{{item.MB_Inball}}</span>
                                <span class="match-span-hook">{{item.TG_Inball}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </scroll>
            <div v-if="!resultDatas" class="no-result">
                当前暂无赛果记录
            </div>
        </div>
        <mt-datetime-picker ref="picker"
                            type="date"
                            v-model="pickerValue"
                            @confirm="pickerConfirm"
                            @cancel="pickerCancle"
                            :endDate = "endDate">
        </mt-datetime-picker>
        <!-- 当加载赛事详细数据比较缓慢的时候，为了优化用户的感官体验效果，需要实现等到load的一个过程-->
        <div class="loading-container" v-if="resultDatas && isLoadingShow">
            <loading></loading>
        </div>
        <home-footer></home-footer>
    </div>
</template>

<script>
    import sportHomeHead from '@/components/sport/sport-home-head/sport-home-head'
    import homeFooter from '@/components/home-footer/home-footer'
    import { formatDate } from '@/base/js/date.js';
    import Scroll from '@/base/scroll/scroll'
    import Loading from '@/base/loading/loading' // 引入等待加载的组件
    import { Toast, MessageBox } from 'mint-ui'
    export default {
        data () {
            return {
                typetitle: '足球赛果',
                sportTypes: [{
                    name:'足球',
                    url:'CrownZqResult'
                },{
                    name:'篮球',
                    url:'CrownLqResult'
                },{
                    name:'网球',
                    url:'CrownWqResult'
                },{
                    name:'排球',
                    url:'CrownPqResult'
                },{
                    name:'棒球',
                    url:'CrownBqResult'
                },{
                    name:'其他',
                    url:'CrownQtResult'
                }],
                isLoadingShow: true, // loading加载效果是否显示
                sportTypeSelected:'CrownZqResult',// 用来判断显示哪个赛果结构,默认是足球的
                oldpickerValue: new Date().setHours(0, 0, 0, 0), // 定义判定时间,为当天的凌晨时间，
                pickerValue: new Date(),  //定义显示时间，经过v-model的变化后，会由当前的时间变为当天的凌晨时间
                endDate: new Date(),   //设置结束时间
                resultDatas: [] // 存获取回来的数据
            }
        },
        filters: {                    //时间转换
            formatDate(time) {
                var date = new Date(time);
                return formatDate(date, 'yyyy-MM-dd');
            }
        },
        components: {
            sportHomeHead,
            homeFooter,
            Scroll,
            Loading
        },
        created () {
            this.defaultGetData()
        },
        methods:{
            // 日期格式转换
            formatDate(time) {
                var date = new Date(time);
                return formatDate(date, 'yyyy-MM-dd');
            },
            // 打开日期插件
            openPicker() {
                this.$refs.picker.open();
            },
            // 确定选择时间后调用查询接口
            pickerConfirm () {
                this.isLoadingShow = true
                this.$http.post(`/api/json/api.php?r=${this.sportTypeSelected}&ymd=${this.formatDate(this.pickerValue)}`).then((res)=>{
                    if (res.data.code === 0) {
                        this.resultDatas = res.data.data.result
                        this.isLoadingShow = false
                    }
                }).catch((error) => {
                    console.log(error)
                })
            },
            // 取消选择时间后初始化
            pickerCancle () {
                this.pickerValue = new Date()
                this.endDate = new Date()
            },
            // 默认请求足球的赛果
            defaultGetData () {
                this.isLoadingShow = true
                this.$http.post(`/api/json/api.php?r=CrownZqResult&ymd=${this.formatDate(this.pickerValue)}`).then((res)=>{
                    if (res.data.code === 0) {
                        this.resultDatas = res.data.data.result
                        this.isLoadingShow = false
                    }
                }).catch((error) => {
                    console.log(error)
                })
            },
            // 赛事类型选择后
            getSelected (event) {
                this.isLoadingShow = true
                this.sportTypeSelected = event.currentTarget.value
                this.$http.post(`/api/json/api.php?r=${event.currentTarget.value}&ymd=${this.formatDate(this.pickerValue)}`).then((res)=>{
                    if (res.data.code === 0) {
                        this.resultDatas = res.data.data.result
                        this.isLoadingShow = false
                    }
                }).catch((error) => {
                    console.log(error)
                })
            },
            // 前一天按钮
            reduceCurrentTime () {
                this.pickerValue = this.formatDate(this.pickerValue.getTime()-24*60*60*1000)
                this.pickerConfirm()
            },
            // 前一天按钮
            addCurrentTime () {
                if (this.oldpickerValue !== this.pickerValue.getTime()) {
                    this.pickerValue = this.formatDate(this.pickerValue.getTime()+24*60*60*1000)
                    this.pickerConfirm()
                }
            }
        }
    }
</script>
<style scoped>
.result-wrapper {
    font-size: 0.28rem;
}
.timer-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.select-wrapper {
    flex: 0 0 20%;
    height: 0.66rem;
}
.select-wrap {
    width: 100%;
    height: 0.66rem;
    outline: none;
    border: none;
    color: #656b79;
    background-color: #f6f8fa;
    -webkit-box-shadow: 0 0 0.02rem #b8bbbf;
    box-shadow: 0 0 0.02rem #b8bbbf;
    border-radius: 0.08rem;
}
.select-wrap option {
    background: #f6f8fa;
    color: #656b79;
}
.picker-btn {
    flex: 0 0 38%;
    height: 0.66rem;
    border-radius: 0.08rem;
}
.day-btn {
    flex: 0 0 21%;
    height: 0.66rem;
    border-radius: 0.08rem;
}
/* 赛事信息开始 */
.result-detail-wrapper {
    position: absolute;
    top: 1.3rem;
    left: 0;
    right: 0;
    bottom: 0.8rem;
    overflow: hidden;
}
.match-header {
    padding-top: 0.2rem;
    text-align: center;
}
.match-header-name {
    line-height: 0.5rem;
    font-size: 0.32rem;
}
.match-content-time {
    line-height: 0.5rem;
    font-size: 0.28rem;
    text-align: center;
}
.match-team, .match-all {
    background-color: #f5f5f5;
}
.match-hook {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}
.match-hook span {
    flex: 1;
    line-height: 0.54rem;
    text-align: center;
    border-right: 0.02rem solid #e1ecf4
}
.match-span-hook {
    color:#d58512;
}
/* 没有赛果 */
.no-result {
    display: flex;
    height: 100%;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.mint-popup {
    position: absolute;
}
.v-modal {
    position: absolute;
}
</style>
