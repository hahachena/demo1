<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <home-location></home-location>
  </div>
</template>

<script>
import HomeHeader from "./page/Header";
import HomeSwiper from "./page/Swiper";
import HomeIcon from "./page/icon";
import HomeLocation from "./page/location";
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeLocation,
  }
};
</script>


<style scoped>
</style>