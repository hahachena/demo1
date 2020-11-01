<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <home-location></home-location>
    <home-activity></home-activity>
    <home-hot></home-hot>
    <home-like></home-like>
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

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeLocation,
    HomeActivity,
    HomeHot,
    HomeLike,

  }
};
</script>


<style scoped>
.home{
  background: #f0f0f0;
}
</style>