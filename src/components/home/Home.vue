<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
  </div>
</template>

<script>
import HomeHeader from "./page/Header";
import HomeSwiper from "./page/Swiper";
import HomeIcon from "./page/icon";
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
  }
};
</script>


<style scoped>
</style>