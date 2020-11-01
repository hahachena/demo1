<template>
    <div class="city">
       <city-header></city-header>
       <city-hot></city-hot>
       <city-sort></city-sort>
    </div>
</template>

<script>
import CityHeader from './page/Header'
import CityHot from './page/Hot'
import CitySort from './page/Sort'
export default {
    components:{
        CityHeader,
        CityHot,
        CitySort,
    }
}
</script>

<style scoped>
.city{
    background: #f5f5f5;
}

</style>