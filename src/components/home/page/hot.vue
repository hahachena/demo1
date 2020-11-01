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
  data() {
    return {
      hotList: [
        {
          id: "01",
          imgUrl:
            "//img1.qunarzz.com/sight/p65/201211/07/2dcda4e400ace9f993835fbb.jpg_256x160_b1a93ad3.jpg",
          title: "龙门石窟",
          mark: "280"
        },
        {
          id: "02",
          imgUrl:
            "//img1.qunarzz.com/sight/p0/1804/7f/7f80af3ddefeb12a3.img.jpg_256x160_2ea35e2a.jpg",
          title: "郑州方特",
          mark: "113"
        },
        {
          id: "03",
          imgUrl:
            "//img1.qunarzz.com/sight/p0/201405/27/544cae2aeb173cb6533ce6926b68f153.jpg_256x160_e80a446b.jpg",
          title: "清明上河图",
          mark: "35"
        },
        {
          id: "04",
          imgUrl:
            "//img1.qunarzz.com/sight/p0/1811/6c/6cbe2a1a22e6bab2a3.img.jpg_256x160_ccb05dda.jpg",
          title: "竹林长寿山",
          mark: "20"
        },
        {
          id: "05",
          imgUrl:
            "//imgs.qunarzz.com/sight/p0/201304/27/941d94ee97cc947cc8d65eac.jpg_256x144_8ccee147.jpg",
          title: "丽江古城",
          mark: "100"
        },
        {
          id: "06",
          imgUrl:'//imgs.qunarzz.com/sight/p0/1503/b9/b9a4593c73228f9c.water.jpg_256x144_7a371de3.jpg',
          title: "玉龙雪山",
          mark: "140"
        },
        {
          id: "07",
          imgUrl:
            "//imgs.qunarzz.com/sight/p0/1702/69/699283c4d5a1306fa3.img.jpg_256x144_5674cb4e.jpg",
          title: "腾冲",
          mark: "25"
        },
         {
          id: "08",
          imgUrl:
            "//imgs.qunarzz.com/sight/p0/201305/30/c75a360da0e518d6c8d65eac.jpg_256x144_575b1bbf.jpg",
          title: "滇池",
          mark: "150"
        },
      ]
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