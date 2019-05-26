<template>
  <div class="mask-layer-wrapper" v-show="ifopen"></div>
</template>

<script>
export default {
  props: {
    ifopen: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style scoped>
.mask-layer-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  max-width: 800px;
  background-color: rgba(0,0,0, 0.6);
  z-index: 100;
}
</style>
