<template>
  <div class="submit-wrapper" v-show="ifsubmitShow">
    <div class="submit-wrap" v-if="ifchuanguan">
      <div class="submit-head-wrap">
        <p class="submit-head-title">{{MatchName}}</p>
        <p class="submit-head-type">{{typetitle}}</p>
      </div>
      <div class="submit-info-wrap">
        <p class="team-name">{{MatchMaster}} vs {{MatchGuest}}</p>
        <p class="type-name">{{typename}}</p>
        <p class="order-odds-wrap">
          <span class="order-team-name">{{currentTeam}}</span>
          <span class="order-team-odds">{{sportOdd}}</span>
        </p>
      </div>
      <div class="fast-money-wrap">
        <span @click="setFastMoney(50)">50</span>
        <span @click="setFastMoney(100)">100</span>
        <span @click="setFastMoney(200)">200</span>
        <span @click="setFastMoney(500)">500</span>
        <span @click="setFastMoney(1000)">1000</span> 
      </div>
      <div class="defined-money-wrap">
        <label for="">下注金额:</label>
        <input type="number" placeholder="填写下注金额" v-model="definedmoney">
      </div>
      <div class="win-money-wrap">
        <span>可赢金额：</span>
        <span class="win-money">{{winMoney}}</span>
      </div>
      <div class="submit-btn-wrap">
        <span class="cancel-btn" @click="cancelSubmit">取消</span>
        <span class="submit-btn" @click="confirmSubmit">下注</span>
      </div>
    </div>
    <div class="submit-wrap" v-else>
      <div class="submit-head-wrap">
        <p class="submit-head-title">足球-串关</p>
        <p class="submit-head-type">{{typetitle}}</p>
      </div>
      <div class="submit-info-wrap chuan-guan">
      <div class="panel-heading">  串关信息: <span class="bet-total-info">{{cgnum}} 串1 @ <span class="cgodd">{{cgodd}}</span></span></div>
        <p class="team-name" v-for="(sp,k,i) in sportsArr" :data-index="k">
          <span v-for="i in sp"><span v-for="l in i">{{l.Match_Master}}</span></span>
          vs
          <span v-for="i in sp"><span v-for="l in i">{{l.Match_Guest}}</span></span>
          <span v-for="i in sp">{{i.name}}</span>
          <span v-for="i in sp">{{i.team}}</span>
          <span v-for="i in sp" class="rate-info">{{i.odd}}</span>
          <span v-for="i in sp"> <span class="chuan-guan-remove-box"><span class="chuan-guan-remove" @click="reomve(i.id)"></span></span> </span>

        </p>
      </div>
      <div class="fast-money-wrap">
        <span @click="setFastMoneyc(50)">50</span>
        <span @click="setFastMoneyc(100)">100</span>
        <span @click="setFastMoneyc(200)">200</span>
        <span @click="setFastMoneyc(500)">500</span>
        <span @click="setFastMoneyc(1000)">1000</span>
      </div>
      <div class="defined-money-wrap">
        <label for="">下注金额:</label>
        <input type="number" placeholder="填写下注金额" v-model="definedmoneyc">
      </div>
      <div class="win-money-wrap">
        <span>可赢金额：</span>
        <span class="win-money">{{winMoneyC}}</span>
      </div>
      <div class="submit-btn-wrap">
        <span class="cancel-btn" @click="cancelSubmit">取消</span>
        <span class="submit-btn" @click="confirmSubmit(1)">下注</span>
      </div>
    </div>
    <!-- 当加载赛事详细数据比较缓慢的时候，为了优化用户的感官体验效果，需要实现等到load的一个过程-->
    <div class="loading-container" v-show="ifopen">
      <loading :title="loadingTitle"></loading>
    </div>
    <mask-layer :ifopen="ifopen"></mask-layer>
  </div>
</template>

<script>
import { Toast, MessageBox } from "mint-ui";
import { mapGetters } from "vuex";
import maskLayer from "@/base/mask-layer/mask-layer";
import Loading from "@/base/loading/loading"; // 引入等待加载的组件
export default {
  data() {
    return {
      MatchName: "",
      MatchMaster: "",
      MatchGuest: "",
      definedmoney: null,
      definedmoneyc: null,
      winMoney: 0,
      winMoneyC: 0,
      shuaxinTime: 10,
      loadingTitle: "下注提交中",
      ifopen: false
    };
  },
  components: {
    Toast,
    maskLayer,
    Loading
  },
  props: {
    getsportDatas: {
      type: Function
    },
    ifsubmitShow: {
      type: Boolean,
      default: false
    },
    typetitle: {
      type: String
    },
    sports: {
      default: null
    },
    sportsArr: {
      type: Array
    },
    sportOdd: {
      type: String
    },
    typename: {
      type: String
    },
    currentTeam: {
      type: String
    },
    ballsort: {
      type: String
    },
    oddName: {
      type: String
    },
    matchtype: {
      type: Number
    },
    sportOddArr: {
      type: Array
    },
    typenameArr: {
      type: Array
    },
    currentTeamArr: {
      type: Array
    },
    oddNameArr: {
      type: Array
    },
    ifchuanguan: {
      type: Boolean,
      default: true
    },
    cgnum: {
      type: Number
    },
    cgodd: {
      type: Number
    }
  },
  computed: {
    ...mapGetters(["username"])
  },
  watch: {
    sports() {
      this.MatchName = this.sports.Match_Name;
      this.MatchMaster = this.sports.Match_Master;
      this.MatchGuest = this.sports.Match_Guest;
    },
    definedmoney() {
      if (
        this.typename.indexOf("独赢") !== -1 ||
        this.typename.indexOf("和局") !== -1
      ) {
        this.winMoney = (
          this.definedmoney * this.sportOdd -
          this.definedmoney
        ).toFixed(2);
      } else {
        this.winMoney = (this.definedmoney * this.sportOdd).toFixed(2);
      }
    },
    definedmoneyc() {
      let sum = 1;
      this.sportsArr.forEach((v, i) => {
        if (
          v[0].name.indexOf("独赢") !== -1 ||
          v[0].name.indexOf("和局") !== -1 ||
          v[0].name.indexOf("单双") !== -1
        ) {
          sum *= v[0].odd - 0;
        } else {
          sum *= v[0].odd - 0 + 1;
        }
      });
      this.winMoneyC = (sum * this.definedmoneyc).toFixed(2);
      if (this.cgodd == 0) this.winMoneyC = 0;
    },
    cgodd() {
      this.winMoneyC = (this.definedmoneyc * this.cgodd).toFixed(2);
    }
  },
  methods: {
    // 封装提示信息函数
    mytoast(msg) {
      this.ifopen = !this.ifopen;
      let instance = Toast(msg);
      setTimeout(() => {
        instance.close();
        this.ifopen = !this.ifopen;
        clearTimeout();
      }, 1000);
    },
    // 选择快速金额
    setFastMoney(val) {
      if (this.definedmoney === null || this.definedmoney === 0) {
        this.definedmoney = val;
      } else {
        this.definedmoney += val;
      }
    },
    setFastMoneyc(val) {
      if (this.definedmoneyc === null || this.definedmoneyc === 0) {
        this.definedmoneyc = val;
      } else {
        this.definedmoneyc += val;
      }
    },
    // 取消下注
    cancelSubmit() {
      this.definedmoney = null;
      this.definedmoneyc = null;
      this.$emit("toggleIfSubmit", false);
    },
    // 删除赛事
    reomve(id) {
      this.$emit("on-cgnum", id);
    },
    // 提交下注
    confirmSubmit(i) {
      if (this.username === "") {
        MessageBox.confirm("请先登录", "温馨提示").then(
          () => {
            this.$router.replace("/login");
          },
          () => {
            return false;
          }
        );
      } else {
        if (i == 1) {
          if (this.sportsArr.length < 3) {
            MessageBox.confirm("串关数目不能小于3个").then(
              () => {
                this.$emit("toggleIfSubmit", false);
              },
              () => {
                return false;
              }
            );
          } else {
            if (!this.definedmoneyc) {
              this.loadingTitle = ''
              this.mytoast('下注金额不能为空')
              return
            }
            this.ifopen = true
            let data = {};
            // 通用固定传值变量
            let f;
            let cg = [];
            this.sportsArr.forEach(function(i, v) {
              i.forEach(function(d, v) {
                cg.push(d);
              });
            });
            data.touzhutype = 1;
            data.bet_money = this.definedmoneyc;
            let point_column = [];
            let match_id = [];
            let match_name = [];
            let bet_point = [];
            let ball_sort = [];
            for (let i = 0; i < cg.length; i++) {
              point_column.push(cg[i].oddn);
              ball_sort.push(this.ballsort);
              match_id.push(cg[i].id);
              bet_point.push(cg[i].odd);
              match_name.push(cg[i].item.Match_Name);
            }
            data.ball_sort = ball_sort;
            data.point_column = point_column;
            data.match_name = match_name;
            data.match_id = match_id;
            data.bet_point = bet_point;
            this.$http
              .post("/api/app/member/bet.php", data)
              .then(res => {
                this.mytoast(res.data.msg);
                if (res.status === 200 && res.data.code === 0) {
                  this.definedmoneyc = null;
                  this.$emit("toggleIfSubmit", false);
                  this.$emit("resetData");
                  this.$store.dispatch("SET_userMoney", res.data.data.money);
                }
                if (
                  res.data.msg === "赔率改变,重新下注824" ||
                  res.data.msg === "盘口改变,重新下注!820"
                ) {
                  this.getsportDatas();
                  this.definedmoneyc = null;
                  this.$emit("toggleIfSubmit", false);
                  this.$emit("resetData");
                }
                this.ifopen = !this.ifopen;
              })
              .catch(error => {
                console.log(error);
              });
          }
        } else {
          if (!this.definedmoney) {
            this.loadingTitle = ''
            this.mytoast('下注金额不能为空')
            return
          }
          this.ifopen = true
          let data = {};
          // 通用固定传值变量
          data["touzhutype"] = 0;
          data["bet_money"] = this.definedmoney;
          data["ball_sort"] = [this.ballsort];
          data["point_column"] = [this.oddName];
          data["match_id"] = [this.sports.Match_ID];
          data["match_name"] = [this.sports.Match_Name];
          data["bet_point"] = [this.sportOdd];
          this.$http
            .post("/api/app/member/bet.php", data)
            .then(res => {
              this.mytoast(res.data.msg);
              if (res.status === 200 && res.data.code === 0) {
                this.definedmoney = null;
                this.$emit("toggleIfSubmit", false);
                this.$store.dispatch("SET_userMoney", res.data.data.money);
              }
              if (
                res.data.msg === "赔率改变,重新下注824" ||
                res.data.msg === "盘口改变,重新下注!820"
              ) {
                this.getsportDatas();
                this.definedmoney = null;
                this.$emit("toggleIfSubmit", false);
              }
              this.ifopen = !this.ifopen;
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    }
  }
};
</script>

<style scoped>
.submit-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
}
.submit-wrap {
  position: absolute;
  width: 90%;
  padding: 0.1rem;
  top: 50%;
  left: 50%;
  max-height: 935px;
  overflow: auto;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: white;
  font-size: 0.32rem;
  border-radius: 0.1rem;
  z-index: 11;
}
.submit-head-wrap {
  text-align: center;
  border-bottom: 0.02rem solid #ccc;
}
.submit-head-wrap p {
  height: 0.6rem;
  line-height: 0.6rem;
}
.submit-info-wrap p {
  min-height: 0.6rem;
  line-height: 0.6rem;
}
.submit-info-wrap .cgodd {
  color: #d43f3a;
}
.order-odds-wrap {
  display: flex;
  align-items: center;
  align-content: center;
}
.order-team-name,
.order-team-odds {
  margin-right: 0.2rem;
}
.shuaxinimg {
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.1rem;
}
.shuaxintime {
  color: red;
}
.fast-money-wrap {
  display: flex;
  padding: 0.2rem 0;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.fast-money-wrap span {
  display: flex;
  flex: 1;
  height: 0.5rem;
  margin-right: 0.2rem;
  background-color: #f0ad4e;
  border-radius: 0.1rem;
  color: white;
  justify-content: center;
  align-items: center;
}
.defined-money-wrap,
.win-money-wrap {
  display: flex;
  width: 100%;
  padding: 0.2rem 0;
  overflow: hidden;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
}
.defined-money-wrap label {
  display: flex;
  flex: 0 0 26%;
  height: 0.6rem;
  align-items: center;
}
.defined-money-wrap input {
  flex: 0 0 40%;
  height: 0.6rem;
  border: none;
  outline: none;
  border: 0.02rem solid #ccc;
  border-radius: 0.06rem;
}
.win-money-wrap span,
.submit-btn-wrap span {
  height: 0.6rem;
  line-height: 0.6rem;
}
.submit-btn-wrap {
  display: flex;
  width: 60%;
  margin: 0 auto;
  padding: 0.2rem 0;
  align-items: center;
  align-content: center;
  justify-content: space-between;
}
.submit-btn-wrap .cancel-btn,
.submit-btn-wrap .submit-btn {
  display: flex;
  flex: 0 0 40%;
  border-radius: 0.1rem;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: white;
}
.submit-btn-wrap .cancel-btn {
  background-color: #26a2ff;
}
.submit-btn-wrap .submit-btn {
  background-color: #ef4f4f;
}
/*串关样式*/
.panel-heading {
  padding: 0.1rem;
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
}
.panel-heading .bet-total-info {
  float: right;
}
.chuan-guan {
  padding: 0.1rem 0;
  max-height: 4.2rem;
  overflow-y: scroll;
}
.chuan-guan .rate-info {
  color: #d43f3a;
}
.chuan-guan .team-name:nth-child(odd) {
  background-color: #f5f5f5;
  border-color: #ddd;
}
.chuan-guan .team-name {
  padding-right: 0.8rem;
  position: relative;
}
.chuan-guan-remove-box {
  position: absolute;
  border: 1px solid #ccc;
  top: 0.1rem;
  right: 0.2rem;
  color: #333;
  border-radius: 4px;
  width: 0.4rem;
  height: 0.4rem;
}
.chuan-guan-remove {
  display: inline-block;
  position: relative;
  width: 1em;
  left: 0.18em;
  bottom: 0.5em;
  height: 0.15em;
  background-color: #000;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  border-radius: 0.15em;
}
.chuan-guan-remove:after {
  content: "";
  position: absolute;
  width: 1em;
  height: 0.15em;
  background-color: #000;
  transform: rotate(90deg);
  border-radius: 0.15em;
}
</style>
