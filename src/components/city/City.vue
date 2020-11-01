<template>
    <div class="city">
       <city-header></city-header>
       <city-hot></city-hot>
       <city-sort :cities='cities'></city-sort>
       <city-list :cities='cities'></city-list>
    </div>
</template>

<script>
import CityHeader from './page/Header'
import CityHot from './page/Hot'
import CitySort from './page/Sort'
import CityList from './page/List'
export default {
    components:{
        CityHeader,
        CityHot,
        CitySort,
        CityList,
    },
    data(){
        return{
            cities:{}

        }

    },
    mounted(){
        this.$http.get('/api/city.json')
        .then((res) =>{
            let data = res.data
            this.cities = data.city;
        })

    }
}
</script>

<style scoped>
.city{
    background: #f5f5f5;
}

</style>