<template>
  <div class="icons">
    <swiper :Options="swiperOption">
      <swiper-slide v-for="item in page" :key="item.id">
          <div class="icons-item" v-for="page in item" :key="page.id">
              <img :src="page.imgUrl" alt="">
              <p>{{ page.title }}</p>
          </div>
       
      </swiper-slide>
    </swiper>

    <!-- <div class="icons-item" v-for="item in iconsList" :key='item.id'>
        <img :src="item.imgUrl" alt="">
        <p>{{ item.title }}</p>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {},
      iconsList: [
        {
          id: "01",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
          title: "酒店"
        },
        {
          id: "02",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          title: "机票"
        },
        {
          id: "03",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/train.png",
          title: "火车票"
        },
        {
          id: "04",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png",
          title: "度假"
        },
        {
          id: "05",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png",
          title: "景点门票"
        },
        {
          id: "06",
          imgUrl:
            "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
          title: "海外酒店"
        },
        {
          id: "07",
          imgUrl:
            "https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png",
          title: "低价机票"
        },
        {
          id: "08",
          imgUrl:
            "https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png",
          title: "汽车票船票"
        },
        {
          id: "09",
          imgUrl:
            "https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png",
          title: "自由行"
        },
        {
          id: "10",
          imgUrl:
            "https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png",
          title: "攻略"
        }
      ]
    };
  },
  computed: {
    page() {
      let pages = [];
      this.iconsList.forEach((item, index) => {
        let idx = Math.floor(index / 8);

        if (!pages[idx]) pages[idx] = [];
        pages[idx].push(item);
      });

      return pages;
    }
  }
};
</script>

<style scoped>
.icons {
  width: 100%;
  overflow: hidden;
}

.icons-item {
  width: 25%;
  padding-bottom: 25%;
  height: 0;
  float: left;
}

.icons-item img {
  width: 1.1rem;
  height: 1.1rem;
  display: block;
  margin: 0 auto;
  padding-top: 0.5rem;
}

.icons-item p {
  font-size: 0.28rem;
  text-align: center;
  padding-top: 0.1rem;
  color: #212121;
}
</style>