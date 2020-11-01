<template>
  <div class="hot">
    <div class="hot-top">
      <img src="https://img1.qunarzz.com/order/comp/2007/23/734c3c62d2adce02.png" alt />
      <span>本周热门榜单</span>
      <span class="hot-right">全部榜单 ></span>
    </div>
    <ul class="hot-list">
      <li class="hot-item" v-for="item in hotList" :key="item.id">
        <img :src="item.imgUrl" alt />
        <p>{{ item.title }}</p>
        <p>
          <span class="hot-money">¥{{ item.mark }}</span>起
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['hotList'],
  data() {
    return {
    };
  }
};
</script>

<style scoped>
.hot {
  margin-top: 0.2rem;
  background: #fff;
  font-size: 0.28rem;
}

.hot-top {
  padding: 0.2rem;
  position: relative;
}

.hot-top img {
  width: 0.3rem;
  height: 0.3rem;
}

.hot-top span {
  color: #212121;
  font-size: 0.32rem;
}

.hot-top .hot-right {
  position: absolute;
  right: 0.2rem;
  color: #616161;
  font-size: 0.28rem;
}

.hot-list {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  height: 3rem;
}

.hot-item {
  padding: 2rem 0;
  display: inline-block;
  padding: 0 0.2rem;
  width: 2rem;
  height: 2rem;
}

.hot-item img {
  width: 100%;
  height: 100%;
}

.hot-item p {
  margin-top: 0.1rem;
  text-align: center;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.hot-item p .hot-money {
  color: #ff8300;
  font-size: 0.32rem;
}
</style>