<template>
    <div class="city">
       <city-header></city-header>
       
       <city-list :cities='cities'></city-list>
    </div>
</template>

<script>
import CityHeader from './page/Header'
import CityList from './page/List'
export default {
    components:{
        CityHeader,
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