<template>
  <div class="list">
    <div v-for="city in cities" :key='city.id'>
      <div class="list-title">{{ city.title }}</div>

      <ul class="list-msg">
        <li class="list-item" v-for="item in city.lists" :key="item.id">{{ item }}</li>
        
      </ul>
    </div>

    
  </div>
</template>

<script>
export default {
    props:['cities']
};
</script>

<style scoped>
.list-title {
  font-size: 0.24rem;
  color: #212121;
  padding: 0.2rem 0.3rem;
}

.list-msg {
  background: #fff;
  position: relative;
  overflow: hidden;
}

.list-item {
  width: 25%;
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.9rem;
  float: left;
  border-bottom:0.02rem solid #ddd;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}

.list-msg::before{
    content: '';
    position: absolute;
    left: 25%;
    width: 25%;
    height: 100%;
    border-left:0.02rem solid #ddd;
    border-right:0.02rem solid #ddd;
}

.list-msg::after{
    content: '';
    position: absolute;
    left: 75%;
    width: 25%;
    height: 100%;
    border-left:0.02rem solid #ddd;
}
</style>