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
  props:['iconsList'],
  data() {
    return {
      swiperOption: {},
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
  background: #fff;
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