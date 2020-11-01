<template>
  <div class="location border-top">
    <div class="location-item border-right">
      <span class="iconfont">&#xe63f;</span>
      定位失败
    </div>
    <div class="location-item">
      <span class="iconfont">&#xe6f2;</span>
      游玩
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.location {
  background: #fff;
  display: flex;
  position: relative;
}

.location .location-item {
  flex: 1;
  font-size: 0.28rem;
  text-align: center;
  line-height: 1rem;
}
</style>