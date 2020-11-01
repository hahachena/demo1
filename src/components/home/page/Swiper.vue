<template>
  <div class="header-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgURl" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperList: [
        {
          id: "01",
          imgURl: require("@/assets/img/swiper1.jpeg")
        },
        {
          id: "02",
          imgURl: require("@/assets/img/swiper2.jpeg")
        },
        {
          id: "03",
          imgURl:require("@/assets/img/swiper3.jpeg")
        },
        {
          id: "04",
          imgURl:require("@/assets/img/swiper4.jpeg")
        },
        {
          id: "05",
          imgURl:require("@/assets/img/swiper5.jpeg")
        }
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      }
    };
  }
};
</script>

<style type = 'text/css' scoped>
.header-swiper {
    background: #ccc;
    height: 0;
    padding-bottom: 26.67%;
}

.header-swiper img {
  width: 100%;
  width: 100%;
}

.header-swiper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
</style>