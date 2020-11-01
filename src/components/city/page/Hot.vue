<template>
  <div class="hot">
    <div class="hot-title">热门城市</div>

    <ul class="hot-list">
      <li class="hot-item">北京</li>
      <li class="hot-item">上海</li>
      <li class="hot-item">西安</li>
      <li class="hot-item">三亚</li>
      <li class="hot-item">丽江</li>
      <li class="hot-item">桂林</li>
      
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hot-title {
  font-size: 0.24rem;
  color: #212121;
  padding: 0.2rem .3rem;
}

.hot-list {
  background: #fff;
  color: #212121;
  font-size: 0.28rem;
  overflow: hidden;
  position: relative;
}

.hot-list::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 33.3333333333333333333333333333333%;
  left: 33.3333333333333333333333333333333%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}

.hot-item {
  width: 33.3333333333333333333333333333333%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  border-bottom: 0.02rem solid #ddd;
}
</style>