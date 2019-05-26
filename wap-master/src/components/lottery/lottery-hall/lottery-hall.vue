<template>
  <div class="live-wrapper">
    <div class="live-wrap">
      <div class="live-main-wrap">
        <div class="live-item">
          <router-link to="/six" tag="div" class="ag-live live-row">
            <img src="./p5.png" alt="">
            <p class="item-title">六合彩</p>
          </router-link>
          <router-link to="/cqssc" tag="div" class="ds-live live-row">
            <img src="./p7.png" alt="">
            <p class="item-title">重庆时时彩</p>
          </router-link>
          <router-link to="/gdklsf" tag="div" class="ds-live live-row">
            <img src="./p10.png" alt="">
            <p class="item-title">广东快乐十分</p>
          </router-link>
        </div>
        <div class="live-item">
          <router-link to="/bjpk" tag="div" class="ds-live live-row">
            <img src="./p3.png" alt="">
            <p class="item-title">北京PK拾</p>
          </router-link>
          <router-link to="/cqklsf" tag="div" class="ds-live live-row">
            <img src="./p4.png" alt="">
            <p class="item-title">重庆快乐十分</p>
          </router-link>
          <router-link to="/bjkl8" tag="div" class="ds-live live-row">
            <img src="./p8.png" alt="">
            <p class="item-title">北京快乐8</p>
          </router-link>
        </div>
        <div class="live-item">
          <router-link to="/fc3d" tag="div" class="ds-live live-row">
            <img src="./p6.png" alt="">
            <p class="item-title">福彩3D</p>
          </router-link>
          <router-link to="/gd11x5" tag="div" class="ds-live live-row">
            <img src="./p12.png" alt="">
            <p class="item-title">广东11选5</p>
          </router-link>
          <router-link to="/pl3" tag="div" class="ds-live live-row">
            <img src="./p9.png" alt="">
            <p class="item-title">排列3</p>
          </router-link>
        </div>
        <div class="live-item">
          <router-link to="/shssl" tag="div" class="ds-live live-row">
            <img src="./p11.png" alt="">
            <p class="item-title">上海时时乐</p>
          </router-link>
          <router-link to="/tjklsf" tag="div" class="ds-live live-row">
            <img src="./a14.png" alt="">
            <p class="item-title">天津快乐十分</p>
          </router-link>
          <router-link to="/tjssc" tag="div" class="ds-live live-row">
            <img src="./a11.png" alt="">
            <p class="item-title">天津时时彩</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.live-wrapper {
  margin-top: 0.2rem;
  padding-bottom: 0.2rem;
  border-top: 0.02rem solid #000;
}
.live-item {
  display: flex;
  margin-top: 0.2rem;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.live-item .live-row {
  flex: 0 0 30%;
  background: rgba(190, 212, 236, 0.3);
  height: 1.72rem;
  text-align: center;
  border-radius: 0.2rem;
}
.live-item img {
  width: 1rem;
  height: 1em;
  margin: 0 auto;
  vertical-align: middle;
  border-radius: 0.16rem;
}
.live-item .item-title {
  line-height: 0.5rem;
  font-size: 0.24rem;
}
</style>
