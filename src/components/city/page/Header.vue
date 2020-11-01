<template>
  <div class="header">
    <div class="header-left">
        <router-link to='/'>
            <span class="iconfont">&#xe624;</span>
        </router-link>
      
    </div>

    <div class="header-title">
        城市选择
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style scoped >

/* //  @import '～@/assets/css/var.styl';  */

.header{
    width: 100%;
    height: .88rem;
    background-color:#17c0c8;
    color: #fff;
    font-size: .32rem;
    position: relative;
    line-height: .88rem;
}

.header-left{
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold;
    position: absolute;
}

.header-left a{
    color: #fff;
}

.header-title{
    text-align: center;
}


</style>