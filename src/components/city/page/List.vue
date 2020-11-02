<template>
  <div ref="container" class="container">
    <div >
      <div class="Hot">
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

      <div class="Sort">
        <div class="sort-title">字母排序</div>
        <ul class="sort-list">
          <li class="sort-item" v-for="city in cities" :key="city.id">{{ city.title }}</li>
        </ul>
      </div>

      <div class="list">
        <div v-for="city in cities" :key="city.id">
          <div class="list-title">{{ city.title }}</div>
          <ul class="list-msg">
            <li class="list-item" v-for="item in city.lists" :key="item.id">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
// import BScroll from '@better-scroll/core'
export default {
  props: ["cities"],
  data() {
    return {
      scroll: ""
    };
  },
  mounted() {
    let container = this.$refs["container"];
    let bs = new BetterScroll(container, {
      movable: true,
    //   zoom: true
    });
  }
};
</script>

<style scoped>
.container {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0.88rem;
  background: #f5f5f5;
}

.list-title {
  font-size: 0.24rem;
  color: #212121;
  padding: 0.2rem 0.3rem;
}

.list-msg {
  background: #fff;
  position: relative;
  overflow: hidden;
}

.list-item {
  width: 25%;
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.9rem;
  float: left;
  border-bottom: 0.02rem solid #ddd;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.list-msg::before {
  content: "";
  position: absolute;
  left: 25%;
  width: 25%;
  height: 100%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}

.list-msg::after {
  content: "";
  position: absolute;
  left: 75%;
  width: 25%;
  height: 100%;
  border-left: 0.02rem solid #ddd;
}

.sort-title {
  font-size: 0.24rem;
  color: #212121;
  padding: 0.2rem 0.3rem;
}

.sort-list {
  background: #fff;
  color: #212121;
  font-size: 0.28rem;
  overflow: hidden;
  position: relative;
}

.sort-item {
  width: 16.66666666666666666666666%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
}

.hot-title {
  font-size: 0.24rem;
  color: #212121;
  padding: 0.2rem 0.3rem;
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