<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icon :iconsList='iconsList'></home-icon>
    <home-location></home-location>
    <home-activity></home-activity>
    <home-hot :hotList='hotList'></home-hot>
    <home-like :likeList='likeList'></home-like>
    <home-vacation :vacationList='vacationList'></home-vacation>
  </div>
</template>

<script>
import HomeHeader from "./page/Header";
import HomeSwiper from "./page/Swiper";
import HomeIcon from "./page/icon";
import HomeLocation from "./page/location";
import HomeActivity from "./page/activity";
import HomeHot from "./page/hot";
import HomeLike from "./page/like";
import HomeVacation from "./page/vacation";

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeLocation,
    HomeActivity,
    HomeHot,
    HomeLike,
    HomeVacation
  },
  data() {
    return {
      swiperList: [],
      iconsList: [],
      hotList: [],
      likeList:[],
      vacationList:[]
    };
  },
  mounted() {
    this.$http
      .get("http://localhost:8080/static/mock/dataHome.json")
      .then(res => {
        const data = res.data.data[0];
        this.swiperList = data.swiperList;
        this.iconsList = data.iconsList;
        this.hotList = data.hotList;
        this.likeList = data.likeList;
        this.vacationList = data.vacationList;
      });
  }
};
</script>


<style scoped>
.home {
  background: #f0f0f0;
}
</style>